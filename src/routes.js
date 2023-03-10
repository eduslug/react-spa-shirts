import Cabecalho from "components/Cabecalho/Cabecalho"
import Container from "components/Container"
import Rodape from "components/Rodape"
import FavoritosProvider from "context/Favoritos"
import Favoritos from "pages/Favoritos"
import Inicio from "pages/Pages"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const AppRoutes = () => {
  return (
    <BrowserRouter >
      <Cabecalho />
      <Container>
        <FavoritosProvider >
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes