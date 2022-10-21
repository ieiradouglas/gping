import Aside from '../../components/Aside'
import {user} from '../../data'
import {supabase} from '../../assets/supabase'
import { useEffect, useState } from 'react'

import {MagnifyingGlass} from 'react-loader-spinner'

const ListItem = ({img, nome, profissao}) =>{
  return(
    <div className="flex items-center justify-between p-3 rounded-xl w-full max-w-[280px] max-h-[100px] border-2 border-solid border-[#000] hover:bg-[rgba(255,255,255,0.3)] hover:cursor-pointer shadow-lg shadow-slate-900">
      <div className="flex-1 w-full">
        <img className=" max-w-[80px] rounded-full border-2 border-solid border-white"src={user.img}/>
      </div>
      <div className="flex-1">
        <h2 className="text-base">{nome}</h2>
        <h3 className="text-xs">{profissao}</h3>
      </div>
    </div>
  )
}



export default function List(){
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  const fetchUsers = async(e) =>{
    const {data} = await supabase
    .from('user')
    .select()
    setUsers(data)
    setLoading(false)
  }
  
  useEffect(()=>{
    fetchUsers()
  },[])

  return(
    <Aside>
      <main className="flex flex-wrap justify-center gap-4 p-3">
        {
          loading ? <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor = 'transparent'
          color = '#fff'
        /> 
        :
          users.map(data =>
          <ListItem
            key={data.created_at}
            img={user.img}
            nome={data.nome}
            profissao={data.profissao}
          />)
        }
      </main>
    </Aside>
  )
}