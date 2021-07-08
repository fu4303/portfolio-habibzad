import React from 'react'

function Home() {
    return (
        <div className="home">
            <div class="avatar">
                <img src="images/profile1.jpg" alt="" />
            </div>
            <div class="content">
                <h1 class="main-title">Ahmad Habibzad</h1>
                <h2 class="intro-title">Java Full Stack Developer in Training</h2>
                <p class="body-txt">
                    Hi, I’m Ahmad! I am learning Java Full Stack development at <a href="https://www.meritamerica.org/"
                        rel="noreferrer" target="_blank" class="merit">Merit America</a>.
                </p>
                <a href="#contact" class="cnt-btn">Contact Me</a>
            </div>
        </div>
    )
}

export default Home
