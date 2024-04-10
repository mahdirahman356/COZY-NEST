import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { PiMedalLight } from "react-icons/pi";
import { GrLineChart } from "react-icons/gr";
import mapImg from '../assets/Image/wall-img.jpg'
const Quality = () => {
    return (
        <div>
             <div className="hero rounded-2xl" style={{ backgroundImage: `url(${mapImg})` }}>
        <div className="hero-overlay bg-opacity-70 rounded-2xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="grid my-10 md:my-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <figure className="px-10 pt-10">
                <p className='text-[70px] border-gray-500  border-2 p-6 rounded-full text-[#7db8e9]'><IoHomeOutline /></p>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Best property lists</h2>
                <p>We provide consumers with a content-rich listings in a handy format.</p>
                <div className="card-actions">
                </div>
              </div>
            </div>
            <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <figure className="px-10 pt-10">
              <p className='text-[70px] border-gray-500  border-2 p-6 rounded-full text-[#7db8e9]'><AiOutlineLike /></p>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Best price in market</h2>
                <p>Price estimates and sales histories for property, updating information.</p>
                <div className="card-actions">
                </div>
              </div>
            </div>
            <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <figure className="px-10 pt-10">
              <p className='text-[70px] border-gray-500  border-2 p-6 rounded-full text-[#7db8e9]'><PiMedalLight /></p>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Guaranteed services</h2>
                <p>Our managers will keep you informed and you can act with certainty.</p>
                <div className="card-actions">
                </div>
              </div>
            </div>
            <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <figure className="px-10 pt-10">
              <p className='text-[70px] border-gray-500  border-2 p-6 rounded-full text-[#7db8e9]'><GrLineChart /></p>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Marketing research</h2>
                <p>All our marketing researchers today have a tough job multitasking.</p>
                <div className="card-actions">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};


export default Quality;