import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Categorys = ({ categorys }) => {
    let {id,estate_title,cardDecription, segment_name, img, price, status} = categorys
    return (
        <div className='mb-10 md:mb-24' data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <div className="bg-base-100 shadow-xl flex flex-col justify-between h-full rounded-2xl">
                <div>
                <figure className="px-4 pt-7">
                    <img className='rounded-xl' src={img} />
                </figure> 
                    <div className="px-8 pt-7">
                    <h2 className="font-semibold text-xl text-center mb-3">{estate_title}</h2>
                    <p className='text-center text-gray-500'>{cardDecription}</p>
                    <div className='mt-4  text-gray-700'>
                    <p className='font-semibold text-xl mb-4 text-center'>Price: <span className='text-red-500'>{price}</span></p>
                    <p className='font-semibold '>segment:  <span className='font-normal'>{segment_name}</span></p>
                    <p className='font-semibold '>status: <span className='font-normal'>{status}</span></p>
                    </div>
                </div>
                </div>
                <div className='px-8'>
                <Link to={`/categorys/${id}`}>
                    <button className="btn bg-[#64ade8] text-white w-full my-4">View Property</button>
                    </Link>
                </div>
            </div>
                </div>
           
    );
};

Categorys.propTypes = {
    categorys: PropTypes.object.isRequired
}
export default Categorys;