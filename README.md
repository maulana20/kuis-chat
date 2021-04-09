# kuis-chat

Simple socket.io example for chat application, built based on [Socket.io Chat App Using Websockets](https://www.youtube.com/watch?v=tHbCkikFfDE&t=2068) tutorial.

[sumber](https://github.com/nafiesl/iochat.git)

## Server Requirements

- Latest [NodeJS](https://nodejs.org/en) LTS installed
- [Yarn](https://yarnpkg.com/en/docs/install) (optional for nodejs [npm](https://www.npmjs.com/get-npm))

## How to install

1. Clone the repo

```bash
$ https://github.com/maulana20/kuis-chat.git
```

2. Install package dependencies

```bash
$ yarn
// or
$ npm install
```

3. Run the server

```bash
$ node socket
```

4. Open app in browser: http://localhost:3000

### among them :
#### admin
`http://localhost:3000/?admin=yes` => note `for create question`
![admin](screenshots/admin.png "admin")
#### visitor
`http://localhost:3000` => note `for answer the question that have been made`
![visitor](screenshots/visitor.png "visitor")
