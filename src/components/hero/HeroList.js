import { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";


export const HeroList = ({publisher}) => {

    console.log(publisher);

    const hero = useMemo(()=>{return getHeroesByPublisher(publisher)}, [publisher]) ;

  return (
    <div className="row row-cols-3 g-3 animate__animated animate__fadeIn">
            {
                hero.map((hero)=>{
                    return <HeroCard key={hero.id} {...hero}/>
                })
            }
    </div>
  )
}
