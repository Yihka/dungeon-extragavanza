import React, {useContext, useState} from 'react';
import characters from '../data/characters.json';
import itemsList from '../data/items.json';
import {GameContext} from "./GameContext";

export type CharacterSheetState = {
    name: string,
    description: string,
    portrait: string,
    hp: number,
    damage: number,
    speed: number,
    coins: number,
    items: [],
    perks: [],
}

export type CharacterContextState = {
    selectedCharacter: string,
    currentHealth: number,
    maxHealth: number,
    damage: number,
    speed: number,
    coins: 0,
    items: [],
    perks: [],
    setCharacter(index: number): void,
    addItem(name: number): void,
}

export const CharacterContext = React.createContext<CharacterContextState>({
    selectedCharacter: '',
    currentHealth: 0,
    maxHealth: 0,
    damage: 0,
    speed: 0,
    coins: 0,
    items: [],
    perks: [],
    setCharacter: (index: number) => {},
    addItem: (index: number) => {},
});

export const CharacterProvider: React.FC = ({ children }) => {
    const [ selectedCharacter, setSelectedCharacter ] = useState<string>('');
    const [ currentHealth, setCurrentHealth ] = useState<number>(0);
    const [ maxHealth, setMaxHealth ] = useState<number>(0);
    const [ damage, setDamage ] = useState<number>(0);
    const [ speed, setSpeed ] = useState<number>(0);
    const [ coins, setCoins ] = useState<number>(0);
    const [ items, setItems ] = useState<[]>([]);
    const [ perks, setPerks ] = useState<[]>([]);

    const { resetGame } = useContext(GameContext);

    function setCharacter( index: number ){
        resetGame();

        let character = characters[index];
        setSelectedCharacter(character.name);
        setCurrentHealth(character.hp);
        setMaxHealth(character.hp);
        setDamage(character.damage);
        setSpeed(character.speed);
        setCoins(character.coins);
        setItems(character.items);
        setPerks(character.perks);
    }

    function addItem( index: number ){
//        setItems({...items, itemsList[index]})
    }

    // todo: combine stats into one 'character' object
    return (
        <CharacterContext.Provider value={{
            selectedCharacter,
            currentHealth,
            maxHealth,
            damage,
            speed,
            coins,
            items,
            perks,
            setCharacter
        }}>
            {children}
        </CharacterContext.Provider>
    );
};