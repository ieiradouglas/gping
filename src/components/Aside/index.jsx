import logoVertical from '../../assets/img/logoVertical.svg'

import Button from '../Button'

export default function Aside({children}){

  function logout(){
    window.localStorage.removeItem('logged')
  }

  return(
    <div className="flex flex-row h-screen">
      <aside className=" flex flex-col items-center justify-between flex-1 max-w-[180px] border-gray-900 border-r-2 border-solid shadow-lg shadow-slate-900 md:max-w-[80px]">
        <div>
          <img className="p-[10px] py-4 border-gray-900 border-b-2 border-solid " src={logoVertical} />
          <div className="flex flex-col gap-3 items-center mt-4 text-center uppercase text-[#EDF2F4]">
            <Button className="w-full max-w-[150px] h-10 p-2" text="Início" to="/home"/>
            <Button className="w-full max-w-[150px] h-10 p-2" text="Lista" to="/list"/>
            <Button  className="w-full max-w-[150px] h-10 p-2" text="Cadastro" to="/register"/>
          </div>
        </div>
        <Button onClick={()=>logout()} className="w-full max-w-[150px] h-10 p-2 mb-4 uppercase" text="Sair" to="/"/>
      </aside>
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
    
)
}