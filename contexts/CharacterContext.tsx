import React, {useContext, useState} from 'react';
import characters from '../data/characters.json';
import itemsList from '../data/items.json';
import {GameContext} from "./GameContext";

export type CharacterState = {
    name: string,
    description: string,
    portrait: string,
    currentHealth: number,
    maxHealth: number,
    damage: number,
    speed: number,
    coins: number,
    items: string[],
    perks: string[],
}

export type CharacterContextState = {
    character: CharacterState,
    chooseCharacter(index: number): void,
    addItem(name: number): void,
}

const DEFAULT_CHARACTER_STATE = {
    name: '',
    description: '',
    portrait: '',
    currentHealth: 0,
    maxHealth: 0,
    damage: 0,
    speed: 0,
    coins: 0,
    items: [],
    perks: [],
}

export const CharacterContext = React.createContext<CharacterContextState>({
    character: DEFAULT_CHARACTER_STATE,
    chooseCharacter: (index: number) => {},
    addItem: (index: number) => {},
});

export const CharacterProvider: React.FC = ({ children }) => {
    const [ character, setCharacter ] = useState<CharacterState>(DEFAULT_CHARACTER_STATE)

    const { resetGame } = useContext(GameContext);

    function chooseCharacter( index: number ){
        resetGame();

        let character = characters[index];

        setCharacter(
            {
                name: character.name,
                coins: character.coins,
                currentHealth: character.hp,
                damage: character.damage,
                description: character.description,
                items: [],
                maxHealth: character.hp,
                perks: [],
                portrait: character.portrait,
                speed: character.speed
            }
        )
    }

    function addItem( index: number ){
//        setItems({...items, itemsList[index]})
    }

    // todo: combine stats into one 'character' object
    return (
        <CharacterContext.Provider value={{
            character,
            chooseCharacter,
            addItem
        }}>
            {children}
        </CharacterContext.Provider>
    );
};