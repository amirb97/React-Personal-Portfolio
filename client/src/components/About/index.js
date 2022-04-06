import React from "react";

function About() {
    return (
        <div>
            <h1 className="text-center border-bottom border-dark p-3">About Me</h1>
            <div className="text-center p-2">
                <img src={require('../../assets/profile-pic.jpg')} className='img-thumbnail rounded'></img>
                <p>
                    I'm a current Web Developer Student looking to learn and perfect skills that can propel myself into a position to take on any project no matter the scale. From small start-ups to large corporations I aim to be able to create applications that enable future employers to reach their goals.
                    <br></br>
                    <br></br>
                    I look forward to speaking with you and assisting in any way I can.
                </p>
            </div>
        </div>
    );
}

export default About;
