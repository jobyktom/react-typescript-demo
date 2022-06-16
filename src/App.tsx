import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import Counter from "./components/state/Counter";
import { ThemeContextProvider } from "./components/state/context/ThemeContext";
import Box from "./components/state/context/Box";

const personName = {
  fname:'Jobby',
  lname:'Tom'
}

const nameList = [
  {
    first: "Jobby",
    last: "Tom",
  },
  {
    first: "Julie",
    last: "Tom",
  },
  {
    first: "Justin",
    last: "Tom",
  },
];
function App() {
  return (
    <div className="App">
      <Greet name="joby" messageCount={20} isLoggedIn={false}/>
      <Person name ={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Some place holder textasd</Heading>
      <Oscar><Heading>Oscar goes to DiCaprio</Heading></Oscar>
      <Greet name="joby" isLoggedIn={true}/>
      <Button handleClick={(event, id)=>{
        console.log('button clicked',event, id);
      }} />
      <Input value="Joby K Tom" handleChange={(event)=>console.log(event)} />
      <Container styles={{border:'1px solid red',padding:'10px'}}/>

      <Counter />
      <ThemeContextProvider><Box /></ThemeContextProvider>
    </div>
  );
}

export default App;
