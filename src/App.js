
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
function App() {
  return ( 
  <> 
<Navbar title="Texting"  aboutText="About Texting"/>
{/*<Navbar/>*/}
<div className="container">
<textArea/>
</div>
    </>
  );
}

export default App;
