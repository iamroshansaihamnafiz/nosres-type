import React from 'react';
import {Link} from "react-router-dom";
import LogoImg from "../../assets/images/logo.svg";

function LoginHeader() {
    return (
        <>
            <section id="header-section" className="relative">
                <header className="py-4 lg:py-2 flex items-center h-[50px] shadow-sm bg-white w-full lg:relative z-50"
                        style={{
                            position: 'fixed',
                        }}
                >
                    <div className="container flex items-center justify-between">
                        <div className="logo">
                            <Link to='/' className="flex items-center gap-2">
                                <img src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                <span className="font-[500] text-[18px]">Account</span>
                            </Link>
                        </div>
                    </div>
                </header>
            </section>
        </>
    );
}

export default LoginHeader;