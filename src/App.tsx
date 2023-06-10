import { useCallback, useEffect, useState } from "react";
import { APIGetPokemonList, APIGetPokemonPhoto } from "./api";
import { DataProps } from "./types";
import { Card, Photo } from "./components";
import { IconBack } from "./components/assets/IconBack";
import { IconCheck } from "./components/assets";

function App() {
  const [data, setData] = useState<DataProps[] | []>([]);

  const PokemonList = useCallback(async () => {
    const res = await APIGetPokemonList().then((r) => r.results);

    const res2 = res.map(async (el) => {
      return await APIGetPokemonPhoto(el.name);
    });

    Promise.all(res2).then((r) => {
      const list = r.map((el, index) => {
        return {
          name: el.name,
          src: el.sprites.other.dream_world.front_default,
          isSelected: index === 0 ? true : false,
        };
      });

      setData(list);
    });
  }, []);

  useEffect(() => {
    PokemonList();
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
        <div className="flex flex-row items-center justify-between h-[44px] mb-1">
          <span className="cursor-pointer">
            <IconBack />
          </span>
          <span className="cursor-default text-chosy-gray text-xs">
            Фотография профиля
          </span>
          <span className="cursor-pointer">
            <IconCheck />
          </span>
        </div>
        <div className="flex justify-center items-center mb-4">
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
        <div className="flex items-center justify-center mb-3">
          <span className="text-chosy-gray-dark text-sm">Выберите фото кота</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {data &&
            data.map((el) => (
              <Photo
                classes="cursor-pointer"
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
