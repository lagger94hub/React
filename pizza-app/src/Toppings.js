import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { pizzaContext } from "./PizzaContext";
import { motion } from "framer-motion";
import { toppingsAnimations } from "./animations";



const Toppings = () => {

  const pizzaData = useContext(pizzaContext)
  const pizza = pizzaData.pizza;
  const setPizza = pizzaData.setPizza;


  useEffect(() => {
    setPizza((oldPizza) => {
      return { ...oldPizza, toppings: [] }
    })
  }, [setPizza])

  const [topList, setTopList] = useState([
    { name: "Mushrooms", selected: false },
    { name: "Peppers", selected: false },
    { name: "Onions", selected: false },
    { name: "Olives", selected: false },
    { name: "Extra Cheese", selected: false },
    { name: "Tomatoes", selected: false },
  ])

  const addToppings = (pizza, topping, eClass) => {

    return { ...pizza, toppings: [...pizza.toppings, topping] }
  }

  const removeToppings = (pizza, topping) => {
    return {
      ...pizza, toppings: pizza.toppings.filter((value) => {
        return (value !== topping)
      })
    }
  }

  const clicked = (event) => {
    if (event.target.className.includes('selected')) {
      setPizza(removeToppings(pizza, event.target.innerHTML))
    }
    else {
      setPizza(addToppings(pizza, event.target.innerHTML, event.target.className))
    }
    setTopList(() => {
      return topList.map((value) => {
        return (value.name === event.target.innerText ? { ...value, selected: !value.selected } : value)
      })
    })
  }
  return (
    <>
      <div className="main-container flex-col fjust-center falign-center">
          <motion.div
            variants={toppingsAnimations}
            initial="initial"
            animate="final"
            exit="exit"
            className="details flex-col gap-16p falign-center"
          >
            <p className="step">Step:2 Choose Toppings</p>
            <div className="base-list flex-col gap-16p falign-center">
              {
                topList.map((value, index) => {
                  return (<p key={index} className={value.selected ? 'base-item selected' : 'base-item'} onClick={(e) => clicked(e)}>{value.name}</p>);
                })
              }

            </div>


            {pizza.toppings.length !== 0 &&


              <Link to='/done'>
                <motion.button
                  variants={toppingsAnimations}
                  initial="initial"
                  animate="final"
                  whileHover="hover"
                  className="btn-s">Order</motion.button>
              </Link>
            }
          </motion.div>

      </div>
    </>
  );
}

export default Toppings;