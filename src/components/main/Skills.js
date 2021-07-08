import React from 'react'

function Skills() {
    return (
        <div className="section skills flex" id="skills">
            <div className="skills-wrapper">
                <h2 className="section-title">skills & tools</h2>
                <p className="skills-para">The tools and technologies I am comfortable with:</p>
                <div className="skill-container flex">
                    <div className="skill">
                        <i className="fab fa-html5 fa-skills"></i>
                        <h2>HTML</h2>
                        <p>I write clean, well formatted, semantic HTML5 making sure it is easy to read, trouble-shoot and
                            maintain.</p>
                    </div>
                    <div className="skill">
                        <i className="fab fa-css3-alt fa-skills"></i>
                        <h2>CSS</h2>
                        <p>Using CSS current best practices such as media queries and flex box, my focus is to build pixel perfect
                            and responsive websites.</p>
                    </div>
                    <div className="skill">
                        <i className="fab fa-js-square fa-skills"></i>
                        <h2>JavaScript</h2>
                        <p>In addition to using Javascript to make my website dynamic, I use JavaScript for creating small scale
                            web applications.</p>
                    </div>
                </div>
                <div className="tools">
                    <h3 className="sub-title">Other Skills:</h3>
                    <p className="skills-para">Along with HTML, CSS and JavaScript, the following are some other tools and
                        technologies I use to bring my projects to
                        life:
                    </p>
                    <div className=" tools-container">
                        <i className="fab fa-bootstrap far-skills"></i>
                        <p>Bootstrap</p><br />
                        <i className="fab fa-git-alt far-skills"></i>
                        <p>Git</p><br />
                        <i className="fab fa-github-square far-skills"></i>
                        <p>GitHub</p><br />
                        <span className="iconify far-skills" data-icon="bi:terminal-fill" data-inline="false"></span>
                        <p>Terminal</p><br />
                        <span className="iconify far-skills" data-icon="simple-icons:adobexd" data-inline="false"></span>
                        <p>AdobeXD</p><br />
                        <span className="iconify far-skills" data-icon="bx:bxl-jquery" data-inline="false"></span>
                        <p>jQuery</p>
                    </div>
                </div>
                <h3 className="sub-title">What I currently do:</h3>
                <p className="skills-para">I am currently learning Java Full Stack Development at <a
                    href="https://www.meritamerica.org/" rel="noreferrer" target="_blank">Merit America</a>.
                </p>
            </div>
        </div>
    )
}

export default Skills
