import React, { useState } from "react";
import Hero from "./hero";
import data from "../data/data";
function MainHome() {

    function Next() {
        let nextImg = (count + 1) % images.length;
        setCount(nextImg)
    }
    function previous() {
        let previousImg = (count - 1) % images.length;
        setCount(previousImg)
    }
    const [count, setCount] = useState(0);

    let images = []

    data.forEach(countries => {
        images.push(countries.image)
    });

    return (
        <>
            <main className="h-1200">
                <Hero></Hero>
                <section className="relative top-16">
                    <h2 className=" text-center my-24 text-4xl font-medium text-white font-serif">Popular MyTinerary</h2>
                    <div className="flex justify-center">
                        <img src={images[count]} className="w-2/4 h-96 object-cover"/>
                    </div>
                    <div className="flex justify-between relative bottom-40">
                        <div>
                            <span className="cursor-pointer" onClick={previous}>«—</span>
                        </div>
                        <div>
                            <span className="cursor-pointer" onClick={Next}>—»</span>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default MainHome;