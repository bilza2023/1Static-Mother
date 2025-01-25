export const Slide ={
    "uuid": "new-slide-uuid",
    "name": "Slide with Title and Icons",
    "version": "basic",
    "startTime": 0,
    "endTime": 10,
    "type": "canvas",
    "template": "",
    "items": [
        {
            "uuid": "text-item-uuid",
            "name": "Title",
            "content": "",
            "showAt": 0,
            "hideAt": null,
            "itemExtra": {
                "type": "text",
                "x": 500,
                "y": 180,
                "text": "Title in Center",
                "fontSize": 24,
                "fontFamily": "Arial",
                "color": "black",
                "globalAlpha": 1
            }
        },
        {
            "uuid": "left-icon-uuid",
            "name": "Left Icon",
            "content": "",
            "showAt": 0,
            "hideAt": null,
            "itemExtra": {
                "type": "icon",
                "x": 100,
                "y": 180,
                "icon": "⬅",
                "fontSize": 30,
                "iconSize": 50,
                "color": "blue",
                "globalAlpha": 1
            }
        },
        {
            "uuid": "right-icon-uuid",
            "name": "Right Icon",
            "content": "",
            "showAt": 0,
            "hideAt": null,
            "itemExtra": {
                "type": "icon",
                "x": 900,
                "y": 180,
                "icon": "➡",
                "fontSize": 30,
                "iconSize": 50,
                "color": "blue",
                "globalAlpha": 1
            }
        }
    ],
    "slideExtra": {
        "backgroundColor": "#ffffff",
        "canvasWidth": 1000,
        "canvasHeight": 400,
        "cellHeight": 25,
        "cellWidth": 25,
        "bgImg": "",
        "bgGlobalAlpha": 1,
        "xFactor": 0,
        "yFactor": 0,
        "showGrid": false,
        "gridLineWidth": 1,
        "gridLineColor": "gray",
        "imagesUrl": "https://example.com/media/"
    }
};
