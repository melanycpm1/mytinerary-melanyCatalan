import React, { useState } from "react";
import Hero from "./hero";
import data from "../data/data";

function MainHome() {
    const [currentSlice, setCurrentSlice] = useState(0);

    const nextSlice = () => {
        setCurrentSlice((currentSlice + 1) % 3);
    };

    const prevSlice = () => {
        setCurrentSlice((currentSlice - 1 + 3) % 3);
    };

    const startIndex = currentSlice * 4;
    const endIndex = startIndex + 4;

    return (
        <>
            <main className="h-1200">
                <Hero></Hero>
                <section className="relative top-16">
                    <h2 className="text text-center text-white font-bold m-20 text-3xl">Popular Mytineraries!!</h2>
                    <div className="slide-container grid grid-rows-2 grid-cols-2 w-9/12 m-auto">
                        {data.slice(startIndex, endIndex).map((place, index) => (
                            <div key={index} className="slide">
                                <img src={place.image} alt={place.name} className="w-4/5 h-4/5 object-cover" />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between relative bottom-80">
                        <button onClick={prevSlice}>«—</button>
                        <button onClick={nextSlice}>—»</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default MainHome;
