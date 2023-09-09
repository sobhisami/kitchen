import { About, Book, Content, Cooking, Footer, Header, Member, Menu, Special } from "./Component";

function App() {
  return (
    <>
      <Header/>
      <About/>
      <Special/>
      <Menu/>
      <Book/>
      <Cooking/>
      <Member/>
      <div style={{height:"50px"}}></div>
      <Content/>
      <Footer/>
    </>
  );
}

export default App;
