import {NavLink} from 'react-router-dom'

export default function Button({to, className, onClick, children}){
  const normalLink = className + ' text-sm text-center rounded-[5px] border-2 border-[#EDF2F4] border-solid hover:bg-[rgb(255,255,255,1)] hover:text-black'
  const active = 'bg-slate-500 ' + normalLink
  
  return(
    <NavLink onClick={onClick} to={to} className={({isActive}) => isActive ? active : normalLink}>{children}</NavLink>
  )
}