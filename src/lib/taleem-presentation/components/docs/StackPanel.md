# StackPanel.svelte Documentation

## Overview
The `StackPanel.svelte` component arranges an array of objects into a vertical stack layout. It allows manipulation of the stack order through built-in functions and highlights the selected item. The component is flexible and can display any specified field from the objects in the array.

---

## Props

### 1. `items`
- **Type**: `Array`
- **Description**: An array of objects to be displayed in the stack. Each object must include the field specified by `displayKey`.
- **Required**: Yes

### 2. `displayKey`
- **Type**: `String`
- **Description**: The key in each object within the `items` array whose value will be displayed as the title or name of the item.
- **Required**: Yes

### 3. `selectedItemIndex`
- **Type**: `Number`
- **Description**: The index of the currently selected item in the stack. Highlighted in the UI.
- **Default**: `-1` (No selection)

---

## Events

### 1. `onMoveUp`
- **Description**: Triggered when an item is moved up in the stack.
- **Payload**: An object containing the updated `items` array.

### 2. `onMoveDown`
- **Description**: Triggered when an item is moved down in the stack.
- **Payload**: An object containing the updated `items` array.

---

## Methods

### 1. `moveItemUp(index)`
- **Description**: Moves the item at the specified index one position up in the stack.
- **Parameters**:
  - `index` (Number): The index of the item to be moved up.
- **Updates**: Emits the `onMoveUp` event with the updated `items` array.

### 2. `moveItemDown(index)`
- **Description**: Moves the item at the specified index one position down in the stack.
- **Parameters**:
  - `index` (Number): The index of the item to be moved down.
- **Updates**: Emits the `onMoveDown` event with the updated `items` array.

---

## Usage Example

```svelte
<script>
  import StackPanel from './StackPanel.svelte';

  let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  let selectedItemIndex = 0;

  function handleMoveUp(updatedItems) {
    console.log('Items after moving up:', updatedItems);
  }

  function handleMoveDown(updatedItems) {
    console.log('Items after moving down:', updatedItems);
  }
</script>

<StackPanel
  items={items}
  displayKey="name"
  selectedItemIndex={selectedItemIndex}
  on:moveUp={handleMoveUp}
  on:moveDown={handleMoveDown}
/>
```

---

## Key Features
- Vertical arrangement of objects.
- Displays a specific field (`displayKey`) from each object as its title.
- Highlights the currently selected item.
- Provides built-in methods for stack manipulation (`moveItemUp` and `moveItemDown`).
- Emits events (`onMoveUp`, `onMoveDown`) to handle stack changes externally.

---

## Customization
- **Field Display**: Use the `displayKey` prop to customize the displayed field.
- **Styling**: Customize styles using CSS to match the component with your application theme.

---

## Notes
- Ensure that all objects in the `items` array have the key specified in `displayKey`.
- Handle emitted events (`onMoveUp`, `onMoveDown`) to update your application state if required.

