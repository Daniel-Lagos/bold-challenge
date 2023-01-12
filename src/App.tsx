import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from 'react-router-dom';
import Home from './pages/Home';
import MyBusiness from './pages/MyBusiness';

function ErrorBoundary() {
  const error = useRouteError();
  console.log('error boundary router', error);
  return <div>Error</div>;
}

function App() {
  const routers = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorBoundary />,
      element: <Home />,
    },
    {
      path: 'mi-negocio',
      errorElement: <ErrorBoundary />,
      element: <MyBusiness />,
    },
  ]);
  return <RouterProvider router={routers} />;
}

export default App;
