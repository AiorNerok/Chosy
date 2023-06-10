import ky from "ky";
import { PokemonListProps, PokemonPhotoProps } from "./types";

export const APIGetPokemonList = async ():Promise<PokemonListProps> => {
  return await ky.get("https://pokeapi.co/api/v2/pokemon/?limit=12").json();
};


export const APIGetPokemonPhoto = async (name:string):Promise<PokemonPhotoProps> => {
    return await ky.get(`https://pokeapi.co/api/v2/pokemon/${name}`).json()
}