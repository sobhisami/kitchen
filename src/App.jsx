import { About, Book, Content, Cooking, Footer, Header, Member, Menu, Special } from "./Layout";

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
