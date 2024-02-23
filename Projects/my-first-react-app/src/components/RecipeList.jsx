import { recipes } from "../data";
import {Fragment} from "react";
import { Recipe } from "./RecipeList2";

export default function RecipeList() {

    const recipeList = recipes.map((r)=>{
        return (
            <Fragment key={r.id}>
                <h2>{r.name}</h2>
                <ul>
                    {r.ingredients.map((i)=><li key={i}>{i}</li>)}
                </ul>
            </Fragment>
        );
    })

    return (
      <div>
        <h1>Recipes</h1>
        {recipeList}
      </div>
    );
  }
  