import floors from "../data/floors.json";
import {FloorConfig} from "../types";
import {Room} from "./types/Room";

export class GenerateFloor {
    floorNumber: number
    floorConfig: FloorConfig
    baseRoom: Room
    roomsToCreate: number
    roomsCreated: number

    constructor(floorNumber: number) {
        this.floorNumber = floorNumber;
        this.floorConfig = this.getFloorConfig();
        this.baseRoom = new Room(null, null, null, null);

        this.roomsToCreate = this.amountOfRoomsToCreate();
        this.roomsCreated = 0;
        this.createRooms(this.baseRoom, 'east');
    }

    getFloor(): Room
    {
        return this.baseRoom;
    }

    getFloorConfig(): FloorConfig
    {
        console.log(`floorNumber: ${this.floorNumber}`);
        return floors[this.floorNumber];
    }

    amountOfRoomsToCreate(): number
    {
        return this.getNumberBetweenRange(this.getFloorConfig().minAmountOfRooms, this.getFloorConfig().maxAmountOfRooms)
    }

    amountOfConnectedRooms(): number{
        let number = this.getNumberBetweenRange(1, 100);

        if(number < 61){
            return 1;
        } else if(number < 91){
            return 2;
        } else {
            return 3;
        }
    }

    getDirectionOfRoomToCreate(room: Room): string{
        let choices = [];
        if(room.north === undefined){
            choices.push('north');
        }
        if(room.east === undefined){
            choices.push('east');
        }
        if(room.south === undefined){
            choices.push('south');
        }
        if(room.west === undefined){
            choices.push('west');
        }

        return choices[Math.floor(Math.random() * choices.length)];
    }

    getNumberBetweenRange(min: number, max: number)
    {
        return Math.random() * (max - min) + min
    }

    createRooms(previousRoom: Room, direction: string)
    {
        let room = new Room();
        switch (direction){
            case 'north':
                room.setSouthRoom(previousRoom);
                previousRoom.setNorthRoom(room);
                break;
            case 'east':
                room.setWestRoom(previousRoom);
                previousRoom.setEastRoom(room);
                break;
            case 'south':
                room.setNorthRoom(previousRoom);
                previousRoom.setSouthRoom(room);
                break;
            case 'west':
                room.setEastRoom(previousRoom);
                previousRoom.setWestRoom(room);
                break;
        }
        this.roomsCreated++;

        if(this.roomsCreated < this.roomsToCreate){
            for(let i = 0; i < this.amountOfConnectedRooms(); i++){
                this.createRooms(room, this.getDirectionOfRoomToCreate(room));
            }
        } else {
            // todo: create boss room
        }

    }
}