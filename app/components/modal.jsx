import Image from 'next/image'
import icon_suc from '../../public/icon-success.svg'

export default function Modal({ isOpen, setOpenModal }) {
  if (isOpen) {
    return (
      <div className="fixed w-screen h-screen flex items-center justify-center bg-slate-900/30 backdrop-blur ">
        <div className="rounded-3xl p-10 max-w-lg flex flex-col gap-6 bg-white">
          <Image src={icon_suc} alt="icon list" />
          <h1 className="font-bold text-6xl">Thanks for subscribing!</h1>
          <p className="text-lg">
            A confirmation email has been sent to
            <span className="font-bold"> email@company.com</span>. Please
            open it and click the button inside to confirm your subscription.
          </p>
          <button
            onClick={setOpenModal}
            id="btn"
            className="bg-gray-800 w-full py-4 rounded-lg duration-500 text-white"
          >
            Dismiss message
          </button>
        </div>
      </div>
    )
  }
  return null
}
