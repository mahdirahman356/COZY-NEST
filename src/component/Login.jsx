
const Login = () => {
    return (
        <div className="bg-[#F3F3F3] h-[80Vh] flex justify-center items-center">
      <form className="p-6 bg-white w-[95%] md:w-[50%] lg:w-[30%] mx-auto rounded-md">
       
          <label className="label">
            <span className="font-semibold text-gray-700">Email address</span>
          </label>
          <input type="email" placeholder="email" className="input  bg-[#F3F3F3] w-full" required />
        
        
          <label className="label">
            <span className="font-semibold text-gray-700">Password</span>
          </label>
          <input type="password" placeholder="password" className="input  bg-[#F3F3F3] w-full" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <input className="btn bg-[#797DFC] text-white w-full" type="submit" value="Login" />
      </form>
    </div>

    );
};

export default Login;