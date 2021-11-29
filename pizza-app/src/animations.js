// Here we create the rendering animations for our pages 

const infiniteHover = {
  scale: 1.1,
  backgroundColor: "#f3e295",
  color: "#000000",
  cursor: "pointer",
  transition: {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 0.9,
    repeatDelay: 0.3
  }
}

//home page animations

const homeAnimations = {

  initial: {
    opacity: 0
  },
  final: {

    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5
    }
  },
  hover: infiniteHover,
  exit: {
    x: "-100vw",
    transition: {
      duration: 1
    }
  }

}

//base page animations

const baseAnimations = {
  initial: {
    x: '100vw'
  },
  final: {
    x: 0,
    transition: { duration: 1, type: 'spring', stiffness: 50 }
  },
  hover: infiniteHover,
  exit: {
    x: "-100vw",
    transition: {
    duration: 1
    }
  }


}

//base toppings animations

const toppingsAnimations = {
  initial: {
    x: '100vw'
  },
  final: {
    x: 0,
    transition: { duration: 1, type: 'spring', stiffness: 50 }
  },
  hover: infiniteHover,
  exit: {
    x: "-100vw",
    transition: {
    duration: 1
    }
  }

}

//done page animations

const doneAnimations = {

  parent: {

    initial: {
      x: '100vw'
    },
    final: {
      x: 0,
      transition: {
        duration: 1,
        type: 'spring',
        stiffness: 50,
        dumping: 8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  },
  children: {
    initial: {
      opacity: 0
    },
    final: {
      opacity: 1,
      transition: { duration: 0.2 }
    },
  }
}
const modalAnimations = {
  
  initial: {y: -150},
  final: {y: 0}, 
  transition: { duration: 0.5, type: 'spring', stiffness: 200 },
  hover: infiniteHover,
  exit: {
    x: "100vw",
    transition: { duration: 3, type: 'spring', stiffness: 75, dumping: 2 }
  }

}



export { homeAnimations, baseAnimations, toppingsAnimations, doneAnimations, modalAnimations };