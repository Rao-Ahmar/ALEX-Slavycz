import { motion } from "framer-motion";
import React from "react";

interface Props {
  URL: string;
}

const IMG: React.FC<Props> = ({ URL }: Props) => {
  return (
    <motion.img
      key={URL}
      initial={{ opacity: 0.8, scale: 1.03 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0.8, scale: 1.03 }}
      src={URL}
      // transition={{
      //   duration: 0.4,
      //   ease: "easeInOut",
      // }}
    />
  );
};

export default IMG;
