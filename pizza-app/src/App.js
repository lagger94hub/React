import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Base from "./Base";
import Toppings from "./Toppings";
import Done from "./Done";
import Modal from "./Modal";
import PizzaContext from "./PizzaContext";
import { AnimatePresence } from "framer-motion";
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  return (

    <PizzaContext>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/base' element={<Base />}></Route>
          <Route path='/toppings' element={<Toppings />}> </Route>
          <Route path='/done' element={<Done modalData={{ showModal, setShowModal }} />}> </Route>
        </Routes>
      </AnimatePresence>

    </PizzaContext>
  );
}


export default App;
