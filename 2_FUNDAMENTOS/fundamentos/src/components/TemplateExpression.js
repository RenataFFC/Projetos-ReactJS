const TemplateExpressions = () =>{
  const name = "Renata";
  const data ={
    age: 41,
    job: "Programmer",
    }

return(
 <div>
   <h1> Olá, {name}, tudo bem? </h1>
   <p>Você atua como : {data.job}</p>
</div>

)
}

export default TemplateExpressions;