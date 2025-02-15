import { formatDate } from '@/lib/utils'
import React from 'react'

const StartupHeader = ({createdAt,title, description}:{createdAt:string; title: string; description:string }) => {
  return (
    <section className="red_container">
      <div className='tag'>
    {formatDate(createdAt)}
      </div>
      <p className='heading'>
        {title}
      </p>
      <p className='sub-heading'>
        {description}
      </p>
    </section>
  )
}

export default StartupHeader