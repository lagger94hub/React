import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { pizzaContext } from "./PizzaContext";
import { motion } from "framer-motion";
import { homeAnimations } from "./animations";



const Home = () => {

  const pizzaData = useContext(pizzaContext)
  const setPizza = pizzaData.setPizza;

  useEffect(() => {
    setPizza(() => {
      return { type: "", toppings: [] }
    })
  }, [setPizza])

  return (


    <div className="main-container flex-col fjust-center falign-center">


      <motion.div 
        variants={homeAnimations}
        initial="initial"
        animate="final"
        exit="exit"
        className="details flex-col gap-16p falign-center"
      >
          <p className="welcome">
            Welcome to our Pizza shop !!
          </p>

          <Link to='/base'>
            <motion.button
              variants={homeAnimations}
              whileHover="hover"
              className="create-btn btn-s"
            >Press to start ordering</motion.button>
          </Link>

      </motion.div>
    </div>

  );
}

export default Home;