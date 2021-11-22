import floors from "../data/floors.json";
import {FloorConfig} from "../types";

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
        return floors[this.floorNumber];
    }

    amountOfRoomsToCreate(): number
    {
        return this.getNumberBetweenRange(this.getFloorConfig().minAmountOfRooms, this.getFloorConfig().maxAmountOfRooms)
    }

    getNumberBetweenRange(min: number, max: number)
    {
        return Math.random() * (max - min) + min
    }

    createRooms(previousRoom: Room, direction: string)
    {
        let room = null;
        switch (direction){
            case 'north':
                room = new Room(null, null, previousRoom, null);
                break;
            case 'east':
                room = new Room(null, null, null, previousRoom);
                break;
            case 'south':
                room = new Room(previousRoom, null, null,  null);
                break;
            case 'west':
                room = new Room(null, previousRoom, null,  null);
                break;
        }
        this.roomsCreated++;

        if(this.roomsCreated < this.roomsToCreate){
            // todo: create 1-3 rooms
            this.createRooms(room, 'north');
        } else {
            // todo: create boss room
        }

    }
}