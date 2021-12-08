import floors from "../data/floors.json";
import {FloorConfig} from "../types";
import {Room} from "./types/Room";

export class GenerateFloor {
    coordinatesInUse: string[]
    floorNumber: number
    floorConfig: FloorConfig
    baseRoom: Room
    roomsToCreate: number
    roomsCreated: number

    constructor(floorNumber: number) {
        this.coordinatesInUse = [];
        this.floorNumber = floorNumber;
        this.floorConfig = this.getFloorConfig();

        this.baseRoom = new Room();
        this.baseRoom.setCoordinates(0, 0);
        this.baseRoom.setVisited(true);

        this.coordinatesInUse.push(this.baseRoom.getCoordinatesAsString());

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
        if(room.north === undefined && !this.coordinatesInUse.includes(`${room.coordinateX}-${room.coordinateY + 1}`)){
            choices.push('north');
        }
        if(room.east === undefined && !this.coordinatesInUse.includes(`${room.coordinateX + 1}-${room.coordinateY}`)){
            choices.push('east');
        }
        if(room.south === undefined && !this.coordinatesInUse.includes(`${room.coordinateX}-${room.coordinateY - 1}`)){
            choices.push('south');
        }
        if(room.west === undefined && !this.coordinatesInUse.includes(`${room.coordinateX - 1}-${room.coordinateY}`)){
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
                room.setCoordinates(previousRoom.coordinateX, previousRoom.coordinateY+1)
                this.coordinatesInUse.push(`${previousRoom.coordinateX}-${previousRoom.coordinateY + 1}`)
                room.setSouthRoom(previousRoom);
                previousRoom.setNorthRoom(room);
                break;
            case 'east':
                room.setCoordinates(previousRoom.coordinateX+1, previousRoom.coordinateY)
                this.coordinatesInUse.push(`${previousRoom.coordinateX+1}-${previousRoom.coordinateY}`)
                room.setWestRoom(previousRoom);
                previousRoom.setEastRoom(room);
                break;
            case 'south':
                room.setCoordinates(previousRoom.coordinateX, previousRoom.coordinateY-1)
                this.coordinatesInUse.push(`${previousRoom.coordinateX}-${previousRoom.coordinateY - 1}`)
                room.setNorthRoom(previousRoom);
                previousRoom.setSouthRoom(room);
                break;
            case 'west':
                room.setCoordinates(previousRoom.coordinateX-1, previousRoom.coordinateY)
                this.coordinatesInUse.push(`${previousRoom.coordinateX-1}-${previousRoom.coordinateY}`)
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