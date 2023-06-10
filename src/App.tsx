import { useCallback, useEffect, useState } from "react";
import { APIGetPokemonList, APIGetPokemonPhoto } from "./api";
import { PokemonItemProps } from "./types";

function App() {
  const [data, setData] = useState<string[]>([]);

  const PokemonList = useCallback(async (): Promise<PokemonItemProps[]> => {
    return await APIGetPokemonList().then((r) => r.results);
  }, []);

  useEffect(() => {
    PokemonList()
      .then((el) => el.map((i) => i.name))
      .then((r) => {
        r.map((el) =>
          APIGetPokemonPhoto(el)
            .then((r) => r.sprites.other.dream_world.front_default)
            .then((r) => {
              setData((prev) => [...prev, r]);
            })
        );
      });
  }, []);

  return <>{data && data.map((el) => <span key={el}>{el}</span>)}</>;
}

export default App;
