import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";


const Login = () => {
    let handleLogIn =(e) => {
        e.preventDefault()
        let from = new FormData(e.currentTarget)
        let email = from.get('email')
        let password = from.get('password')
        console.log(email,password)
    }
    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
      <form onSubmit={handleLogIn} className="p-6 md:p-10 bg-white w-[95%] md:w-[50%] lg:w-[40%]  my-10 md:my-20  mx-auto rounded-[5px]  border-2 border-gray-200">
           
           <h3 className="font-bold text-center text-2xl mb-5 md:text-3xl md:mb-12">Login Your Accout</h3>

          <input type="email" name="email" placeholder="Email" className="  rounded-none border-b-[1px] border-gray-300 w-full pb-2 mb-5" required />
        
        
          
          <input type="password" name="password" placeholder="password" className=" rounded-none border-b-[1px] border-gray-300 w-full pb-2" required />
          <label className="label">
          </label>
          <input className="btn mt-2 bg-[steelblue] text-white w-full" type="submit" value="Login" />
         
        
         
          <p className="text-[14px] mt-3 font-semibold text-center">Dont’t Have An Account ? <Link to="/register" className="text-blue-600 underline">Register</Link></p>
      </form>
      <div>
      <button className="btn mt-3 w-full"><FcGoogle className="text-[22px]"/> Login With Google</button>
          <button className="btn mt-3 w-full"><FaGithub className="text-[22px]"/> Login With Github</button>
      </div>
    </div>

    );
};

export default Login;