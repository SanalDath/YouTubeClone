import Head from './components/Head';
import Body from './components/Body';
import { Provider } from "react-redux";
import store from './utils/store';
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import UseMemoDemo from '../src/components/hooksDemo/UseMemoDemo';
import UserefDemo from './components/hooksDemo/UserefDemo';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body/>,
  children: [
    {
      path: '/',
      element: <MainContainer/>
    },
    {
      path: 'watch',
      element: <WatchPage/>
    },
    {
    path: 'demo',
    element: <>
    <UseMemoDemo/>
    <UserefDemo/>
    </>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div>
      {/* <h1 className='bg-red-700 '>Namaste React</h1> */}
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
    
  );
}

export default App;
