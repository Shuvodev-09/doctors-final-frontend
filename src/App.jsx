import { RouterProvider } from 'react-router-dom';
import './App.css';

import router from './routes/route/Route';

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
