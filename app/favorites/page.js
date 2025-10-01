import Breadcrumbs from '@/components/breadcrumb'
import FavoriteContent from '@/components/favorites/FavoriteContent'
import React from 'react'

const Favorites = () => {
  return (
    <div className='container'>
        <Breadcrumbs data={[{ label: 'Home', href: '/' }, { label: 'Favorites', href: '/favorites' }]} />

        <FavoriteContent />
    </div>
  )
}

export default Favorites