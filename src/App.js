import "./App.css";
import React, { Component } from "react";
import Game from "./game/game";
import Home from "./home/home";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

// function Ga (props) {
//   return (
//     <div className="inlineBox" >{props.name}</div>
//   )
// }

function App() {
    return (
        <HashRouter>
            <Routes>
                {/* 路由精确匹配"/home"，跳转Home页面 */}
                <Route exact path="/home" element={<Home />} />
                {/* 路由精确匹配"/Game"，跳转Login页面 */}
                <Route exact path="/game" element={<Game />} />
                {/* 未匹配，则跳转Game页面 */}
                <Route path="*" element={<Navigate to="/Game" />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
