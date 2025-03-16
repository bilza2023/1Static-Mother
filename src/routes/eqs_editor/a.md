explain this data structure 
Here is the slide object which consists of "slide" object on the top and items array.

Each item object further has an important field "itemsExtra"

each itemExtra has another array "sp".

--> WRITE ME A .md FILE that explain this data structure , explain hierarchy and then eexplain important fields inside each level.


const slide = {
    "uuid": "a839976c-7fe9-49d1-9ff8-49149caff611",
    "name": "New Slide",
    "version": "basic",
    "startTime": 0,
    "endTime": 10,
    "type": "eqs",
    "template": "",
    "items": [
        {
            "uuid": "af0d6634-3204-41e2-a090-7326202e3bfa",
            "name": "d1cebb00",
            "content": "",
            "showAt": 0,
            "hideAt": null,
            "itemExtra": {
                "startTime": 0,
                "endTime": 3,
                "code": "This is a Heading",
                "type": "hdg",
                "sp": [
                    {
                        "code": "\\sqrt{555}",
                        "type": "code"
                    },
                    {
                        "code": "This is Text",
                        "type": "text"
                    },
                    {
                        "code": "wood.jpg",
                        "type": "image"
                    },
                    {
                        "code": "This is a Heading",
                        "type": "heading"
                    },
                    {
                        "code": "[[\"This\",\"is\"],[\"a\",\"Table\"]]",
                        "type": "table"
                    },
                    {
                        "code": "[[\"\\\\sqrt{555}\",\"\\\\sqrt{555}\"],[\"\\\\sqrt{555}\",\"\\\\sqrt{555}\"]]",
                        "type": "tableCode"
                    }
                ]
            }
        },
        {
            "uuid": "abe24cb8-2020-42b1-aee7-8d745ef309f1",
            "name": "ab0aed43",
            "content": "",
            "showAt": 0,
            "hideAt": null,
            "itemExtra": {
                "startTime": 3,
                "endTime": 6,
                "code": "\\sqrt{555}",
                "type": "code",
                "sp": [
                    {
                        "code": "\\sqrt{555}",
                        "type": "code"
                    },
                    {
                        "code": "This is Text",
                        "type": "text"
                    },
                    {
                        "code": "wood.jpg",
                        "type": "image"
                    },
                    {
                        "code": "This is a Heading",
                        "type": "heading"
                    },
                    {
                        "code": "[[\"This\",\"is\"],[\"a\",\"Table\"]]",
                        "type": "table"
                    },
                    {
                        "code": "[[\"\\\\sqrt{555}\",\"\\\\sqrt{555}\"],[\"\\\\sqrt{555}\",\"\\\\sqrt{555}\"]]",
                        "type": "tableCode"
                    }
                ]
            }
        },
        {
            "uuid": "869ca9aa-37ba-4022-8bb1-1dad05864620",
            "name": "b96acf96",
            "content": "",
            "showAt": 0,
            "hideAt": null,
            "itemExtra": {
                "startTime": 6,
                "endTime": 10,
                "code": "This is some normal text content",
                "type": "txt",
                "sp": [
                    {
                        "code": "\\sqrt{555}",
                        "type": "code"
                    },
                    {
                        "code": "This is Text",
                        "type": "text"
                    },
                    {
                        "code": "wood.jpg",
                        "type": "image"
                    },
                    {
                        "code": "This is a Heading",
                        "type": "heading"
                    },
                    {
                        "code": "[[\"This\",\"is\"],[\"a\",\"Table\"]]",
                        "type": "table"
                    },
                    {
                        "code": "[[\"\\\\sqrt{555}\",\"\\\\sqrt{555}\"],[\"\\\\sqrt{555}\",\"\\\\sqrt{555}\"]]",
                        "type": "tableCode"
                    }
                ]
            }
        }
    ],
    "slideExtra": {
        "imagesUrl": "https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/"
    }
}
