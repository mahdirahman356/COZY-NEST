import { useLoaderData, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const CategorysDetails = () => {
    let cetaDetails = useLoaderData();
    let { id } = useParams();
    let idParse = parseInt(id)
    let allDetails = cetaDetails.find(cetaDetails => cetaDetails.id === idParse)
    let { estate_title, area, facilities, description, location, segment_name, img, price, status } = allDetails
    return (
        <div className="hero my-10 md:my-24">
            <Helmet>
                <title>CozyNest | Estate</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <img src={img} className="md:max-w-xl rounded-lg shadow-2xl" />
                <div className="">
                    <h1 className="text-2xl font-bold">{estate_title}</h1>
                    <p className="py-2 text-gray-500">{description}</p>
                    <div className="mt-2 flex flex-col md:flex-row justify-between">
                        <p className="flex items-center gap-1 mb-2 text-gray-600"><IoLocationOutline className="text-[20px]"/> {location}</p>
                        <p><span className="font-semibold px-1 text-gray-600">Area:</span> {area}</p>
                    </div>
                    <div className='mt-3 space-y-1 text-gray-700 p-1'>
                    
                    <div className="flex flex-col md:flex-row justify-between">
                    <div>
                    <p className='font-semibold text-xl mb-3'>Price: <span className='text-red-500'>{price}</span></p>
                    <p className='font-semibold'>segment:  <span className='font-normal'>{segment_name}</span></p>
                    <p className='font-semibold'>status: <span className='font-normal'>{status}</span></p>
                    </div>
                    <div>
                    <p className="text-xl font-semibold pb-2 border-b mt-4 md:mt-0">Facilities</p>
                    {facilities.map((facilities,index) => <ul className="list-disc"  key={index}><li className="grid grid-cols-2">{facilities}</li></ul>)}
                    </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default CategorysDetails;