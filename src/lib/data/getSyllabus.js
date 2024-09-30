//@ts-nocheck

export default async function getSyllabus(tcode){
 try{
   const modulePath = `/${tcode}/${tcode}.js`;
   const { syllabus } = await import(modulePath);
   
  //  debugger;
  if(syllabus){
    return syllabus; 
  }else {
    return false;
  }
}catch(e){
    return false;

}

} 