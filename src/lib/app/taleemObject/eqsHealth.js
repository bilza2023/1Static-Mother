
import uuid from "./uuid.js";
import Taleem from "./Taleem.js";
function validateTimeSequence(items, slideStartTime, slideEndTime, report) {
  // Sort items by startTime to check for sequence
  const sortedItems = [...items].sort((a, b) => 
    a.itemExtra.startTime - b.itemExtra.startTime
  );

  // Check if times are within slide range and sequential
  for (let i = 0; i < sortedItems.length; i++) {
    const item = sortedItems[i];
    const { startTime, endTime } = item.itemExtra;

    // Check if times are valid numbers
    if (typeof startTime !== 'number' || typeof endTime !== 'number') {
      report.errors.push(`Item ${i} has invalid time format`);
      report.result = false;
      continue;
    }

    // Check if within slide bounds
    if (startTime < slideStartTime || endTime > slideEndTime) {
      report.errors.push(
        `Item ${i} time range (${startTime}-${endTime}) outside slide bounds (${slideStartTime}-${slideEndTime})`
      );
      report.result = false;
    }

    // Check if startTime is before endTime
    if (startTime >= endTime) {
      report.errors.push(
        `Item ${i} has invalid time range: startTime (${startTime}) must be less than endTime (${endTime})`
      );
      report.result = false;
    }

    // Check for overlaps with next item
    if (i < sortedItems.length - 1) {
      const nextItem = sortedItems[i + 1];
      if (endTime > nextItem.itemExtra.startTime) {
        report.errors.push(
          `Time overlap detected between items: Item ending at ${endTime} overlaps with next item starting at ${nextItem.itemExtra.startTime}`
        );
        report.result = false;
      }

      // Check for gaps if they shouldn't exist
      if (endTime < nextItem.itemExtra.startTime) {
        report.warnings.push(
          `Gap detected between items: ${endTime} to ${nextItem.itemExtra.startTime}`
        );
      }
    }
  }

  // Verify full time range coverage if needed
  const firstItem = sortedItems[0];
  const lastItem = sortedItems[sortedItems.length - 1];
  
  if (firstItem && lastItem) {
    if (firstItem.itemExtra.startTime > slideStartTime) {
      report.warnings.push(
        `Gap at start of slide: ${slideStartTime} to ${firstItem.itemExtra.startTime}`
      );
    }
    if (lastItem.itemExtra.endTime < slideEndTime) {
      report.warnings.push(
        `Gap at end of slide: ${lastItem.itemExtra.endTime} to ${slideEndTime}`
      );
    }
  }
}
function isFieldPresent(obj, fieldName, report, fix, options = {}) {
  const {
    defaultValue = '',
    errorMessage = `Missing ${fieldName}`,
    warningMessage,
    critical = false,
    validateFn = null
  } = options;

  const fieldExists = Object.prototype.hasOwnProperty.call(obj, fieldName);

  if (!fieldExists) {
    if (fix) {
      obj[fieldName] = defaultValue;
    } else {
      if (critical) {
        report.errors.push(errorMessage);
        report.result = false;
      } else if (warningMessage) {
        report.warnings.push(warningMessage);
      }
    }
  }

  if (fieldExists && validateFn) {
    const validationResult = validateFn(obj[fieldName]);
    if (!validationResult.valid) {
      report.errors.push(validationResult.message);
      report.result = false;
    }
  }

  return fieldExists;
}

function validateItemExtra(itemExtra, index, report) {
  const requiredItemExtraFields = ['startTime', 'endTime', 'code', 'type', 'sp'];

  requiredItemExtraFields.forEach(field => {
    isFieldPresent(itemExtra, field, report, false, {
      errorMessage: `Item ${index} itemExtra missing ${field}`,
      critical: true
    });
  });

  isFieldPresent(itemExtra, 'type', report, false, {
    validateFn: (type) => ({
      valid: Taleem.Slides.Eqs.availableEqsItems.includes(type),
      message: `Item ${index} invalid itemExtra type: ${type}`
    })
  });

  if (Array.isArray(itemExtra.sp)) {
    itemExtra.sp.forEach((spItem, spIndex) => {
      isFieldPresent(spItem, 'type', report, false, {
        validateFn: (type) => ({
          valid: Taleem.slides.Eqs.availableEqsSpItems.includes(type),
          message: `Item ${index} sp item ${spIndex} has invalid type: ${type}`
        })
      });

      isFieldPresent(spItem, 'code', report, false, {
        errorMessage: `Item ${index} sp item ${spIndex} missing code`,
        critical: true
      });
    });
  }
}
//Brilliant
function validateItem(item, index, report, fix) {
  const fields = [
    { name: 'uuid', options: { defaultValue: uuid(), critical: true, errorMessage: `Item ${index} missing UUID` } },
    { name: 'name', options: { defaultValue: '' } },
    { name: 'content', options: { defaultValue: '' } },
    { name: 'showAt', options: { defaultValue: 0 } },
    { name: 'hideAt', options: { defaultValue: 0 } }
  ];

  fields.forEach(field => {
    isFieldPresent(item, field.name, report, fix, {
      ...field.options,
      warningMessage: field.options.warningMessage || `Item ${index} missing ${field.name}`
    });
  });
//////////////////////////////////////////////////////////
  isFieldPresent(item, 'itemExtra', report, false, {
    errorMessage: `Item ${index} missing itemExtra`,
    critical: true
  });

  if (item.itemExtra) {
    validateItemExtra(item.itemExtra, index, report);
  }
}
// Modify the existing eqsHealth function to include the new validation
export default async function eqsHealth(slide, fix = false , config = { checkTimings: false}) {
  const report = { 
    errors: [], 
    warnings: [],  
    result: true 
  };

  // Existing slide field validations
  const slideFields = [
    /* ... existing field validations ... */
  ];

  slideFields.forEach(field => {
    isFieldPresent(slide, field.name, report, fix, field.options);
  });

  // Existing startTime and endTime validations
  if (slide.startTime !== 0) {
    if (fix) {
      slide.startTime = 0;
    } else {
      report.errors.push("StartTime must be 0");
      report.result = false;
    }
  }

  isFieldPresent(slide, 'endTime', report, false, {
    validateFn: (endTime) => ({
      valid: endTime > 0,
      message: "EndTime must exist and be greater than 0"
    }),
    critical: true
  });

  if(config.checkTimings){
    // Add time sequence validation if items exist
    if (slide.items && Array.isArray(slide.items) && slide.items.length > 0) {
      validateTimeSequence(slide.items, slide.startTime, slide.endTime, report);
    }
 }

  // Existing item validations
  if (slide.items) {
    slide.items.forEach((item, index) => {
      validateItem(item, index, report, fix);
    });
  }

  return report;
}