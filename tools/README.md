
## `getCollectionKatas.mjs`

This script retrieves katas from a Codewars collection webpage.

Note: It is sensitive to the DOM structure of the Codewars collection page.

### Usage

```
  node getCollectionKatas <Codewars collection URL|slug|id> ["language1,language2,..."]
```

- `"language1,language2,..."` 
  - Optional string argument: a comma-separated list of programming languages (case-insensitive).
  - If omitted, all katas from the collection page will be extracted.
  - If specified, only katas in the given languages will be extracted.

### Examples

Extract all katas from the CYF Onboarding collection page:
```
  node getCollectionKatas https://www.codewars.com/collections/cyf-onboarding
```

Extra all katas available in either Python or JavaScript from the same collection page:
```  
  node getCollectionKatas cyf-onboarding "python,javascript"
```

### Format of Extracted Katas
```javascript
[
  {
    "id": "57a0e5c372292dd76d000d7e",
    "name": "String repeat"
  },
  {
    "id": "50ee6b0bdeab583673000025",
    "name": "Basic variable assignment"
  },
  {
    "id": "555086d53eac039a2a000083",
    "name": "Opposites Attract"
  },
  {
    "id": "55c90cad4b0fe31a7200001f",
    "name": "String Templates - Bug Fixing #5"
  }
];
```

## Dependencies
- [node-html-parser](https://www.npmjs.com/package/node-html-parser) 