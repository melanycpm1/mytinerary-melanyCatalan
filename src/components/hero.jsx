import React from "react";
import heroImg from "../assets/img-hero/hero.jpg"

function Hero() {
    return (
        <>
            <section className="relative top-16 h-96">
                <img src={heroImg} alt="" className="h-96 w-full object-cover" />
                <div className="relative bottom-80 left-2/3 font-serif  text-white w-1/6 text-center">
                        <h1 className="text-5xl ">My Tinerary</h1>
                        <p className=" text-xl my-6 ">Find your perfect trip, designed by insiders who know and love their cities</p>
                        <button className="bg-blue-600 w-24 h-10 rounded-xl"><a href="#" className=" text-lg">View more</a></button>
                </div>
            </section>
        </>
    )
}
export default Hero