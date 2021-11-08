import React, {useState} from 'react';
import characters from '../data/characters.json';

export type CharacterState = {
    selectedCharacter: string,
    currentHealth: number,
    maxHealth: number,
    damage: number,
    speed: number,
    setCharacter(index: number): void,
    coins: 0,
    items: [],
    perks: [],
}

export const CharacterContext = React.createContext<CharacterState>({
    selectedCharacter: '',
    currentHealth: 0,
    maxHealth: 0,
    damage: 0,
    speed: 0,
    coins: 0,
    items: [],
    perks: [],
    setCharacter: (index: number) => {}
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

    function setCharacter( index: number ){
        let character = characters[index];
        setSelectedCharacter(character.name);
        setCurrentHealth(character.hp);
        setMaxHealth(character.hp);
        setDamage(character.damage);
        setSpeed(character.speed);
        setCoins(character.coins);
        setItems(character.items);
        setPerks(character.perks);

        console.log(`Character data set.`);
    }

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