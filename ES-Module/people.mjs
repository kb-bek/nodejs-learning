export const people = ['Sam', 'Tom', 'Bob'];

export function sayHello(arrayOfPeople) {
    for (const person of arrayOfPeople) {
        console.log(`Hello, ${person}`);
    }
}

export default function fn() {
    console.log('My Func');
}