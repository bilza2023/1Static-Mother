
The Top 10 Lessons that I learnt from 10 years of Software Development


1: Experience is not number of years but the time spent "Paying Attention".

2: Flat is always better than nested. Do not go deep.

3: Single Source of Truth : In your app there should be 1 single data structure (a struct , array of objects etc) and that data structure (call it mother-state) and every thing should write and read from it. In svelte specially. Do not store state deep into objects since that is what create problems.

4: Do not Write Monolith: Monolith apps are 1 single large collection of 

5: Write Modules : Have Boundries and APIs: Each module should have API which once cemented should be guaranteed. If the requirements change write new code.

6: First clerify the concept and then draw class-diagram and then test and elaborate.

7: Single Responsibility: Fora function or a object there must be single responsibility.

8: Only independent/pure code works.