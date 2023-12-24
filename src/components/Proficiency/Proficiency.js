import { FaLaptop, FaDatabase, FaArchive, FaLaptopHouse} from 'react-icons/fa'


const techs = [
    {
        name: 'Frontend Development',
        descr: "I Craft responsive and dynamic user interfaces with modern frameworks and tools, ensuring seamless and engaging web experiences.",
        icon: <FaLaptop size={30} />
    },

    {
        name: 'Backend development',
        descr: "I build robust server-side applications, databases, and APIs to power functionalities and handle data securely and efficiently.",
        icon: <FaArchive size={30} />
    },

    {
        name: " API deveopment",
        descr: "Architecting and implementing efficient and secure APIs to facilitate seamless communication and data exchange between different systems.",

        icon: <FaLaptopHouse size={30} />
    },

    {
        name: "Database design",
        descr: "Designing scalable and optimized database structures for efficient data storage, retrieval, and seamless system performance.",
        icon: <FaDatabase size={30} />
    }
]


const Proficiency = () => {
    return (
       
       <div className='md:px-40 px-3 md:h-[40vh]  '>
        <div>
            <div className=' text-center my-4'>
                <p className=' font-bold text-pink-500 '>What can I do </p>
                <h3 className=' font-bold md:text-4xl text-2xl'>Am proficient in :</h3>
            </div>
        </div>

        <div className='md:grid grid-cols-4 gap-3 shadow-lg shadow-blue-300 rounded-md p-4 h-full  '>
            {techs.map((tech) => (
                <div className='  rounded-md shadow-lg shadow-blue-300 p-3 text-sm my-4 py-4'>
                    <p className=' py-4 bg-pink-500 w-fit rounded-full p-5 text-white'>{tech.icon}</p>
                    <p className=' py-4 text-2xl font-bold'>{tech.name}</p>
                    <p>{tech.descr}</p>
                </div>
            ))}

        </div>

        
       </div>
    )
}


export default Proficiency