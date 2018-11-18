# NodeActor

NodeActor is an actor model implement for nodejs.
It makes message exchange more easier between different components in node app.

## Feature

- you can defined any actor in anywhere
- support broadcast messages
- support forward messages
- support foreground and background mode(foreground mode will handle the message right now , background mode will save message in actor's message box)
- very simple to use

## Install

- run `npm i -S node-actor` in your project
- import `ActorSystem` and `Actor` from `node-actor` to your app
- then you can define your actors , use anywhere

## Usage

_when you finished install,you can do following things to use actor_

 
 ```typescript
 import {ActorSystem,Actor} from 'node-actor'
 
 let system = new ActorSystem()
 
 system.start('app',m=>{
     console.log(m.message)
 })
 
```

or

```javascript

var nodeActor = require('node-actor');

var system = new nodeActor.ActorSystem();

system.start('app',m=>{
    console.log(m.message)
})

```

1. Require `node-actor` module.
2. Create an Actor and give it a receiver function.
3. Send messages according to actor.
4. you can `stop` or `pause` this actor when necessary.

It is so easy?Right?

## APIs

### Actor [Model Class]

#### Fields

- `.name` : a unique name for actor, required.
- `.state` : the actor's state, it has two value:`Actor.STATE_FOREGROUND` and `Actor.STATE_BACKGROUND`.
- `.backgroundMessageBox` : a message box for message cache when actor under the background state.Usually, you need not to access it.
- `.actorSystem` : ActorSystem's reference.

#### Methods

- `constructor(name:string,actorSystem:ActorSystem)`
- `receive(m:{message:any,sender:Actor,receiver:Actor})=>any` : Actor's message handler
- `sendByName(name:string,message:any)=>void`
- `send(actor:Actor,message:any)=>void`
- `forwardByName(name:string,msg:{message:any,sender:Actor,receiver:Actor})=>void` : forward method can give the message to another actor and keep the origin sender
- `forward(actor:Actor,msg:{message:any,sender:Actor,receiver:Actor})=>void`
- `broadcast(message:any)=>void` : can send a message to all actors, include itself
- `tell(message:any,sender:Actor)=>void` : let this actor receive a message with a sender. Usually, you should use sendXXX method to send message not this
- `become(receiver:(m:{message:any,sender:Actor,receiver:Actor})=>any)=>void` : change the actor's receive handler

### ActorSystem [Model Class]

#### Fields

- `.actors` : all the actors in this actor system

#### Method

- `create(name:string):Actor` : create an actor with a none receiver and background state in actor system. It can be used in prebuilt an actor and let it cache message during it not started
- `start(name:string,receiver:(m:{message:any,sender:Actor,receiver:Actor})=>any):Actor` : start an actor with a receiver by name and let this actor in foreground state
- `startActor(actor:Actor):Actor`
- `pause(name:string):void` : let this actor switch to background mode by name
- `stop(name:string):void` : remove the actor from this actor system by name

## About

[dowdyboy](http://dowdyboy.com)

[Github](https://github.com/dowdyboy/node-actor)

