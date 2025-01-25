# MessageBar.svelte Documentation

## Overview

The `MessageBar.svelte` component is a simple, reusable horizontal message bar. It displays a message across the full width of the container with customizable background and text colors.

---

## Props

### 1. `message`

- **Type**: `String`
- **Description**: The message to display in the bar.
- **Default**: `""` (Empty string)

### 2. `bgColor`

- **Type**: `String`
- **Description**: The background color of the message bar. Accepts any valid CSS color value.
- **Default**: `"#f8d7da"` (Light red)

### 3. `textColor`

- **Type**: `String`
- **Description**: The text color of the message bar. Accepts any valid CSS color value.
- **Default**: `"#721c24"` (Dark red)

---

## Usage Example

```svelte
<script>
  import MessageBar from './MessageBar.svelte';
</script>

<MessageBar
  message="This is an error message!"
  bgColor="#f8d7da"
  textColor="#721c24"
/>

<MessageBar
  message="This is a success message!"
  bgColor="#d4edda"
  textColor="#155724"
/>
```

---

## Key Features

- Full-width horizontal bar for messages.
- Customizable colors for background and text.
- Simple and lightweight.

---

## Customization

- **Background Color**: Use the `bgColor` prop to set the background to match your application's theme.
- **Text Color**: Use the `textColor` prop to complement the background color.
- **Message Content**: Dynamically update the `message` prop to display different messages.

---

## Notes

- Ensure the parent container has sufficient width for the message bar to display properly.
- You can customize the styles further using external CSS or inline styles.

