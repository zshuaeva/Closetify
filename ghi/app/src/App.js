import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ShoesForm from './ShoesForm';
import ShoesList from './ShoesList';
// import HatForm from './HatsForm';
// import HatsList from './HatsList';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="/shoes/new" element={<ShoesForm />} />
          <Route path="/shoes" element={<ShoesList shoes={props.shoes} />} />
          {/* <Route path="/hats/new" element={HatsForm />} /> */}
          {/* <Route path="/hats" element={<HatsList />} /> */}


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
