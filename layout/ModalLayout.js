"use client"
import WishlistUpdateModal from '@/components/modals/WishlistUpdateModal';
import ResultModal from '@/components/modals/ResultModal';
import { useModal } from '@/context/ModalContext';

const ModalLayout = () => {

    const { modalType } = useModal();

  return (
    <>
        {modalType === "result" && <ResultModal />}
        {modalType === "wishlistUpdate" && <WishlistUpdateModal />}
    </>
  )
}

export default ModalLayout