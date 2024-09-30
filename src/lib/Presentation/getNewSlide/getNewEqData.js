  
  
  
    export default function getNewEqData(startTime=0,endTime=10,code='Code here ',type='hdg'){
    return  {
        type,
        code,
        MPWidth: 8,
        startTime,
        endTime,
        sp: [
          { 
            "code": "",
            "type": "",
          }
        ]
    };//return ends
  }