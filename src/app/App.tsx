
import './App.css'
import {TodoItem} from '../Todo/todo-item/todo-item.tsx';
import {ApiProvider} from "../api/contexts/api-provider.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ROUTES} from './Routes/Routes.ts'
import {BoardList} from "../board/board-list.tsx";
import {PopupProvider} from "../popup/popup-context/popup-context.tsx";
import { HelmetProvider } from '@dr.pogodin/react-helmet';

function App() {

  return (
      <HelmetProvider>
          <ApiProvider>
              <PopupProvider>
                  <BrowserRouter>
                      <Routes>
                          <Route path={ROUTES.HOME} element={<BoardList/>}>
                              <Route path={ROUTES.TODO} element={<TodoItem/>}/>
                          </Route>
                      </Routes>
                  </BrowserRouter>
              </PopupProvider>
          </ApiProvider>
      </HelmetProvider>
  )
}

export default App
