# Codewars Progress Checker

A web app that allows users to check their **Codewars** progress against a selected set of 
kata collections. Users can enter their Codewars username and view detailed completion 
statistics for each kata in the collections.

---

## Features

- Enter a Codewars username to fetch user data.
- Display completion status of **selected kata collections**.
- Handles shareable hash-based URLs (`https://app-url/#username`).
 
---

## Demo

https://codeyourfuture.github.io/Codewars-Progress-Checker

---

## Installation

Clone the repository and access `index.html` from a server.
- The app runs entirely on client side.
- The server is needed because the app uses ES modules.

---

## Configuration of Kata Collections (in `src/js/kataCollections.mjs`)

```javascript
const kataCollections = [
  {
    name: "Collection Name",
    acceptedLanguages: ["JavaScript"],
    katas: [
      { id: "57eadb7ecd143f4c9c0000a3", name: "Abbreviate a Two Word Name" },
      { id: "55f9bca8ecaa9eac7100004a", name: "Beginner Series #2 Clock" },
      ...
    ]
  },
  ...
];
```

- `name` - Display name of the collection (independent of Codewars collection name)
- `acceptedLanguages` - An array of accepted programming languages for solving the katas in the 
  collection
  - Case insensitive
  - An empty array means **any language**
- `katas` - An array of katas. Each kata is an object with two properties:
  - `id`: ID of the kata
  - `name`: Name of the kata

---

## Project Structure

```
├── README.md                     # This file
├── favicon.ico                   # Feel free to replace this
├── index.html                    # Main HTML page
├── package.json                  # (Optional) Needed only for executing the script in tools/
├── src
│   ├── css
│   │   └── styles.css            # Styles
│   └── js
│       ├── app.mjs               # Logic to deal with UI
│       ├── codewarAPI.mjs        # AppData class + functions to fetch data from Codewars
│       └── kataCollections.mjs   # Definition of kata collections
└── tools
    ├── README.md                 # Info about the script in this folder
    └── getCollectionKatas.mjs    # Extract katas from a Codewars collection page
```

## Dependencies
- Vanilla JavaScript (ES modules)
- Codewars public API (no authentication required)

## Acknowledgements

- [Codewars API](https://dev.codewars.com/)