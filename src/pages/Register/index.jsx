import {user} from '../../data'
import {useState} from 'react'

import Aside from '../../components/Aside'
import Button from '../../components/Button'

import {supabase} from '../../assets/supabase'

function Input({type, name, id, className, onChange, value}){
  return(
    <input onChange={onChange} value={value} type={type} name={name} id={id} className={`${className} limpar text-black text-base p-1 rounded-md`}/>
  )
}

export default function Register(){

  const [input, setInput] = useState({})

  const handleChange = (e) =>{
    
    setInput(prevState => ({...prevState, [e.target.name]:e.target.value}))
    
  }

  function handleClear(){
    setInput({
      usuario:"",
      senha:"",
      nome:"",
      sobrenome:"",
      email:"",
      profissao:"",
      telefone: "",
      nascimento: "",
      cep: "",
      rua: "",
      cidade: "",
      estado: ""
    })
  }

  const handleRegister = async(e) =>{
  const { data, error } = await supabase
  .from('user')
  .insert([
    { 
      nome: input.nome, 
      sobrenome: input.sobrenome,
      email: input.email,
      profissao: input.profissao,
      celular: input.telefone,
      nascimento: input.nascimento,
      cep: input.cep,
      rua: input.rua,
      cidade: input.cidade,
      estado: input.estado,
   }])
  }

  return(
    <Aside>
      <div className="w-full h-screen flex items-center justify-center">
        <form className="flex flex-col items-center justify-center p-12 mx-3 gap-4 md:gap-0 w-full max-w-[900px] max-h-full text-[#EDF2F4] border-2 border-solid border-[#000] rounded-xl shadow-lg shadow-slate-900">
          <div className="flex gap-8 md:gap-0 w-full md:flex-col md:h-full">
            <div className="flex flex-col flex-1 gap-4 md:gap-0 h-[500px]  w-full">

              <label htmlFor="usuario">Usuário:</label>
              <Input onChange={handleChange} value={input.usuario} type="text" name="usuario" id="usuario" className="mb-8"/>

              <label htmlFor="nome">Nome:</label>
              <Input onChange={handleChange} value={input.nome} type="text" name="nome" id="nome"/>

              <label htmlFor="sobrenome">Sobrenome:</label>
              <Input onChange={handleChange} value={input.sobrenome} type="text" name="sobrenome" id="sobrenome"/>

              <label htmlFor="email">E-mail:</label>
              <Input onChange={handleChange} value={input.email} type='email' name="email" id="email"/>

              <label htmlFor="profissao">Profissão:</label>
              <Input onChange={handleChange} value={input.profissao} type="text" name="profissao" id="profissao"/>

              <label htmlFor="telefone">Telefone:</label>
              <Input onChange={handleChange} value={input.telefone} type='tel' name="telefone" id="telefone"/>

            </div>

            <div className="flex flex-col flex-1 h-[500px]  w-full gap-6 md:gap-0 items-center self-start mt-[-30px]  md:order-[-1]">

              <img src={user.img} className="rounded-full max-h-[120px] max-w-[120px] border-2 border-solid border-white"/>

              <label htmlFor="arquivo" className="p-4 rounded-[5px] border-2 border-[#EDF2F4] border-solid hover:bg-[rgb(255,255,255,1)] hover:text-black hover:cursor-pointer">Enviar</label>
              <Input type='file' name="arquivo" id="arquivo" className="hidden"/>

            </div>
            
            <div className="flex flex-col flex-1 gap-4 md:gap-0 h-[500px]  w-full ">

              <label htmlFor="senha">Senha:</label>
              <Input onChange={handleChange} value={input.senha} type="password" name="senha" id="senha" className="mb-8"/>

              <label htmlFor="cep">Cep:</label>
              <Input onChange={handleChange} value={input.cep} type="text" name="cep" id="cep"/>

              <label htmlFor="rua">Rua:</label>
              <Input onChange={handleChange} value={input.rua} type="text" name="rua" id="rua"/>

              <label htmlFor="cidade">Cidade:</label>
              <Input onChange={handleChange} value={input.cidade} type="text" name="cidade" id="cidade"/>

              <label htmlFor="estado">Estado:</label>
              <Input onChange={handleChange} value={input.estado} type="text" name="estado" id="estado"/>

              <label htmlFor="nascimento">Data de Nascimento:</label>
              <Input onChange={handleChange} type="date" name="nascimento" id="nascimento"/>

            </div>
          </div>

        <Button 
          className="p-3 w-48" 
          text="Enviar" 
          type="submit" 
          onClick={
           ((e)=>{
              e.preventDefault()
              handleRegister()
              handleClear()
          })}
        />

        </form>
      </div>
    </Aside>
  )
}