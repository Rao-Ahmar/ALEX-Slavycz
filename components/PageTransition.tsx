import { motion } from "framer-motion";

const PageTransition = () => {
  const inVariants = {
    initial: { bottom: 0, height: 0 },
    animate: { bottom: 0, height: 0 },
    exit: { bottom: 0, height: "100vh" },
  };

  const outVariants = {
    initial: { top: 0, height: "100vh" },
    animate: { top: 0, height: "100vh", opacity: 0 },
    exit: { top: 0, height: 0 },
  };

  return (
    <>
      {/* <motion.div
        className="fixed w-screen pointer-events-none bottom-0 z-[8] bg-OffWhite"
        key="page-transition-in"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={inVariants}
        transition={{ type: "tween", duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      /> */}
      <motion.div
        className="fixed w-screen pointer-events-none top-0 z-[8] bg-OffWhite md:block hidden"
        key="page-transition-out"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={outVariants}
        transition={{ type: "tween", duration: 1, delay: 0.2 }}
      />
    </>
  );
};

// const S_PageTransition = styled.div``;

// const Mask = styled.div`
//   position: fixed;
//   width: 100%;
//   background-color: ${(p) => p.theme.colors.cream};
//   z-index: ${(p) => p.theme.zindex[8]};
//   pointer-events: none;
// `;

// const InMask = styled(Mask)`
//   bottom: 0;
// `;

// const OutMask = styled(Mask)`
//   top: 0;
// `;

export default PageTransition;
