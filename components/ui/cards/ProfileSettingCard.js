import React from 'react'
import { FaChevronRight } from "react-icons/fa6";

const ProfileSettingCard = ({ setting }) => {
  return (
    <div key={setting.id} className='flex items-center justify-between my-4 cursor-pointer'>
        <div className='flex flex-col gap-2'>
            <p className='text-sm sm:text-md font-semibold'>{setting.title}</p>
        </div>

        <div className='flex items-center justify-center cursor-pointer'>
            <FaChevronRight size={16} />
        </div>
    </div>
  )
}

export default ProfileSettingCard