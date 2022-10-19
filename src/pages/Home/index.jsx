
import Aside from '../../components/Aside'
import {user} from '../../data'

export default function Home(){
  
  return( 

    <Aside>
      <div className="flex justify-center flex-col">
        <div className="flex flex-wrap gap-5 justify-center mt-4 mx-3">
          <figure className="flex flex-1 gap-5 flex-col items-center p-9 max-w-[350px] border-2 border-solid border-[#000] rounded-xl box-border md:max-w-full shadow-lg shadow-slate-900">
            <img className="rounded-full max-w-[150px] max-h-[150px] border-2 border-solid border-white" src={user.img}/>
            <figcaption>{user.nome}</figcaption>
          </figure>

          <div className="flex-1 w-full md:min-w-[250px] min-h-[200px]  ">
            <textarea className="w-full min-h-full rounded-xl p-4 outline-none resize-none text-slate-900 shadow-lg shadow-slate-900" placeholder="Digite aqui seu resumo..."/>
          </div>

        </div>

        <div className="flex flex-wrap justify-center my-5 mx-3 p-7 gap-4 border-2 border-solid border-[#000] rounded-xl shadow-lg shadow-slate-900">
          <div className="flex-1 flex flex-col flex-wrap gap-4 items-center min-w-[300px]">
            <h3 className="font-bold">Nome:</h3>
            <p>{user.nome}</p>
            <h3 className="font-bold">Sobrenome:</h3>
            <p>{user.sobrenome}</p>
            <h3 className="font-bold">E-mail:</h3>
            <p>{user.email}</p>
            <h3 className="font-bold">Profissão:</h3>
            <p>{user.profissao}</p>
            <h3 className="font-bold">Celular:</h3>
            <p>{user.celular}</p>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-center min-w-[300px]">
            <h3 className="font-bold">Cep:</h3>
            <p>{user.cep}</p>
            <h3 className="font-bold">Rua:</h3>
            <p>{user.rua}</p>
            <h3 className="font-bold">Cidade:</h3>
            <p>{user.cidade}</p>
            <h3 className="font-bold">Estado:</h3>
            <p>{user.estado}</p>
          </div>
        </div>
      </div>
    </Aside>
  )
}