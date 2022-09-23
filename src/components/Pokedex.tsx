import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { fetchPokemon } from '../store/actions';
import { pushHistory } from '../store/reducers';
import { selectPokemon } from '../store/selectors';
import './styles/pokedex.scss';

const Pokedex: React.FC = () => {
    const dispatch = useAppDispatch();
    const [pokemonName, setPokemonName] = useState<string>('');

    const pokemon = useAppSelector(state => selectPokemon(state, pokemonName))

    return (
        <div className='pokedex'>
            <input type='text' value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
            <button onClick={() => { 
                    dispatch(fetchPokemon(pokemonName));
                    dispatch(pushHistory(pokemonName));
                } 
            } >
                Go
            </button>
            {pokemon &&
                <img src={pokemon.sprites.front_default} />
            }
        </div>
    )
}

export default Pokedex;