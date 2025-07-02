import React from "react";
import omeletteImage from "../assets/images/image-omelette.jpeg"; // Adjust the path as necessary

const RecipeCard = () => {
  return (
    <div className="card">
      <img src={omeletteImage} alt="omelette" className="rounded-lg mb-10" />

      <section className="card-header xs:mx-5">
        <h1 className="mb-5">Simple Omelette Recipe</h1>
        <p className="mb-5 text-[hsl(30,10%,34%)]">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className="flex justify-start flex-col mt-10 bg-rose-50 rounded-xl p-3 mx-3 text-[hsl(30,10%,34%)]">
          <h3 className="font-bold mb-2">Preparation time : </h3>
          <ol className="list-disc list-inside pl-3">
            <li>
              <b>Total: </b>
              Approximately 10 minutes
            </li>
            <li>
              <b>Preparation: </b>5 minutes
            </li>
            <li>
              <b>Cooking: </b>5 minutes
            </li>
          </ol>
        </div>

        <section className="flex justify-start flex-col mt-10">
          <h2 className="mb-5">Ingredients</h2>
          <ol className="list-disc list-inside pl-3  text-[hsl(30,10%,34%)]">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ol>
        </section>
      </section>

      <hr className="my-5" />

      <section className="card-content xs:mx-5">
        <h2>Instructions</h2>
        <ol className="list-decimal pl-5 mt-3 text-[hsl(30,10%,34%)]">
          <li className="p-3">
            <strong>Beat the eggs: </strong> In a bowl, beat the eggs with a
            pinch of salt and pepper until they are well mixed. You can add a
            tablespoon of water or milk tor a fluffier texture.
          </li>
          <li>
            <strong>Heat the pan: </strong> Place a non-stick frying pan over
            medium heat and bread butter or oil.
          </li>
          <li>
            <strong>Cook the omelette : </strong>Once the butter is melted and
            bubbling, pour in the eggs.Tilt the pan to ensure the eggs evenly
            coat the surtace.
          </li>
          <li>
            <strong>Add fillings (optional): </strong>When the eggs begin to set
            at the edges but are still slightly runny in the middle, sprinkle
            your chosen fillings over one half of the omelette.
          </li>
          <li>
            <strong>Fold and serve: </strong>As the omelette continues to cook,
            carefully utt one edge and toid it over the hrings. Let it cook for
            another minute, then side it onto a plate.
          </li>
          <li>
            <strong>Enjoy: </strong>Serve hot, with additional salt and pepper
            if needed.
          </li>
        </ol>
      </section>

      <hr className="my-5" />

      <section className="card-footer xs:mx-5 mb-10">
        <h2 className="mb-5 text-3xl">Nutrition</h2>
        <p className=" text-[hsl(30,10%,34%)]">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>

        <table class=" table-auto font-[outfit] mt-5 w-full  text-[hsl(30,10%,34%)]">
          <thead></thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="p-3">Calories</td>
              <td className="font-bold text-[hsl(14,45%,36%)]">277kCal</td>
            </tr>
            <tr className="px-3 border-b border-gray-300">
              <td className="p-3">Carbs</td>
              <td className="font-bold text-[hsl(14,45%,36%)]">0g</td>
            </tr>
            <tr className="px-3 border-b border-gray-300">
              <td className="p-3">Protein</td>
              <td className="font-bold text-[hsl(14,45%,36%)]">20g</td>
            </tr>
            <tr className="px-3 border-b border-gray-300">
              <td className="p-3">Fat</td>
              <td className="font-bold text-[hsl(14,45%,36%)]">22g</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default RecipeCard;
