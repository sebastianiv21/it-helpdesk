import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap'
import { useForm } from '@hooks'
import { useRef } from 'react'

const SearchBarClientes = ({ items, handleData }) => {
  const { busqueda, onChange, onReset } = useForm({ busqueda: '' })
  const inputRef = useRef()

  const filterItems = (items, query) => {
    return items.filter((item) => {
      const itemValues = Object.values(item).join('').trim().toLowerCase()
      return query === '' || itemValues.includes(query.trim().toLowerCase())
    })
  }

  const handleChange = (e) => {
    onChange(e)
    handleData(filterItems(items, e.target.value))
  }

  const handleReset = () => {
    onReset()
    handleData(items)
    inputRef.current.focus()
  }

  return (
    <div>
      <h5 className='bg-primary text-white p-2 m-0 rounded-top ps-3'>
        Búsqueda
      </h5>
      <form
        onReset={handleReset}
        className='bg-secondary rounded-bottom p-2 px-4 d-flex gap-3 justify-content-around'
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className='align-self-center text-primary fs-4'
        />
        <input
          type='text'
          name='busqueda'
          id='busqueda'
          onChange={handleChange}
          value={busqueda}
          ref={inputRef}
          className='form-control m-2'
          placeholder='Digite el elemento de búsqueda'
          maxLength='250'
        />
        <Button
          type='reset'
          color='primary'
          className='d-flex align-items-center m-2'
        >
          <FontAwesomeIcon icon={faEraser} />
          <span className='ms-2'>Limpiar</span>
        </Button>
      </form>
    </div>
  )
}

export default SearchBarClientes
