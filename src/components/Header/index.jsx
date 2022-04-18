import React from 'react'
// import gsap from "gsap";
// import SplitText from "../../utils/Split3.min";

import './style.scss';

export default function Header() {
  return (
    <div className="header-container">
      <ul className="header-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text">New Chapter</h1>
    </div>
  )
}
