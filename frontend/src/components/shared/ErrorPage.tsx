import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router';
import { FaHome, FaRedo } from 'react-icons/fa';
import logo from '@/assets/brand-logo.png';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  let message = 'Something went wrong';

  if (isRouteErrorResponse(error)) {
    message = `${error.status} - ${error.statusText}`;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0f] relative overflow-hidden text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-[#ea2853] blur-[200px] opacity-20 top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-pink-500 blur-[180px] opacity-10 bottom-[-150px] right-[-150px]" />

      {/* CARD */}
      <div className="w-[420px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-10 text-center z-10">
        {/* LOGO */}
        <img src={logo} className="w-14 mx-auto mb-4 " />


        {/* TITLE */}
        <h1 className="text-3xl font-bold text-[#ea2853]">Oops!</h1>

        <p className="text-gray-300 mt-2 mb-6">{message}</p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate('/')}
            className="flex cursor-pointer items-center justify-center gap-2 bg-[#ea2853] hover:bg-pink-600 transition-all py-3 rounded-xl font-medium hover:scale-105"
          >
            <FaHome />
            Go Home
          </button>

          <button
            onClick={() => window.location.reload()}
            className="flex cursor-pointer items-center justify-center gap-2 bg-white/10 hover:bg-white/20 transition-all py-3 rounded-xl font-medium hover:scale-105"
          >
            <FaRedo />
            Retry
          </button>
        </div>

        {/* FOOTER */}
        <p className="text-xs text-gray-500 mt-6">
          Khabar Khao • Stay hungry 😄
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
