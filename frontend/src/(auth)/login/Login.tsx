import { useLoginMutation } from '@/redux/features/auth.api';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router';
import logo from '@/assets/brand-logo.png';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '@/redux/slices/auth.slice';


const Login = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    scope: 'email profile',

    onSuccess: async (response) => {
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
      <div className="absolute w-[600px] h-[600px] bg-[#ea2853] blur-[200px] opacity-15 top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-pink-500 blur-[180px] opacity-10 bottom-[-150px] right-[-150px]" />

      <div className="w-[380px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-10 text-center text-white z-10">
        <img src={logo} className="w-16 h-16 mx-auto mb-4" />

        <h1 className="text-3xl font-bold">Khabar Khao</h1>

        <p className="text-sm text-gray-400 mb-6">
          Order fresh food anytime 🍕
        </p>

        <button
          onClick={() => googleLogin()}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105"
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
