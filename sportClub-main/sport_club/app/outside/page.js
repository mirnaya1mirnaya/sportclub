"use client";
import React, {useState, useEffect, useRef} from "react";
import Header from "../header";
import Cards from "./Outside.js"

export default function page() {
    const [Card, setCard] = useState(Cards)
    console.log(Card)
    function buy(e){

        let order = document.getElementById(e.target.id)
        order.style.backgroundColor = "green"
        order.innerHTML = "В корзине"
    }
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto w-full mt-10">
      <a href="/" className="flex gap-2 items-center cursor-pointer text-blue-600"><svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>На главную </a>
      </div>
      <div className="container w-full mx-auto mt-20 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
        {Card.map(card => {return(
            <div key={card.id} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
            <a className="" href="#">
                <img class="rounded-t-lg " src={card.img} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{card.title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 ">{card.text}</p>
                <a href="#" onClick={buy} id={card.id} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    В корзину
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
        )})}

      </div>
    </div>
  );
}
