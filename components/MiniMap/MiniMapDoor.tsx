import React from "react";
import {StyleSheet, View} from "react-native";

export const MiniMapDoor: React.FC<{direction: string}> = ({ direction }) => {
    const getStyle = () => {
        switch(direction){
            case 'north':
            default:
                return [styles.door, styles.doorNorth];
            case 'east':
                return [styles.door, styles.doorEast];
            case 'south':
                return [styles.door, styles.doorSouth];
            case 'west':
                return [styles.door, styles.doorWest];
        }

    }

    return (
        <View style={getStyle()}/>
    );
}

const styles = StyleSheet.create({
    door: {
        position: "absolute",
        width: 10,
        height: 10,
        backgroundColor: "#000000"
    },
    doorNorth: {
        left: 20,
        top: -10,
    },
    doorEast: {
        top: 20,
        right: -10,
    },
    doorSouth: {
        left: 20,
        bottom: -10,
    },
    doorWest: {
        top: 20,
        left: -10,
    }
})