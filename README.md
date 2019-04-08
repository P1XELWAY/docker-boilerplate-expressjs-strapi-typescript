# docker-boilerplate-expressjs-strapi-typescript
Docker boilerplate with Strapi.IO and ExpressJS/Typescript with remote debug for Visual Studio Code

### First start

```
$ make init
```

### To start existing docker

```
$ make run
```

### Server :

The expressjs server responding at address :

http://localhost:3000/

The Strapi.IO server respondinf at address :

http://localhost:1337/ (frontend)

http://localhost:1337/admin (frontend admin)

To debug code of ExpressJS add a breakpoint and presse F5 (Select Attach to Remote configuration)