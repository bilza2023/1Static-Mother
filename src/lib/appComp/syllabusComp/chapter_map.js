//@ts-nocheck

export default async function chapter_map(questions) {
    // debugger; 
    const chapter_map = [];
    // Create an object to store chapters and their exercises
    const unique_chapters = [];
    for (const question of questions) {

     if(!unique_chapters.includes(question.chapter)){
            unique_chapters.push(question.chapter)
     }
    }
    //===importantay
    unique_chapters.sort((a, b) => a - b);
//step=2
    for (let i = 0; i < unique_chapters.length; i++) {
        const chapter = unique_chapters[i];
        chapter_map.push({chapter:chapter , exercises:[]});
    }
//step-3
// debugger;
for (let i = 0; i < chapter_map.length; i++) {
    const chapter = chapter_map[i].chapter;

    for (let j = 0; j < questions.length; j++) {
        const question = questions[j];
        if(question.chapter == chapter){
            if(!chapter_map[i].exercises.includes(question.exercise)){
                // if(question.exercise && question.exercise != ""){
                    chapter_map[i].exercises.push(question.exercise);
                // }
            }
        }
    }
}

    return chapter_map;
}
