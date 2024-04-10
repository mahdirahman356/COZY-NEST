import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet-async";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import 'animate.css';
import { useForm } from "react-hook-form"


const Register = () => {

    let { createUser } = useContext(AuthContext)
    let [show, setShow] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data,e) => {
        console.log(data)
        let { email, password } = data
        if (password.length < 6) {
            toast.error("Password should be at least 6 characters")
            return
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Your password must contain at least one Uppercase character")
            return
        }

        if (!/[a-z]/.test(password)) {
            toast.error("Your password must contain at least one  Lowercase character")
            return
        }

        createUser(email, password)
            .then((result) => {
                let authUser = result.user
                e.target.reset()
                toast.success("Your account has been created successfully")
                console.log(authUser)
            })
            .catch(error => {
                console.log(error.message)
            });

    }
    return (
        <div>
            <Helmet>
                <title>CozyNest | Register</title>
            </Helmet>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-10 bg-white w-[95%] md:w-[50%] lg:w-[40%]  my-5 md:my-20  mx-auto rounded-[5px]  border-2 border-gray-200 animate__animated animate__slideInUp">

                    <h3 className="font-bold text-center text-2xl mb-5 md:text-3xl md:mb-12">Create Your Accout</h3>

                    <input type="text" name="name" placeholder="Your Name" className="rounded-none border-b-[1px] border-gray-300 w-full pb-2 mb-5" />
                    <input type="text" name="photoURL" placeholder="Photo URL" className="rounded-none border-b-[1px] border-gray-300 w-full pb-2 mb-5" />
                    <input type="email" name="email" placeholder="Email" className="rounded-none border-b-[1px] border-gray-300 w-full pb-2 mb-5" {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500 text-[13px]">This field is required</span>}
                    <div className="flex items-center relative">
                        <input type={show ? "text" : "password"} name="password" placeholder="password" className="rounded-none border-b-[1px] border-gray-300 w-full pb-2" {...register("password", { required: true })} />
                        {errors.email && <span className="text-red-500 text-[13px]">This field is required</span>}
                        <span onClick={() => setShow(!show)} className="absolute  right-2">{show ? <FiEye className="text-[20px] text-gray-500" /> : <FiEyeOff className="text-[20px] text-gray-500" />}</span >
                    </div>
                    <input className="btn mt-2 bg-[#64ade8] text-white w-full" type="submit" value="Login" />
                    <Toaster />
                    <p className="text-[14px] mt-3 font-semibold text-center">Already Have an Account ? <Link to="/login" className="text-blue-500 underline">Lgin</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;