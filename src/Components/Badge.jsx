import React from 'react'
import { cn } from '../Utils'

const Badge = ({className,children}) => {
  return (
    <div className={cn(`text-[10px] font-semibold bg-(--second-button-normal-state) py-0.5 px-2 rounded-xl text-white flex justify-center items-center`,className)}>{children}</div>
  )
}

export default Badge