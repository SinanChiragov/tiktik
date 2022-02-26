import React, { Component } from "react";
import Home from "../container/Home";
import Navigation from "../layout/Navigation";
import Logo from '../Logo';

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="headerContainer_1LyYr stuck_3PiBL">
                            <Logo />
                            <Navigation />
                    </div>
                </header>
                <Home />
            </div >
        )
    }
}
export default App;