import React from "react";
import omeletteImage from "../assets/images/image-omelette.jpeg"; // Adjust the path as necessary

const RecipeCard = () => {
  return (
    <div className="card">
      <section className="card-header">
        <img src={omeletteImage} alt="omelette" className="rounded-lg" />
        <h1 className="font-[young_serif]">Simple Omelette Recipe</h1>
        <p className="font-[Outfit]">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className="flex justify-start flex-col mt-4">
          <h3>Preparation time : </h3>
          <ol className="list-disc list-inside pl-3">
            <li>
              <b>Total: </b>
              Approximately 10 minutes
            </li>
            <li>
              <b>Preparation: </b>5 minutes
            </li>
            <li>
              <b>Total: </b>
              Cooking minutes
            </li>
          </ol>
        </div>

        <section className="flex justify-start flex-col mt-4">
          <h2>Ingredietnts</h2>
          <ol className="list-disc list-inside pl-3">
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

      <hr />

      <section className="card-content">
        <h2>Instructions</h2>
        <ol className="list-decimal list-inside pl-1 mt-3">
          <li>
            <strong>Beat the eggs: </strong> In a bowl, beat the eggs with a
            pinch of salt and pepper until they are well mixed. You can add a
            tablespoon of water or mik tor a fluttier texture.
          </li>
          <li>
            <strong>Heat the pan: </strong> Place a non-stick tryina pan over
            medium neat and bread butter or oil.
          </li>
          <li>
            <strong>Cook the omelette : </strong>Once the buttor is melted and
            bubbing, pour an the eggs tethe pan to ensure the eggs eventy coat
            the surtace.
          </li>
          <li>
            <strong>Add fillings (optional): </strong>When the eggs begin to set
            at the edges but are still slightly rumy in the modie, sornkie your
            chosen Wings over one neit or the omelette.
          </li>
          <li>
            <strong>Fold and Serve: </strong>As the omelatte continues to cook,
            carefully utt one edge and toid it over the hrings. Let it cook for
            another minute, then side it onto a plate.
          </li>
          <li>
            <strong>Add fillings (optional): </strong>As the omelatte continues
            to cook, carefully utt one edge and toid it over the hrings. Let it
            cook for another minute, then side it onto a plate.
          </li>
        </ol>
      </section>

      <hr />

      <section className="card-footer">
        <h2>Nutrition</h2>
        <p>
          This table below shows nutritional values per serving without the
          additional fillings.
        </p>

        <ul className="mt-2">
          <li className="flex align-middle">
            <strong>Calories:</strong> 277kcal
          </li>
          <hr className="mt-2" />
          <li className="flex flex-row ">
            <strong className="col-span-4">Carbs:</strong>
            <strong className="col-span-6">0g</strong>
          </li>
          <hr className="mt-2" />
          <li className="flex align-middle">
            <strong>Protein:</strong> 20g
          </li>
          <hr className="mt-2" />
          <li className="flex align-middle">
            <strong>Fats:</strong> 22g
          </li>
        </ul>
      </section>
    </div>
  );
};

export default RecipeCard;
