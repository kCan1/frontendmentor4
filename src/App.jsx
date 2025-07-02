import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import RecipeCard from "./components/RecipeCard";

function App() {
  return (
    <main className="sm:w-full flex md:justify-center md:items-center">
      <article className="items-center flex justify-center align-center md:w-1/2 md:my-10 min-h-screen sm:w-full">
        <RecipeCard />
      </article>
    </main>
  );
}

export default App;
