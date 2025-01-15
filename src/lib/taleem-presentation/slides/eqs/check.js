


export default function check(slide) {
    
    const report = [];
    
    // Check slideExtra array presence
    if (!Array.isArray(slide.slideExtra)) {
        report.push(addReportItem(
            'slideExtra',
            'slideExtra must be an array',
            false
        ));
    }

    // Check items array presence and length
    if (!Array.isArray(slide.items)) {
        report.push(addReportItem(
            'items',
            'items must be an array',
            false
        ));
    } else {
        report.push(addReportItem(
            'items',
            `Found ${slide.items.length} items in the slide`,
            true
        ));

        // Check each item's structure
        slide.items.forEach((item, index) => {
            // Check itemExtra presence
            if (!item.itemExtra) {
                report.push(addReportItem(
                    `items[${index}].itemExtra`,
                    'Missing itemExtra object',
                    false
                ));
                return;
            }

            // Validate itemExtra required fields
            const requiredFields = {
                startTime: 'number',
                endTime: 'number',
                code: 'string',
                type: ['code', 'text', 'heading'],
                sp: 'array'
            };

            for (const [field, validation] of Object.entries(requiredFields)) {

                if (!(field in item.itemExtra)) {
                    report.push(addReportItem(
                        `items[${index}].itemExtra.${field}`,
                        `Missing required field: ${field}`,
                        false
                    ));

                } else if (Array.isArray(validation)) {
                    // Check enum values (like type field)
                    if (!validation.includes(item.itemExtra[field])) {
                        report.push(addReportItem(
                            `items[${index}].itemExtra.${field}`,
                            `Invalid value for ${field}. Must be one of: ${validation.join(', ')}`,
                            false
                        ));
                    }
                    
                } else {

                    // Check type of field
                    if (typeof item.itemExtra[field] !== validation && 
                        !(validation === 'array' && Array.isArray(item.itemExtra[field]))) {
                        report.push(addReportItem(
                            `items[${index}].itemExtra.${field}`,
                            `Invalid type for ${field}. Expected ${validation}`,
                            false
                        ));
                    }
                }
            }
        });
    }

    return report;
}

function addReportItem(itemName, message, status = true) {
    return {
        itemName,
        message,
        status
    };
}