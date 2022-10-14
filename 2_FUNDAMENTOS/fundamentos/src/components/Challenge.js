
export const Challenge = () => {
const n1 = 5;
const n2 = 3;


  return (
    <div>
      <p> Numero 1 = {n1} </p>
      <p> Numero 2  = {n2} </p>
      <button onClick={() => console.log(n1 + n2)}>Clique para ver a soma!</button>
    </div>
  )
}

export default Challenge;