// esto es un singleton
import { createContext, useState } from 'react'
// 1. Creo el contexto - Este es el que hay que consumir
export const FiltersContext = createContext() // solo se crea una vez
// 2. Crear el providerr. que dará contexto a la aplicaión - este es que provee de acceso al contexto

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
