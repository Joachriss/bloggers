import aboutus from '../assets/images/aboutus.png'
export const AboutUs = () => {
    return (

        <div className="w-full mb-52 px-5">
            <div className='max-w-[1280px] mx-auto'>
                <div className="text-6xl my-6 px-4">About Us</div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <img src={aboutus} loading="lazy" className="w-[70%] mx-auto" alt="" />
                    <div className="mx-auto text-xl  text-justify px-3 max-w-[1280px] mt-2">
                        <div className="text-4xl my-6">The blog</div>
                        Describe Blog is a platform where ideas come to life. Share your thoughts, explore diverse perspectives, and connect with a community of like-minded individuals. Powered by cutting-edge technology, our user-friendly interface ensures a seamless experience for creating, sharing, and engaging with content. Join us and let your voice be heard
                    </div>
                </div>

            </div>
        </div>
    )
}
