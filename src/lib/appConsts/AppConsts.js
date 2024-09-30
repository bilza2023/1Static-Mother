//@ts-nocheck
import fbise9math from "./fbise9math";
import fbise10math from "./fbise10math";
import fbise9mathOld from "./fbise9mathOld";
import videoBlog from "./videoBlog";
 


const AppConsts = {
  
    MEDIA_URL: "https://taleem-media.blr1.cdn.digitaloceanspaces.com",
 
    
    TCODE_ITEMS : [
      fbise9math,
      fbise10math,
      videoBlog,
      fbise9mathOld
    ], 
    /**
     * Future tcodes
     * - matrices
     * - spoken english
     * 
     */

    TCODE_LIST : [
      "fbise9math",
       "fbise9mathOld",
       "fbise10math",
       "videoBlog",
      ],
    
    async getTcode(name){

        for (let i = 0; i < this.TCODE_ITEMS.length; i++) {
            const tcode = this.TCODE_ITEMS[i];
                if(tcode.tcode == name)
                    {
                    return tcode;
                }
        }
        return null;
    }  
  };
  
  export default AppConsts;
  