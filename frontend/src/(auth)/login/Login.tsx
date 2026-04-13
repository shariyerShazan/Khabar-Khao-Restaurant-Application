import { useLoginMutation } from '@/redux/features/auth.api';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router';
import logo from '@/assets/brand-logo.png';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '@/redux/slices/auth.slice';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [accepted, setAccepted] = useState(false);

  const handleGoogleClick = () => {
    if (!accepted) {
      toast.error('Please accept Terms & Privacy Policy first');
      return;
    }
    googleLogin();
  };

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    scope: 'email profile',

    onSuccess: async (response) => {
      if (!accepted) {
        toast.error('Please accept Terms & Privacy Policy first');
        return;
      }
      try {
        const res = await login({
          code: response.code,
        }).unwrap();

        dispatch(setToken(res.data.accessToken));
        dispatch(setUser(res.data.user));

        if (!res.data.user.role) {
          navigate('/add-role');
        } else {
          navigate('/');
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0f] relative overflow-hidden">
      {/* GLOW */}

      <div className="absolute w-[600px] h-[600px] bg-[#ea2853] blur-[200px] opacity-15 top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-pink-500 blur-[180px] opacity-10 bottom-[-150px] right-[-150px]" />

      {/* CARD */}
      <div className="w-[380px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-10 text-center text-white z-10">
        {/* LOGO */}
        <img src={logo} className="w-16 h-16 mx-auto mb-4 object-cover" />

        <h1 className="text-3xl font-bold">Khabar Khao</h1>

        <p className="text-sm text-gray-400 mb-6">
          Order fresh food anytime 🍕
        </p>

        {/* TERMS (CLEAN VERSION) */}
        <label className="flex items-center gap-2 text-xs text-gray-400 mb-6 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="accent-[#ea2853] w-4 h-4 cursor-pointer"
          />

          <span>
            I agree to{' '}
            <a href="/terms" className="text-[#ea2853] hover:underline">
              Terms
            </a>{' '}
            &{' '}
            <a href="/privacy" className="text-[#ea2853] hover:underline">
              Privacy Policy
            </a>
          </span>
        </label>

        {/* LOGIN BUTTON */}
        <button
          onClick={handleGoogleClick}
          className={`w-full flex items-center justify-center gap-3 py-3 rounded-xl font-medium transition-all duration-300 ${
             'bg-white text-black hover:bg-gray-100 hover:scale-102 cursor-pointer hover:border-[#ea2853] hover:border-2 border-2'
          }`}
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        <p className="text-xs text-gray-500 mt-5">Fast • Fresh • Delicious</p>
      </div>
    </div>
  );
};

export default Login;
