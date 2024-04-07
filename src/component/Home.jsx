import HeroImage from '../assets/Image/hero.webp' 
import slider1 from '../assets/Image/slider-1.avif'
import slider2 from '../assets/Image/slider-2.avif'
import slider3 from '../assets/Image/slider-3.avif'
import slider4 from '../assets/Image/slider-4.avif'
const Home = () => {
    return (
        <div className="hero mt-3 md:mt-9 md:h-[80vh] rounded-3xl" style={{backgroundImage: `url(${HeroImage})`}}>
  <div className="hero-overlay bg-opacity-50 rounded-3xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="flex flex-col md:flex-row items-center justify-between">
     <div className='md:w-[50%] mt-5'>
     <h1 className="mb-5 text-5xl font-bold text-white">Find Your Perfect Home at CozyNest</h1>
      <p className="mb-5 text-gray-300">Discover your dream home with CozyNest. Browse a curated collection of cozy residences, from charming townhouses to luxurious apartments. Whether buying or renting, find the perfect fit effortlessly. Start your search today!</p>
     </div>

     <div>
     <div className="carousel carousel-center max-w-md p-4 space-x-4  rounded-box">
  <div className="carousel-item">
    <img src={slider3} className="border-[4px] border-[#5bb5ff] rounded-box w-[200px] md:w-[300px] h-[300px] lg:h-[400px]" />
  </div> 
  <div className="carousel-item">
    <img src={slider4} className="border-[4px] border-[#5bb5ff] rounded-box w-[200px] md:w-[300px] h-[300px] lg:h-[400px]" />
  </div> 
  <div className="carousel-item">
    <img src={slider2} className="border-[4px] border-[#5bb5ff] rounded-box w-[200px] md:w-[300px] h-[300px] lg:h-[400px]" />
  </div> 
  <div className="carousel-item">
    <img src={slider1} className="border-[4px] border-[#5bb5ff] rounded-box w-[200px] md:w-[300px] h-[300px] lg:h-[400px]" />
  </div>
</div>
     </div>
    
     </div>
  </div>
</div>
        
    );
};

export default Home;