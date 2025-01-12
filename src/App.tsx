import './css/App.css';
import Blog from './Components/Blogs';
import React from "react";
import Headers from "./Components/Headers";
import Login from './Components/Login';
import Register from './Components/Register';
import {NativeRouter, Route, Routes} from 'react-router-native';

const App: React.FC = () => {
    return (
        <NativeRouter>
            <div className="main">
                <Headers />
                <Routes>
                    <Route path="/" element={<Blog />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Blog/>
            </div>
        </NativeRouter>
    );
};

export default App;
