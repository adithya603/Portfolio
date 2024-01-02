import React from "react";

function Project() {
    const handleProject1 = () => {
        window.location.href = `https://github.com/adithya603/temp-converter.git`;
    };

    const handleProject2 = () => {
        window.location.href = `https://github.com/adithya603/to-do-list.git`;
    };

    const handleProject3 = () => {
        window.location.href = `https://github.com/adithya603/simon-game.git`;
    };

    return (
        <section id="projects">

            <p className="allText_p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>

            <div className="card-container">
                <div className="card">
                    <h2 className="cardHeading">Temperature Convertor</h2>
                    <p>A project that converts temperature to any units</p>
                    <button className="btn card-btn1 btn-1" onClick={handleProject1}>source code</button>
                </div>
                <div className="card">
                    <h2 className="cardHeading head2">To Do List</h2>
                    <p>A daily to-do-list that allows users to add and update their list</p>
                    <button className="btn card-btn2 btn-1" onClick={handleProject2}>source code</button>
                </div>
                <div className="card">
                    <h2 className="cardHeading head2">Simon Says</h2>
                    <p>A front-end built game that tests the user's memory</p>
                    <button className="btn card-btn2 btn-1" onClick={handleProject3}>source code</button>
                </div>
            </div>

        </section>
    )
}

export default Project