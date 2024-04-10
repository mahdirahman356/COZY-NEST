import featureBannerImage from '../assets/Image/feature-banner-image.webp'
import { TbSquareRoundedCheckFilled } from "react-icons/tb";

const Features = () => {
    return (
        <div>
            <div className="my-6 md:my-20">
                <div className="flex flex-col lg:flex-row  items-center gap-20">
                    <img src={featureBannerImage} className="md:max-w-xl rounded-lg shadow-2xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom" />
                   <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                   <h1 className="text-3xl md:text-5xl font-bold">We Create Spaces for Comfortable Living</h1>
                   <div className='mt-10 space-y-2'>
                   <p className='flex items-center gap-2 font-semibold text-[13px]' ><TbSquareRoundedCheckFilled className='text-[18px] text-green-500'/>YOU AND YOUR CHILDREN SAFE. ROBUST 24/7 SECURITY</p>
                   <p className='flex items-center gap-2 font-semibold text-[13px]' ><TbSquareRoundedCheckFilled className='text-[18px] text-green-500'/>CUSTOMER SERVICE WILL GUARANTEE YOUR COMFORT</p>
                   <p className='flex items-center gap-2 font-semibold text-[13px]' ><TbSquareRoundedCheckFilled className='text-[18px] text-green-500'/>SCENIC RIVER RIDGE</p>
                   <p className='flex items-center gap-2 font-semibold text-[13px]' ><TbSquareRoundedCheckFilled className='text-[18px] text-green-500'/>QUAY PROMENADE WITH A GAZEBO</p>
                   <p className='flex items-center gap-2 font-semibold text-[13px]' ><TbSquareRoundedCheckFilled className='text-[18px] text-green-500'/>GAS FIREPLACES WITH CUSTOM-CRAFTED SURROUNDS</p>
                   <p className='flex items-center gap-2 font-semibold text-[13px]' ><TbSquareRoundedCheckFilled className='text-[18px] text-green-500'/>FULLY EQUIPPED PLAYGROUND</p>
                   </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Features;