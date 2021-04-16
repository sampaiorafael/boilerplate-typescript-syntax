function classDecorator (constructor: any) {
    constructor.foo = 'bar';
}

@classDecorator
class GenericClass {}

console.log(GenericClass); 
// Out: [Function: Wizard] { foo: 'bar' }

/*_____________________________________________*/

function classDecorator2 (constructor: any) {
    return class extends constructor {
        foo = 'bar'
    }
}

@classDecorator2
class GenericClass2 {}

console.log(new GenericClass2)
// Out: class_1 { foo: 'bar' }