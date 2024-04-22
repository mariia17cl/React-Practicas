import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()

  // uso del hook UseId
  // es un  identificador unico nunca cambia
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  console.log({
    minPriceFilterId,
    categoryFilterId
  })
  const handleChangeMinPrice = event => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }
  // esto está mal
  const handleChangeCategory = event => {
    // estamos pasando la función de actualizar estado nativa de react a un componente hijo
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type='range'
          name='price'
          id={minPriceFilterId}
          min='0'
          max='1740'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Móviles</option>
        </select>
      </div>
    </section>
  )
}
