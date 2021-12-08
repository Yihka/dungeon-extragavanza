import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {Room} from "../classes/types/Room";
import {MiniMapLocation} from "./MiniMap/MiniMapLocation";
export const MiniMap: React.FC<{currentRoom: Room}> = ({currentRoom}) => {

    console.log(currentRoom);
    console.log('------');
    return (
        <View style={styles.minimap}>
            <MiniMapLocation currentRoom={currentRoom} direction={null}/>
        </View>
    )
}

const styles = StyleSheet.create({
    minimap: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 200,
        overflow: "hidden"
    }
})