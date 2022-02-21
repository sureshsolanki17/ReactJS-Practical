import React from "react";
import './App.css';
import FanSignup from "./pages/FanSignup";
import TalentSignup from "./pages/TalentSignup";
import HeroBtn from "./componets/HeroBtn.js";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

function App() {
    const LoginData = [
        {
            first_name: "Christie",
            last_name: "Tanfield",
            email: "ctanfield1@state.gov",
            username: "Male",
            password: "TGVnqaz6",
            id: 1
        }
    ];
    // const 
    return (
        <div className="appcss">
            <HeroBtn></HeroBtn>
            <Routes>
                <Route path="fansignup" element={<FanSignup />} />
                <Route path="talentsignup" element={<TalentSignup />} />
            </Routes>
        </div>
    );
};
export default App;