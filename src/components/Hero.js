import React from "react";
import { Link } from "react-router-dom";

function Hero() {

    return (
        <div className="container">
            <div className="hello">
                <h1 className="Welcome"> Welcome!!!
                <span className="Welcome2"> This is </span> My GitHub Portfolio</h1>
                <Link to="/src/Pages/Profile.js" className="For More">For More</Link>

            </div>

            <img src="/src/components/backgroundimg.png" alt=""/>
        </div>
    )
}

export default Hero