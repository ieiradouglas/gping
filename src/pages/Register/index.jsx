import React from 'react'
import {user} from '../../data'
import {useEffect, useState, useRef} from 'react'

import Aside from '../../components/Aside'

import {supabase} from '../../assets/supabase'

const Input = React.forwardRef(({type, name, id, className, onChange, value, onBlur}, ref) =>{

  return(
    <input
      onBlur={onBlur}
      onChange={onChange} 
      value={value} 
      type={type} 
      name={name} 
      id={id}
      className={`${className} fields text-black outline-none text-base p-1 rounded-md`}
      ref={ref}
    />
)});

export default function Register(){
  
  const inputImg = useRef(null)
  const imgRef = useRef(null)
  const inputRua = useRef(null)

  const [input, setInput] = useState({ //Objeto utilizado para enviar as informações do usuário
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

  
  const handleChange = (e) => { // cria um objeto com o nome do campo "INPUT" com o valor do INPUT.
      setInput(prevState => ({...prevState, [e.target.name]:e.target.value})) 
  }

  const handleClear = () =>{ //Apaga os dados do meu state Input
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

  const handleRegister = async(e) =>{ // Função para registrar os dados
   
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
          picture: input.usuario,
          usuario:input.usuario,
          senha:input.senha,
      }])
      error != null ? alert(error) : null

      const {data2, error2} = await supabase.storage
        .from('gping')
        .upload(`pictures/${input.usuario}.jpg`, inputImg.current.files[0])
        error2 != null ? alert(error2) : null
      
    //handleClear()

  }

  const updateImage = async function(e){ // Função para atualizar a imagem no FRONT

    let reader = new FileReader();

    reader.onload = function(){
      let dataUrl = reader.result;
      imgRef.current.src = dataUrl;
    }

    reader.readAsDataURL(e.target.files[0])

  }

  const fetchCep = function(cep){
    cep.length == 8 ?
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then( resposta => {
      return resposta.json()
    })
    .then ( json => {
      setInput(prevstate=>({
        ...prevstate, 
        estado:json.uf,
        rua:json.logradouro, 
        cidade:json.localidade,
      }))
    }) :
    console.log('cep errado')
  }
  
  return(
    <Aside>
      <div className="w-full h-auto flex items-start justify-center py-4">
        <form className="flex flex-col items-center justify-center p-12 mx-3 gap-4 md:gap-4 w-full max-w-[900px] max-h-full text-[#EDF2F4] border-2 border-solid border-[#000] rounded-xl shadow-lg shadow-slate-900">

          <div className="flex gap-8 md:gap-4 w-full md:flex-col md:h-full">
            <div className="flex flex-col flex-1 gap-4 md:gap-4 h-[500px]  w-full">

              <label htmlFor="usuario">Usuário:</label>
              <Input onChange={(e)=>{handleChange(e)}} value={input.usuario} type="text" name="usuario" id="usuario" className="mb-8" />

              <label htmlFor="nome">Nome:</label>
              <Input onChange={(e)=>{handleChange(e)}} value={input.nome} type="text" name="nome" id="nome"/>

              <label htmlFor="sobrenome">Sobrenome:</label>
              <Input onChange={(e)=>{handleChange(e)}} value={input.sobrenome} type="text" name="sobrenome" id="sobrenome"/>

              <label htmlFor="email">E-mail:</label>
              <Input onChange={(e)=>{handleChange(e)}} value={input.email} type='email' name="email" id="email"/>

              <label htmlFor="profissao">Profissão:</label>
              <Input onChange={(e)=>{handleChange(e)}} value={input.profissao} type="text" name="profissao" id="profissao"/>

              <label htmlFor="telefone">Telefone:</label>
              <Input onChange={(e)=>{handleChange(e)}} value={input.telefone} type='tel' name="telefone" id="telefone"/>

            </div>

            <div className="flex flex-col flex-1 h-[500px]  w-full gap-6 md:gap-4 items-center self-start mt-[-30px]  md:order-[-1]">

              <img ref={imgRef} className="max-h-[160px] max-w-[160px] border-2 border-dashed border-white bg-auto"/>

              <label htmlFor="arquivo" className="p-4 rounded-[5px] border-2 border-[#EDF2F4] border-solid hover:bg-[rgb(255,255,255,1)] hover:text-black hover:cursor-pointer">Selecionar</label>
              <Input onChange={(e)=>updateImage(e)} ref={inputImg} type='file' name="arquivo" id="arquivo" className="hidden"/>

            </div>
            
            <div className="flex flex-col flex-1 gap-4 md:gap-4 h-[500px]  w-full ">

              <label htmlFor="senha">Senha:</label>
              <Input onChange={(e)=>{handleChange(e)}} value={input.senha} type="password" name="senha" id="senha" className="mb-8"/>

              <label htmlFor="cep">Cep:</label>
              <Input onChange={(e)=>{handleChange(e)}} onBlur={(e)=>{fetchCep(input.cep)}} value={input.cep} type="text" name="cep" id="cep"/>

              <label htmlFor="rua">Rua:</label>
              <Input onChange={(e)=>{handleChange(e)}} ref={inputRua} value={input.rua} type="text" name="rua" id="rua"/>

              <label htmlFor="cidade">Cidade:</label>
              <Input onChange={(e)=>{handleChange(e)}} value={input.cidade} type="text" name="cidade" id="cidade"/>

              <label htmlFor="estado">Estado:</label>
              <Input onChange={(e)=>{handleChange(e)}} value={input.estado} type="text" name="estado" id="estado"/>

              <label htmlFor="nascimento">Data de Nascimento:</label>
              <Input onChange={(e)=>{handleChange(e)}} value={input.nascimento} type="date" name="nascimento" id="nascimento"/>

            </div>
          </div>

        <button
          className="p-3 w-48 text-sm text-center rounded-[5px] border-2 border-[#EDF2F4] border-solid hover:bg-[rgb(255,255,255,1)] hover:text-black" 
          onClick={
           ((e)=>{
              e.preventDefault()
              handleRegister()
          })}>Enviar
        </button>

        </form>
      </div>
    </Aside>
  )
}