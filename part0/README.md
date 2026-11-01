## Part 0 Exercises 0.4-0.6

### Exercise 0.4 - New Note Diagram

```mermaid
sequenceDiagram
  participant Browser
  participant Server

  Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
  activate Server
  Note right of Server: Save new note
  Server-->>Browser: 302 Found, Location: /notes
  deactivate Server

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  activate Server
  Server-->>Browser: HTML document
  deactivate Server

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate Server
  Server-->>Browser: CSS file
  deactivate Server

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  activate Server
  Server-->>Browser: JS file
  deactivate Server

  Note right of Browser: Browser execute the JavaScript code which fetches JSON content from server

  Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate Server
  Server-->>Browser: [{ "content": "Hhhh", "date": "2026-11-01T09:41:49.568Z" }, ... ]
  deactivate Server  
```

### Exercise 0.5 - Single Page Diagram
