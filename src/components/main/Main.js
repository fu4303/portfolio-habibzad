import React from 'react'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function Main() {
    return (
        <React.Fragment>
            <Home />
            <hr />
            <Skills />
            <hr />
            <Projects />
            <hr />
            <Contact />
        </React.Fragment>
    )
}

export default Main
