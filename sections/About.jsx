"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-secondary-white text-center"
      >
        {" "}
        <span className="font-extrabold text-white">The metaverse</span> is
        poised to become the future's defining digital frontier, reshaping how
        we live, work, and connect.
        <span className="font-extrabold text-white">
          With its immersive
        </span>{" "}
        virtual environments and shared experiences, it promises to transcend
        the boundaries of the physical world. As technology advances, the
        metaverse is set to offer endless opportunities for creativity,
        collaboration, and{" "}
        <span className="font-extrabold text-white"> innovation.</span> From
        virtual offices to social gatherings, it's paving the way for a new era
        of interconnectedness.
      </motion.p>

      <motion.img variants={fadeIn("up", "tween", 0.3, 1)} src="/arrow-down.svg" alt="arrow down" className="w-[18px] h-[28px] object-contain mt-[28px]" />
    </motion.div>
   
  </section>
);

export default About;
