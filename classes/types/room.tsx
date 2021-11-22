class Room{
    north: Room | null
    east: Room | null
    south: Room | null
    west: Room | null

    constructor(
        north: Room | null,
        east: Room | null,
        south: Room | null,
        west: Room | null
    ){
        this.north = north;
        this.east = east;
        this.south = south;
        this.west = west;
    }
}