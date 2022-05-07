import Home from "./Home";
import Login from "./Login";
import List from "./List";
import Single from "./Single";
import New from "./New";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="users">
                <Route index element={<List/>}/>
                <Route path=":userId" element={<Single/>}/>
                <Route path="new" element={<New/>}/>
              </Route>
              <Route path="products">
                <Route index element={<List/>}/>
                <Route path=":productId" element={<Single/>}/>
                <Route path="new" element={<New/>}/>
              </Route>
            </Route>
           
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
