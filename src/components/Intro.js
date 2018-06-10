import React from "react";
import { Link } from "react-router-dom";
import "../styles/Intro.css";

const Intro = () => (
    <div className="intro">
        <h1 className="intro__title">Interview Questions</h1>
        <Link to="/quiz" className="intro__button button">Ready To Go?</Link>
    </div>
);

export default Intro;
