"use client"

import { TipoProduto } from "@/types"
import { useState, useEffect } from "react"


export default function Produto({params}:{params:{id:number}}) {

    const [produto, setProduto] = useState<TipoProduto>([])

    useEffect(() => {
      
      const chamadaApi = async () => {
        const response = await fetch(`/api/base-produtos/${params.id}`)
        const dados = await response.json()
        setProduto(dados)
      }

      chamadaApi();
    }, [params.id])

  return (
    <div>
        <h1>Produto</h1>
        <p>ID : {params.id}</p>
        <img src={produto.imagem} alt="Imagem Produto" />
        <p>Nome: {produto.nome}</p>
        <p>Preço: {produto.preco}</p>
        <p>Marca</p>
        <p>Cor</p>
        <p></p>
        <p></p>
        <p></p>
    </div>
  )
}