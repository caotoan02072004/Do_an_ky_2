import { Route, Routes } from "react-router-dom";
import { adminRoutes, loginRoutes, userRoutes } from "./routes/Routes";

function App() {
  return (
    <>
      <Routes>
        {process.env.REACT_APP_API}
        {adminRoutes.map((route, key) => {
          return (
            <Route exact key={key} path={route.path} element={route.element} />
          );
        })}

        {process.env.REACT_APP_API}
        {userRoutes.map((route, key) => {
          return (
            <Route exact key={key} path={route.path} element={route.element} />
          );
        })}

        {process.env.REACT_APP_API}
        {loginRoutes.map((route, key) => {
          return (
            <Route exact key={key} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
