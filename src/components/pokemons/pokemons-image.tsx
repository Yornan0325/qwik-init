import { component$, useSignal, useTask$ } from '@builder.io/qwik';

interface Props {
  id: number |string,
  size?: number,
  backImage?: boolean,
  isVisible?:boolean
}

// Define el componente 'PokemonImage'
export const PokemonImage = component$(({ id, size = 200, backImage = false,  isVisible = true}: Props) => {
  const imageLoaded = useSignal(false);

  useTask$(({ track }) => {
    track(() => id)
    imageLoaded.value = false
  })
  let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  if (backImage) {
    imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
  }



  return (
    <div class="flex items-center justify-center"
      style={{ width: `${size}px`, height: `${size}px` }}>
      {!imageLoaded.value && <span>Cargando...</span>}
      <img
        src={imageUrl}
        alt="Pokemon Sprite"
        width={100}
        height={100}
        style={{ width: `${size}px` }}
        onLoad$={() => {
          // setTimeout(() => {
            imageLoaded.value = true
          // }, 200)
        }}
        class={[{
          'hidden': !imageLoaded.value,
          'brightness-0':!isVisible
          
        },'transition-all']}
      />


    </div>
  );
});