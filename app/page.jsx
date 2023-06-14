'use client'

import { useState } from 'react'
import Image from 'next/image'
import icon_list from '../public/icon-list.svg'
import Modal from './components/modal'
import ResponsiveImage from './components/ResponsiveImage'

export default function Home() {
  const [openModal, setOpenModal] = useState(false)

  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')

  const handleInputChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const errorStyle = document.getElementById('email')

    if (email === '' || !validEmail.test(email)) {
      setErrorMessage('Valid email required!')
      errorStyle.classList.remove('border-slate-400')
      errorStyle.classList.add(
        'border-custom-red',
        'placeholder:text-custom-red',
        'text-custom-red'
      )
    } else {
      setOpenModal(true)
    }
  }

  return (
    <main className="flex items-center justify-center w-screen h-screen bg-slate-900">
      <div className="flex items-center bg-white p-4 rounded-3xl max-lg:flex-col-reverse max-lg:pt-0">
        <div className="flex flex-col gap-6 px-16 max-w-xl max-lg:px-0">
          <h1 className="font-bold text-6xl">Stay updated!</h1>
          <p className="text-lg">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <Image src={icon_list} alt="icon list" />
              <p>Product discovery and building what matters</p>
            </div>
            <div className="flex gap-4">
              <Image src={icon_list} alt="icon list" />
              <p>Measuring to ensure updates are success</p>
            </div>
            <div className="flex gap-4">
              <Image src={icon_list} alt="icon list" />
              <p>And much more!</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="font-bold flex justify-between text-sm"
            >
              Email address
              {errorMessage && (
                <p className="text-custom-red ">{errorMessage}</p>
              )}
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email@company.com"
              className="cursor-pointer border rounded-lg border-slate-400 p-4 mb-4"
              onChange={handleInputChange}
            />
            <button
              id="btn"
              className="bg-gray-800 w-full py-4 rounded-lg duration-500 text-white"
            >
              Subscribe to monthly newslatter
            </button>
          </form>
        </div>

        <div>
          <ResponsiveImage/>
        </div>
      </div>

      <Modal
        isOpen={openModal}
        setOpenModal={() => setOpenModal(!openModal)}
        email={email}
      />
    </main>
  )
}
