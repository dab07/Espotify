import React from "react";
import '../css/App.css';
import { Link } from "react-router-native";

const Headers = () => {
    return (
        <div className="header">
            <Link to="/" className="logo">
                <text>myBlog</text>
            </Link>
            <nav>
                <Link to="/login" className="login">
                    <text>Login</text>
                </Link>
                <Link to="/register" className="register">
                    <text>Register</text>
                </Link>
            </nav>
        </div>
    );
}

export default Headers;
