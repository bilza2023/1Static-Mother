
import {getNewTcode} from "./TcodeObj";



const fbise10math =  getNewTcode('fbise10math');
//--do not repeat chapter number , keep it unique
fbise10math.addChapter(1, '1chapter', ['1.1','1.2','1.3','1.4'] , 'Details about the chapter' );
fbise10math.addChapter(2, 'chapter',  ['2.1','2.2','2.3','2.4','2.5','2.6','2.7','2.8'] , 'Details');
fbise10math.addChapter(3, 'chapter',  ['3.1','3.2','3.3','3.4','3.5','3.6' , '3.7'] , 'Details about the chapter');
fbise10math.addChapter(4, 'chapter',  ['4.1','4.2','4.3','4.4'] , 'Details');
fbise10math.addChapter(5, 'chapter',  ['5.1','5.2','5.3','5.4','5.5'] , 'Details about the chapter');
fbise10math.addChapter(6, 'chapter',  ['6.1','6.2','6.3'] , 'Details about the chapter');
fbise10math.addChapter(7, 'chapter',  ['7.1','7.2','7.3','7.4','7.5'] , 'Details about the chapter');
fbise10math.addChapter(8, 'chapter',  ['8.1','8.2'] , 'Details about the chapter');
fbise10math.addChapter(9, 'chapter',  ['9.1','9.2'] , 'Details about the chapter');
fbise10math.addChapter(10, 'chapter',  ['10.1','10.2','10.3'] , 'Details about the chapter');
fbise10math.addChapter(11, 'chapter',  ['11.1'] , 'Details about the chapter');
fbise10math.addChapter(12, 'chapter',  ['12.1'] , 'Details about the chapter');
fbise10math.addChapter(13, 'chapter',  ['13.1','13.2','13.3'] , 'Details about the chapter');


export default fbise10math;