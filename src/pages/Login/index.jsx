import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom'

import logoHorizontal from '../../assets/img/logoHorizontal.svg'
import { useState } from 'react';

export default function Login(){

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const notify = (message) => toast(message)

  const navigate = useNavigate()

  function Entry(){
    if(login == 'admin' && password == 'admin'){
      window.localStorage.setItem('logged', true)
      navigate('/home')
    }else{
      console.log(login)
      console.log(password)
      notify("Usuário ou senha inválido!")
    }
    
  }

  return(

    <main className="flex items-center justify-center h-screen text-sm">
      <section className="flex flex-col items-center justify-center w-full max-w-[900px] h-full max-h-[500px]">

        <img className="max-w-[150px]" src={logoHorizontal}/>

        <div className="flex flex-col w-full max-w-[300px] mt-5 gap-5 text-[#000]">
          <div className="h-8 flex w-full max-w-[300px]">
            <input onChange={(e)=>setLogin(e.target.value)} className="flex-1 p-3 rounded-sm outline-none h-5 focus:h-[40px] transition-all duration-500" id="login" type="text" placeholder="Digite aqui seu usuário..."/>
          </div>
          
          <div className="h-8 flex w-full max-w-[300px]">
            <input onChange={(e)=>setPassword(e.target.value)} className="flex-1 p-3 rounded-sm outline-none h-5 focus:h-[40px] transition-all duration-500" id="password" type="password" placeholder="Digite aqui sua senha..."/>
          </div>
          
          <button onClick={()=>Entry()} className="self-center text-[#EDF2F4] border-2 border-solid rounded-md w-full max-w-[150px] h-11 hover:bg-[#000]">Entrar</button>

        </div>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  )
}