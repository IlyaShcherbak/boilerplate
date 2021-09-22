// var emitter = {};
/* eslint-disable */

interface EmitterType {
    events?: {
        [k: string]: Function[]
    }

    on: (type: string, handler: Function) => EmitterType;
    off: (type: string, handler: Function) => EmitterType;
    trigger: (event: MyEvent, args: any) => EmitterType;

    _dispatch: (event: MyEvent, args: any) => EmitterType;
    _offByHandler: (type: string, handler: Function) => EmitterType;
    _offByType: (type: string) => EmitterType;
    _offAll: () => EmitterType;
}

// const emitter: EmitterType  = {};

class MyEmitter implements EmitterType {
    events: {}

    on = (type: string, handler: Function) => {
        if (this.events.hasOwnProperty(type)) {
            this.events[ type ].push(handler);
        } else {
            this.events[ type ] = [ handler ];
        }

        return this;
    };

    off = (type?: string, handler?: Function) => {
    // if (arguments.length === 0) {
        if (type === undefined && handler === undefined) {
            return this._offAll();
        }
        if (handler === undefined) {
            return this._offByType(type);
        }

        return this._offByHandler(type, handler);
    };

    trigger = <T extends unknown>(event: MyEvent, args: T[]) => {
    // if (!(event instanceof Event)) {
    //   event = new Event(event);
    // }
        return this._dispatch(event, args);
    };

    _dispatch = (event: MyEvent, args: any) => {
        if (!this.events.hasOwnProperty(event.type)) { return; }
        args = args || [];
        args.unshift(event);

        const handlers: Function[] = this.events[ event.type ] || [];
        handlers.forEach((handler) => handler.apply(null, args));

        return this;
    };

    _offByHandler = (type: string, handler: Function) => {
        if (!this.events.hasOwnProperty(type)) { return; }
        const i: number = this.events[ type ].indexOf(handler);
        if (i > -1) {
            this.events[ type ].splice(i, 1);
        }

        return this;
    };

    _offByType = (type: string) => {
        if (this.events.hasOwnProperty(type)) {
            delete this.events[ type ];
        }

        return this;
    };

    _offAll = () => {
        this.events = {};

        return this;
    };
}

// function Emitter() {
//   var e = Object.create(emitter);
//   e.events = {};
//   return e;
// }

// function Emitter() { --
//   const e: EmitterType = Object.create(MyEmitter);
//   e.events = {};
//   return e;
// }

class Emitter {
    Event = MyEvent;
    e: EmitterType;

    constructor() {
        this.e = Object.create(MyEmitter);
        this.e.events = {};
    }

    mixin = (obj: EmitterType, arr: string[]) => {
        const emitter = new Emitter();

        arr.map((name) => {
            obj[ name ] = function() {
                return emitter[ name ].apply(emitter, arguments);
            };
        });
    };
}

// function Event(type) {
//   this.type = type;
//   this.timeStamp = new Date();
// }

class MyEvent {
    type: string;
    timeStamp: Date;

    constructor (type: string) {
        this.type = type;
        this.timeStamp = new Date();
    }
}

// emitter.on = function(type, handler) {
//   if (this.events.hasOwnProperty(type)) {
//     this.events[type].push(handler);
//   } else {
//     this.events[type] = [handler];
//   }
//   return this;
// };

// emitter.off = function(type, handler) {
//   if (arguments.length === 0) {
//     return this._offAll();
//   }
//   if (handler === undefined) {
//     return this._offByType(type);
//   }
//   return this._offByHandler(type, handler);
// };

// emitter.trigger = function(event, args) {
//   if (!(event instanceof Event)) {
//     event = new Event(event);
//   }
//   return this._dispatch(event, args);
// };

// emitter._dispatch = function(event, args) {
//   if (!this.events.hasOwnProperty(event.type)) return;
//   args = args || [];
//   args.unshift(event);

//   var handlers = this.events[event.type] || [];
//   handlers.forEach(handler => handler.apply(null, args));
//   return this;
// };

// emitter._offByHandler = function(type, handler) {
//   if (!this.events.hasOwnProperty(type)) return;
//   var i = this.events[type].indexOf(handler);
//   if (i > -1) {
//     this.events[type].splice(i, 1);
//   }
//   return this;
// };

// emitter._offByType = function(type) {
//   if (this.events.hasOwnProperty(type)) {
//     delete this.events[type];
//   }
//   return this;
// };

// emitter._offAll = function() {
//   this.events = {};
//   return this;
// };

// Emitter.Event = Event;
// Emitter.Event = MyEvent; --

// Emitter.mixin = function(obj, arr){
//   var emitter = new Emitter();
//   arr.map(function(name){
//     obj[name] = function(){
//       return emitter[name].apply(emitter, arguments);
//     };
//   });
// };

// Emitter.mixin = function(obj: EmitterType, arr: string[]){ --
//   var emitter = new Emitter();
//   arr.map(function(name){
//     obj[name] = function(){
//       return emitter[name].apply(emitter, arguments);
//     };
//   });
// };


/* eslint-enable */
