import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Button, Form, Input } from 'reactstrap'
import { useForm } from '@hooks'
import { useRef } from 'react'

const SearchBar = ({ items, handleData }) => {
  const { busqueda, onChange, onReset } = useForm({ busqueda: '' })
  const inputRef = useRef()

  const filterItems = (items, query) => {
    const searchQuery = query.trim().toLowerCase()

    const searchInObject = (obj) => {
      for (const key in obj) {
        const value = obj[key]

        if (typeof value === 'object') {
          if (searchInObject(value)) {
            return true
          }
        } else if (String(value).trim().toLowerCase().includes(searchQuery)) {
          return true
        }
      }
      return false
    }

    return items.filter((item) => {
      return searchInObject(item)
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
      <Form
        onReset={handleReset}
        className='bg-secondary rounded-bottom p-2 px-4 d-flex gap-3 justify-content-around'
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className='align-self-center text-primary fs-4'
        />
        <Input
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
      </Form>
    </div>
  )
}

export default SearchBar
