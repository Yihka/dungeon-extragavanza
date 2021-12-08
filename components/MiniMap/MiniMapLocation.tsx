import React, {useContext} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {Room} from "../../classes/types/Room";
import {MiniMapDoor} from "./MiniMapDoor";
import {GameContext} from "../../contexts/GameContext";

export const MiniMapLocation: React.FC<{
    currentRoom: Room,
    direction: "north" | "east" | "south" | "west" | null
}> = ({ currentRoom, direction  }) => {

    const { game, nextRoom } = useContext(GameContext);

    const currentRoomAccessible = () => {
        return currentRoom.north == game.currentRoom
            || currentRoom.east == game.currentRoom
            || currentRoom.south == game.currentRoom
            || currentRoom.west == game.currentRoom;
    }

    const getStyle = () => {
        const stylesToReturn = [];
        stylesToReturn.push(styles.location);

        // To position room on minimap correctly
        if(direction == null){
            stylesToReturn.push(styles.currentLocation);
        } else if(direction == 'north'){
            stylesToReturn.push(styles.locationNorth);
        } else if(direction == 'east'){
            stylesToReturn.push(styles.locationEast);
        } else if(direction == 'south'){
            stylesToReturn.push(styles.locationSouth);
        } else if(direction == 'west'){
            stylesToReturn.push(styles.locationWest);
        }

        if(currentRoom.visited){
            stylesToReturn.push(styles.locationVisited);
        }

        if(currentRoomAccessible()){
            stylesToReturn.push(styles.locationClickable);
        }

        return stylesToReturn;
    }

    const locationPressed = () => {
        if(currentRoomAccessible()) {
            console.log(`Direction: ${direction}`);
            switch(direction){
                case 'north':
                    nextRoom('north');
                    break;
                case 'east':
                    nextRoom('east');
                    break;
                case 'south':
                    nextRoom('south');
                    break;
                case 'west':
                    nextRoom('west');
                    break;
            }
            console.log('Beep beep');
        }
    }

    return (
        <View style={ getStyle()}>
            <Pressable style={{ flex: 1 }} onPress={ () => locationPressed() }>
            </Pressable>
            { currentRoom.north != null && direction != 'south' && currentRoom.visited ?
                    <>
                        <MiniMapDoor direction={'north'}/>
                        <MiniMapLocation currentRoom={currentRoom.north} direction={'north'}/>
                    </> : null }
            { currentRoom.east != null && direction != 'west' && currentRoom.visited ?
                <>
                    <MiniMapDoor direction={'east'}/>
                    <MiniMapLocation currentRoom={currentRoom.east} direction={'east'}/>
                </> : null }
            { currentRoom.south != null && direction != 'north' && currentRoom.visited ?
                <>
                    <MiniMapDoor direction={'south'}/>
                    <MiniMapLocation currentRoom={currentRoom.south} direction={'south'}/>
                </> : null }
            { currentRoom.west != null && direction != 'east' && currentRoom.visited ?
                <>
                    <MiniMapDoor direction={'west'}/>
                    <MiniMapLocation currentRoom={currentRoom.west} direction={'west'}/>
                </> : null }
        </View>
    )
}

const styles = StyleSheet.create({
    location: {
        position: "relative",
        width: 50,
        height: 50,
        borderStyle: "solid",
        borderColor: "#000000",
        borderWidth: 1,
        opacity: 0.3
    },
    currentLocation: {
        backgroundColor: "#ffff00"
    },
    locationNorth: {
        position: "absolute",
        top: -60,
        backgroundColor: "#999999"
    },
    locationEast: {
        position: "absolute",
        top: -1,
        right: -60,
        backgroundColor: "#999999"
    },
    locationSouth: {
        position: "absolute",
        bottom: -60,
        backgroundColor: "#999999"
    },
    locationWest: {
        position: "absolute",
        top: -1,
        left: -60,
        backgroundColor: "#999999"
    },
    locationVisited: {
        opacity: 1
    },
    locationClickable: {
        borderColor: "#00ff00"
    }
})