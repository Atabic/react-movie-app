import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './components/MovieList';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Movies />} />
        </Routes>
      </Layout>
    </BrowserRouter >
  );
}

export default App;
