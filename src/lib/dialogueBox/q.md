Here is code for my DialogueBox svelte component


This component takes an object item and an array of items called dialogueBox

The dialogueBox has items with fields like , fieldName,title and type

const dialogueBox = [
    {
        fieldName : 'name',
        title : 'User Name',
        type : 'boolean'
    }
]

fieldName: must be present inside `item` object. so that we can assign it to appropriate element.
type: it can be of
number
float
textArea
text
boolean
color
fontFamily

title : is title

Requirements:

1: check the code to see if it does what it says
2: suggestions but keep it as simple as possible and do not go far away from the current design