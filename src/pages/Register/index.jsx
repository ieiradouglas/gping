import React from 'react'
import {user} from '../../data'
import {useEffect, useState, useRef} from 'react'

import Aside from '../../components/Aside'
import Button from '../../components/Button'

import {supabase} from '../../assets/supabase'

/* function Input({type, name, id, className, onChange, value, ref}){
  return(
    <input 
      onChange={onChange} 
      value={value} 
      type={type} 
      name={name} 
      id={id}
      className={`${className} fields text-black outline-none text-base p-1 rounded-md`}
      ref={ref}
    />
    )
} */


const Input = React.forwardRef(({type, name, id, className, onChange, value}, ref) => (
  <input 
    onChange={onChange} 
    value={value} 
    type={type} 
    name={name} 
    id={id}
    className={`${className} fields text-black outline-none text-base p-1 rounded-md`}
    ref={ref}
  />
));


export default function Register(){


  const inputRef = useRef(null)
  const imgRef = useRef(null)

  const [input, setInput] = useState({})
    
  const handleChange = (e) => {

      setInput(prevState => ({...prevState, [e.target.name]:e.target.value}))

  }
  
 /*    
  const handleClear = () =>{
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
    
  } */
  
  const handleRegister = async(e) =>{
    /* Upload() */
    imgRef.current.src = inputRef.current.files[0]
    
    async function Upload(){


      const {data, error} = await supabase.storage
      .from('gping')
      .upload(imgRef.current.src)
      error != null ? console.log(error) : console.log('Sucesso!')
    }



    async function Register(){
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

    
  }

  return(
    <Aside>
      <div className="w-full h-auto flex items-start justify-center py-4">
        <form className="flex flex-col items-center justify-center p-12 mx-3 gap-4 md:gap-4 w-full max-w-[900px] max-h-full text-[#EDF2F4] border-2 border-solid border-[#000] rounded-xl shadow-lg shadow-slate-900">

          <div className="flex gap-8 md:gap-4 w-full md:flex-col md:h-full">
            <div className="flex flex-col flex-1 gap-4 md:gap-4 h-[500px]  w-full">

              <label htmlFor="usuario">Usuário:</label>
              <Input onChange={(e)=>{handleChange(e)}} type="text" name="usuario" id="usuario" className="mb-8"/>

              <label htmlFor="nome">Nome:</label>
              <Input onChange={(e)=>{handleChange(e)}} type="text" name="nome" id="nome"/>

              <label htmlFor="sobrenome">Sobrenome:</label>
              <Input onChange={(e)=>{handleChange(e)}} type="text" name="sobrenome" id="sobrenome"/>

              <label htmlFor="email">E-mail:</label>
              <Input onChange={(e)=>{handleChange(e)}} type='email' name="email" id="email"/>

              <label htmlFor="profissao">Profissão:</label>
              <Input onChange={(e)=>{handleChange(e)}} type="text" name="profissao" id="profissao"/>

              <label htmlFor="telefone">Telefone:</label>
              <Input onChange={(e)=>{handleChange(e)}} type='tel' name="telefone" id="telefone"/>

            </div>

            <div className="flex flex-col flex-1 h-[500px]  w-full gap-6 md:gap-4 items-center self-start mt-[-30px]  md:order-[-1]">

              <img ref={imgRef} src={user.img} className="rounded-full max-h-[120px] max-w-[120px] border-2 border-solid border-white"/>

              <label htmlFor="arquivo" className="p-4 rounded-[5px] border-2 border-[#EDF2F4] border-solid hover:bg-[rgb(255,255,255,1)] hover:text-black hover:cursor-pointer">Selecionar</label>
              <Input ref={inputRef} type='file' name="arquivo" id="arquivo" className="hidden"/>

            </div>
            
            <div className="flex flex-col flex-1 gap-4 md:gap-4 h-[500px]  w-full ">

              <label htmlFor="senha">Senha:</label>
              <Input onChange={(e)=>{handleChange(e)}} type="password" name="senha" id="senha" className="mb-8"/>

              <label htmlFor="cep">Cep:</label>
              <Input onChange={(e)=>{handleChange(e)}} type="text" name="cep" id="cep"/>

              <label htmlFor="rua">Rua:</label>
              <Input onChange={(e)=>{handleChange(e)}} type="text" name="rua" id="rua"/>

              <label htmlFor="cidade">Cidade:</label>
              <Input onChange={(e)=>{handleChange(e)}} type="text" name="cidade" id="cidade"/>

              <label htmlFor="estado">Estado:</label>
              <Input onChange={(e)=>{handleChange(e)}} type="text" name="estado" id="estado"/>

              <label htmlFor="nascimento">Data de Nascimento:</label>
              <Input onChange={(e)=>{handleChange(e)}} type="date" name="nascimento" id="nascimento"/>

            </div>
          </div>

        <button
          className="p-3 w-48 text-sm text-center rounded-[5px] border-2 border-[#EDF2F4] border-solid hover:bg-[rgb(255,255,255,1)] hover:text-black" 
          type="submit" 
          onClick={
           ((e)=>{
              e.preventDefault()
              console.log(inputRef.current.files[0])
              console.log(imgRef.current.src)
              handleRegister()
              /* handleClear() */
          })}>Enviar
        </button>

        </form>
      </div>
    </Aside>
  )
}