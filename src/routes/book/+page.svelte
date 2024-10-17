<script>
    //@ts-nocheck 
    import { toast } from '@zerodevx/svelte-toast';
    import { onMount } from 'svelte';
    import {db} from "$lib/db";
    import {AppConsts} from "taleemtools";
    import BookToolbar from './BookToolbar.svelte';
    import QuestionsCol from "./QuestionsCol.svelte";
    import {PresentationObjUrl, Player} from "taleempresentation";
    
    let tcode;
    let questions;
    let chaptersData;
    ////////////////////////////////////////////////////////
    let imgUrl="/fbise9math/images/thumbnail.png";
    let selectedChapterNumber = 1;
    let selectedEx="1.1";
    let selectedVideoId = "66505334ba9a237f5dd73370";
    let selectedChapter;
    let ready = false
    ////////////////////////////////////////////////////////
    
    onMount(async ()=>{  
        tcode = new URLSearchParams(location.search).get("tcode");
        let d = await AppConsts.getTcode(tcode);
        chaptersData = d.chapters;
        
        //---DB access
        const resp = await db.tcode.get(`tcode=${tcode}&limit=1500&fields=-slides`)
    
        if (resp.ok){
            const incomming = await resp.json();
            questions = incomming.data;
            selectedChapter = chaptersData.find(chapter => chapter.number == selectedChapterNumber);
            await getVideo(selectedVideoId);
            ready = true;
        } else {
            toast.push("failed to load");
        } 
    });
    
    let showRightBar = true;
    let presentationObj = null;
    
    async function getVideo(id){
        const resp = await db.tcode.getOne(id);
      
        if (resp.ok){
            if (presentationObj){
                await presentationObj.stop();
            }
            
            presentationObj = null;
            selectedVideoId = id;
            let questionData = await resp.json();
      
            presentationObj = new PresentationObjUrl(questionData);
            await presentationObj.init();
        } else {
            toast.push("failed to load");
        } 
    }
    </script>
    
{#if chaptersData}
    <BookToolbar
        {chaptersData}
        bind:selectedChapterNumber
        bind:selectedChapter
        bind:selectedEx
        bind:showRightBar
        {imgUrl}
    />
  
    
    {#if questions && selectedEx && selectedChapterNumber}
        <div class="flex absolute w-full">
            <div class={showRightBar ? 'w-10/12 overflow-hidden relative' : 'w-full overflow-hidden relative'}>
                <Player {presentationObj} />
            </div>

            {#if showRightBar}
                <div class="w-2/12 h-screen">
                    <QuestionsCol 
                        {questions} 
                        tcode='fbise9math' 
                        {selectedEx} 
                        selectedChapter={selectedChapterNumber} 
                        {getVideo}
                    />
                </div>
            {/if}
        </div>
    {/if}


    {/if}
{#if !ready}    
    <div class="w-full text-center text-gray-300 mt-20">loading....</div>
{/if}    