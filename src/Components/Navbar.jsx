
import { Link } from "react-router-dom"
// import navlogo from "../assets/navlogo.png"
// Link
export default function Navbar() {
  return (
 <>
   <nav className=" w-full absolute z-10 bg-white sticky top-0">
    <div className="container m-auto px-6 md:px-12 lg:px-7">
      <div className="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0 relative">
        <input
          type="checkbox"
          name="toggle_nav"
          id="toggle_nav"
          className="peer hidden"
        />
        <div className="w-full flex justify-between md:w-max md:px-0">
          <Link to="/" aria-label="logo">
            {/* <img
              src={navlogo}
              className="w-[5rem] grayscale "
              alt="Arkan logo"
              width={144}
              height={68}
            /> */}
<p className="font-bold text-[30px] relative ml-5">

أركان

</p>

          </Link>
          <div className="flex items-center md:hidden max-h-10">
            <label
              role="button"
              htmlFor="toggle_nav"
              aria-label="humburger"
              id="hamburger"
              className="relative z-40 px-2 py-3 sm:-mr-6"
            >
              <div
                id="line"
                className="m-auto h-0.5 w-6 rounded bg-sky-900 shark:bg-gray-300 transition duration-300"
              />
              <div
                id="line2"
                className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 shark:bg-gray-300 transition duration-300"
              ></div>
            </label>
          </div>
        </div>
        <label
          role="button"
          htmlFor="toggle_nav"
          className="fixed w-full z-30 h-full top-0 left-0 bg-gray-700 bg-opacity-40 hidden peer-checked:block md:peer-checked:hidden"
        />
        <div
          className="flex z-50 flex-col md:flex-row justify-between 
              items-center gap-y-4 p-6 bg-white shark:bg-gray-800 md:w-8/12 
              md:gap-y-4 md:p-0 
              md:bg-transparent lg:w-7/12 fixed top-0 -left-full transition-all duration-500 peer-checked:left-0 max-w-sm h-full 
              md:left-0 md:h-auto w-4/5 md:max-w-none md:relative lg:first-letter:top-0"
        >
          <div className="flex md:hidden w-full pb-5">
            <a href="#" aria-label="logo">
              {/* <img
                src={navlogo}
                className="w-36 grayscale contrast-200"
                alt="Arkan logo"
                width={144}
                height={68}
              /> */}
            </a>
          </div>
          <div className="block w-full h-full md:h-auto">
            <ul className="space-y-8 tracking-wide font-medium md:flex md:space-y-0">
              <li>
                <Link to="/" className="block md:px-3">
                  <div
                    className="relative text-yellow-800 shark:text-yellow-300
                                              before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left shark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800"
                  >
                    <span >Home</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/ourwork" className="block md:px-3 group">
                  <div
                    className="relative text-gray-600
                                              before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left shark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                  >
                    <span className="transition group-hover:text-yellow-700 shark:text-gray-300 shark:group-hover:text-yellow-300">
                      Our work
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="block md:px-3 group">
                  <div
                    className="relative text-gray-600
                                              before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left shark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                  >
                    <span className="transition group-hover:text-yellow-700 shark:text-gray-300 shark:group-hover:text-yellow-300">
                      About us
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full gap-y-4 md:w-max md:gap-y-0 md:gap-x-4 flex md:flex-row flex-col">
           
            <button
              type="button"
              title="Start buying"
              className="w-full py-3 px-6 text-center transition shark:bg-gray-700 bg-gray-900 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 md:w-max"
            >
              <span className="block text-white font-semibold">lets talk</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
 </>
  )
}
