import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HAboutus() {
  const [ref, inView] = useInView({
    threshold: 0.2, 
  });

  const [refs,inViews] = useInView ({

    threshold: 0.2,

  })

  return (
   <>
   
   <section className="py-20 ">
   <div className="absolute -z-10 h-[50vh] w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

  <div className="container items-center max-w-6xl x-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16" >

    <div className="flex flex-wrap items-center -mx-3">
      <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
       
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
          Crafting Experiences: Services That Spin a Narrative
          </h2>
         
          <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
          "At Arkan, we specialize in bringing your innovative dreams to digital life. Our experienced team is dedicated to crafting custom software solutions that turn your vision into a successful reality.
          </p>

          <span className="f-center float-right">
          <span className="block w-14 mb-2 border-b-2 border-gray-600" />
        </span>
          <ul ref={refs} >
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              <svg
                className="w-8 md:w-[61px] h-8 text-pink-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
              <motion.span 
              
              initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
              animate={{ opacity: inViews ? 1 : 0, y: inViews ? 0 : 50, filter: inViews ? 'blur(0px)' : 'blur(5px)' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}


              className="font-medium text-gray-500 md:text-[14px]">
              We're the fastest development solutions provider, committed to your success with rapid processing
              </motion.span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              <svg
                className="w-8 h-8 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
              <motion.span className="font-medium text-gray-500 md:text-[14px]"
              
              initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
              animate={{ opacity: inViews ? 1 : 0, y: inViews ? 0 : 50, filter: inViews ? 'blur(0px)' : 'blur(5px)' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                Out of the Box Tracking and Monitoring
              </motion.span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <motion.span
               initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
               animate={{ opacity: inViews ? 1 : 0, y: inViews ? 0 : 50, filter: inViews ? 'blur(0px)' : 'blur(5px)' }}
               transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
              className="font-medium text-gray-500 md:text-[14px]">
              Unwavering Assurance and Robust Safeguarding for Your  Application
              </motion.span>
            </li>
          </ul>
        </div>
      </div>
      <motion.div
      
      initial={{
        transform: 'translateX(50px)',
        opacity: 0,
      }}
      animate={{
        transform: inViews ? 'translateX(0)' : 'translateX(50px)',
        opacity: inViews ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: [0.39, 0.575, 0.565, 1],
      }}
      className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
        <img
          className="mx-auto sm:max-w-sm lg:max-w-full"
          src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
          alt="feature image"
        />
      </motion.div>
    </div>
  </div>
  {/* grid sction  */}
  <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left" ref={ref}>
  <motion.div className="relative"
      initial={{ opacity: 0, x: -100 }} // Initial opacity and position (left of the viewport)
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : -100, // Animate from -100px (left) to 0px (center)
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <div className="absolute -inset-1">
      <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
    </div>
    <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full " >
     
      <motion.div className="p-9"
     >
        {/* <svg
          className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 8L20 8"
            stroke="#111827"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M4 16L14 16"
            stroke="#111827"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <ellipse
            cx={7}
            cy={8}
            rx={3}
            ry={3}
            transform="rotate(90 7 8)"
            stroke="#111827"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <ellipse
            cx={17}
            cy={16}
            rx={3}
            ry={3}
            transform="rotate(90 17 16)"
            stroke="#111827"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg> */}

<img
  // width={64}
  // height={64}
  className='h-[5.5rem]'
  src="https://i.pinimg.com/originals/49/84/c0/4984c0ac41b13002de2873e622efa63c.gif"
  alt="external-Teamwork-software-development-icongeek26-glyph-icongeek26"
/>



        <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
        Dynamic Teamwork
        </h3>
        <p className="mt-6 text-base text-gray-600">
        "Remote talent collaboration is made seamless with our platform, allowing you to collaborate in real-time with other editors on a project. See the changes your fellow editors are making and effortlessly work on even a simple text together, fostering productive and efficient teamwork from anywhere in the world."
        </p>
      </motion.div>


    </div>
  </motion.div>
  <motion.div 
  
  initial={{ opacity: 0, x: -100 }} // Initial opacity and position (left of the viewport)
  animate={{
    opacity: inView ? 1 : 0,
    x: inView ? 0 : -100, // Animate from -100px (left) to 0px (center)
  }}
  transition={{ duration: 0.9, ease: 'easeOut' }}
  className="overflow-hidden bg-white shadow-md rounded-xl ">
    <div className="p-9">
      <img src="https://i.pinimg.com/originals/00/6b/27/006b2787627b0b67bb91d9716d6e5058.gif" className='h-[5.5rem] rounded-md' alt="" />



      <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
        Build Your Project
      </h3>
      <p className="mt-6 text-base text-gray-600">
      "Focusing on professional development, fine-tuned code, and comprehensive SEO, your project will not only be technically sound but also excel in terms of online visibility and user engagement. This comprehensive approach ensures that your digital presence is optimized for success"
      </p>
    </div>
  </motion.div>
  <motion.div className="relative"
      initial={{ opacity: 0, x: -100 }} // Initial opacity and position (left of the viewport)
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : -100, // Animate from -100px (left) to 0px (center)
      }}
      transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}

  >
    <div className="absolute -inset-1">
      <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
    </div>
    <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
      <div className="p-9">
      <img
  // width={64}
  // height={64}
  className='h-[5.5rem]'
  src="https://i.pinimg.com/originals/c6/34/78/c634786383032dc04dfb30d835cf8650.gif"
  alt="external-Teamwork-software-development-icongeek26-glyph-icongeek26"
/>

        <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
          Integrations
        </h3>
        <p className="mt-6 text-base text-gray-600">
      "  Our integration strategy employs REST and GraphQL protocols for custom API development, with ETL processes for data integration. We prioritize OAuth2.0 and OpenID Connect for secure authentication and authorization. Embracing a microservices architecture allows for scalable components, and we utilize Webhooks to enhance real-time data notifications."
        </p>
      </div>
    </div>
  </motion.div>

</div>
{/* grrid section  */}
</section>

   </>
  )
}
