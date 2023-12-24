const InTouch = () => {

    const btnStyle = " rounded-md px-2 py-1 bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-400 hover:transition-all hover:delay-300 "
    return (
        <div className="lg:px-40 px-3 my-5 ">
            <div className=" rounded-md p-4 shadow-lg  shadow-blue-300 md:flex items-center justify-between">
                <div>
                    <p className=" font-bold text-xl text-pink-500">Get In Touch</p>
                    <h3 className=" text-2xl font-bold md:text-4xl my-3">Hire me as a Developer</h3>
                    <button className={btnStyle}>Contact me</button>
                </div>

                <img src="/bs.png" />
               
            </div>

            

        </div>
    )
}


export default InTouch