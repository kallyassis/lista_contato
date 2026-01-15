import { createBrowserRouter, RouterProvider } from "react-router";

import Contatos from "./page/Contatos";
import StyleGlobal, { Container } from "./styles/styleGlobal";
import Adicionar from "./page/Adicionar";
import EditarContato from "./page/EditarContatos";


const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Contatos />,
  },
  {
    path: "adicionar",
    element: <Adicionar />,
  },
  {
    path: "editar",
    element: <EditarContato />,
  },

]);

function App() {
  return (
    <>
      <StyleGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  );
}

export default App;
