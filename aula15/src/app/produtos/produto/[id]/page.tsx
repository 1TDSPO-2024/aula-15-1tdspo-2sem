
export default function Produto({params}:{params:{id:number}}) {

    const [produto, setProduto]

  return (
    <div>
        <h1>Produto</h1>
        <p>ID : {params.id}</p>
    </div>
  )
}