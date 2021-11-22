import React, {useState} from "react";
import {GenerateFloor} from "../classes/GenerateFloor";

export type GameState = {
    currentFloor: number,
    currentRoom: number,
    floors: Room[]
}

export type GameContextState = {
    game: GameState,
    nextFloor: () => void
}

const DEFAULT_GAME_STATE = {
    currentFloor: 0,
    currentRoom: 0,
    floors: []
}

export const GameContext = React.createContext<GameContextState>({
    game: DEFAULT_GAME_STATE,
    nextFloor: () => {}
});

export const GameProvider: React.FC = ({ children }) => {
    const [game, setGame] = useState<GameState>(DEFAULT_GAME_STATE);

    function nextFloor(){
        setGame({
            ...game,
            currentFloor: 1
        });

        let generateFloor = new GenerateFloor(game.currentFloor)
        let floor = generateFloor.getFloor();

        setGame((currentGame) => {
            return {
                ...currentGame,
                floors: [
                    ...currentGame.floors,
                    floor
                ]
            }
        });
    }

    return (
        <GameContext.Provider value={{
            game,
            nextFloor
        }}>
            {children}
        </GameContext.Provider>
    )
}