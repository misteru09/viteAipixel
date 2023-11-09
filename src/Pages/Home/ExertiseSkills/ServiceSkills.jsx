import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ServiceSkills() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const [refs, inViews] = useInView({
    threshold: 0.2,
  });
  return (
    <>
      <div className="py-2">
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <p className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-md text-center my-4">
            " Our Core Expertise"
          </p>

          <div
            className="mx-auto  md:max-w-[72rem] grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3"
            ref={ref}
          >
            {/* 1 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }} // Initial opacity and position (left of the viewport)
              animate={{
                opacity: inView ? 1 : 0,
                x: inView ? 0 : -100, // Animate from -100px (left) to 0px (center)
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="border border-gray-100 shark:border-gray-700 rounded-3xl bg-white shark:bg-gray-800 px-8 pt-12 shadow-2xl shadow-gray-600/10 shark:shadow-none sm:px-12 lg:px-8"
            >
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 shark:text-white">
                  Android Development
                </h3>
                <p className="mb-6 text-gray-600 shark:text-gray-300">
                Arkan's Android development services are tailored to help you create innovative and engaging apps that will reach the world's largest mobile audience. Our team of experienced developers has a deep understanding of the Android platform and is constantly up-to-date on the latest trends and technologies. 
                </p>
                <a href="#" className="block font-medium text-primary">
                  Know more
                </a>
              </div>
              <img
                src="https://i.pinimg.com/originals/40/14/ad/4014ad4a346db7008b5a8eea35c37a62.gif"
                className="ml-auto w-2/3 rounded shad"
                alt="illustration"
                loading="lazy"
                width={900}
                height={600}
              />
            </motion.div>
            {/* 2 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }} // Initial opacity and position (left of the viewport)
              animate={{
                opacity: inView ? 1 : 0,
                x: inView ? 0 : -100, // Animate from -100px (left) to 0px (center)
              }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
              className="border border-gray-100 shark:border-gray-700 rounded-3xl bg-white shark:bg-gray-800 px-8 py-12 shadow-2xl shadow-gray-600/10 shark:shadow-none sm:px-12 lg:px-8"
            >
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 shark:text-white">
                  IOS Development
                </h3>
                <p className="mb-6 text-gray-600 shark:text-gray-300">
                Arkan's iOS development services are designed to help you create cutting-edge apps that leverage the full power of the iOS platform. Our team of expert developers has extensive experience in developing apps for all types of iOS devices, from iPhones and iPads to Apple Watches and AirPods. We work with our clients to create apps that are visually stunning, user-friendly, and feature-rich.
                </p>
                <a href="#" className="block font-medium text-primary">
                  Know more
                </a>
              </div>
              <img
                src="https://i.pinimg.com/originals/d7/57/3b/d7573b3e236d935c3f87f3d5668a4695.gif"
                className="ml-auto w-2/3"
                alt="illustration"
                loading="lazy"
                width={900}
                height={600}
              />
            </motion.div>
            {/* 3 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }} // Initial opacity and position (left of the viewport)
              animate={{
                opacity: inView ? 1 : 0,
                x: inView ? 0 : -100, // Animate from -100px (left) to 0px (center)
              }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="border border-gray-100 shark:border-gray-700 rounded-3xl bg-white shark:bg-gray-800 px-8 py-12 shadow-2xl shadow-gray-600/10 shark:shadow-none sm:px-12 lg:px-8"
            >
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 shark:text-white">
                  Web App Development
                </h3>
                <p className="mb-6 text-gray-600 shark:text-gray-300">
                Arkan's web development services help you create dynamic and engaging websites that will showcase your brand and connect you with your target audience. We offer a wide range of web development services, including custom web design and development, content management system (CMS) development, and e-commerce development. 
                </p>
                <a href="#" className="block font-medium text-primary">
                  Know more
                </a>
              </div>
              <img
                src="https://i.pinimg.com/originals/e6/a9/1c/e6a91cf71ae7ef9c95cf6518852eddb5.gif"
                className="ml-auto w-2/3"
                alt="illustration"
                loading="lazy"
                width={900}
                height={600}
              />
            </motion.div>
            {/*  */}
            {/* 4 */}
          </div>

          <div className="flex flex-row my-4 justify-center gap-4" ref={refs}>
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
              animate={{
                opacity: inViews ? 1 : 0,
                y: inViews ? 0 : 50,
                filter: inViews ? "blur(0px)" : "blur(5px)",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-[30rem] h-max  border border-gray-100 shark:border-gray-700 rounded-3xl bg-white shark:bg-gray-800 px-8 pt-12 shadow-2xl shadow-gray-600/10 shark:shadow-none sm:px-12 lg:px-8"
            >
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 shark:text-white">
                  UI / UX
                </h3>
                <p className="mb-6 text-gray-600 shark:text-gray-300">
                Arkan's UI/UX design services help you create user interfaces that are both visually appealing and easy to use. We understand that the user experience is essential to the success of any app or website, and we work with our clients to develop UI/UX designs that are both visually appealing and functional.                 </p>
                <a href="#" className="block font-medium text-primary">
                  Know more
                </a>
              </div>
              <img
                src="https://i.pinimg.com/originals/32/9b/63/329b63886c58f6f4915b8642f52ec8b3.gif"
                className="ml-auto w-2/3 md:w-[9rem] lg:w-[9rem]  rounded shad"
                alt="illustration"
                loading="lazy"
                width={900}
                height={600}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
              animate={{
                opacity: inViews ? 1 : 0,
                y: inViews ? 0 : 50,
                filter: inViews ? "blur(0px)" : "blur(5px)",
              }}
              transition={{ duration: 0.4, delay:0.2  ,ease: "easeOut" }}
              className=" w-[30rem] h-max border border-gray-100 shark:border-gray-700 rounded-3xl bg-white shark:bg-gray-800 px-8 pt-12 shadow-2xl shadow-gray-600/10 shark:shadow-none sm:px-12 lg:px-8"
            >
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 shark:text-white">
                Custom Software Development
                </h3>
                <p className="mb-6 text-gray-600 shark:text-gray-300">
                Arkan's custom software development services help you create powerful and scalable software solutions that meet your unique business needs. We have a proven track record of developing custom software for a wide range of industries, including healthcare, finance, and retail. 
                </p>
                <a href="#" className="block font-medium text-primary">
                  Know more
                </a>
              </div>
              <img
                src="https://i.pinimg.com/originals/16/9c/11/169c11293f5c08a325ee1bbc8a0d4cb8.gif"
                className="ml-auto w-2/3  md:w-[9rem] lg:w-[9rem] rounded shad"
                alt="illustration"
                loading="lazy"
                width={900}
                height={600}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
