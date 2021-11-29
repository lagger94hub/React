import { createContext, useState } from "react";

export const pizzaContext = createContext();

const PizzaContext = ({children}) => {

  const [pizza, setPizza] = useState({
    type: "",
    toppings: [],
  })

  return (
    <pizzaContext.Provider value={{pizza, setPizza}}>
      {children}
    </pizzaContext.Provider>
  );
}

export default PizzaContext;