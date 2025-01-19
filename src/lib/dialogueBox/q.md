
I have a problem in which i have a sveltekit library which when i run locally using 'npm run dev' it works perfectly fine but when i upload it to npm and then it is immported in some other sveltekit project all the CSS does out of wack (the library is heavily dependent on tailwind css which needs to be compiled before display). 

The main problem that i can see is that i am exporting all my components from src/lib and not from some build folder. may be due to which when the top user imports my library and get the code from src/lib it gets the code with no compiled css.

1: is this correct ?
2: what is the solution 

i am also uploading some important files of the library