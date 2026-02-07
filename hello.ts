let myname: string = "Hello, TypeScript!";
console.log(myname);


//number
let mynum: number = 42;
let myfloat: number = 3.14;
console.log(myfloat);
console.log(mynum);

//boolean
let isTypeScriptFun: boolean = true;
console.log(isTypeScriptFun);

//undefined
let myUndefined: (undefined|string) = undefined; //meaning it can be either undefined or a string
console.log(myUndefined);

//null
let myNull: null = null; //meaning it can only be null different from undefined which can be either undefined or a string as shown above
console.log(myNull);

//any
let myAny: any = "This can be any type";
console.log(myAny);
myAny = 123;    
console.log(myAny);
myAny = true;   
console.log(myAny);

//array
let myArray: number[] = [1, 2, 3, 4, 5];
console.log(myArray);

let myStringArray: string[] = ["Hello", "TypeScript", "World"];
console.log(myStringArray);

let myMixedArray: (number | string)[] = [1, "two", 3, "four"];
console.log(myMixedArray);

myMixedArray.push(5); // Adding a number to the mixed array
myMixedArray.pop(); // Removing the last element from the mixed array
console.log(myMixedArray);

//tuple
let myTuple: [string, string, number] = ["Hello", "World", 42]; // A tuple can contain a fixed number of elements with specific types
console.log(myTuple);

let [n,m,p] = myTuple; // Destructuring the tuple into individual variables
console.log(n);
console.log(m);
console.log(p);

let myTuplea: [string, string, number][] = [["Hello", "World", 42],['k','l', 10]]; // A tuple can contain a fixed number of elements with specific types
console.log(myTuple);

let [na,ma,pa] = myTuplea[0] ?? ["", "", 0]; // Destructuring the tuple into individual variables and using nullish coalescing operator to provide default values in case myTuplea[0] is undefined or null
console.log(na);
console.log(ma);
console.log(pa);

let [x,y,z] = myTuplea[1] ?? ["", "", 0];
console.log(x);
console.log(y);
console.log(z);

//object
let myObject: { name: string; age: number; isValid?: boolean } = { name: "Alice", age: 30, isValid: true }; //?: means that the property is optional, so it can be omitted means can be an object with name and age properties, and an optional isValid property
console.log(myObject); 

//enum: with enums we can give a constant name to a set of values, making our code more readable and maintainable. Enums can be numeric or string-based. In this example, we will use a string-based enum to represent colors.
enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}
let myColor: Color = Color.Green;
console.log(myColor);
if (myColor === Color.Green) {
    console.log("The color is green!");
}

//interface: An interface in TypeScript is a way to define the structure of an object. It can be used to specify the types of properties and methods that an object should have. Interfaces are useful for ensuring that objects adhere to a specific contract, making it easier to work with complex data structures and improving code readability.
interface Person { //custom datatype that we can use to define the structure of a person object
    name: string;
    age: number;
    greet(): void; // A method that does not return anything (void)
}   
let person: Person = {
    name: "Alice",
    age: 30,    
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }   
};
person.greet(); // Calling the greet method of the person object


//functions
function add(a: number, b: number): number { // A function that takes two numbers as parameters and returns a number
    return a + b;
}   
console.log(add(5, 10)); // Calling the add function with arguments 5 and 10, and logging the result

function greet(name: string): void { // A function that takes a string as a parameter and does not return anything (void)
    console.log(`Hello, ${name}!`);
}
console.log(greet("Alice")); //undefined

//try-catch
function divide(a: number, b: number): number { // A function that takes two numbers as parameters and returns a number
    if (b === 0) {
        throw new Error("Cannot divide by zero!"); // Throwing an error if the second parameter is zero
    }       
    return a / b; // Returning the result of dividing a by b
}
try {
    console.log(divide(10, 2)); // Calling the divide function with arguments 10 and 2, and logging the result
    console.log(divide(10, 0)); // Calling the divide function with arguments 10 and 0, which will throw an error
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message); // Catching the error and logging its message to the console
    } else {
        console.error("An unknown error occurred");
    }
}