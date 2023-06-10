type OtherProps = {
  [key: string]: string;
};

export type PokemonItemProps = OtherProps & {
  name: string;
};

export type PokemonListProps = OtherProps & {
  results: PokemonItemProps[];
};


export type PokemonPhotoProps=OtherProps&{
    sprites: OtherProps& {
        other: OtherProps&{
            dream_world:OtherProps&{
                front_default: string
            }
        }
    }
}