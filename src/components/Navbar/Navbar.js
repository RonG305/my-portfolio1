import { navbarLinks } from "./navbarLInks"

const navbarStyles = {
    container : " bg-blue-100 md:flex items-center justify-between px-8 h-[80px] ",
    logo: " font-bold text-3xl italized font-Lobster  text-orange-600",
    linkstyle: " flex gap-4 md:font-bold capitalize"
}



const Navbar = () => {
    return (
        <div className={navbarStyles.container}>
            <h2 className={navbarStyles.logo}>RonG</h2>
            <div className={navbarStyles.linkstyle}>
                {navbarLinks.map((title) => (
                    <p>{title.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Navbar