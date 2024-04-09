import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    let error = useRouteError()
    return (
        <div className="h-screen flex flex-col gap-3 justify-center items-center">
            <Helmet>
                <title>CozyNest | Error</title>
            </Helmet>
             <p className="text-9xl font-bold">{error.status}</p>
             <p className="text-[15px]">{error.data}</p>
             <Link to={-1}>
             <button className="btn bg-slate-700 text-white">Go Back</button>
             </Link>
        </div>
    );
};

export default Error;