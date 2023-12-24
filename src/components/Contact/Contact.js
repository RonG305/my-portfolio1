import emailjs from '@emailjs/browser'
import { useState } from 'react';


const Contact = () => {

    const contactStyles = {
        container: "md:h-[70vh] items-center md:px-40 px-3",
        subcontainer: " p-4  shadow-xl shadow-blue-300 md:flex gap-3 items-center justify-between h-full",
        inputStyle: " border rounded-md px-2 text-gray-700 border-gray-300 py-1 outline-none my-2",
        btnStyle: " rounded-md px-2 py-1 bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-400 hover:transition-all hover:delay-300 w-fit",
        contactMe: " font-bold text-pink-500 text-xl mt-3 ",
        inTouch: " md:text-4xl text-2xl font-bold"
    }


    const [emailData, setEmailData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    })

    const templateParams = {
        from_name: emailData.firstName,
        from_email: emailData.email, 
        to_name: "Ronald Mutia",
        message: emailData.message
    }


    const handleChange = (event) => {
        const {name, value} = event.target
        setEmailData({
            ...emailData,
            [name]: value
        })
    }

    

    function sendEmail(e) {
        
        e.preventDefault();  
    
        emailjs.sendForm('service_dsajwdg', 'template_mtt3fio', e.target, 'tBxpgtd2nDRlAVQd_')
          .then((result) => {
              window.location.reload() 
          }, (error) => {
              console.log(error.text);
          });
      }
   


    return (
        <div className={contactStyles.container}>
            <div className={contactStyles.subcontainer}>
           

            <div className=" md:w-1/2">

                
                <p className={contactStyles.contactMe}>Contact Me</p>
                <h3 className={contactStyles.inTouch}>Lets Get In Touch</h3>
            
                <form onSubmit={sendEmail} className=" flex flex-col">
                    <input 
                        type="text"
                        className={contactStyles.inputStyle}
                        placeholder="First Name"
                        required
                        name="firstName"
                        value={emailData.firstName}
                        onChange={handleChange}
                    
                    />
                    <input 
                        type="text"
                        className={contactStyles.inputStyle}
                        placeholder="Last Name"
                        required
                        name="lastName"
                        value={emailData.lastName}
                        onChange={handleChange}
                    />
                    <input 
                        type="email"
                        className={contactStyles.inputStyle}
                        placeholder="Email"
                        required
                        name="email"
                        value={emailData.email}
                        onChange={handleChange}
                    />
                    <textarea
                     rows={10}
                     cols={15}
                     className={contactStyles.inputStyle}
                     placeholder="Message"
                     required
                     name="message"
                     value={emailData.message}
                     onChange={handleChange}
                    
                    />

                    <button type="submit" className={contactStyles.btnStyle}>submit</button>
                </form>

            </div>

            <div className=" w-1/2">

                <img src="/image1.png" />

            </div>


            </div>
        </div>
    )
}

export default Contact