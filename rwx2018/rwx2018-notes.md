# The Rich Web Experience 2018 Notes
## Day 1: Sunday, December 2, 2018
### Workshop: Polymer and Web Components

> Web Components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps built on the Web Component standards,will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

Web Components are made up of 4 different specs:

1. Custom Elements
2. HTML Imports
3. HTML Templates
4. Shadow DOM

Useful Links:
* [WebComponents.org](http://webcomponents.org)
* [Polymer Website](http://polymer-project.org)
* [Polymer Slack](http://polymer-slack.herokuapp.com)
* [Polymer 2.x Cheat Sheet](https://meowni.ca/posts/polymer-2-cheatsheet/)
* [How to use Polymer with Webpack](http://robdodson.me/how-to-use-polymer-with-webpack/)
* [PWAs with Polymer: a checklist](https://meowni.ca/posts/polymer-pwa-checklist/)
* [Custom Elements Everywhere](https://custom-elements-everywhere.com/)
* [Polycasts on YouTube](https://www.youtube.com/playlist?list=PLOU2XLYxmsII5c3Mgw6fNYCzaWrsM3sMN)
* [2018 Google I/O Polymer videos](https://www.polymer-project.org/blog/2018-05-09-polymer-at-io-2018)
* [2017 Polymer Summit videos on YouTube](https://www.youtube.com/playlist?list=PLNYkxOF6rcIDP0PqVaJxqNWwIgvoEPzJi)
* [End-to-End Polymer Apps 2017 Chrome Dev Summit video](https://youtu.be/Wu2GCRkDecI)
* [2017 Google I/O Polymer videos on YouTube](https://www.youtube.com/playlist?list=PL_c6rbXV248du6m1VJABo32mP7sXWVb4m)

---

## Day 2: Monday, December 3, 2018
### Session: The MARVELous VUEniverse

VueJS is:
* Lightweight
* Low time to production
* Documented Well
* Renders Quickly
* Can be adopted incrementally

Attributes need to be bound:

```<option v-for="city in cities" v-bind:value=“city.id”>```

```<div class="static" v-bind:class="{ active: isActive, 'textdanger': hasError }">```

Templates can contain expressions

```{{ greeting }} {{ city.isInTown ? city.name : “airport” }}```

Events can have modifiers:

```<form v-on:submit.prevent="onSubmit"></form>```

---

### Session: An In-Depth Vue: Advanced Topics & Best Practices

* Components go in the `/components` folder
* Component Name Should be multi word
* Component Name should be PascalCase or kabab-case
* Base components should have a specific prefix "Base" or "App", etc.
* Prefix a single instance component with "The"
    * Single instance components are not reusable
    * if you're passing attributes, it's probably not single instance
* Tightly couple parent chile component names
* Use PascalCase in string templates, kebab-case in DOM templates
* Prefer full names over abbreviations
* Use Axios

---

### Session: A Vue to Refactor: Breathe life into your old MV* app

REALITY CHECK... The ground-up Rewrite just isn’t going to happen.

> The first rule of holes: if you are in one, stop digging.
>
> -- Bob Martin

* http://www.luckymethod.com/2013/03/the-big-redesign-in-the-sky/
* https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/

1. What are your goals?
2. Get the team on board
3. Determine Component Structure
4. Where is the finish line?
5. How much time can be spent on this?
6. Be aware of over-engineering
7. Start simple, refactor what you touch, release often
8. Write tests

---

### Session: State of Vue: Mastering Vuex and Vue Architecture

* Action -> Dispatcher -> Store -> Views
* Single source of truth
* Data is read only
* Mutations are synchronous
* Actions are asynchronous

---

### Session: A Vue to Test: Testing vuejs

https://github.com/carducci/vue-hackernews

Arrange tests from fastest to slowest

1. Perform code health check (linting)
2. Unit Tests
    * There should be the most of these
    * Component contract, input/output
3. Snapshot Tests
    * There should be the fewest of these
4. End to End Test
    * There are more fragile and should only cover your critical experiences

The first unit test you should run is a sanity check. This is as simple as  asserting `true === true`. This will tell you if your testing framework is working correctly

unit test are synchronous. Use `jest.useFakeTimers()`.

install babel-jest and vue-jest. Make sure to modify the .babelrc file

---

### Session: The Critical Career Path Decision

Becoming a Manager Myths:
1. It's the same job
2. It's less work
3. It's a promotion
4. Verbal contracts are binding
5. You'll always have an office

Books:
* [Radical Candor by Kim Scott](www.radicalcandor.com/the-book/)
* [Demystifying Public Speaking by Lara Hogan](abookapart.com/products/demystifying-public-speaking)
* [The Manager’s Path by Camille Fournier](shop.oreilly.com/product/0636920056843.do)
* [Steering by Starlight by Martha Beck](marthabeck.com/books/#sbs)
* [First, Break All The Rules by Gallup](www.gallup.com/press/176069/first-break-rules-worldgreatest-managers-differently.aspx)

Websites:
* [“Manager Energy Drain” Article](larahogan.me/blog/manager-energy-drain/)
* [Lara Hogan’s Blog](larahogan.me/blog/)
* [Camille Fournier’s Blog](medium.com/@skamille)
* [Ask A Manager](www.askamanager.org)

---

## Day 3: Tuesday, December 4, 2018

### Session: What's new in JavaScript ES 2015 - 2019

* let
* const
* Default Values
    * ```defaultOne(x = 1, y = 2)```
* Arrow functions
* Destructuring
    * ```
        let point = { x: 1, y: 2 };
        let { x: a, y: b } = point;
        ```
    * ```
        let color = [255, 255, 100, 0.5];
        let [r, g, , a] = color;
        ```
    * Array destructuring might be good for hash navigation
* Spread Operator (array)
    * Blows out an array into a comma separated list
* Spread Args
    * The last function argument that get the remainder of the arguments passed
* Maps, WeakMaps, Sets, WeakSets
    * constructors, requires `new` keyword.
    * not json supported
* Object Property shorthand
    * `const person = {name} // same as {name: name}`
* Object  shorthand accessors (get and set)
* in-object dynamic property names
    * `{[propName]: 'foo'}`
* Symbols
* Iterators
    * `iter.next()`
* for of loop
* Generator functions
    * ```
        function* someGenerator() {
            yield 1;
            yield 2;
            yield 3;
        }
        let gen = someGenerator();
        console.log(gen.next().value); //1
        console.log(gen.next().value); //2
        console.log(gen.next().value); //3
        ```
* Promises
    * `Promise.all()`
* Classes
* Modules
* Templates String
    * ``const fullName = `$(firstName) ${lastName}`;``
    * can create custom handler functions
* Async Await
* Spread operator for objects
* Object ...rest
    * used in object destructuring
* regex
    * named groups
    * positive look ahead
    * positive look behind
    * negative look ahead
    * negative look behind
* Async Generators/Iterators

---

### Session: Improving Quality of JavaScript Code

* Single responsibility principle (cohesion)
* Single Level of abstraction (Slap)
* To avoid: `var`, `==`.
* `use strict;`
* Willingness to refactor
* Minimize log anonymous function so that logic can be tested
* Ask for review early
* Start by reviewing tests
* https://sinonjs.org/
* https://istanbul.js.org/
* https://github.com/es-analysis/plato

---

### Session: Angular, React, Vue: An Objective Comparison
jQuery:
* Library
* Like a manual transmission
* Like a row boat

React/Vue:
* Library trending toward framework
* Like an automatic transmission
* Like a sail boat
* Leaner
* Virtual DOM
* Lower learning curve
* 1 way data binding

Angular:
* Moved beyond Framework into Platform
* Like taking an Uber
* Like a cruise-ship
* Heavier
* Regular DOM
* High learning curve
    * High developer productivity once learned
* 2 way data-binding
* Dependency Injection

---

## Day 4: Wednesday, December 5, 2018

### Session: The Influential Engineer

* Reciprocity
    * I know you'd do the same for me
    * start with larger request first
* Consensus
    * What is everyone else doing?
    * Feel, Felt, Found
        * I can see how you feel that way. {x} felt the same way until they found {y}
* Authority
    * Establish position through credentials and professionalism
    * Admit weaknesses first
* Scarcity
    * What about your idea can you not get anywhere else?
* Consistency
    * People live up to what they write down
    * Start small and build with existing commitments
* Be Liked
    * Don't start a sentence with "Actually, ...". Start it with "It was my understanding that..."

### Session: VDD: Value Driven Development - 10 Golden Rules for incremental Greatness

1. Start with "Why?"
    * The goal is to create valuable functionality, not code
2. Recognize Value
    * Understand your user
3. Cultivate Empathy
    * Does the user care?
4. The customer is king
5. Compromise is inevitable
6. Make the right compromises
7. Push back on the wrong compromises
    * You can only deliver on your commitments when the business delivers on theirs
8. Embrace Strategic Tech Debt
9. Avoid Unnecessary Tech Debt
10. Communicate in terms of business value
    


