import React from 'react'
import job from '../../db/jobs.json'
console.log(job);

type IProps={
    children: React.ReactNode;
    bg?: string;
}

const Card:React.FC<IProps> = ({children, bg='bg-gray-100'}) => {
  return (
    <div className={`${bg} bg-gray-10 p-6 rouded-lg shadow-md`}>
        {children}
    </div>
  )
}

export default Card