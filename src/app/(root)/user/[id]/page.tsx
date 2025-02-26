import React from 'react'
import { auth } from '../../../../../auth';
import UserDetails from '@/components/UserDetails';

const User = async({params}:{params: Promise<{id: number}>}) => {

    const session = await auth()

  const id = (await params).id;

  return (
    <div>
   <UserDetails id={id} />
    </div>
  )
}

export default User