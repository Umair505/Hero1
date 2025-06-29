import React from "react";
import { motion } from "motion/react";
import team1 from '../../assets/img/team1.jpg'
import team2 from '../../assets/img/team2.jpg'
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            Latest{" "}
            <motion.span
              animate={{
                color: ["#ff5733", "#33ff33", "#8a33ff"],
                transition: { duration: 2, repeat: Infinity },
              }}
            >
              Jobs
            </motion.span>
            For You
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>

        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{y: [0, 60, 0]}}
            transition={{ duration:5, repeat: Infinity }}
            className="max-w-sm rounded-t-[40px] border-s-8 border-blue-500  border-b-8 rounded-br-[40px] shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{x: [100, 150, 100]}}
            transition={{ duration:5, repeat: Infinity }}
            className="max-w-sm rounded-t-[40px] border-s-8 border-blue-500  border-b-8 rounded-br-[40px] shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
