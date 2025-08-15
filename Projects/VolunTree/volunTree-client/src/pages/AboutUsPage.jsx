import React from "react";
import { motion } from "framer-motion";
import TypingText from "./TypingText";
import ResponsiveUserAvatars from "./ResponsiveUserAvatars";
import Team from "./Team";
import CreatorSection from "./CreatorSection";
import CountUp from "react-countup";
import { Link } from "react-router";

const AboutUsPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#f5fcf4] to-[#e0f3e8]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.postimg.cc/wT3QBnXJ/a-digital-illustration-of-a-flowing-abst-9-Jj-S342-VSq-Gh6t-ODRJCT1g-c64-Lzr-Sv-RKODHMayd-UH3-Tw.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <TypingText
              words={[
                "Serving With Faith",
                "Building Community",
                "Inspired By Islam",
                "Volunteering With Purpose",
              ]}
              typingSpeed={100}
              className="text-4xl md:text-6xl font-bold text-emerald-800 mb-6"
            />
            <p className="text-xl md:text-2xl text-emerald-700 max-w-3xl mx-auto">
              "The believer's shade on the Day of Resurrection will be his
              charity."
              <span className="block mt-2 text-emerald-600">(Al-Tirmidhi)</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-emerald-100"
            >
              <h3 className="text-2xl font-semibold text-emerald-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To create a platform where people can serve with purpose, guided
                by values of kindness, generosity, and service to humanity
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-emerald-100"
            >
              <h3 className="text-2xl font-semibold text-emerald-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                A global ummah united in service, where every act of kindness is
                an act of worship, and every volunteer finds spiritual
                fulfillment through helping others.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-emerald-100"
            >
              <h3 className="text-2xl font-semibold text-emerald-800 mb-4">
                Our Values
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Ikhlas (Sincerity)</li>
                <li>• Rahma (Compassion)</li>
                <li>• Itqan (Excellence)</li>
                <li>• Ta'awun (Cooperation)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                src="https://i.postimg.cc/xdnf638j/photo-1568602471122-7832951cc4c5.jpg"
                alt="Community Service"
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-emerald-800 mb-6">
                From Humble Beginnings
              </h3>
              <p className="text-gray-700 mb-4">
                Founded in 2015 by a small group of volunteers in a local
                masjid, our platform began as a simple WhatsApp group connecting
                those in need with those who could help.
              </p>
              <p className="text-gray-700 mb-4">
                Inspired by the hadith "The best of people are those that bring
                most benefit to the rest of mankind," we grew organically as
                more volunteers sought meaningful ways to serve their
                communities.
              </p>
              <p className="text-gray-700">
                Today, we're a global network of over 50,000 volunteers across
                15 countries, but our core mission remains the same: to make
                charity and service easy, accessible, and spiritually rewarding.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              "Whoever relieves a believer's distress, Allah will relieve his
              distress on the Day of Resurrection"
              <span className="block mt-2 text-emerald-600">
                (Sahih Muslim)
              </span>
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(5, 127, 104, 0.15)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-emerald-100 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-3">
                  <CountUp
                    end={10000}
                    duration={2.5}
                    separator=","
                    prefix="+"
                    scrollSpyOnce
                    scrollSpyDelay={200}
                  />
                </div>
                <div className="text-gray-600 font-medium text-lg">
                  Volunteer Projects
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.1 },
                  },
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(5, 127, 104, 0.15)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-emerald-100 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-3">
                  <CountUp
                    end={500000}
                    duration={3}
                    separator=","
                    prefix="+"
                    scrollSpyOnce
                    scrollSpyDelay={300}
                  />
                </div>
                <div className="text-gray-600 font-medium text-lg">
                  People Helped
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.2 },
                  },
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(5, 127, 104, 0.15)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-emerald-100 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-3">
                  <CountUp
                    end={50}
                    duration={1.5}
                    separator=","
                    prefix="+"
                    scrollSpyOnce
                    scrollSpyDelay={400}
                  />
                </div>
                <div className="text-gray-600 font-medium text-lg">
                  Countries
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.3 },
                  },
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(5, 127, 104, 0.15)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-emerald-100 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-3">
                  24/7
                </div>
                <div className="text-gray-600 font-medium text-lg">
                  Service Available
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ResponsiveUserAvatars />

          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-emerald-800 mb-6">
                A Global Volunteer Community
              </h3>
              <p className="text-gray-700 mb-4">
                Our volunteers come from all walks of life, united by their
                faith and desire to serve. From students to professionals, young
                and old, we believe everyone has something valuable to
                contribute.
              </p>
              <p className="text-gray-700">
                The Prophet Muhammad (ﷺ) said: "The believers in their mutual
                kindness, compassion and sympathy are just like one body. When
                one of the limbs suffers, the whole body responds to it with
                wakefulness and fever."
              </p>
            </motion.div>
            <div>
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                src="https://i.postimg.cc/cHGCYttw/Community.jpg"
                alt="Diverse Community"
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <Team />
      </section>

      {/* Creator Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <CreatorSection />
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of volunteers serving their communities as an act of
            worship
          </p>
          <Link to="/volunteer-post">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-emerald-800 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg"
          >
            Become a Volunteer Today
          </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
