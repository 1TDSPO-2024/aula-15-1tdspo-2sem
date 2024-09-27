import { TipoProduto } from "@/types";
import { useEffect, useState } from "react";
export default function Produto({params}:{params:{id:number}}) {

  const [produto, setProduto] = useState<TipoProduto>()

  useEffect(() => {
    const chamadaApi = async () => {
      const response = await fetch("http://localhost:3000/api/base-produtos/1");
      const dados = await response.json();
      setProduto(dados);
    };
    chamadaApi();
  }, [])
  


  return (
    <div>
      <div className="mx-auto w-60">
        <h1>Produto</h1>
        <p>ID : {params.id}</p>
        <p>Nome : {produto?.nome}</p>
        <p>Marca : {produto?.marca}</p>
        <p>Cor : {produto?.cor}</p>
        <p>Modelo : {produto?.modelo}</p>
        <p>Quantidade : {produto?.quantidade}</p>
        <p>Categoria : {produto?.categoria}</p>
        <figure>

        </figure>
        </div>
    </div>
  )
}


// export default function Produto({params}:{params:{id:number}}) {
//     return (
//       <div>
//           <h2>Produto</h2>
//           <div>
//               <h3>ID: {params.id}</h3>
//           </div>
//       </div>
//     )
//   }