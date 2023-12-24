import Typist from 'react-text-typist'


const Hero = () => {

    const description = "Passionate full-stack developer crafting innovative solutions across the stack. Bridging creativity with code to build seamless, user-centric applications for tomorrow's digital world."


    return (
        <div className=" md: h-[80vh] bg-blue-100 lg:px-40 px-3 py-4 md:flex items-center justify-between">
            <div className=" md:w-1/2 " >
                <h3 className=" text-3xl md:text-5xl font-bold tracking-wider mb-3">Hello I am <span className=" text-pink-500">Ronald</span></h3>
                <h5 className=' text-3xl'>
                <Typist
                    sentences={[
                    'Full-Stack Software Developer',
                    'Software Engineer',
                    'ReactJS Developer',
                    'Rest API Developer'
                    ]}
                    loop={true}
                    typingSpeed={3000}
                    deletingSpeed={3000}
                    pauseSpeed={1000}
                />
                </h5>
                
                <p>{description}</p>
            </div>

            <div className=" md:w-1/2 ">
                    <img  src='/heroImage.png' alt='logo'/>
            </div>
            

        </div>
    )
}


export default Hero