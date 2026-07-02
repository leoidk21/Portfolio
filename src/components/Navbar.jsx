import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/LC-Logo.png";
import logoBlack from "../assets/images/LC-Logo-Black.png";
import closeBtn from "../assets/images/CLOSE-BUTTON.png";
import { motion, AnimatePresence, easeInOut, easeIn } from "framer-motion";

function Navbar() {
   const location = useLocation();
   const isHome = location.pathname === "/home";

   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

   useEffect(() => {
    setIsMenuOpen(false);
   },[location]);

   return (
      <>
         <nav className="flex items-center justify-between p-6 lg:px-8 sticky top-0">
            {isHome ? (
               <>
                  <h1 className="font-neuehaas hidden sm:block lg:text-2xl font-bold tracking-tighter">
                     open for work
                  </h1>
                  <img
                     src={logo}
                     alt="LC Logo"
                     className="w-full max-w-12.5 sm:max-w-12.5 h-auto object-contain"
                  />
                  <h1
                     className="font-neuehaas text-xl sm:text-lg lg:text-2xl font-bold tracking-tighter cursor-pointer"
                     onClick={toggleMenu}
                  >
                     menu
                  </h1>
               </>
            ) : (
               <>
                  <img
                     src={logo}
                     alt="LC Logo"
                     className="max-w-12.5 sm:max-w-12.5 h-auto object-contain"
                  />
                  <h1
                     className="font-neuehaas text-xl sm:text-lg lg:text-2xl font-bold tracking-tighter cursor-pointer"
                     onClick={toggleMenu}
                  >
                     Menu
                  </h1>
               </>
            )}
         </nav>
         <AnimatePresence>
         {isMenuOpen && (
            <>
               <div className="fixed inset-0 bg-black/70 z-40 transition-opacity" />
               <motion.div
                  className="bg-white fixed inset-y-0 min-w-80 right-0 top-0 p-6 m-6 rounded-2xl z-50"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{
                     type: "spring", 
                     damping: 20, 
                     stiffness: 180
                  }}
               >
                  <nav>
                     <div className="flex justify-between mb-10">
                        <img
                           src={logoBlack}
                           alt="LC-Logo-Black"
                           className="max-w-12.5 sm:max-w-12.5 h-auto object-contain"
                        />
                        <img
                           src={closeBtn}
                           alt="Close Button"
                           className="max-w-6 sm:max-w-6 h-auto object-contain cursor-pointer"
                           onClick={toggleMenu}
                        />
                     </div>

                     <ul ul className="flex flex-col gap-15 text-black">
                        <NavLink to="/home">
                           <li className="font-NeueHaas font-bold text-2xl tracking">
                              HOME
                           </li>
                        </NavLink>
                        <NavLink to="/about">
                           <li className="font-NeueHaas font-bold text-2xl tracking">
                              ABOUT
                           </li>
                        </NavLink>
                        <NavLink to="/works">
                           <li className="font-NeueHaas font-bold text-2xl tracking">
                              WORKS
                           </li>
                        </NavLink>
                        <NavLink to="/certifications">
                           <li className="font-NeueHaas font-bold text-2xl tracking">
                              CERTIFICATIONS
                           </li>
                        </NavLink>
                     </ul>
                  </nav>
               </motion.div>
            </>
         )}
         </AnimatePresence>
      </>
   );
}

export default Navbar;