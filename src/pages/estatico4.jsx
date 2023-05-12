export async function getStaticProps() {
   console.log("[Server] gerando ")
   const resp = await fetch('http://localhost:3000/api/produtos')
   const produtos = await resp.json()
   
   return {
      props: {
         produtos
      }
   }
}

export default function Estatico4(props) {
   function renderizarProdutos() {
      return props.produtos.map(produto => {
         return <li key={produto.id}>{produto.nome} tem preço de R${produto.preco}</li>
      })
   }
   
   return (
      
      <div>
         <h1>Estatico #04</h1>
         <h2>{props.numero}</h2>
         <ul>
            {renderizarProdutos()}
         </ul>
      </div>
   )
};
