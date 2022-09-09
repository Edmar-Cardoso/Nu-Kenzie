import Homepage from "../views/HomePage";
import Landing from "../views/Landing";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const RoutesMain = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/homePage" element={<Homepage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesMain;
