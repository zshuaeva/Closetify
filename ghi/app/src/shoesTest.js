import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ShoesForm from './ShoesForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>

              <Route path="" element={<ShoesForm />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
