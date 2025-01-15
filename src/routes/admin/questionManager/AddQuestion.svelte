<script>
    // @ts-nocheck
    import { toast } from "$lib/util";
    import TcodeDd from "./TcodeDD.svelte";
    import TcodeLis from "./TcodeList.svelte";
    import ChaptersDD from './ChaptersDD.svelte';
    import { AppConsts } from "taleemtools";
    import { db } from "$lib/db";
    
    let tcode = 'fbise9math';
    let chapters;
    let selectedChaptersNumber;
    let selectedEx;
    let exerciseNames;
    let questionNo = 1;
    let part = 0;
    let name = '';
    let ready = false;
    
    $: {
        tcode;
        init();
    }
    
    async function init() {
        ready = false;
        let tcodeObj = await AppConsts.getTcode(tcode);
        chapters = tcodeObj.chapters;
        selectedChaptersNumber = chapters[0].number;
        exerciseNames = chapters[0].exerciseNames;
        selectedEx = chapters[0].exerciseNames[0];
        ready = true;
    }
    
    function convertToUrlFriendlyName(name) {
        const urlFriendlyName = name.replace(/\s+/g, '_');
        return urlFriendlyName.replace(/[^\w\d_]/g, '');
    }
    
    async function addQuestion() {
        const filename = await createFileName(selectedChaptersNumber, selectedEx, questionNo, part, tcode, name);
        if (!tcode) {
            toast.push("missing tcode");
            return;
        }
        if (name) {
            name = convertToUrlFriendlyName(name);
        }
    
        const resp = await db.tcode.create({
            chapter: selectedChaptersNumber,
            exercise: selectedEx,
            questionNo,
            part,
            tcode,
            name,
            filename,
            'soundFileType': 'opus',
        });
    
        if (resp.ok) {
            const data = await resp.json();
            toast.push("Question saved");
        } else {
            const data = await resp.json();
            toast.push(data.error);
        }
    }
    
    $: {
        selectedChaptersNumber;
        if (chapters) {
            for (let i = 0; i < chapters.length; i++) {
                const chapter = chapters[i];
                if (chapter.number == selectedChaptersNumber) {
                    exerciseNames = chapter.exerciseNames;
                    if (!exerciseNames.includes(selectedEx)) {
                        selectedEx = exerciseNames[0];
                    }
                }
            }
        }
    }
    
    async function createFileName(chapter, exercise, questionNo, part, tcode, name) {
        if (chapter === undefined || exercise === undefined || questionNo === undefined) {
            throw new Error("Missing required argument(s): chapter, exercise, and questionNo are mandatory");
        }
    
        let fileName = `${chapter}_${exercise}_${questionNo}`;
    
        if (part !== undefined) {
            fileName += `_${part}`;
        }
    
        if (tcode !== undefined) {
            fileName += `_${tcode}`;
        }
    
        if (name !== undefined) {
            const urlSafeName = name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
            fileName += `_${urlSafeName}`;
        }
    
        return fileName;
    }
    </script>
    
    <div class='flex flex-col justify-center mx-auto w-8/12 border-2 border-white text-white rounded-md bg-green-950 m-2 p-2'>
        <h1 class='mx-auto'>Add Question</h1>
    
        <TcodeLis bind:tcode={tcode}/>
    
        {#if ready}
            <ChaptersDD {chapters} bind:selectedChaptersNumber={selectedChaptersNumber} {exerciseNames} bind:selectedEx={selectedEx}/>
        {/if}
    
        <div class='flex justify-around border-2 border-gray-600 p-1 m-1 rounded-sm'>
            <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Question No</div>
            <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='number' bind:value={questionNo} min=0 max=500/>
        </div>
    
        <div class='flex justify-around border-2 border-gray-600 p-1 m-1 rounded-sm'>
            <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Part No</div>
            <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='number' bind:value={part} min=0 max=500/>
        </div>
    
        <div class='flex justify-around border-2 border-gray-600 p-1 m-1 rounded-sm'>
            <div class='text-sm text-center border-2 border-yellow-700 rounded-md p-1 w-4/12'>Name</div>
            <input class='text-sm text-center bg-gray-800 text-white border-2 border-yellow-700 rounded-md p-1 w-8/12' type='text' bind:value={name}/>
        </div>
    
        <br>
        <div class='flex justify-center'>
            <button class='bg-green-700 p-2 m-2 rounded-md hover:bg-green-500' on:click={addQuestion}>Save</button>
        </div>
    </div>