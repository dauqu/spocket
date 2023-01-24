import { motion } from "framer-motion";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import Avail_Integration from "./Avail_Integration";
import Center_Section from "./Center_Section";
import Featured_Section from "./Featured_Section";
import MidContent from "./MidContent";
import Top_Content from "./Top_Content";

function Body() {
  return (
    <div className="bg-[white]">
      <Navbar />
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.9, stiffness: 500 }}
      >
        <Top_Content />
        <Featured_Section />
        <MidContent />
        <Center_Section />
        <Avail_Integration />
        {/* <Slider />
        <Counting_Number />
        <OurProjects />
        <Advertise />
        <Client_Slider />
        <LatestNews />
        <Footer /> */}
      </motion.div>
    </div>
  );
}

export default Body;