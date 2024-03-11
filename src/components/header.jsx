import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="fixed w-full z-50 flex justify-around bg-blue-400 h-16 items-center">
            <div>
                <span className="font-serif text-xl font-semibold text-white">My Tinerary</span>
            </div>
            <div>
                <nav>
                    <ul className="flex items-center gap-8 font-serif">
                        <li><a href="#" className="font-normal text-base text-white hover:text-slate-600">Home</a></li>
                        <li><a href="/cities" className="font-normal text-base text-white hover:text-slate-600">Cities</a></li>
                        <li><button className="bg-blue-600 w-28 h-12 rounded-xl"><a href="/login" className="font-normal text-base text-white hover:text-slate-600" >👤 Login</a></button></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header 