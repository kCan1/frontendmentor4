import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import RecipeCard from "./components/RecipeCard";

function App() {
  return (
    <>
      <main className="min-h-screen flex justify-center items-center">
        <article className="items-center flex justify-center align-center w-1/2 min-h-screen my-20">
          <RecipeCard />
        </article>
      </main>
    </>
  );
}

export default App;
