import { Route, Routes } from 'react-router-dom';
import BooksLogic from './components/Bookslogic';
import Categories from './components/Categories';
import NotMatch from './components/NoMatch';
import Layout from './components/LayOut';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BooksLogic />} />
          <Route path="categories" element={<Categories />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
