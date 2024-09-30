//@ts-nocheck


class TcodeObj {
  
    /**
     * @param {String} tcode
     */
    constructor(tcode){
        this.tcode = tcode;
        this.chapters = [];

    }
    //every new chapter must have 1 exercise also else may give errors
    addChapter(number,name, exerciseNames ,details=''){
        const chapter = {
            number : number,
            name ,
            details,
            exerciseNames,
        }
        this.chapters.push(chapter);
        return chapter;
    }
    getChapter(number){

        for (let i = 0; i < this.chapters.length; i++) {
            const chapter = this.chapters[i];
                if(chapter.number == number)
                    {
                    return chapter;
                }
        }
        return null;
    }
    
  };
  
////////////////////////////////////////////////////////////////////////////////

    /**
     * @param {String} tcode
     */

function getNewTcode(tcode){

    return  new TcodeObj(tcode);

  }

  export {TcodeObj,getNewTcode};
  