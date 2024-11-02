import { heroes } from "../data/heroes";


export const getHeroesByName = (name='')=>{
    console.log('ejecicion');
    if(name === ''){
        return [];
    }
    name = name.toLowerCase();
    return heroes.filter((hero)=>{return hero.superhero.toLowerCase().includes(name)});
}