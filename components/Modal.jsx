import { MdClose } from 'react-icons/md'

function Modal({ isOpen, setIsOpen, children }) {
  return (
    // OVERLAY
    <div
      className={`${
        !isOpen && 'hidden'
      } fixed flex justify-center items-center top-0 bottom-0 right-0 left-0 z-[999] bg-slate-900 px-5 lg:px-0 bg-opacity-50`}
    >
      {/* MODAL CONTAINER */}
      <div className="bg-white flex flex-col gap-5 md:w-[650px] py-5 px-4 lg:p-6 rounded-md">
        {/* MODAL HEADER */}
        <div className="flex justify-between text-xl">
          <div className="flex flex-col gap-2">
            <h2 className="font-black">
              Where would you like to learn Digital Marketing Bootcamp?
            </h2>
            <p className="font-medium text-sm">
              You can choose to learn digital marketing in over 3 country ready
              or online. Find now your learning destination!
            </p>
          </div>
          <span
            onClick={() => setIsOpen(false)}
            className="cursor-pointer self-start p-1"
          >
            <MdClose size="1.2em" color="#838383" />
          </span>
        </div>
        <hr />
        {/* MODAL BODY */}
        {children}
      </div>
    </div>
  )
}

export default Modal
