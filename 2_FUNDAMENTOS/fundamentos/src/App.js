// Import Componets
import FirstComponent from './components/FirstComponet';
import TemplateExpressions from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';
//Import Css
import './App.css';




function App() {
  return (
    <div className="App">
       <h1>Fundamentos</h1>
       <FirstComponent/>
       <TemplateExpressions/>
       <MyComponent/>
       <Events/>
         <Challenge/>
 
    
    </div>
  );
}

export default App;
