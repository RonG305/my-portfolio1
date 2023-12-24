import { useState } from "react"

const skills = [
    {name:'React Js', rating: 80 },
    {name: 'Django Rest API', rating: 93},
    {name: 'python', rating: 90},
    {name: 'Django', rating: 80},
    {name: 'Tailwind CSS', rating: 90},
    {name: 'Javascript', rating: 85}
]

const education = [
    {name: 'University', desc: "Murang'a University of Technology" },
    {name: 'Program', desc: "Bsc. Software engeering" },
    {name: 'Duration', desc: "2021 - present" },

]




const SkillRating = () => {
    return (
        <div className=" gap-4">
            {skills.map((skill) => (
                <div >
                    <p>{skill.name}</p>
                    <div
                     className=" h-7 bg-blue-200 rounded-sm"
                    >
                        <div className=" bg-purple-500 w-full h-full text-center text-white" style={{width:`${skill.rating}%`}}>{skill.rating}%</div>
                    </div>
                </div>
                
            ))}
        </div>
    )
}

const Education = () => {
    return (
        <div className=" flex">
            <div>
            {education.map((educ) => (
                <div className="mb-3">
                 <p>{educ.name}</p>
                 <h3 className=" font-bold text-xl">{educ.desc}</h3>
             </div>
            ))}
            </div>

            <div>
                <img src="/cap.png" />
            </div>
           
            
        </div>
    )
}

const About = () => {

    const [activeTab, setActiveTab] = useState('skills')

    const handleActiveTab = (tab) => {
        setActiveTab(tab)
    }

    const aboutStyles = {
        paragraph: " A full-Stack Developer with diverse knowledge about frontend and backend developement of software. Am a good communicator and  I love collaborating with team members to deliver high quality work .",

        container: " md:h-[70vh] md:flex gap-4 lg:px-40 px-3 bg-slate-200 py-8",
        btnStyle: " rounded-md px-2 py-1 bg-gradient-to-r from-purple-500 to-purple-700 text-white"
    }



    return (

       
        <div className={aboutStyles.container}>
            <div className="  md:w-1/2">
                <img className="rotatation" src=" /image2.png" />
            </div>

            <div>
                <h4 className=" md:text-5xl text-3xl font-bold text-pink-500 mb-3">About Me</h4>
                <h2>{aboutStyles.paragraph}</h2>
                <div className=" flex gap-4 my-4"> 
                    <button onClick={() => handleActiveTab('skills')} className={aboutStyles.btnStyle}>Main skills</button>
                    <button onClick={() => handleActiveTab('education')} className={aboutStyles.btnStyle}>Education</button>
                    <button className={aboutStyles.btnStyle}>Awards</button>
                </div>
                {activeTab === 'skills' && <SkillRating />}
                {activeTab === 'education' && <Education />}

            </div>
        </div>
    )
}


export default About