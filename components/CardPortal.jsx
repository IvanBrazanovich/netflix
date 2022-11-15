import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const CardPortal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.querySelector("#cardportal"))
    : null;
};

export default CardPortal;
