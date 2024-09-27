import { useEffect, useState } from "react";
export default function Produto({params}:{params:{id:number}}) {

    

  return (
    <div>
        <h1>Produto</h1>
        <p>ID : {params.id}</p>
        useEffect(() => {
  const chamadaId = async ()=> {
    const response1 = await fetch("http://localhost:3000/api/base-produtos");
    const dados = await response.json();
    setProdutos(dados);
  };
  chamadaDaApi();
}, [])

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