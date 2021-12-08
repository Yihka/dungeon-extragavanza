import {StyleSheet} from "react-native";

export class Room{
    north: Room | undefined
    east: Room | undefined
    south: Room | undefined
    west: Room | undefined
    coordinateX: number | undefined
    coordinateY: number | undefined
    visited: boolean = false
    minimapStyle: {}

    constructor() {
        this.minimapStyle = {
            BackgroundColor: '#999999'
        }
    }

    setCoordinates(x: number, y: number) {
        this.coordinateX = x;
        this.coordinateY = y;
    }

    getCoordinatesAsString(): string{
        return `${this.coordinateX}-${this.coordinateY}`;
    }

    setNorthRoom(room: Room){
        this.north = room;
    }

    setEastRoom(room: Room){
        this.east = room;
    }

    setSouthRoom(room: Room){
        this.south = room;
    }

    setWestRoom(room: Room){
        this.west = room;
    }

    setVisited(visited: boolean){
        this.visited = visited;
    }
}