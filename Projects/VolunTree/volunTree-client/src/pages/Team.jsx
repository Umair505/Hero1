import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const TeamMember = ({ imgSrc, name, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="flex flex-col w-full sm:w-1/2 lg:w-1/3 p-4"
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden h-full border border-emerald-100">
        <div className="relative overflow-hidden rounded-lg aspect-square">
            <img
                src={imgSrc}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold text-emerald-800">{name}</h2>
          <p className="text-emerald-600 font-medium mt-1">{title}</p>
          <p className="text-gray-600 mt-3">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      imgSrc: "https://i.postimg.cc/bwrY3wrN/photo-2025-08-12-23-30-26.jpg",
      name: "Moinul Islam",
      title: "Founder & Director",
      description: "Inspired by Islamic teachings on charity, he started this platform to connect volunteers with meaningful opportunities."
    },
    {
      imgSrc: "https://i.postimg.cc/GmdYyNYq/happy-confident-muslim-business-lady-posing-outside.jpg",
      name: "Amina Khaled",
      title: "Program Coordinator",
      description: "Organizes community initiatives and ensures our projects align with Islamic values of service."
    },
    {
      imgSrc: "https://i.postimg.cc/XYtbhM8g/businessman-dress-code-looks-motivated.jpg",
      name: "Yusuf Abdullah",
      title: "Technology Lead",
      description: "Develops our platform to make volunteering accessible to Muslims worldwide."
    },
    {
      imgSrc: "https://i.postimg.cc/q7ZCWvF5/international-day-education-celebration.jpg",
      name: "Fatima Al-Mansoor",
      title: "Community Outreach",
      description: "Connects with masjids and Islamic centers to expand our network of volunteers."
    },
    {
      imgSrc: "https://i.postimg.cc/q7gNcd7X/medium-shot-young-pastor-holding-bible.jpg",
      name: "Zainab Ibrahim",
      title: "Volunteer Trainer",
      description: "Prepares new volunteers with Islamic etiquette and practical skills for service."
    },
    {
      imgSrc: "https://i.postimg.cc/3N24yCxs/front-view-smiley-business-man.jpg",
      name: "Khalid Hassan",
      title: "Partnerships Manager",
      description: "Builds relationships with Muslim charities and organizations worldwide."
    }
  ];

  return (
    <section className="py-16 px-4 bg-emerald-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">Our Leadership Team</h2>
          <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
            "The best of people are those most beneficial to people"
            <span className="block text-emerald-600">(Al-Jami' as-Saghir)</span>
          </p>
        </motion.div>

        <div className="flex flex-wrap -mx-4 justify-center">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
          >
            <div className="bg-white rounded-xl shadow-md h-full p-8 flex flex-col justify-center items-center text-center border-2 border-dashed border-emerald-300">
              <h3 className="text-xl font-bold text-emerald-800 mb-3">
                Interested in joining our team?
              </h3>
              <p className="text-gray-600 mb-4">
                We're always looking for passionate Muslims to help grow our mission.
              </p>
              <Link to='/create-post'>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Apply Now
              </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;