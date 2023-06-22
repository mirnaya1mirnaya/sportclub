"use client"
import React from 'react'

export default function Header() {
  return (
    <header>
        
<nav class="bg-white border-gray-200 ">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" class="flex items-center">
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">SportClub</span>
        </a>
        <div class="flex items-center">
            <a href="tel:5541251234" class="mr-6 text-sm  text-gray-500  hover:underline">(555) 412-1234</a>
            <a href="/login" class="text-sm  text-blue-600  hover:underline">Login</a>
        </div>
    </div>
</nav>
<nav class="bg-gray-50 ">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <a href="/" class="text-gray-900  hover:underline" aria-current="page">Главная</a>
                </li>
                <li>
                    <a href="/house" class="text-gray-900  hover:underline">Для дома</a>
                </li>
                <li>
                    <a href="/fight" class="text-gray-900  hover:underline">Боевые искусства</a>
                </li>
                <li>
                    <a href="/relax" class="text-gray-900 hover:underline">Отдых</a>
                </li>
                <li>
                    <a href="/outside" class="text-gray-900  hover:underline">На воздухе</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </header>

  )
}
