import React from 'react';
import { NavLink, Link } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <>
    <div className="container-fluid main_menu">
    <div className="row">
        <div className="col-md-10 col-12 mx-auto">
            <nav className="navbar navbar-expand-lg ">
                {/* <a className="navbar-brand" href="/"><i className="fa fa-snowflake-o"></i> ScriptedSkyCine <i
                className="fa fa-snowflake-o"></i></a> */}
                 <Link className="navbar-brand" to="/">ScriptedSkyCine</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                        <NavLink className="nav-link" to="/Movie">Movie</NavLink>
                            {/* <a className="nav-link" href="/Movie">Movie <span class="sr-only">(current)</span></a> */}
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/Weather">Weather</NavLink>
                            {/* <a className="nav-link" href="/Weather">Weather</a> */}
                        </li>
                        <li className="nav-item"> 
                        <NavLink className="nav-link" to="/Texttospeech">Text to Speech</NavLink>
                            {/* <a className="nav-link" href="/Texttospeech">Text to Speech</a> */}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>
    </>
  )
}

export default Navbar
