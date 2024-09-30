import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

function AuthFailure() {
  return (
    <div
      className={
        'background flex h-screen w-screen flex-col items-center justify-center'
      }
    >
      <h1 className={'text-4xl font-bold text-white'}>
        <span className={'font-semibold text-red-500'}>(!)</span>
        &nbsp;Authentication Failure&nbsp;
        <span className={'font-semibold text-red-500'}>(!)</span>
      </h1>
      <h2 className={'text-xl text-slate-400'}>Program will now exit</h2>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthFailure />
  </React.StrictMode>,
);
