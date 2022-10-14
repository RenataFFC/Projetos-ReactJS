import './App.css';
import construction2 from "./assets/img/construction2.jpeg";
import CondicionalRender from './componets/CondicionalRender';
import ListRender from './componets/ListRender';
import ManageData from './componets/ManageData';

function App() {
  return (
    <div className="App">
          <h1> Avançando em React </h1>
           {/*Imagem Public*/}
           <div> 
                <img src="/construction.jpg" alt="imagem construção" width="500px" />
           </div>
            {/*Image SRC*/}
            <div> 
                  <img src={construction2} alt="imagem construção" width="500px" />
            </div>
           <ManageData/>
          <ListRender/>
          <CondicionalRender/>
      </div>
  );
}

export default ListRender;
