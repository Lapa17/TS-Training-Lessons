console.log('constructor')

let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // (*)
  console.log(rabbit)
  console.log(animal) 
 
  console.log( rabbit.eats ); 
  console.log( rabbit.jumps ); 


//Task 5

 Function.prototype.customBind = function (ctx, ...args) {
	console.log(this === obj2.sayName);
	let self = this; 
	return function (...args2) {
		return self.apply(ctx, [...args, ...args2])
	}
}

Function.prototype._bind = function (ctx, ...args) {
	debugger;
	ctx.___someStrangeKey____ = this;
	return function (...args2) {
		return ctx.___someStrangeKey____(...args, ...args2);
	}
}

var obj = {name: 'Evgen'};
var obj3 = {name: 'Helen'};
var obj2 = {name: 'Hanna', sayName() {console.log(this.name)}};

obj2.sayName.customBind(obj)();

export default () => {};