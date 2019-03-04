import React from "react"

// The following are see as child elements to App.js 
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import ToDoItem from "./components/ToDoItem"

function App() {
    return (
        <div>

            <Header />
            <MainContent />
            <Footer />

            <div className="todo-list">
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
            </div>
            
        </div>
    )
}


export default App