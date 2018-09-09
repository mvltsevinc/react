import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients) // Bu key metotu objeyi key degerine gore diziye ayristirir.Yani keyleri dizi olarak return eder.
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // [bos,bos] mesala miktari 2 olan icin 2 elemanlı degerleri bos olan bir dizi doner.Degerleri onemli degil miktar onemli bizim icin su an
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
