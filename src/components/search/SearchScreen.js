import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../helpers/custom-hooks/useForm"
import { getHeroesByName } from "../../selectors/getHeroesByName";
import {HeroCard} from '../hero/HeroCard';
import queryString from 'query-string';
import { useMemo } from "react";


export const SearchScreen = () => {

  // Mandamos query parameters al navegador a travez de useNavegate
  const navigate = useNavigate();
  // Leemos los query parameters con useLocation
  const location = useLocation();
  

  // Separamos los query parameters por medio de queryString y el metodo parse
  const {q = ''} = queryString.parse(location.search);
  // console.log(q);

  const [values, handleInputChange, reset] = useForm({searchText: q});

  const heroesFiltrados = useMemo(()=>{return getHeroesByName(q)}, [q]) ;

  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(values.searchText);
    navigate(`?q=${values.searchText}`);
  }
  return (
    <>
      <h1>Búsquedas</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr/>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={values.searchText}
              onChange={(e)=>{handleInputChange(e)}}
            />
            <button className="btn btn-outline-primary mt-1 w-100" type="submit">Buscar</button>      
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr/>


           
          {
            (q === '') 
            ? <div className="alert alert-info">Escribe un Heroe</div>
            : (heroesFiltrados.length === 0) 
            && <div className="alert alert-danger">No se encontraron resultados con: {q}</div>
          }



          {
            heroesFiltrados.map((hero)=>{return <HeroCard key={hero.id} {...hero}/>})
          }
        </div>
      </div>
    </>
  )
}
