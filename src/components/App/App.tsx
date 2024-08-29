import { lazy, Suspense } from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
const HomePage = lazy(() => import('../../pages/HomePage.tsx'));

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<div>Catalog Page</div>} />
          <Route path="/catalog/:id" element={<div>Catalog Page</div>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
