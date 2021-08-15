import React from 'react'
import './NavBar.css'

const Navbar = () => {
  let rutes = [
    {
      rute: "one",
      name: "weekly's top",
    },
    {
      rute: "two",
      name: "Home",
    },
    {
      rute: "three",
      name: "Category & Review",
    },
  ];
  return (
    <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between pl-9 py-4 px-6 bg-transparent sm:items-baseline w-full">
      <div class="mb-2 sm:mb-0">
        <a href="/" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</a>
      </div>
      <div>
        {rutes.map((rute) => {
          return (
            <a href={`/${rute.rute}`} class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">{rute.name}</a>
          );
        })}
        <button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">Login</button>
      </div>
    </nav>
  );
};

export default Navbar
