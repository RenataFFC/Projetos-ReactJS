import { useState} from "react";


const ConditionalRender = () => {
        const [x] = useState(false);
const[name] = useState("Joao");
        return ( 
            <div >
            <h1> Isso será exibido ? </h1> 
           { x && <p> Se x for true, sim! </p>}
        { !x && <p> Agora x é falso  </p>}
{name === "Joao" ? (
<div>
<p>O nome é João</p>
</div>
) : (
<div>
<p>Nome não encontrado</p>
</div>
)}
            </div>
            );
        };

        export default ConditionalRender;