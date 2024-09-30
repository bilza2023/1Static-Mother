
import {getNewTcode} from "./TcodeObj.js";



const videoBlog =  getNewTcode('videoBlog');
//--do not repeat chapter number , keep it unique
videoBlog.addChapter(1, '1chapter', ['videoBlog','programming'] , 'Details about the chapter' );


export default videoBlog;