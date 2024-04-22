// Importar utilidad de react (hooks), permiten  añadir cierta funcionalidad a los componentes de react o poder ejecuyatr codigo arbitrario cuando ocurre ciertas cosas en los componentes
import { useState } from 'react'

export function TwitterFollowCard ({ userName, name, initialIsFollowing }) {
  // esto ha permitido utilizar una prop para inicializar el estado
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  // es lo mismo que arriba =
  // const state = useState(false);
  // const isFollowing = state[0];
  // const setIsFollowing = state[1];

  console.log(isFollowing)
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  // si el valor que tenía "isFollowing" era falso ahora cambia a true, y si era true cambia a false, así consigo que cambie de seguir a siguiendo
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='Avatar de ...'
          src={`https://unavatar.io/${userName}`}
        />

        <div className='tw-followCard-info'>
          <strong className='tw-followCard-name'>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        {/* Creamos una funcion handleClick */}
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>

          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
