"use client";
import React from "react";
import Header from "../header";
import Cards from "./Profile";

export default function page() {
  return (
    <div>
      <Header></Header>
      <main className="profile-page mt-60">
        <section className="relative block h-500-px">
          <div className="absolute top-0 w-full h-full bg-center bg-cover">
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 border rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        К покупкам
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          11
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Заказов
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    Иван Иванов
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Россия, Пермь
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-10">
                    Ваша корзина
                  </div>
                  <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 ">
                    {Cards.map(card => {
                      return(
                        <div key={card.id} className="w-full  px-4">
                        <a
                          href="#"
                          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 p-2"
                        >
                          <img
                            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 rounded-lg"
                            src={card.img}
                            alt=""
                          ></img>
                          <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                              {card.title}
                            </h5>
                            <p class="mb-3 font-normal text-gray-700 ">
                              {card.text}
                            </p>
                          </div>
                        </a>
  
             
                      </div>
                      )

                    })}


                  </div>
                  <a href="/" className="font-normal text-blue-500">
                          Купить все
                        </a>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8"></footer>
        </section>
      </main>
    </div>
  );
}
