
import {getNewTcode} from "./TcodeObj";



const fbise9mathOld =  getNewTcode('fbise9mathOld');
//--do not repeat chapter number , keep it unique
fbise9mathOld.addChapter(1, '1chapter', ['1.1','1.2','1.3','1.4','1.5','1.6'] , 'Details ' );
fbise9mathOld.addChapter(2, 'chapter',  ['2.1','2.2','2.3','2.4','2.5','2.6'] , 'Details');
fbise9mathOld.addChapter(3, 'chapter',  ['3.1','3.2','3.3','3.4','3.5'] , 'Details about the chapter');
fbise9mathOld.addChapter(4, 'chapter',  ['4.1','4.2','4.3','4.4'] , 'Details');
fbise9mathOld.addChapter(5, 'chapter',  ['5.1','5.2','5.3','5.4'] , 'Details about the chapter');
fbise9mathOld.addChapter(6, 'chapter',  ['6.1','6.2','6.3'] , 'Details about the chapter');
fbise9mathOld.addChapter(7, 'chapter',  ['7.1','7.2','7.3','7.4'] , 'Details');
fbise9mathOld.addChapter(8, 'chapter',  ['8.1','8.2','8.3','8.4'] , 'Details about the chapter');
fbise9mathOld.addChapter(9, 'chapter',  ['9.1','9.2','9.3','9.4'] , 'Details about the chapter');
fbise9mathOld.addChapter(10, 'chapter',  ['10.1','10.2','10.3','10.4'] , 'Details about the chapter');
fbise9mathOld.addChapter(11, 'chapter',  ['11.1','11.2','11.3','11.4','11.5'] , 'Details about the chapter');
fbise9mathOld.addChapter(12, 'chapter',  ['12.1','12.2','12.3'] , 'Details about the chapter');
fbise9mathOld.addChapter(13, 'chapter',  ['13.1'] , 'Details about the chapter');
fbise9mathOld.addChapter(14, 'chapter',  ['14.1'] , 'Details about the chapter');
fbise9mathOld.addChapter(15, 'chapter',  ['15.1'] , 'Details about the chapter');
fbise9mathOld.addChapter(16, 'chapter',  ['16.1'] , 'Details about the chapter');
fbise9mathOld.addChapter(17, 'chapter',  ['17.1'] , 'Details about the chapter');


export default fbise9mathOld;