//Jack Braun
//300349282

import {Routes, Route} from 'react-router-dom';
import BookList from './FrontPage_BookList';
import AddBook from './AddBook';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<BookList />}/>
        <Route path="/create-book" element={<AddBook />}/>
      </Routes>
    </div>
  );
}

export default App;
