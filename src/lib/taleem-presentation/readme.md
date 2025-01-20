
14-Dec-2024

# The problem:
  I am NOT creating dumb components (svelt components) rather my components contain a lot of code regading the app and its structre thus can not be used to anything else.

## Solution. 

    1: Have all the .js code in 1 folder (dont worry about creating a seperate library for now). 
    2: Create as many dumb components as possible and put them in 1 single folder (dont worry about creating a seperate library for now). A dumb component is one which can be used many time by multiple users for same purpose. it is not tied to the app data structure.
    3: Componets which are specific to some part of the application and can not be complete dumb those should be in folder for each module.
    4: Keep dumb components as self-contained as possible, focusing on a single, well-defined purpose.
    5: Use the svelte route selection for uploading different apps. 

## The difference between smart components and dumb components
        1: These components can contain state management. Dumb components do not have state
        2: Smart components are ties to some data structure where as dumb components are not.
        3: The smart components import other files where as Dumb components for most part do not import anything.
        4: Smart componets manage dumb components. They coordinate the behavior of multiple dumb components.

## Tips for Dumb Components:

Avoid hardcoding dependencies on specific data structures or app logic: This means that your components should be designed to be as flexible and reusable as possible. They should not be tied to a specific data structure or app logic, but rather should be able to work with different types of data and different app contexts. This will make your components more versatile and easier to maintain in the long run.For example, instead of hardcoding a specific data structure into a component, you could pass the data as a prop to the component. This would allow the component to be used with different types of data, without having to modify the component itself. Similarly, instead of hardcoding app logic into a component, you could pass the logic as a function to the component. This would allow the component to be used with different app logic, without having to modify the component itself.

## Use Svelte's component slots to create flexible and customizable components.

Slot act as placeholders within a component where you can inject custom content from the parent component.
