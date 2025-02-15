import StartupInfo from '@/components/StartupInfo'
import React from 'react'

const StartupDetails = async ({params}:{params: Promise<{id:number}>}) => {

    const id = (await params).id;

  return (
    <div>
        <StartupInfo id={id} />
    </div>
  )
}

export default StartupDetails