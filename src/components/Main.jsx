import React from "react"

export default function Main() {
    return (
        <div className='main'>
            <div className='top'>
                <h2 className='name'>Michel Pomerantzeff</h2>
                <h4 className='job-title'>Web Developer</h4>
            </div>

            <div className="topInfo">
                <div className="infoContent">
                    <img alt="globe-icon" src="./images/globe.png" className="globe-icon" />
                    <span>Brazilian</span>
                </div>


                <div className="infoContent">
                    <img alt="wa-icon" src="./images/whatsapp.png" className="whatsapp-icon" />
                    <span>+ 353 83 471 3034</span>
                </div>
                <div className="infoContent">
                    <img alt="pin-icon" src="./images/pin.png" className="pin-icon" />
                    <span>Vila Nova de Gaia - Portugal</span>
                </div>
            </div>

            <div className='btn'>
                <a href="mailto:micheldauniao@hotmail.com"><button className='email'><img alt="email-icon" src="./images/email.png" className="email-icon" />Email</button></a>
                <a href="https://www.linkedin.com/in/michelpomerantzeff/"><button className='linkedin'><img alt="in-icon" src="./images/in.png" className="in-icon" />LinkedIn</button></a>
            </div>
            <div className='intro'>
                <h2>About</h2>
                <p>
                    I am a Front-end Developer, with a never-ending drive to improve my skills.
                    I love the concept of bringing abstract ideas to life and being able to do that through coding is what makes me passionate about it.
                    Professionally I am a team player with strong communication skills who easily adapts to different enviroments and loves new challanges.
                </p>

                <h2>Projects</h2>
                <ul className="projects">
                    <li><a href=" https://michelpomerantzeff.github.io/linksaver-with-localStorage">Link Saver App</a></li>
                    <li><a href=" https://michelpomerantzeff.github.io/calculator">Calculator</a></li>
                    <li><a href=" https://michelpomerantzeff.github.io/traveljournal">Travel Journal</a></li>
                    <li><a href=" https://michelpomerantzeff.github.io/Countdown"> Countdown</a></li>
                </ul>

                <h2>Interests</h2>
                <ul>
                    <li>Travelling and experiencing new cultures. </li> <br />
                    <li>Exercising and a keeping a healthy lifestyle. </li><br />
                    <li>Exploring new techs and videogames. </li>
                </ul>
            </div>
        </div>

    )
}
