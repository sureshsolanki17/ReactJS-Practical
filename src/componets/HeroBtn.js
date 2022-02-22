import './HeroBtn.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

function HeroBtn(props) {
    const [addClass, setClass] = useState(props.className);
    const BtnClick = () => {
        console.log(addClass);
        setClass('hahhjh');
    };
    return (
        <div className='d-flex justify-content-center'>
            <div className='per-btn'>
                <Link className='my-btn' to="/fansignup" onClick={ BtnClick }>FAN SIGNUP</Link>
                <Link className='my-btn' to="/talentsignup" onClick={ BtnClick }>TALENT SIGNUP</Link>
            </div>
        </div>
    );
};

export default HeroBtn;