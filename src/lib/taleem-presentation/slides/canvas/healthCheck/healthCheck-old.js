
import {ITEM_TYPE_TEMPLATES} from "./ITEM_TYPE_TEMPLATES";

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
function checkSlideVersion(slide, fix, report) {
    if (!slide.version) {
      if (fix) slide.version = "basic";
      report.warnings.push("Missing slide version");
    }
}
  
  function checkSlideTiming(slide, fix, report) {
    // eslint-disable-next-line no-prototype-builtins
    if (!slide.hasOwnProperty('startTime') || !slide.hasOwnProperty('endTime') ) {
      if (fix) {
        slide.startTime = slide.startTime || 0;
        slide.endTime = slide.endTime || 3;
      }
      report.errors.push("Missing start or end times");
    }
  
    if (slide.startTime >= slide.endTime) {
      report.errors.push("Timing Error: Start time must be less than end time");
      report.result = false;
    }
  }
  // This is slideExtra not itemExtra
  function checkSlideExtra(slide, fix, report) {
    if (!slide.slideExtra) {
      if (fix) slide.slideExtra = { ...DEFAULT_SLIDE_EXTRA };
      report.warnings.push("Missing slideExtra");
    } else {
      Object.keys(DEFAULT_SLIDE_EXTRA).forEach(key => {
        if (!(key in slide.slideExtra)) {
          if (fix) slide.slideExtra[key] = DEFAULT_SLIDE_EXTRA[key];
          report.warnings.push(`Missing slideExtra field: ${key}`);
        }
      });
    }
  }
  
  function checkItems(slide, report) {
    // debugger;
    slide.items.forEach((item, index) => {
      if (!item.itemExtra) {
        report.warnings.push(`Item ${index} missing itemExtra`);
        report.result = false;
        return;
      }
  
      const itemType = item.itemExtra.type;
      const templateFields = ITEM_TYPE_TEMPLATES[itemType];
  
      if (!templateFields) {
        report.errors.push(`Unknown item type: ${itemType}`);
        report.result = false;
        return;
      }
  
      // Generate array of field names for comparison
      const itemExtraFields = Object.keys(item.itemExtra);
  
      // Compare fields
      const missingFields = templateFields.filter(field => !itemExtraFields.includes(field));
      const extraFields = itemExtraFields.filter(field => !templateFields.includes(field));
  
      if(missingFields.length > 0 ){
        report.errors.push(`${item.itemExtra.name} has missing itemExtra fields: ${missingFields}`);
      }

      if(extraFields.length > 0 ){
        report.errors.push(` ${item.itemExtra.name} has extra itemExtra fields: ${extraFields}`);
      }
     
    });
  }
  
  
  export default async function canvasHealth(slide, fix = false) {
    const report = { warnings: [], errors: [], result: true };
  
    checkSlideVersion(slide, fix, report);
    checkSlideTiming(slide, fix, report);
  
    // eslint-disable-next-line no-prototype-builtins
    if (!slide.hasOwnProperty("items")) {
      if (fix) slide.items = [];
      report.warnings.push("Missing items array");
    }
  
    checkSlideExtra(slide, fix, report);
    checkItems(slide, report);
  
    return report;
}
  