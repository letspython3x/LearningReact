import React from "react"

// Using Inline styling

function MainContent() {
    return (
        <main className="main-content">Below is my todo list
            <p style={{ color: "#333", backgroundColor: "#777" }}>When you click on the checkbox then that line will go strikethrough.</p>
        </main>)
}
    
export default MainContent