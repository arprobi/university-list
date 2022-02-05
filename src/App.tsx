import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import Header from './components/Layout/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  )
}

export default App
