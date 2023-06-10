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

export type IconProps<T=string> = Partial<{
  size: T
  width:T
  height: T
  strokeColor:T
  strokeWidth: T
}>

export type PhotoComponentProps = {
  size: string
  src: string
  isSelect: boolean
  handlerToggle?: ()=>void
  classes?: string
}

export type DataProps = {
  name: string,
  src: string,
  isSelected: boolean
}