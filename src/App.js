// import logo from './logo.svg';
import Header from "./Components/Header";
import List from "./Components/List";
import Item from "./Components/Item";
import listitems from "./listitems";

function createItem(listitem){
  return(<Item
    key={listitem.id}
    name={listitem.name}
    roll={listitem.roll}
    nos={listitem.nos}
  />);
}

function App() {
  return (
    <>
      <Header/>
      <List/>
      {listitems.map(createItem)}
    </>
  );
}

export default App;
