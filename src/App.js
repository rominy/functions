import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path='/' element={<Navbar />}>
          {/* <Route index element={<Main />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
