import {Link} from 'react-router-dom'

export default function Button({to, text, className, onClick}){
  return(
    <Link onClick={onClick} to={to} className={className+" text-sm text-center rounded-[5px] border-2 border-[#EDF2F4] border-solid hover:bg-[rgb(255,255,255,1)] hover:text-black"}>{text}</Link>
  )
}