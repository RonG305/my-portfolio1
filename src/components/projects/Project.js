import { useState } from 'react'
import {Link} from 'react-router-dom'


const projects = [
    {
        name: "Hotel namagement system",
        image: '/HMS.png',
        description: "Developed an intuitive Hotel Management System, optimizing guest experiences and operational efficiency. Seamlessly managing reservations, check-ins, amenities, and staff workflows, ensuring a streamlined and delightful stay for guests while facilitating efficient internal operations for the hotel staff.",

        gitub_url: 'https://github.com/RonG305/Hotel-Management'
    },

    {
        name: "Real estate application ",
        image: '/Real-estate.jpeg',
        description: "Developed an intuitive Hotel Management System, optimizing guest experiences and operational efficiency. Seamlessly managing reservations, check-ins, amenities, and staff workflows, ensuring a streamlined and delightful stay for guests while facilitating efficient internal operations for the hotel staff.",

        gitub_url: 'https://github.com/RonG305/Real-estate-fullstack'
    },

    {
        name: "School management system API",
        image: '/SMS.png',
        description: "Developed an intuitive Hotel Management System, optimizing guest experiences and operational efficiency. Seamlessly managing reservations, check-ins, amenities, and staff workflows, ensuring a streamlined and delightful stay for guests while facilitating efficient internal operations for the hotel staff.",

        gitub_url: 'https://github.com/RonG305/School-management-system'
    },

    {
        name: "Netpay Calculator",
        image: '/netpay.png',
        description: "Developed an intuitive Hotel Management System, optimizing guest experiences and operational efficiency. Seamlessly managing reservations, check-ins, amenities, and staff workflows, ensuring a streamlined and delightful stay for guests while facilitating efficient internal operations for the hotel staff.",

        gitub_url: 'https://github.com/RonG305/NetpayCalculator'
    },
    


]




const Project = () => {


    const containerStyle = " bg-slate-200 rounded-md p-3 shadow-lg shadow-blue-300 hover:bg-slate-300 transition-all duration-300 "
    const showButton = " rounded-md px-2 py-1 bg-gradient-to-r from-purple-500 to-purple-700 text-white "
    const projectName = " text-xl font-bold text-purple-500 my-4 text-center"
    const linkStyle = " rounded-md px-2 py-1 bg-gradient-to-r from-purple-500 to-purple-700 text-white "
    

    const [show, setShow] = useState(false)

    const handleShow =  () => {
        setShow(!show)
    }

    return (
        <div className=" bg-blue-100  lg:px-40 px-3">
            <div className=" text-center py-4">
                <p className=" font-bold text-pink-500">Portfolio</p>
                <h3 className=" text-2xl  md:text-4xl font-bold">My Projects</h3>
            </div>

            <div className=" md:grid md:grid-cols-2 flex flex-col  gap-2">

                {projects.map((project) => (
                     <div className={containerStyle}>
                     <div>
                         <img src={project.image} />
                     </div>
 
                     <div className=" my-3">
                        <h3 className={projectName}>{project.name}</h3>
                         {/* <button className={showButton}>show</button> */}
                         <p className=" text-sm text-gray-600">{project.description}</p>
                     </div>
 
                     <Link to={project.gitub_url} className={linkStyle}>Gitub</Link>
                    </div>
                ))}
               

               
            </div>
            

        </div>
    )
}

export default Project