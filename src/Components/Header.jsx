import React from 'react'
import logo from "./FileHandler-new.png" 

export default function Header() {
    return (
        <div className="Header">
            <img className="logo" src={logo}/>
            <span className="head">AKTU ERP Website</span>
            <h1 className="topic">Students to sit for re-examination 2020-2024 B.Tech First Year</h1>
        </div>
    )
}
