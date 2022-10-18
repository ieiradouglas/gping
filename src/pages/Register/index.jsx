
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {user} from '../../data'

import Aside from '../../components/Aside'

export default function Register(){

  const logged = window.localStorage.getItem('logged');
  const navigate = useNavigate();

  useEffect(()=>{
    if(!logged){
      navigate('/')
    }
  },[])

  return(
    <Aside>
      <div className="w-full h-full flex items-center justify-center">
        <form className="flex items-center justify-center gap-8 p-12 w-full max-w-[900px] max-h-[900px] text-[#EDF2F4] border-2 border-solid border-[#000] rounded-xl shadow-lg shadow-slate-900">
          <div className="flex flex-col flex-1 gap-4 h-[500px] w-full">

            <label for="usuario">Usuário:</label>
            <input type="text" name="usuario" id="usuario" className="text-black text-base p-1 rounded-md"/>

            <label for="nome">Nome:</label>
            <input type="text" name="nome" id="nome" className="text-black text-base p-1 rounded-md"/>

            <label for="sobrenome">Sobrenome:</label>
            <input type="text" name="sobrenome" id="sobrenome" className="text-black text-base p-1 rounded-md"/>

            <label for="email">E-mail:</label>
            <input type='email' name="email" id="email" className="text-black text-base p-1 rounded-md"/>

            <label for="profissao">Profissão:</label>
            <input type="text" name="profissao" id="profissao" className="text-black text-base p-1 rounded-md"/>

            <label for="telefone">Telefone:</label>
            <input type='tel' name="telefone" id="telefone" className="text-black text-base p-1 rounded-md"/>

          </div>

          <div className="flex flex-col flex-1 h-[500px] w-full gap-6 items-center self-start mt-[-40px]">
            <img src={user.img} className="rounded-full max-h-[120px] max-w-[120px]"/>
            <label for="file" className="w-12">Enviar</label>
            <input type='file' className="hidden"/>
          </div>
          
          <div className="flex flex-col flex-1 gap-4 h-[500px] w-full ">

            <label for="senha">Senha:</label>
            <input type="password" name="senha" id="senha" className="text-black text-base p-1 rounded-md"/>

            <label for="cep">Cep:</label>
            <input type="text" name="cep" id="cep" className="text-black text-base p-1 rounded-md"/>

            <label for="rua">Rua:</label>
            <input type="text" name="rua" id="rua" className="text-black text-base p-1 rounded-md"/>

            <label for="cidade">Cidade:</label>
            <input type="text" name="cidade" id="cidade" className="text-black text-base p-1 rounded-md"/>

            <label for="estado">Estado:</label>
            <input type="text" name="estado" id="estado" className="text-black text-base p-1 rounded-md"/>

          </div>
        </form>
      </div>
    </Aside>
  )
}