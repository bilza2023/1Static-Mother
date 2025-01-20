import {ItemsMap} from '../../../index';

// Constants and defaults
const SLIDE_VERSION = 'basic';
const DEFAULT_SLIDE_EXTRA = {
  backgroundColor: "#044810",
  canvasWidth: 1000,
  canvasHeight: 360,
  cellHeight: 25,
  cellWidth: 25,
  bgImg: "system_images/bg_images/black_mat.jpg",
  bgGlobalAlpha: 1,
  xFactor: 0,
  yFactor: 0,
  showGrid: false,
  gridLineWidth: 1,
  gridLineColor: "gray"
};

// Main health check function
export default async function healthCheckCanvas(slide, fix = false) {
  const report = {
    warnings: [],
    errors: [],
    result: true
  };

  // Basic structure checks
  if (!slide || typeof slide !== 'object') {
    report.errors.push('Invalid slide format: must be an object');
    report.result = false;
    return report;
  }

  // Core field checks
  checkRequiredFields(slide, fix, report);
  
  // Only proceed with detailed checks if basic structure is valid
  if (report.result) {
    checkVersion(slide, fix, report);
    checkTiming(slide, fix, report);
    checkSlideExtra(slide, fix, report);
    checkItems(slide, fix, report);
  }

  return report;
}

function checkRequiredFields(slide, fix, report) {
  const requiredFields = ['uuid', 'version', 'startTime', 'endTime', 'type', 'items', 'slideExtra'];
  
  for (const field of requiredFields) {
    if (!(field in slide)) {
      report.errors.push(`Missing required field: ${field}`);
      report.result = false;
      if (fix) {
        // Handle fixable fields
        // We'll implement specific fixing logic later
      }
    }
  }
}

function checkVersion(slide, fix, report) {
  if (slide.version !== SLIDE_VERSION) {
    report.warnings.push(`Non-standard version: ${slide.version}. Expected: ${SLIDE_VERSION}`);
    if (fix) {
      slide.version = SLIDE_VERSION;
    }
  }
}

function checkTiming(slide, fix, report) {
  // Basic timing validation - we can expand this later
  if (typeof slide.startTime !== 'number' || typeof slide.endTime !== 'number') {
    report.errors.push('Invalid timing: startTime and endTime must be numbers');
    report.result = false;
    return;
  }

  if (slide.startTime >= slide.endTime) {
    report.errors.push('Invalid timing: startTime must be less than endTime');
    report.result = false;
  }
}

function checkSlideExtra(slide, fix, report) {
  if (!slide.slideExtra) {
    report.warnings.push('Missing slideExtra configuration');
    if (fix) {
      slide.slideExtra = { ...DEFAULT_SLIDE_EXTRA };
    }
    return;
  }

  for (const [key, defaultValue] of Object.entries(DEFAULT_SLIDE_EXTRA)) {
    if (!(key in slide.slideExtra)) {
      report.warnings.push(`Missing slideExtra field: ${key}`);
      if (fix) {
        slide.slideExtra[key] = defaultValue;
      }
    }
  }
}

function checkItems(slide, fix, report) {
  if (!Array.isArray(slide.items)) {
    report.errors.push('Invalid items: must be an array');
    report.result = false;
    if (fix) {
      slide.items = [];
    }
    return;
  }

  slide.items.forEach((item, index) => {
    checkItem(item, index, fix, report);
  });
}

function checkItem(item, index, fix, report) {
  // We'll expand this with detailed item validation later
  const requiredItemFields = ['uuid', 'name', 'itemExtra'];
  
  for (const field of requiredItemFields) {
    if (!(field in item)) {
      report.errors.push(`Item ${index}: Missing required field: ${field}`);
      report.result = false;
    }
  }

  if (item.itemExtra && item.itemExtra.type) {
    const itemClass = ItemsMap.get(item.itemExtra.type);
    if (!itemClass) {
      report.errors.push(`Item ${index}: Unknown item type: ${item.itemExtra.type}`);
      report.result = false;
    }
    // We'll add validation against itemClass.data() fields later
  }
}