import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Component/Country/Menubar/Menubar';
import Products from './Component/Country/Products/Products';

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <Products></Products>
    </div>
  );
}




export default App;
