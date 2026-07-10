# JAVASCRIPT EXECUTION CONTEXT - COMPLETE INTERVIEW NOTES

## JavaScript Code Execution

JavaScript ek single-threaded synchronous language hai.

-   Ek samay me ek hi kaam karegi.
-   Code line by line execute hota hai.

## JavaScript Engine

-   Chrome -\> V8
-   Node.js -\> V8
-   Firefox -\> SpiderMonkey

## Execution Context

Execution Context ek environment hota hai jisme code execute hota hai.

1.  Variable Environment
2.  Scope Chain
3.  this Keyword

## Types

### Global Execution Context (GEC)

Program start hone par create hota hai.

### Function Execution Context (FEC)

Har function call par create hota hai.

## Lifecycle

1.  Memory Creation Phase
2.  Code Execution Phase

## Memory Phase

-   Variables -\> undefined
-   Functions -\> complete definition

## Execution Phase

Code line by line execute hota hai.

## Call Stack

Execution contexts ko manage karta hai.

## Hoisting

-   var -\> undefined
-   function -\> complete definition
-   let and const -\> TDZ

## Temporal Dead Zone

Declaration aur initialization ke beech ka region.
##

````
In short any code we write 

Goes through 

Global Execution Context (GEC) is created.

GEC has two phases:
Memory Creation Phase (variables/functions allocated memory)
Code Execution Phase (line-by-line execution)

JavaScript executes synchronous code in the Call Stack.

When it encounters async operations (setTimeout, fetch, DOM events, etc.), they are handed to Web APIs.

After completion:
Promises (then, catch, finally, await) go to the Microtask Queue.
setTimeout, setInterval, DOM events go to the Task/Macrotask Queue.

Event Loop continuously checks:
Is the Call Stack empty?

Yes → Execute all Microtasks.
Then execute one Macrotask.
{Priority of Microtask Queue is higher than Task queue}
Repeat.
````