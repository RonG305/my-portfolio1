import { useState, useEffect } from "react";
import { navbarLinks } from "./navbarLInks"
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";


const navbarStyles = {
    container : " bg-blue-200 flex items-center justify-between p-4 md:px-8 h-[80px] relative ",
    logo: " font-bold text-3xl italized font-Lobster  text-orange-600",
    linkstyleSm: " md:flex gap-4 md:font-bold capitalize bg-blue-200 w-1/2 rounded-md p-4  h-[300px] absolute  top-20 right-2 ",
    linkstyleMd:  " flex gap-4 font-bold capitalize  "
}





const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    };



return (
    <div className={navbarStyles.container}>
        <h2 className={navbarStyles.logo}>RonG</h2>
        {windowWidth <= 768 && showMenu ? (
            <div className={navbarStyles.linkstyleSm}>
                {navbarLinks.map((title, index) => (
                    <p key={index} className="mb-3 hover:bg-blue-100 px-3 py-1 rounded-md">
                        {title.name}
                    </p>
                ))}
            </div>
        ) : windowWidth <= 768 ? null : (
            <div className={navbarStyles.linkstyleMd}>
                {navbarLinks.map((title, index) => (
                    <p key={index} className="mb-3 hover:bg-blue-100 px-3 py-1 rounded-md">
                        {title.name}
                    </p>
                ))}
            </div>
        )}
        {windowWidth <= 768 ? (
            showMenu ? (
                <RxCross2 onClick={handleToggleMenu} size={30} className="md:hidden" />
            ) : (
                <CiMenuFries onClick={handleToggleMenu} size={30} className="md:hidden" />
            )
        ) : null}
    </div>
);
};

export default Navbar;