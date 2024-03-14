import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Main from "./pages/Layout";
import Navbar from "./pages/Navbar";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  .cursor--pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path='/' element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
