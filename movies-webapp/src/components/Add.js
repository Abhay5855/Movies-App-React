import React from 'react'
import { Link } from "react-router-dom";
function Add() {
    return (
        <div>
            <Link to="/add">
                <h2>+</h2>
            </Link>
        </div>
    )
}

export default Add
