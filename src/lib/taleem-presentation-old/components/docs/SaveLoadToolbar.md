# SaveLoadToolbar Component

## Purpose

The SaveLoadToolbar is a versatile Svelte component designed to provide a simple, reusable interface for saving and loading content across different types of projects. It offers a standardized way to:
- Save content to a file
- Import content from a file
- Customize file naming and extensions
- Handle different content types with minimal configuration

## Usage

### Basic Usage
```svelte
<script>
  import SaveLoadToolbar from './SaveLoadToolbar.svelte';
  
  let content = [/* Your initial content */];
</script>

<SaveLoadToolbar bind:content />
```

### Advanced Configuration
```svelte
<SaveLoadToolbar 
  bind:content 
  fileName="my-awesome-content"
  fileExtension="json"
  importAccept=".json,.txt"
/>
```

## Props and Configuration

### `content` (Required)
- Type: Array or Object
- Description: The data to be saved or loaded
- Default: `[]`
- Example:
  ```javascript
  let content = [
    { id: 1, title: 'First Item' },
    { id: 2, title: 'Second Item' }
  ];
  ```

### `fileName`
- Type: String
- Description: Base name for the file to be saved
- Default: `'file'`
- Example: `fileName="project-data"`

### `fileExtension`
- Type: String
- Description: File extension for saved files
- Default: `'js'`
- Example: `fileExtension="json"`

### `importAccept`
- Type: String
- Description: File types allowed for import
- Default: `'.js'`
- Example: `importAccept=".json,.txt"`

### `regexReplaceFilter`
- Type: RegExp
- Description: Regular expression to remove export statements when importing
- Default: `/export\s+const\s+\w+\s*=\s*/`
- Example: `regexReplaceFilter=/export\s+const\s+MyContent\s*=\s*/`

## Technical Notes

### Save Mechanism
- Uses `Blob` to create a downloadable file
- Generates a JSON string with an export statement
- Creates a temporary anchor element to trigger download
- Automatically revokes object URL to prevent memory leaks

### Import Mechanism
- Uses `FileReader` to read file contents
- Removes export statements using configurable regex
- Uses `new Function()` to parse the content safely
- Provides error handling for invalid files

### Security Considerations
- Uses `new Function()` for parsing, which has potential security implications
- Recommended to only import files from trusted sources
- No direct execution of external scripts

### Performance
- Minimal overhead for saving and loading
- Works with moderate-sized content arrays/objects
- Potential performance impact with very large content sets

## Best Practices
- Always bind the content variable
- Validate imported content before use
- Use with trusted file sources
- Consider adding additional validation for imported content