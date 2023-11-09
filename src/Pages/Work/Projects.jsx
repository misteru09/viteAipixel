import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import ProjectScreens from "./ProjectScreens";
// import Seed from "./ProjectScreens/Seed";
// import Ino from "./ProjectScreens/Ino";
// import Dtech from "./ProjectScreens/Dtech";
// import Bucephalus from "./ProjectScreens/Bucephalus";
import LetsConnect from "./LetsConnect";

export default function Projects() {
  // const [ref, inView] = useInView({
  //   threshold: 0.2,
  // });
  // const [refs, inViews] = useInView({
  //   threshold: 0.2,
  // });
  return (
    <>
      <div className="py-5">
        {/* <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
          <p className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-md text-center my-4">
            " Project Pinnacle, Client Leadership, Exceeding Standards "
          </p>
          <h2 className="max-w-2xl mt-3 text-[19px] font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-[19px] dak:text-white">
            Empowering Clients Globally with thier Products, Meticulously
            Crafted and Developed by Arkan
          </h2>
        </div> */}
        <div className="container md:max-w-[77rem]  p-6 mx-auto mb-10 xl:px-0">
          <div className=" gap-10 grid grid-cols-2 ">
            <motion.div
              // initial={{ opacity: 1, x: -100 }} // Initial opacity and position (left of the viewport)
              // animate={{
              //   opacity: inView ? 1 : 0,
              //   x: inView ? 0 : -100, // Animate from -100px (left) to 0px (center)
              // }}
              // transition={{ duration: 0.5, ease: "easeOut" }}

              className="col-span-1"
            >
              <div className="flex flex-col justify-between w-full h-full bg-[#dee0ff] shark:bg-gray-800 rounded-2xl shark:bg-trueGray-800">
                <div className="flex flex-row  justify-around md:gap-[65%] lg:gap-[65%] py-2">
                  <span className="font-bold text-gray-900 sm:tracking-tight ">
                    01
                  </span>
                  <span className="font-bold text-gray-900 sm:tracking-tight ">
                    show case
                  </span>
                </div>

                <div className="px-6 py-6 md:py-14 md:px-14 ">
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <p className="text-5xl font-extrabold text-gray-900">
                        SEED
                      </p>
                      <h2 className="max-w-2xl mt-3 text-[19px] font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-[19px] dak:text-white">
                        Empowering Clients Globally with <br /> thier Products,
                        Meticulously
                      </h2>
                    </div>

                    {/* <div className="lg:flex flex w-5/12 p-2">
        <img src="https://source.unsplash.com/1600x900/?nature,water" className="rounded-xl object-cover w-full h-full"/>
    </div> */}
                  </div>

                  <div className="flex items-center mt-8 space-x-3 gap-[73%]">
                    <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                      <img
                        alt="Avatar"
                        src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.108661869.1699120606&semt=sph"
                        loading="lazy"
                      />
                    </div>
                   
                  </div>
                </div>
              </div>
            </motion.div>
            {/* <Seed /> */}

            <motion.div
              // initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
              // animate={{
              //   opacity: inView ? 1 : 0,
              //   y: inView ? 0 : 50,
              //   filter: inView ? "blur(0px)" : "blur(5px)",
              // }}
              // transition={{ duration: 0.4, delay:0.2  ,ease: "easeOut" }}

              className="col-span-1"
            >
              <div className="flex flex-col justify-between w-full h-full bg-yellow-300 shark:bg-gray-800  rounded-2xl  shark:bg-trueGray-800">
                <div className="flex flex-row  justify-around md:gap-[65%] lg:gap-[65%] py-2">
                  <span className="font-bold text-gray-900 sm:tracking-tight ">
                    02
                  </span>
                  <span className="font-bold text-gray-900 sm:tracking-tight ">
                    show case
                  </span>
                </div>

                <div className="md:py-14  px-6 py-6 md:px-14">
                  <div className="flex flex-col">
                    <p className="text-5xl font-extrabold text-gray-900">
                      E-INO
                    </p>

                    <h2 className="max-w-2xl mt-3 text-[19px] font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-[19px] dak:text-white">
                      Empowering Clients Globally with <br /> thier Products,
                      Meticulously
                    </h2>
                  </div>

                  <div className="flex items-center mt-8 space-x-3 gap-[73%]">
                    <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                      <img
                        alt="Avatar"
                        src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.108661869.1699120606&semt=sph"
                        loading="lazy"
                      />
                    </div>
                    <div>
                   
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* <Ino /> */}

            <motion.div
              // initial={{ opacity: 0, x: -100 }} // Initial opacity and position (left of the viewport)
              // animate={{
              //   opacity: inView ? 1 : 0,
              //   x: inView ? 0 : -100, // Animate from -100px (left) to 0px (center)
              // }}
              // transition={{ duration: 0.5, ease: "easeOut" }}

              className="col-span-1"
            >
              <div className="flex flex-col justify-between w-full h-full bg-[#dee0ff] shark:bg-gray-800 rounded-2xl shark:bg-trueGray-800">
                <div className="flex flex-row  justify-around md:gap-[65%] lg:gap-[65%] py-2">
                  <span className="font-bold text-gray-900 sm:tracking-tight ">
                    01
                  </span>
                  <span className="font-bold text-gray-900 sm:tracking-tight ">
                    show case
                  </span>
                </div>

                <div className="px-6 py-6 md:py-14 md:px-14 ">
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <p className="text-5xl font-extrabold text-gray-900">
                        DTECH{" "}
                      </p>
                      <h2 className="max-w-2xl mt-3 text-[19px] font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-[19px] dak:text-white">
                      Elevating Dubai's professional networking game. Connecting experts, fostering opportunities, and powering success in the heart of the business world.
                      </h2>
                    </div>

                    {/* <div className="lg:flex flex w-5/12 p-2">
        <img src="https://source.unsplash.com/1600x900/?nature,water" className="rounded-xl object-cover w-full h-full"/>
    </div> */}
                  </div>

                  <div className="flex items-center mt-8 space-x-3 gap-[73%]">
                    <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                      <img
                        alt="Avatar"
                        src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.108661869.1699120606&semt=sph"
                        loading="lazy"
                      />
                    </div>
                   
                  </div>
                </div>
              </div>
            </motion.div>

            {/* <Dtech /> */}

            <motion.div
              // initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
              // animate={{
              //   opacity: inView ? 1 : 0,
              //   y: inView ? 0 : 50,
              //   filter: inView ? "blur(0px)" : "blur(5px)",
              // }}
              // transition={{ duration: 0.4, delay:0.2  ,ease: "easeOut" }}

              className="col-span-1"
            >
              <div className="flex flex-col justify-between w-full h-full bg-yellow-300 shark:bg-gray-800  rounded-2xl  shark:bg-trueGray-800">
                <div className="flex flex-row  justify-around md:gap-[65%] lg:gap-[65%] py-2">
                  <span className="font-bold text-gray-900 sm:tracking-tight ">
                    02
                  </span>
                  <span className="font-bold text-gray-900 sm:tracking-tight ">
                    show case
                  </span>
                </div>

                <div className="md:py-14  px-6 py-6 md:px-14">
                  <div className="flex flex-col">
                    <p className="text-5xl font-extrabold text-gray-900">
                      Bucephalus NUmesmatic
                    </p>

                    <h2 className="max-w-2xl mt-3 text-[19px] font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-[19px] dak:text-white">
                     Auction based platform for releated ancient Crafted products and coins
                    </h2>
                  </div>

                  <div className="flex items-center mt-8 space-x-3 gap-[73%]">
                    <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                      <img
                        alt="Avatar"
                        src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.108661869.1699120606&semt=sph"
                        loading="lazy"
                      />
                    </div>
                    <div>
                   
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* <Bucephalus /> */}

            <motion.div
              //  initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
              //  animate={{
              //    opacity: inView ? 1 : 0,
              //    y: inView ? 0 : 50,
              //    filter: inView ? "blur(0px)" : "blur(5px)",
              //  }}
              //  transition={{ duration: 0.4, ease: "easeOut" }}
              className="col-span-2"
            >
              <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-orange-400 shark:bg-gray-800 md:px-14 rounded-2xl md:py-14 shark:bg-trueGray-800">
                <div className="flex flex-col">
                  <p className="text-5xl font-extrabold text-gray-900">
                    Adventures Club
                  </p>

                  <h2 className="max-w-2xl mt-4 text-[19px] font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-[19px] dak:text-white">
                  Your passport to thrilling experiences on the enchanting island of Ioman. Discover, explore, and embrace the magic of Ioman with us.
                  </h2>
                </div>

                <div className="flex items-center mt-8 space-x-3 gap-[87%]">
                  <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                    <img
                      alt="Avatar"
                      src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.108661869.1699120606&semt=sph"
                      loading="lazy"
                    />
                  </div>
                  <div>
                 
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="px-4">
        <LetsConnect />
      </div>
    </>
  );
}
