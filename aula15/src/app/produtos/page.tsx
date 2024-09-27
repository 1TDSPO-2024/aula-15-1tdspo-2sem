import Link from "next/link";

export default function Produtos() {
  //Criar uma lista de objetos de produtos eletrônicos co os seguintes dados:
  //id,nome, preço, marca, cor, modelo, quantidade, categoria, imagem
  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: 1500.0,
      marca: "Apple",
      cor: "Preto",
      modelo: "iPhone 13",
      quantidade: 10,
      categoria: "Eletrônicos",
      imagem: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      nome: "Notebook",
      preco: 2500.0,
      marca: "Dell",
      cor: "Branco",
      modelo: "Inspiron 15",
      quantidade: 5,
      categoria: "Eletrônicos",
      imagem: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      nome: "Tablet",
      preco: 800.0,
      marca: "Samsung",
      cor: "Preto",
      modelo: "Galaxy Tab S8",
      quantidade: 15,
      categoria: "Eletrônicos",
      imagem: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      nome: "Impressora",
      preco: 300.0,
      marca: "HP",
      cor: "Branco",
      modelo: "OfficeJet Pro",
      quantidade: 20,
      categoria: "Eletrônicos",
      imagem: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      nome: "Fone de Ouvido",
      preco: 200.0,
      marca: "Sony",
      cor: "Preto",
      modelo: "WH-1000XM4",
      quantidade: 30,
      categoria: "Eletrônicos",
      imagem: "https://picsum.photos/200/300",
    },
  ];

  //Iterar a lista de produtos em uma tabela, utilizando, head,body e footer.

  return (
    <div>
      <h1>Produtos</h1>
      <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Marca</th>
                <th>Cor</th>
                <th>Modelo</th>
                <th>Quantidade</th>
                <th>Categoria</th>
                <th>Imagem</th>
                <th>Editar</th>
            </tr>
        </thead>

        <tbody>
            {produtos.map((produto) => (
                <tr key={produto.id}>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.marca}</td>
                    <td>{produto.cor}</td>
                    <td>{produto.modelo}</td>
                    <td>{produto.quantidade}</td>
                    <td>{produto.categoria}</td>
                    <td><img src={produto.imagem} alt="Imagem do produto" width="100" height="100" /></td>
                    <td><Link href={`/produtos/produto/${produto.id}`}>Editar</Link></td>
                </tr>
                ))}
        </tbody>
            <tfoot>
                <tr>
                    <td colSpan={8}>Total de Produtos: {produtos.length}</td>
                </tr>
            </tfoot>
      </table>
    </div>
  );
}
