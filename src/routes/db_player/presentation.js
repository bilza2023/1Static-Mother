

export const presentation={

  "presentationData": {
      tcode: "newTcode",
      chapter: 1,
      exercise: "99.99",
      filename: "thisisanewname",
      questionNo: 22,
      part: 333,
      name: "somename",
      questionType: "free",
      status: "final",
      sortOrder: 0,
      comments: "sss",
      tags: "",
  },
  "eqSlides" : [
      {
        startTime : 0,
        endTime : 10,
        type : "eqs",
        version : "basic",
        template : "",
        sortOrder : 0,
        items : [
          {
            name: "ccc",
            content: "ssss",
            showAt: 0,
            hideAt: 0,
            startTime: 0,
            endTime: 10,
            code: "This is text",
            type: "text",
            sortOrder: 0,
            sp: [
              {code:"baloons.png",type:"image",sortOrder: 0}
            ],
            
          }
        ]
      }
    ],
    
  "canvasSlides" : [{
          uuid: "31ce5b05-a8a3-43c3-b473-cddab5b978f6",
          startTime: 0,
          endTime: 10,
          type: "canvas",
          version: "basic",
          template: "",
          items: [
            {
              name: "cxcx",
              opacity: 1,
              type: "text",
              color: "red",
              x: 200,
              y: 200,
              rotation: 0,
              text: "This is the text",
              fontSize: 30,
              fontFamily: "Arial",
              width: 40,
              height: 100,
            }
          ],
          slideExtra: {
            backgroundColor: "#edece9",
            color: "#edece9",
            opacity: 1,
            canvasWidth: 1000,
            canvasHeight: 360,
            cellHeight: 25,
            cellWidth: 25,
            backgroundImage: "black_mat",
            showGrid: false,
            gridLineWidth: 1,
            gridLineColor: "gray",
          }
    }]
  
  }//presentationData
  