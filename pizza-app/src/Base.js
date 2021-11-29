import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { pizzaContext } from "./PizzaContext";
import { motion } from "framer-motion";
import { baseAnimations } from "./animations";



const Base = () => {
  const [base, setBase] = useState([
    { name: "Classic", selected: false },
    { name: "Crispy", selected: false },
    { name: "Thick and Crust", selected: false }
  ])

  const pizzaData = useContext(pizzaContext);
  const pizza = pizzaData.pizza;
  const setPizza = pizzaData.setPizza;

  useEffect(() => {
    setPizza(() => {
      return { type: "", toppings: [] }
    })
  }, [setPizza])

  const addPizza = (oldPizza, newType) => {
    return { ...oldPizza, type: newType }
  }
  const removePizzaType = (oldPizza) => {
    return { ...oldPizza, type: "" }
  }

  const clicked = (e) => {
    setBase(() => {
      return base.map((value) => {
        return (value.name === e.target.innerText ? { ...value, selected: !value.selected } : { ...value, selected: (value.selected ? false : false) })
      })
    });
    if (e.target.innerText === pizza.type) {
      setPizza(removePizzaType(pizza));
    }
    else {
      setPizza(addPizza(pizza, e.target.innerText));
    }
  }
  return (
    <>
      <div className="main-container flex-col fjust-center falign-center">
          <motion.div
            variants={baseAnimations}
            initial="initial"
            animate="final"
            exit="exit"
            className="details flex-col gap-16p falign-center">


              <p className="step">Step:1 select your base</p>
              <div className="base-list flex-col gap-16p falign-center">

                {base.map((value, index) => {
                  return (
                    <p key={index} className={value.selected ? 'base-item selected' : 'base-item '} onClick={(event) => clicked(event)}>{value.name}</p>
                  )
                })}

              </div>



            {pizza.type &&
              <Link to='/toppings'>
                <motion.button
                  variants={baseAnimations}
                  initial="initial"
                  animate="final"
                  whileHover="hover" className="btn-s">Next</motion.button>
              </Link>}
          </motion.div>

      </div>
    </>
  );
}

export default Base