import { heroes } from "../data/heroes";




export const getHeroesByPublisher = (publisher)=>{
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} no es una empresa valida`);
    }
    return heroes.filter((hero)=>{return hero.publisher === publisher});
}