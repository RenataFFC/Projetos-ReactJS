import { useState } from 'react'

const ListRender = () => {

 const [list] = useState (['Renata',"Matheus","João"]);


 const[users , setUsers] = useState([
   {id: 1, name: "Renata", age: 31},
  {id: 72378423, name: "Matheus", age: 28},
  {id: 1, name: "João", age: 44},
]);

const deleteRandom = () =>{
     const randomNumber = Math.floor(Math.random() * 4);
     setUsers((prevUsers) => {


       return prevUsers.filter((user) => randomNumber !== user.id );

});

  return (
    <div>
    <ul>
    {list.map ((item, i) =>(          
        <li key={i}>{item}</li>
    ))}
   </ul>
  <ul>
   {users.map((user) => (
     <li Key={user.id}>
    {user.name} - {user.age}
     </li>
))}
</ul>  
  <button onClick={deleteRandom}>Delete random user</button>
   </div>
     
  );
};
};
export default ListRender;
  
