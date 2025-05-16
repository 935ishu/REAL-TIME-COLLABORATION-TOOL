REAL-TIME-C0LLABOARTION-TOOL

COMPANY :CODTECH IT SOLUTIONS

NAME :HARIJANA ISWARYA

INTERN ID :CT04DK692

DOMAIN :MERN STACK WEB DEVELOPMENT

DURATION:4 WEEKS

MENTOR:NEELA SANTHOSH

Real-Time Collaborative Notepad using MERN and Socket.IO

Task 3 involved building a Real-Time Collaborative Notepad application where multiple users can simultaneously view and edit a shared document. This task focused on combining the power of the MERN stack (MongoDB, Express.js, React, and Node.js) with Socket.IO to deliver real-time bidirectional communication. The core objective was to allow users to experience collaborative typing — a feature popular in tools like Google Docs — without needing to refresh the page.

We started with setting up the backend using Node.js and Express. We used Socket.IO to establish and manage WebSocket connections between the server and connected clients. When one user types or edits content in the notepad, the changes are instantly broadcast to all other users in real-time. The server listens for an event like note-changed from a client, and then emits an update event to all other connected clients.

On the frontend, we used React.js to create a clean and responsive UI with a central text area for collaborative editing. The frontend connects to the backend via Socket.IO’s client library and listens for content updates. Any changes made by one user are immediately visible to all others — ensuring a truly collaborative experience. React hooks (useState, useEffect, and useRef) were used for managing local state and socket communication.

To ensure smooth synchronization, we implemented input throttling or debouncing to reduce the number of socket events and avoid excessive network traffic. The app uses a basic socket room structure, so future upgrades can support multiple documents or users editing separate rooms.

OUTPUT:

![Image](https://github.com/user-attachments/assets/d1342db1-2f83-4559-9e4c-ef82c1d2782f)
