import React from "react";

function Resume() {
    return (
        <div className="text-center m-3">
            <h1>Click on the button below to download my resume!</h1>
            <a href={require('../../assets/Resume.docx')} download className="btn btn-outline-dark">My Resume</a>
            <div>
                <h2 className="m-3 border-bottom border-dark p-3">My Skills</h2>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>BootStrap</p>
                <p>JQuery</p>
                <p>Web/ServerSide APIs</p>
                <p>Node.js</p>
                <p>OOP</p>
                <p>Data Structures/Algorithms</p>
                <p>Express.js</p>
                <p>MySQL/Sequelize</p>
                <p>NoSQL/MongoDB</p>
                <p>MVC</p>
                <p>PWAs/Service Workers</p>
                <p>React</p>
                <p>GraphQL</p>
            </div>
        </div>
    );
}

export default Resume;
