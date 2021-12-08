import React, {useState} from "react";
import {GenerateFloor} from "../classes/GenerateFloor";
import {Room} from "../classes/types/Room";
import {useNavigation} from "@react-navigation/native";

export type GameState = {
    currentFloor: number,
    currentRoom: Room,
    previousRoom: Room | undefined
    floors: Room[]
}

export type GameContextState = {
    game: GameState,
    nextFloor: () => void,
    nextRoom: (direction: string) => void,
    resetGame: () => void
}

const DEFAULT_GAME_STATE = {
    currentFloor: 0,
    currentRoom: new Room(),
    previousRoom: undefined,
    floors: []
}

export const GameContext = React.createContext<GameContextState>({
    game: DEFAULT_GAME_STATE,
    nextFloor: () => {},
    nextRoom: (direction: string) => {},
    resetGame: () => {}
});

export const GameProvider: React.FC = ({ children }) => {
    const [game, setGame] = useState<GameState>(DEFAULT_GAME_STATE);

    function resetGame(){
        console.log(`resetGame`);
        setGame(DEFAULT_GAME_STATE);
    }

    function nextFloor(){
        console.log(`nextFloor`);

        let currentFloor = game.currentFloor + 1;
        let generateFloor = new GenerateFloor(currentFloor)
        let startingRoom = generateFloor.getFloor();

        console.log('floor generated:');
        console.log(startingRoom);

        setGame((currentGame) => {
            return {
                ...currentGame,
                currentFloor: currentFloor,
                currentRoom: startingRoom,
                floors: [
                    ...currentGame.floors,
                    startingRoom
                ]
            }
        });
    }

    function nextRoom(direction: string){
        let previousRoom: Room = game.currentRoom;
        let nextRoom: Room;

        switch (direction) {
            case 'north':
                if (game.currentRoom.north instanceof Room) {
                    nextRoom = game.currentRoom.north;
                    nextRoom.setVisited(true);
                }
                break;
            case 'east':
                if (game.currentRoom.east instanceof Room) {
                    nextRoom = game.currentRoom.east;
                    nextRoom.setVisited(true);
                }
                break;
            case 'south':
                if (game.currentRoom.south instanceof Room) {
                    nextRoom = game.currentRoom.south;
                    nextRoom.setVisited(true);
                }
                break;
            case 'west':
                if (game.currentRoom.west instanceof Room) {
                    nextRoom = game.currentRoom.west;
                    nextRoom.setVisited(true);
                }
                break;
        }

        setGame((currentGame) => {
            return {
                ...currentGame,
                currentRoom: nextRoom,
                previousRoom: previousRoom
            }
        });
    }

    return (
        <GameContext.Provider value={{
            game,
            nextFloor,
            nextRoom,
            resetGame
        }}>
            {children}
        </GameContext.Provider>
    )
}