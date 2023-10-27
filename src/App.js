import Cards from './assets/components/Cards/Cards';
import Delivery from './assets/components/Delivery/Delivery';
import Header from './assets/components/Header/Header';
import Sidebar from './assets/components/Sidebar/Sidebar';
import './style.css';

function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <Cards />
      <Delivery />
    </>
  );
}

export default App;
