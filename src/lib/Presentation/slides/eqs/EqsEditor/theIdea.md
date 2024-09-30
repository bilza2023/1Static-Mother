# Egs 
date:11-oct-2023
 Eqs is a component that mananges the "eqs" field of a question.

<small>keep in mind this is eqs editor not player.</small>

 Main Sub Components :
    - EqPart : this is the eq object directly. 

    - EqPartLowerToolBar

    - SPFSPart is used for side-panel as well as for full screen as well. The purpose is simple it has an array of items. The code has content where as the type determines which data-component to use for this content.
         {
          "code": "In the Denominator :",
          "type": "text",
          }     
    - SPFSPart : This is the main and largest Sub-Component. It provides the functions that are called by FSSPToolBar buttons to add and remove data-components into "theArray". After that it {each loop} all the data-components and attach vertical-buttons to them.
    data-components: They store data for one "type" or another type of eq entries.

        - CodeTxt : This data-components will take care of code,text,html types of components.(image / img is not included it has own place in loop but no seperaate data-comp)

        - Table : This data-components will save data for a table.
        it gets the code (content) named as item. it then uses reactive function to use parsed version of the "item" which is text and when we parse it it becomes 2 dim array. we save it back as text.

        - TableCode :: This data-components will save data for a table of code

        - VerticalBtns : They are with every data-component

        - FSSPToolBar : This adds text, table, table-code, code etc into the FSSP. 
