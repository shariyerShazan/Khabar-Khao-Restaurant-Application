import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { Routes } from './routes/Routes';

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={googleClientId}>
        <RouterProvider router={Routes} />
        <ToastContainer />
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>,
);
