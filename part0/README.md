## Part 0 Exercises 0.4-0.6

### Exercise 0.4 - New Note Diagram

```mermaid
sequenceDiagram
  participant Browser
  participant Server

  Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
  activate Server
  Note right of server: Save new note
  Server-->>Browser: 302 found
  deactivate Server
```
