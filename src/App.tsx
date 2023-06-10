import { useCallback, useEffect, useState } from "react";
import { APIGetPokemonList, APIGetPokemonPhoto } from "./api";
import { DataProps, PokemonItemProps } from "./types";
import { Card, Photo } from "./components";
import { IconBack } from "./components/assets/IconBack";
import { IconCheck } from "./components/assets";

function App() {
  const [data, setData] = useState<DataProps[] | []>([]);

  const PokemonList = useCallback(async (): Promise<PokemonItemProps[]> => {
    return await APIGetPokemonList().then((r) => r.results);
  }, []);

  useEffect(() => {
    PokemonList()
      .then((el) => el.map((i) => i))
      .then((r) => {
        r.map((el) =>
          APIGetPokemonPhoto(el.name)
            .then((r) => {
              return {
                name: r.name,
                src: r.sprites.other.dream_world.front_default,
                isSelected: false,
              };
            })
            .then((r) => {
              setData((prev) => [...prev, r]);
            })
        );
      });
  }, []);

  const SetSelectedStatusHandler = (name: string) => {
    const newData = data.map((el) => {
      if (el.name === name) {
        el.isSelected = true;
        return el;
      }

      el.isSelected = false;
      return el;
    });

    setData(newData);
  };

  return (
    <div className="w-full min-h-screen bg-chosy-gray-purple flex items-center justify-center">
      <Card>
        <div className="flex flex-row items-center justify-between">
          <span className="cursor-pointer">
            <IconBack />
          </span>
          <span className="cursor-default text-chosy-gray">
            Фотография профиля
          </span>
          <span className="cursor-pointer">
            <IconCheck />
          </span>
        </div>
        <div className="flex justify-center items-center">
          {data &&
            data.map((el) => {
              if (el.isSelected) {
                return (
                  <Photo
                    key={el.name}
                    isSelect={false}
                    size="96"
                    src={el.src}
                  />
                );
              }
            })}
        </div>
        <div className="flex items-center justify-center">
          <span>Выберите фото кота</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {data &&
            data.map((el) => (
              <Photo
                handlerToggle={() => SetSelectedStatusHandler(el.name)}
                size="75"
                key={el.name}
                src={el.src}
                isSelect={el.isSelected}
              />
            ))}
        </div>
      </Card>
    </div>
  );
}

export default App;
