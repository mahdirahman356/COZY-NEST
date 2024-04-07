import HeroImage from '../assets/Image/hero.jpg' 
const Home = () => {
    return (
        <div className="hero mt-3 md:mt-9 md:h-[80vh] rounded-3xl" style={{backgroundImage: `url(${HeroImage})`}}>
  <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="flex flex-col md:flex-row items-center justify-between">
     <div className='md:w-[50%] mt-5'>
     <h1 className="mb-5 text-5xl font-bold text-white">Find Your Perfect Home at CozyNest</h1>
      <p className="mb-5 text-gray-300">Discover your dream home with CozyNest. Browse a curated collection of cozy residences, from charming townhouses to luxurious apartments. Whether buying or renting, find the perfect fit effortlessly. Start your search today!</p>
     </div>

     <div>
     <div className="carousel carousel-center max-w-md p-4 space-x-4  rounded-box">
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
  </div>
</div>
     </div>
    
     </div>
  </div>
</div>
        
    );
};

export default Home;