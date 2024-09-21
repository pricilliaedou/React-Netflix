import "./App.css";
import Header from "./Header";
import Details from "./Details";
import Footer from "./Footer";

function App() {
  return (
    <div className='container'>
      <Header />
      <main>
        <Details />
      </main>
      <Footer />
    </div>
  );
}

export default App;
