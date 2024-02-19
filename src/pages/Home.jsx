import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div id="Home" className="flex flex-col h-screen w-full">
        <Navbar/>
        <div className="flex-1 bg-cover bg-center bg-[url('/images/home-page-img.jpg')]  ">
            <div className="text-center md:px-20 px-12 md:pt-32 pt-60">
                <h1 className="md:text-7xl text-5xl font-bold text-white md:mt-20 mt-16">Welcome to VKG Human Capital</h1>
                <p className="text-white text-2xl md:py-8 py-8">Unlock Your Business Potential with Strategic HR Solutions</p>
                <p className="text-white text-2xl py-2 md:block hidden">At VKG Human Capital, we offer tailored HR services designed to optimize your workforce and drive organizational success. With industry expertise and a commitment to quality, we provide innovative solutions including recruitment, consulting, training, and technology integration. Lets elevate your HR strategy together. Contact us today.</p>
            </div>
        </div>
    </div>
  )
}

export default Home