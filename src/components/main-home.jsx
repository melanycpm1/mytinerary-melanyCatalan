import React, { useState } from "react";
import Hero from "./hero";
import data from "../data/data";
import Carussel from "./carossel";

function MainHome() {
    
    return (
        <>
            <main className="h-1200">
                <Hero></Hero>
                <Carussel></Carussel>
            </main>
        </>
    )
}

export default MainHome;
