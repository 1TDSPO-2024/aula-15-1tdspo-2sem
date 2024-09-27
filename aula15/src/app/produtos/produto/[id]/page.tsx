
export default function Produto({params}:{params:{id:number}}) {

    

  return (
    <div>
        <h1>Produto</h1>
        <p>ID : {params.id}</p>
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