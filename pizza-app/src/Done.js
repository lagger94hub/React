import React from "react";
import { useContext, useEffect } from "react";
import { pizzaContext } from "./PizzaContext";
import { motion } from "framer-motion";
import { doneAnimations } from "./animations";

const parentVariant = doneAnimations.parent;
const childrenVariant = doneAnimations.children;

const Done = ({modalData}) => {

  const pizzaData = useContext(pizzaContext);
  const pizza = pizzaData.pizza;
  const showModal = modalData.showModal;
  const setShowModal = modalData.setShowModal;

  useEffect(() => {
     setTimeout(() => {
      setShowModal(true);
    }, 5000)
    console.log("hello")
  }, [setShowModal]);



  return (
    <>
      <div className="main-container flex-col fjust-center falign-center">
        <motion.div
          variants={parentVariant}
          initial="initial"
          animate="final"
          className="details flex-col gap-16p falign-center"

        >
          <p className="step">Thank You for your order :)</p>

          <div className="base-list flex-col gap-16p falign-center">
            <motion.p
              variants={childrenVariant}
              className="base-item final">You've ordered {pizza.type} pizza with</motion.p>
            <motion.div
              variants={parentVariant}
              className="flex-col falign-center backgrouned"
            >

              {pizza.toppings.length !== 0 && pizza.toppings.map((topping, index) => {
                return <motion.p
                  variants={childrenVariant}
                  key={index} className='base-item normal '>{topping}</motion.p>
              })}
            </motion.div>

          </div>
        </motion.div>
      </div>
    </>
  );

}

export default Done;