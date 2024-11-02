import { heroes } from "../data/heroes";





export const getHeroById = (id = '') => {

  // Devuelve unicamente los elementos del arreglo(en este caso objetos) que cumplen la condicion
  return heroes.find((hero)=>{ return hero.id === id});
}
