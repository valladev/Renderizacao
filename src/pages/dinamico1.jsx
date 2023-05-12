export function getServerSideProps() {
   console.log("[Server] gerando ")
   return {
      props: {
         numero: Math.random()
      }
   }
}

export default function Dinamico1(props) {
   return (
      <div>
         <h1>Dinâmico #01</h1>
         {props.numero}
      </div>
   )
};
