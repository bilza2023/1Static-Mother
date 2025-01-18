
<script>
    import DialogueBox from "./dialogueBox/DialogueBox.svelte";
    export let item;
    const dialogueBox = [
        {
        fieldName : 'questionType',
        title : 'Type',
        type : 'presnetationType'
    },
    {
        fieldName : 'status',
        title : 'Status',
        type : 'presnetationStatus'
    },
    {
        fieldName : 'chapter',
        title : 'Chapter',
        type : 'number'
    },
    {
        fieldName : 'exercise',
        title : 'Exercise',
        type : 'text'
    },
    {
        fieldName : 'questionNo',
        title : 'Question Number',
        type : 'number'
    },
    {
        fieldName : 'part',
        title : 'Part',
        type : 'number'
    }
   
    ]

</script>


<h1 class='text-white'>Edit Slide</h1>

<DialogueBox  {item} {dialogueBox}/>