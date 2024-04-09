
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet-async";
import 'animate.css';
import { useForm} from "react-hook-form"


const Login = () => {
    let {loginUser} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit  = (data,e) => {
        console.log(data)
        let {email,password} = data
        loginUser(email,password)
        .then(result => {
            e.target.reset()
            toast.success("User successfully logged in")
            console.log(result.user)
        })
        .catch(error => {
            toast.error("Your account is not available")
            console.log(error.massage)
        })
      }
      const googleProvider = new GoogleAuthProvider();
      const githubProvider = new GithubAuthProvider();
    let handleLoginWitnGoogle = () =>{
        signInWithPopup(auth,googleProvider)
        .then(result => {
            console.log(result.user)
        })
        .catch((error) => {
            console.log(error.massage)
        })
    }

    let handleLoginWithGithub = () =>{
        signInWithPopup(auth,githubProvider)
        .then(result => {
            console.log(result.user)
        })
        .catch((error) => {
            console.log(error.massage)
        })
    }
    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            <Helmet>
                <title>CozyNest | Login</title>
            </Helmet>
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-10 bg-white w-[95%] md:w-[50%] lg:w-[40%]  my-5 md:my-20  mx-auto rounded-[5px]  border-2 border-gray-200 animate__animated animate__slideInLeft">
           
           <h3 className="font-bold text-center text-2xl mb-5 md:text-3xl md:mb-12">Login Your Accout</h3>

          <input type="email"  name="email" placeholder="Email" className="rounded-none border-b-[1px] border-gray-300 w-full pb-2" {...register("email", { required: true })} />  
          {errors.email && <span className="text-red-500 text-[13px]">This field is required</span>}
          <input type="password" name="password" placeholder="password" className=" rounded-none border-b-[1px] border-gray-300 w-full pb-2 mt-5" {...register("password", { required: true })}/>
          {errors.password && <span className="text-red-500 text-[13px]">This field is required</span>}
          <label className="label">
          </label>
          <input className="btn mt-2 bg-[#64ade8] text-white w-full" type="submit" value="Login" />
         <Toaster />
          <p className="text-[14px] mt-3 font-semibold text-center">Dont’t Have An Account ? <Link to="/register" className="text-blue-600 underline">Register</Link></p>
      </form>
      <div className="animate__animated animate__slideInRight">
      <button onClick={handleLoginWitnGoogle} className="btn w-full mb-3"><FcGoogle className="text-[30px]"/> Login With Google</button>
      <button onClick={handleLoginWithGithub} className="btn w-full"><span><FaGithub className="text-[30px] inline "/></span> Login With Github</button>
      </div>
    </div>

    );
};

export default Login;