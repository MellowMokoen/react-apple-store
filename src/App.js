import './App.css';
import Homepage from "./Components/Homepage";
import MenuSidebar from './Components/MenuSidebar';
import CartOverview from './Components/CartOverview';
import ProductDetails from './Components/ProductDetails';
function App() {
  return (
    <div className="main-container">
      <MenuSidebar />
     <Homepage />
     <CartOverview />
    
   
    </div>
  );
}

export default App;

