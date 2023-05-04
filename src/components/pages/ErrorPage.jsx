import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'


const ErrorPage = () => {
  const ErrorByuseRouterError = useRouteError()
  // distructuring  it
  const {error, status, statusText  } = ErrorByuseRouterError
  const message = error.message

  
  return (
    <section className='flex flex-col gap-5 items-center h-screen justify-center bg-slate-300 text-gray-900'>
      <Player
        src={status == 404? 'https://assets9.lottiefiles.com/packages/lf20_suhe7qtm.json' : "https://assets9.lottiefiles.com/private_files/lf30_dxynp73g.json"}
        className="player"
        loop
        style={{ height: '200px', width: '300px' }}
        autoplay
      />
      <div className='text-center'>
        <h1 className='text-9xl font-bold text-red-800'>{status == 404 ? "" : status + ' ' + statusText}</h1>
        {
          status == 404? <p className='text-4xl text-red-700 my-5 font-bold'>{statusText}</p> : ''
        }
        <p className='text-xl text-orange-700 '>{message}</p>

      </div>

      <Link to='/' className='btn font-bold'>
        Back to homepage
      </Link>

    </section>
  )
}

export default ErrorPage