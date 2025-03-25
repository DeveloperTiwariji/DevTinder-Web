import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../src/components/Login"
import Profile from "../src/components/Profile"
import Body from "../src/components/Body"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "../src/components/Feed"
import Connections from "./components/Connections"
import Requests from "./components/Requests"

function App() {

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body />}>
      <Route path="/" element={<Feed />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/connections" element={<Connections/>} />
      <Route path="/requests" element={<Requests />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
