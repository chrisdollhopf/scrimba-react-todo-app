# scrimba-todo-app

"class" in is not allowed to be used in JSX due to JSX's use of the vanilla JS DOM API.

document.detElementById("something").className += " new-class-name"

instead "className" is used so that JSX is able to access the JS DOM API. 

note: "classList" has has access to different properties that can be used to add and remove classes.

example - implementation in JSX syntax (html like):
<!-- <header className="navbar"> -->

----------------------------------------------------------


className of classList can only be applied to react elements like "header, p, or h1". applying it to component names is going to behave unexpectedly.
As stated above they are only applied to (html like) elements.


----------------------------------------------------------


App.js acts as the app to the components in the components folder (sort of).

An example of this is the div element in the App.js acts as the parent to the header element in the ./components/Header.js.


----------------------------------------------------------


Semicolons are no longer required in react code.


----------------------------------------------------------


Normal function vs Arrow function:

function App() {
    return (
       <h1>Hello world!</h1>
    )
}


const App = () => <h1>Hello world!</h1>

Arrow functions are very useful, for example when you would use an anonymous function or when needing to write a class method. Otherwise it is personal preference.


----------------------------------------------------------


Invocing JS in JSX syntax is done by wrapping it in {}