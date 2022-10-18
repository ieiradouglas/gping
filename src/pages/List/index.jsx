
import Aside from '../../components/Aside'
import {user} from '../../data'

import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const ListItem = () =>{
  return(
    <div className="flex items-center gap-5 p-3 rounded-xl justify-center w-full max-w-[280px] max-h-[100px] border-2 border-solid border-[#000] hover:bg-[rgba(255,255,255,0.3)] hover:cursor-pointer shadow-lg shadow-slate-900">
      <div className="max-w-[80px] rounded-full overflow-hidden border-2 border-solid border-white">
        <img src={user.img}/>
      </div>
      <div className="">
        <h2 className="text-base">{user.nome}</h2>
        <h3 className="text-xs">{user.profissao}</h3>
      </div>
    </div>
  )
}

export default function List(){

  const logged = window.localStorage.getItem('logged');
  const navigate = useNavigate();

  useEffect(()=>{
    if(!logged){
      navigate('/')
    }
  },[])
  
  return(
    <Aside>
      <main className="flex flex-wrap justify-center gap-4 p-3">
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </main>
    </Aside>
  )
}