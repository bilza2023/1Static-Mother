
Here is an object called chaptersData. 
Create me a svelte component that has 
1: a drop down list consisting of all the chapters
    - sort them by "number": 1, 
    - use "details": "Real Numbers", for display name
2: a div which is populated with the "exerciseNames" of the selected chapter. each exercise name in form of a button that can be clicked , on click just console.log(value). 


Here is Book.svelte borad layout/idea

<script>
    //@ts-nocheck
    export let chaptersData;
    export let selectedChapter;
    export let selectedExercise;
</script>


<div class="flex">

<!-- The drop down in 1 div -->

<!-- The  div to contain buttons for each exercise of the selected chapter -->


</div>



const chaptersData = [
    {
        "number": 1,
        "name": "1chapter",
        "details": "Real Numbers",
        "exerciseNames": [
            "1.1",
            "1.2",
            "1.3"
        ]
    },
    {
        "number": 2,
        "name": "chapter",
        "details": "Logarithms",
        "exerciseNames": [
            "2.1",
            "2.2",
            "2.3",
            "2.4",
            "2.5",
            "2.6"
        ]
    },
    {
        "number": 3,
        "name": "chapter",
        "details": "Sets and Relationship",
        "exerciseNames": [
            "3.1",
            "3.2",
            "3.3",
            "3.4"
        ]
    },
    {
        "number": 4,
        "name": "chapter",
        "details": "Factorization and Algebraic Manipulation",
        "exerciseNames": [
            "4.1",
            "4.2",
            "4.3",
            "4.4",
            "4.5",
            "4.6",
            "4.7",
            "4.8"
        ]
    },
    {
        "number": 5,
        "name": "chapter",
        "details": "Linear Equation and Inequalities",
        "exerciseNames": [
            "5.1",
            "5.2",
            "5.3",
            "5.4"
        ]
    },
    {
        "number": 6,
        "name": "chapter",
        "details": "Trigonometry and Bearing",
        "exerciseNames": [
            "6.1",
            "6.2",
            "6.3",
            "6.4",
            "6.5",
            "6.6"
        ]
    },
    {
        "number": 7,
        "name": "chapter",
        "details": "Coordinate Geometry",
        "exerciseNames": [
            "7.1",
            "7.2"
        ]
    },
    {
        "number": 8,
        "name": "chapter",
        "details": "Geometry of Straight Lines",
        "exerciseNames": [
            "8.1",
            "8.2",
            "8.3",
            "8.4"
        ]
    },
    {
        "number": 9,
        "name": "chapter",
        "details": "Geometry and Polygons",
        "exerciseNames": [
            "9.1",
            "9.2",
            "9.3",
            "9.4",
            "9.5",
            "9.6",
            "9.7"
        ]
    },
    {
        "number": 10,
        "name": "chapter",
        "details": "Practical Geometry",
        "exerciseNames": [
            "10.1",
            "10.2"
        ]
    },
    {
        "number": 11,
        "name": "chapter",
        "details": "Basic Statistics",
        "exerciseNames": [
            "11.1",
            "11.2",
            "11.3"
        ]
    }
]