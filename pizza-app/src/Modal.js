import { modalAnimations } from "./animations";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";


const Modal = ({showModal, setShowModal}) => {
  return (
    <>
    <AnimatePresence exitBeforeEnter>
    { showModal &&
        <motion.div 
        variants={modalAnimations}
        exit="exit"
        className="modal-container flex-col  falign-center">
          <motion.div
            variants={modalAnimations}
            initial="initial"
            animate="final"
            className="modal-info flex-col jalign-center gap-16p">
            <p>Press the button to order again !!</p>
            <Link to="/">
              <motion.button
                variants={modalAnimations}
                whileHover="hover"
                className="btn-s"
                onClick={() => setShowModal(false)}>Order Again !!</motion.button>
            </Link>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>

    </>

  );
}
export default Modal;
