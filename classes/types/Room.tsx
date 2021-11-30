export class Room{
    north: Room | undefined
    east: Room | undefined
    south: Room | undefined
    west: Room | undefined

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
}