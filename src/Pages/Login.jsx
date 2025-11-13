import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { FaEye, FaSpinner } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const { signInUser, signInWithGoogle, setUser } = use(AuthContext);

  const handleLogin = e => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(res => {
        console.log(res);
        Swal.fire({
          title: "Log in successfull.",
          icon: "success",
          draggable: true
        });
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch(error => {
        console.log(error);
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        // console.log(result.user);
        setUser(result.user);
        Swal.fire({
          title: "You have logged in successfully.",
          icon: "success",
          draggable: true
        });
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch(error => {
        console.log(error);
        toast.error(error.message);
      })
  };

  return (
    <div>
      <div className='poppins bg-[#f8f6f6] py-10 flex justify-center items-center'>
        <div className="card bg-base-100 max-w-lg w-11/12 shrink-0 border border-gray-300">
          <form onSubmit={handleLogin} className="card-body">
            <h3 className='text-center text-2xl md:text-4xl font-bold'>Login to EcoTrack</h3>
            <div className='border-b border-b-base-300 my-4'></div>
            <fieldset className="fieldset gap-0 space-y-3">

              {/* email */}
              <label className="label font-semibold text-lg text-[#403F3F]">Email</label>
              <input type="email" name='email' required className="input bg-base-200 border-0 w-full" placeholder="Enter your email address" />

              {/* password */}
              <div className='relative'>
                <label className="label font-semibold text-lg text-[#403F3F]">Password</label>
                <input autoComplete="current-password" name='password' required type={show ? "text" : "password"} className="input bg-base-200 border-0 w-full" placeholder="Enter your password" />
                <span onClick={() => setShow(!show)} className="absolute right-3.5 top-[38px] cursor-pointer z-50">
                  {
                    show ? <FaEye size={20} /> : <IoEyeOff size={20} />
                  }
                </span>
              </div>

              {/* forgot password */}
              <Link to='/forgot-password' className="link text-primary link-hover text-[14px] font-medium">
                Forgot password?
              </Link>

              {/* log-in button */}
              <button type='submit' disabled={loading} className="btn mt-1 bg-primary rounded-sm border-primary text-white shadow-none btn-neutral">
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>

              {/* devider */}
              <div className="flex items-center my-3">
                <div className="grow border-t border-gray-300"></div>
                <span className="px-3 text-sm text-gray-500">OR</span>
                <div className="grow border-t border-gray-300"></div>
              </div>

              {/* Google */}
              <Link onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
              </Link>

              {/* register button */}
              <p className='text-[16px] font-medium text-center text-[#706f6f]'>
                Dont’t have an account ? <Link to='/sign-up' className='text-primary underline'>Signup</Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;