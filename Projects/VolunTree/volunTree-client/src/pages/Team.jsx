import React from "react";
import { motion } from "framer-motion";

const TeamMember = ({ imgSrc, name, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="flex flex-col w-full sm:w-1/2 lg:w-1/3 p-4"
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden h-full border border-emerald-100">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-64 object-cover"
        />
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
      imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      name: "Abdul Rahman",
      title: "Founder & Director",
      description: "Inspired by Islamic teachings on charity, he started this platform to connect volunteers with meaningful opportunities."
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      name: "Amina Khaled",
      title: "Program Coordinator",
      description: "Organizes community initiatives and ensures our projects align with Islamic values of service."
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
      name: "Yusuf Abdullah",
      title: "Technology Lead",
      description: "Develops our platform to make volunteering accessible to Muslims worldwide."
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      name: "Fatima Al-Mansoor",
      title: "Community Outreach",
      description: "Connects with masjids and Islamic centers to expand our network of volunteers."
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      name: "Zainab Ibrahim",
      title: "Volunteer Trainer",
      description: "Prepares new volunteers with Islamic etiquette and practical skills for service."
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
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
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;