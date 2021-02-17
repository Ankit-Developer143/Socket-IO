# Socket-IO
![image](https://user-images.githubusercontent.com/59916393/108194542-c4e12d00-713c-11eb-9ec2-ca28a9b80fbd.png)

# Script links
<script src="https://cdn.socket.io/socket.io-3.0.1.min.js"></script>

# install socket.io
npm install socket.io

npm install --save socket.io

Introduction
Writing a chat application with popular web applications stacks like LAMP (PHP) has normally been very hard. It involves polling the server for changes, keeping track of timestamps, and it’s a lot slower than it should be.

Sockets have traditionally been the solution around which most real-time chat systems are architected, providing a bi-directional communication channel between a client and a server.

This means that the server can push messages to clients. Whenever you write a chat message, the idea is that the server will get it and push it to all other connected clients.

The web framework
The first goal is to set up a simple HTML webpage that serves out a form and a list of messages. We’re going to use the Node.JS web framework express to this end. Make sure Node.JS is installed.

First let’s create a package.json manifest file that describes our project. I recommend you place it in a dedicated empty directory (I’ll call mine chat-example).




