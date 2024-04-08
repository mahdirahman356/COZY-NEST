import { useLoaderData, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

const CategorysDetails = () => {
    let cetaDetails = useLoaderData();
    let { id } = useParams();
    let idParse = parseInt(id)
    let allDetails = cetaDetails.find(cetaDetails => cetaDetails.id === idParse)
    let { estate_title, area, facilities, description, location, segment_name, img, price, status } = allDetails
    return (
        <div className="hero my-24">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="md:max-w-2xl rounded-lg shadow-2xl" />
                <div className="">
                    <h1 className="text-2xl font-bold">{estate_title}</h1>
                    <p className="py-2 text-gray-500">{description}</p>
                    <div className="mt-2 flex flex-col md:flex-row justify-between">
                        <p className="flex items-center gap-1 mb-2 text-gray-600"><IoLocationOutline className="text-[20px]"/> {location}</p>
                        <p><span className="font-semibold px-1 text-gray-600">Area:</span> {area}</p>
                    </div>
                    <div className='mt-3 space-y-1 text-gray-700 p-1'>
                    <p className='font-semibold text-xl mb-3'>Price: <span className='text-red-500'>{price}</span></p>
                    <p className='font-semibold'>segment:  <span className='font-normal'>{segment_name}</span></p>
                    <p className='font-semibold'>status: <span className='font-normal'>{status}</span></p>
                    <p className="mt-4 font-semibold">Facilities: <span className="font-normal">{facilities}</span></p>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default CategorysDetails;