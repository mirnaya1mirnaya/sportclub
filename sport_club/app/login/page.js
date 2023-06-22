"use client"
import React from 'react'

export default function page() {
  return (
    <div className="h-screen grid grid-rows-2">
            <div class="w-full container mx-auto  flex items-center justify-center max-w-xs">
  <form class="bg-white border rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
        <div className="text-center text-2xl font-bold text-blue-500 pb-3">Войти</div>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Логин
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Логин"></input>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Пароль
      </label>
      <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Пароль"></input>
    </div>
    <div class="flex items-center justify-between">
        <a href='/profile'>
        <button href="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Войти
      </button>
        </a>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Забыли пароль?
      </a>
    </div>
  </form>

</div>
<div class="w-full container mx-auto flex items-center justify-center max-w-xs">
  <form class="bg-white border rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
        <div className="text-center text-2xl font-bold text-blue-500 pb-3">Зарегестрироваться</div>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Логин
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Логин"></input>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Пароль
      </label>
      <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Пароль"></input>
    </div>
    <div class="flex items-center justify-center">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Зарегестрироваться
      </button>

    </div>
  </form>

</div>
    </div>
  )
}
