import PropTypes from 'prop-types';

const Categorys = ({ categorys }) => {
    let {estate_title,cardDecription, segment_name, img, price, status} = categorys
    return (
        <div className=''>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-4 pt-7">
                    <img className='rounded-xl' src={img} />
                </figure> 
                    <div className="px-8 pt-7 ">
                    <h2 className="font-semibold text-xl text-center mb-3">{estate_title}</h2>
                    <p className='text-center text-[14px] text-gray-500'>{cardDecription}</p>
                    <div className='mt-4 space-y-2 text-gray-700'>
                    <p className='font-semibold'>Price: <span className='text-red-500'>{price}</span></p>
                    <p className='font-semibold '>segment:  <span className='font-normal'>{segment_name}</span></p>
                    <p className='font-semibold '>status: <span className='font-normal'>{status}</span></p>
                    </div>
                    
                    <button className="btn btn-primary w-full my-4">View Property</button>
                   
                </div>
                    
                        
                    </div>
                </div>
           
    );
};

Categorys.propTypes = {
    categorys: PropTypes.object.isRequired
}
export default Categorys;