import { useState } from 'react'
import { TabsDemo } from "./Tabs/tabList"
import { Login } from "../src/auth/login"

function App() {
  // Estado para controlar si el usuario está autenticado o no
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    setIsAuthenticated(true) // Cuando el usuario inicie sesión exitosamente, actualiza el estado
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <TabsDemo />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  )
}

export default App