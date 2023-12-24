import {FaLinkedinIn, FaWhatsapp, FaTwitter, FaInstagram} from 'react-icons/fa'
import {Link} from 'react-router-dom'


const LinkedInStyle = 'py-4 hover:bg-pink-300 border border-slate-400  w-fit rounded-full p-4 hover:text-blue-500'
const whatsAppStyle = 'py-4 hover:bg-pink-300 border border-slate-400  w-fit rounded-full p-4 hover:text-green-500'
const twitterStyle = 'py-4 hover:bg-pink-300 border border-slate-400  w-fit rounded-full p-4 hover:text-blue-500'
const instagramStyle = 'py-4 hover:bg-pink-300 border border-slate-400  w-fit rounded-full p-4 hover:text-pink-700'


const linkedInUrl = "https://www.linkedin.com/in/ronald-mutia-14019525a/"
const instagramUrl = "https://www.instagram.com/rongmutia/"
const twitterUrl = "https://twitter.com/ronGcodewaves"
const whatsApp = "https://api.whatsapp.com/send?phone=0790021016"





const Footer = () => {
    return (
        <div className=" md:h-[30vh] flex items-center justify-center bg-blue-200 mt-40 ">
            <div className=" flex  flex-col items-center text-center justify-center md:px-40 px-3 py-4">
                <p className=" font-Lobster font-bold text-orange-500 text-4xl my-4">RonG</p>
                <p className=" text-sm">Let's maintain a connection to craft innovative solutions. Together, we'll build upon my skills, fostering transformative changes. I bring expertise in cutting-edge technologies, aiming to streamline processes, enhance user experiences, and drive digital evolution for sustainable growth and organizational success.</p>

                    <span className=' flex my-4 gap-5'>
                       <Link to={linkedInUrl} className={LinkedInStyle}><FaLinkedinIn  size={20} /></Link>

                       <Link to={whatsApp} className={whatsAppStyle}><FaWhatsapp  size={20} /></Link>

                       <Link to={twitterUrl} className={twitterStyle}><FaTwitter  size={20} /></Link>

                       <Link to={instagramUrl} className={instagramStyle}><FaInstagram  size={20} /></Link>
                       
                        
                      
                    </span>
                    

               
            </div>
            

        </div>
    )
}


export default Footer