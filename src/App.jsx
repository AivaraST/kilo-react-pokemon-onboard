import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hocs from './pages/Hocs';
import Home from './pages/Home';
import Hooks from './pages/Hooks';
import NotFound from './pages/NotFound';
import Pokemons from './pages/Pokemons';
import Refs from './pages/Refs';
import GlobalStyle from './theme/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hocs" element={<Hocs />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/refs" element={<Refs />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
