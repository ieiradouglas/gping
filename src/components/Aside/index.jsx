import { useEffect } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

import Button from '../Button'

import logo from '../../assets/img/logo.svg'
import logoVertical from '../../assets/img/logoVertical.svg'
import iconUser from '../../assets/img/user.svg'
import iconUsers from '../../assets/img/users.svg'
import iconAddUser from '../../assets/img/user-plus.svg'
import iconLogout from '../../assets/img/log-out.svg'

export default function Aside({children}){

  const logged = window.localStorage.getItem('logged');
  const navigator = useNavigate();

  useEffect(()=>{
    logged != 'true' ? navigator('/') : false
  },[])


  function logout(){
    window.localStorage.removeItem('logged')
  }

  return(
    <div className="flex flex-row h-screen">
      <aside className=" flex flex-col items-center justify-between flex-1 max-w-[180px] border-gray-900 border-r-2 border-solid shadow-lg shadow-slate-900 md:hidden md:max-w-[80px]">
        <div>
          <img className="p-[10px] py-4 border-gray-900 border-b-2 border-solid" src={logoVertical} />
          <div className="flex flex-col gap-3 items-center mt-4 text-center uppercase text-[#EDF2F4]">
            <Button className="w-full max-w-[150px] h-10 p-2" to="/home">Início</Button>
            <Button className="w-full max-w-[150px] h-10 p-2" to="/list">Lista</Button>
            <Button  className="w-full max-w-[150px] h-10 p-2" to="/register">Cadastro</Button>
          </div>
        </div>
        <Button onClick={()=>logout()} className="w-full max-w-[150px] h-10 p-2 mb-4 uppercase" to="/">Sair</Button>
      </aside>

      <aside className="hidden flex-col items-center justify-between flex-1 max-w-[180px] border-gray-900 border-r-2 border-solid shadow-lg shadow-slate-900 md:flex md:max-w-[80px]">
        <div>
          <img className="p-[10px] py-4 border-gray-900 border-b-2 border-solid " src={logo} />
          <div className="flex flex-col gap-3 items-center mt-4 text-center uppercase text-[#EDF2F4]">
            <Button className="w-full max-w-[50px] p-2 flex justify-center align-center" to="/home"><img src={iconUser}/></Button>
            <Button className="w-full max-w-[50px] p-2 flex justify-center align-center" to="/list"><img src={iconUsers}/></Button>
            <Button  className="w-full max-w-[50px] p-2 flex justify-center align-center" to="/register"><img src={iconAddUser}/></Button>
          </div>
        </div>
        <Button onClick={()=>logout()} className="w-full max-w-[50px] p-2 mb-20 flex justify-center align-center" to="/"><img src={iconLogout}/></Button>
      </aside>
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
    
)
}