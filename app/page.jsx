'use client'

import { useState } from 'react'
import Image from 'next/image'
import imgdesktop from '../public/imgdesktop.svg'
import icon_list from '../public/icon-list.svg'
import Modal from './components/modal'

export default function Home() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <main className="flex items-center justify-center w-screen h-screen bg-slate-900">
      <div className="flex items-center bg-white p-4 rounded-3xl">
        <div className="flex flex-col gap-6 px-16 max-w-xl">
          <h1 className="font-bold text-6xl">Stay updated!</h1>
          <p className="text-lg">
            Join 60,000+ product managers receiving monthly updates on: aaaaaaaaaaaaaaaaaaaaaaaaa
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
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@company.com"
              className="cursor-pointer border rounded-lg border-slate-400 p-4"
            />
          </div>

          <div className="text-white">
            <button
              onClick={() => setOpenModal(true)}
              id="btn"
              className="bg-gray-800 w-full py-4 rounded-lg duration-500"
            >
              Subscribe to monthly newslatter
            </button>
          </div>
        </div>

        <div>
          <Image src={imgdesktop} alt="logo" />
        </div>
      </div>

      <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)} />
    </main>
  )
}
