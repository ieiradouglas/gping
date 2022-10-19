import {user} from '../../data'

import Aside from '../../components/Aside'

function Input({type, name, id, className}){
  return(
    <input type={type} name={name} id={id} className={`${className} text-black text-base p-1 rounded-md`}/>
  )
}

export default function Register(){

  return(
    <Aside>
      <div className="w-full h-full flex items-center justify-center">
        <form className="flex items-center justify-center gap-8 p-12 w-full max-w-[900px] max-h-[900px] text-[#EDF2F4] border-2 border-solid border-[#000] rounded-xl shadow-lg shadow-slate-900">
          <div className="flex flex-col flex-1 gap-4 h-[500px] w-full">

            <label for="usuario">Usuário:</label>
            <Input type="text" name="usuario" id="usuario" className="mb-8"/>

            <label for="nome">Nome:</label>
            <Input type="text" name="nome" id="nome"/>

            <label for="sobrenome">Sobrenome:</label>
            <Input type="text" name="sobrenome" id="sobrenome"/>

            <label for="email">E-mail:</label>
            <Input type='email' name="email" id="email"/>

            <label for="profissao">Profissão:</label>
            <Input type="text" name="profissao" id="profissao"/>

            <label for="telefone">Telefone:</label>
            <Input type='tel' name="telefone" id="telefone"/>

          </div>

          <div className="flex flex-col flex-1 h-[500px] w-full gap-6 items-center self-start mt-[-30px]">

            <img src={user.img} className="rounded-full max-h-[120px] max-w-[120px] border-2 border-solid border-white"/>

            <label for="arquivo" className="p-4 rounded-[5px] border-2 border-[#EDF2F4] border-solid hover:bg-[rgb(255,255,255,1)] hover:text-black hover:cursor-pointer">Enviar</label>
            <Input type='file' name="arquivo" id="arquivo" className="hidden"/>

          </div>
          
          <div className="flex flex-col flex-1 gap-4 h-[500px] w-full ">

            <label for="senha">Senha:</label>
            <Input type="password" name="senha" id="senha" className="mb-8"/>

            <label for="cep">Cep:</label>
            <Input type="text" name="cep" id="cep"/>

            <label for="rua">Rua:</label>
            <Input type="text" name="rua" id="rua"/>

            <label for="cidade">Cidade:</label>
            <Input type="text" name="cidade" id="cidade"/>

            <label for="estado">Estado:</label>
            <Input type="text" name="estado" id="estado"/>

          </div>
        </form>
      </div>
    </Aside>
  )
}