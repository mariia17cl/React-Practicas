import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {/* IS_DEVELOPMENT: sirve para mostrarlo si esta en produccion no lo muestra, pero si esta en modo desarrollo no lo mostraría, para cambiar de produccion a desarrolo se encarga el node ev */}
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
