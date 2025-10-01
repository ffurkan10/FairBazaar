import UserCard from '@/components/ui/cards/UserCard';
import React from 'react'
import { profileSettings } from '@/data/profileSettings';
import ProfileSettingCard from '@/components/ui/cards/ProfileSettingCard';
import Breadcrumbs from '@/components/breadcrumb';
import AddressCard from '@/components/ui/cards/AddressCard';
import LogoutButton from '@/components/ui/buttons/LogoutButton';
import { getOrders } from '@/lib/api';
import OrderContainer from '@/components/containers/OrderContainer';

const Profile = async () => {

  const {data} = await getOrders()

  console.log("data:", data.length);
  

  return (
    <div className='container'>
      <Breadcrumbs data={[{ label: 'Home', href: '/' }, { label: 'Profile', href: '/profile' }]} />

      <AddressCard />

      <UserCard />

      <div className='bg-white p-4 rounded-lg shadow-[var(--shadow-custom)] w-full mt-6'>
        {profileSettings.map((setting) => (
          <ProfileSettingCard key={setting.id} setting={setting} />
        ))}
      </div>

      <div className='flex flex-col mt-6'>
        <p className='text-lg font-semibold'>Wishlist</p>

        <OrderContainer />
      </div>

      <div className='w-full flex items-center justify-end mt-6'>
        <LogoutButton />
      </div>
    </div>
  )
}

export default Profile