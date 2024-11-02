import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";
import { useMemo } from "react";



export const HeroScreen = () => {
  // Leemos los datos en el url
  const {heroeId} = useParams();

  // Extraemos los datos de heroe mediante el Id
  // Usamos en useMemo para que la funcion solo se llame cuando el heroe cambie
  const hero = useMemo(()=>{ return getHeroById(heroeId)}, [heroeId]) ;

  const {id, superhero, publisher, alter_ego, first_appearance, characters} = hero;

  const navigate = useNavigate();

  const handleReturn = ()=>{
    // vuelve a la pagina anterior
    navigate(-1);
  }

  if(!hero){
    <Navigate to='/'/>
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={`/assets/${id}.jpg`} alt={superhero} 
          // src={`../../../public/assets/${id}.jpg`} alt={superhero} 
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter Ego: </b>{alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
          <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>Volver</button>
      </div>
    </div>
  )
}
