"use client";

import { TipoProduto } from "@/types";
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function Produto({params}:{params:{id:number}}) {

  const [produto, setProduto] = useState<TipoProduto>({
    id:0,
    nome:"",
    preco:0,
    marca:"",
    cor:"",
    modelo:"",
    quantidade:0,
    categoria:"",
    imagem:""
  });
  
  useEffect(() =>{
    const chamadaApi = async ()=>{
      const response = await fetch(`http://localhost:3001/api/base-produtos/${params.id}`);
      const dados = await response.json();
      setProduto(dados);
    }
    chamadaApi();
  }, [])
    
  return (
    <div>
        <h1>Produto</h1>
        <p>ID : {params.id}</p>
        <p>Nome : {produto?.nome}</p>
        <p>Preço : {produto?.preco}</p>
        <p>Marca : {produto?.marca}</p>
        <p>Cor : {produto?.cor}</p>
        <p>Quantidade : {produto?.quantidade}</p>
        <p>Modelo : {produto?.modelo}</p>
        <p>Categoria : {produto?.categoria}</p>

    </div>
  )
}
