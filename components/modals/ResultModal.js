"use client"
import { useEffect } from 'react'
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useModal } from '@/context/ModalContext';
import Button from '../ui/buttons/Button';

const ResultModal = () => {
    const { resultModalData, setResultModalData, showModal } = useModal()

  useEffect(() => {
    const timer = setTimeout(() => {
      setResultModalData(null);
      if(resultModalData?.link){
        window.location.href = resultModalData.link;
      }
    }, 3000);

    return () => clearTimeout(timer); 
  }, [resultModalData?.link]);

  if (!resultModalData) return null;

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black/60 flex justify-center items-center z-[9999] shadow-lg">
      <div className="w-auto h-auto p-5 rounded-lg flex flex-col justify-center items-center bg-white shadow-[var(--shadow-custom)] gap-5">
        <div
            className={`w-16 h-16 rounded-full flex items-center justify-center ${
              resultModalData?.resultType === "success" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
            }`}
          >
            {resultModalData?.resultType === "success" ? (
              <FaCheck className="w-8 h-8" />
            ) : (
              <IoMdClose className="w-8 h-8" />
            )}
          </div>
        <p className='text-[var(--primary-text)]'>{resultModalData.message}</p>
        <Button width={"200px"} handleClick={() => dispatch(showModal(null))} text={"Close"} />
      </div>
    </div>
  )
}

export default ResultModal