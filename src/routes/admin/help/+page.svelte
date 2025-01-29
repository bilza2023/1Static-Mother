<svelt:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</svelt:head>


<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon} from 'sveltetools_bils/src/cmp';
import Katex from 'svelte-katex';

import { onMount,toast,checkToken,checkAdminToken} from '$lib/util';
import Nav from '../Nav.svelte';

let isLogin = false;
let isAdmin = false;
onMount(async () => {
  try{
    if (checkToken()){
      isLogin = true;
        if (checkAdminToken()){
            isAdmin = true;
        }
    }     

  } catch (e) {
       toast.push('failed to load');
  }      
});

const list = [
  { title: "Fraction", code: "\\frac{3}{2}" },
  { title: "Raise to Power", code: "2^5 3^9" },
  { title: "Over Line", code: "\\overline{AB}" },
  { title: "Over Line small", code: "\\bar{AB}" },
  { title: "Degrees", code: "90^{\\circ}" },
  { title: "Triangle", code: "\\triangle ABC" },
  { title: "Angle", code: "\\angle BC" },
  { title: "Text", code: "\\text {Text abc} " },
  { title: "Plus Minus", code: "\\pm 3 " },
  { title: "Space", code: "One\\quad two \\quad three " },
  { title: "Large Space", code: "One\\qquad two \\qquad three " },
  { title: "Text Color", code: "\\textcolor{red}{Red \\quad Word}" },
  { title: "Approximately", code: "a \\approx b" },
  { title: "Divide", code: "8 \\div 4" },
  { title: "Lessthan or Equal", code: "a \\leq b" },
  { title: "Congruent", code: "a \\cong b" },
  { title: "Greaterthan or Equal", code: "a \\geq b" },
  { title: "Square Root", code: "\\sqrt{4}" },
  { title: "Subscript", code: "H_2O" },
  { title: "Superscript", code: "x^2" },
  { title: "Summation", code: "\\sum_{i=1}^{n} i" },
  { title: "Integration", code: "\\int_{a}^{b} f(x)dx" },
  { title: "Matrix", code: "\\begin{matrix} 1 & 2 \\\\ 3 & 4 \\end{matrix}" },
    { title: "3x3 Matrix", code: "\\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{bmatrix}" },
  { title: "4x4 Matrix", code: "\\begin{bmatrix} w & x & y & z \\\\ a & b & c & d \\\\ e & f & g & h \\\\ i & j & k & l \\end{bmatrix}" },
 
  { title: "Derivative", code: "\\frac{d}{dx} x^2" },
  { title: "Limit", code: "\\lim_{x\\to 0} f(x)" },
  { title: "Vector", code: "\\vec{A}" },
  { title: "Piecewise Function", code: "f(x) = \\begin{cases} x & \\text{if } x > 0 \\\\ 0 & \\text{if } x \\leq 0 \\end{cases}" },
  { title: "Binomial Coefficient", code: "\\binom{n}{k}" },
  { title: "Complex Numbers", code: "z = a + bi" },
  { title: "Chemical Equation", code: "2H_2 + O_2 \\rightarrow 2H_2O" },
  { title: "Greek Letters", code: "\\alpha, \\beta, \\gamma, \\Delta, \\Sigma" },
  // Add more examples here
];

</script>

<Nav/>
<!-- ************** -->
<PageWrapper>

<div class='flex justify-center p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon='📘'>Help</HdgWithIcon>
</div>


{#each list as li,index}
<div class="flex justify-center w-full  p-2 ">

<div class="w-2/12 bg-gray-900 p-4 m-1 rounded-lg text-left ">
{li.title}</div>

<div class="w-5/12 bg-gray-900 p-4 m-1 rounded-lg text-md text-center">
    <code>{li.code}</code>
</div>
<div class="w-5/12 bg-gray-900 p-4 m-1 rounded-lg text-2xl text-center">
    <Katex>{li.code}</Katex>    
</div>
</div><!---flex box-->
{/each}



</PageWrapper>

