import { CotizadorProvider } from "./context/CotizadorProvider";
import AppInsurance from "./components/AppInsurance";

function App() {

  return (
    <CotizadorProvider>
      <AppInsurance />
    </CotizadorProvider>
  )
}

export default App
