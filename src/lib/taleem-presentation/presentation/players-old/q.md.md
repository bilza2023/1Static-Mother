
I have a sveltekit library that i want to use and import  in other sveltekit projects.

Since creating sveltekit library is problematic (i currently have tailwind related problems). 


I want to re-write my svelte components with 2 objectives
    1: remove as much code as possible into a javascript object 'Taleem' and leave the components as Pure dumb components with as less state and business logic as possible. i want to keep components so seperate so that if i want to use the same Taleem object i a react/or-other project i can do so.  
    2: use normal css in style tags rather then tailwind css which creates a lot of problems.

The library mainly exports Player and Editor along with Taleem object. to begin with I just want to convert the Player component.    

