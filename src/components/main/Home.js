import React from 'react'

function Home() {
    return (
        <div className="home">
            <div class="avatar">
                <img src="images/profile1.jpg" alt="" />
            </div>
            <div class="content">
                <h1 class="main-title">Ahmad Habibzad</h1>
                <h2 class="intro-title">Java Full Stack Developer</h2>
                <p class="body-txt">
                    Hi, welcome to my porfolio website! I am a full stack Java developer based in Maryland, United States.
                </p>
                <a href="#contact" class="cnt-btn">Contact Me</a>
            </div>
        </div>
    )
}

export default Home
