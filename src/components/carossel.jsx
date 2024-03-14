import React, { useState } from "react";

function Carussel({ champion }) {
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
        <section className="relative top-16">
            <h2 className="text text-center text-white font-bold m-20 text-3xl">Popular Mytineraries!!</h2>
            <div className="slide-container grid grid-rows-2 grid-cols-2 w-9/12 m-auto">
                {champion.slice(startIndex, endIndex).map((city, index) => (
                    <div key={index} className="slide">
                        <img src={city.image} alt={city.name} className="w-4/5 h-4/5 object-cover" />
                    </div>
                ))}
            </div>
            <div className="flex justify-between relative bottom-80">
                <button onClick={prevSlice}>«—</button>
                <button onClick={nextSlice}>—»</button>
            </div>
        </section>
    );
}

export default Carussel;
