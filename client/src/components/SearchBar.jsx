import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ items, setSearchResults }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(items);

    // const keys = Object.keys(items[0])

    const resultsArray = items.filter(
      (item) =>
        item._id.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.titulo.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.prioridad.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.estado.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.categoria.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.createdAt.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.fechadecierre?.toLowerCase().includes(e.target.value.toLowerCase())
      // keys.some(key => item[key].toLowerCase().includes(e.target.value.toLowerCase()))
    );

    setSearchResults(resultsArray);
  };

  return (
    <div>
      <h5 className='bg-primary text-white p-2 m-0 rounded-top ps-3'>
        Búsqueda
      </h5>
      <form
        className='bg-secondary rounded-bottom p-2 px-4 d-flex gap-3 justify-content-around'
        onSubmit={handleSubmit}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className='align-self-center text-primary fs-4'
        />
        <input
          type='text'
          name='busqueda'
          id='busqueda'
          onChange={handleSearchChange}
          className='form-control m-2'
          placeholder='Ingrese ID, Titulo, Prioridad, Estado, categoría, fecha de creación o fecha de cierre'
          maxlength="50"
        />
        <button
          type='reset'
          className='btn btn-primary text-white d-flex align-items-center m-2'
          onClick={() => setSearchResults(items)}
        >
          <FontAwesomeIcon icon={faEraser} />
          <span className='ms-2'>Limpiar</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
