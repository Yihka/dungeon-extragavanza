import React, {useContext, useEffect} from "react";
import {SafeAreaView} from "react-native";
import {Button, ButtonGroup, Divider, Layout, Text, TopNavigation} from "@ui-kitten/components";
import {GameContext} from "../contexts/GameContext";
import {MiniMap} from "../components/MiniMap";

export const DungeonScreen = () => {
    const { game, nextRoom } = useContext(GameContext);

    function goNorth(){
        nextRoom('north');
    }

    function goEast(){
        nextRoom('east');
    }

    function goSouth(){
        nextRoom('south');
    }

    function goWest(){
        nextRoom('west');
    }

    const bloep = (direction: string) => {
        nextRoom(direction);
    }

    function blah(direction: string){
        nextRoom('west');
    }

    return (
        <SafeAreaView>
            <TopNavigation title='Floor: 1' alignment='center'/>
            <Divider/>
            <Layout>
                <Text>TODO: Implement the actual room.</Text>
            </Layout>
            <Layout>
                <MiniMap currentRoom={game.currentRoom}/>
                <Text>
                    Which direction do you want to go?
                </Text>
                <ButtonGroup>
                    <Button disabled={ (game.currentRoom.north == null) } onPress={() => bloep('north')}>North</Button>
                    <Button disabled={ ( game.currentRoom.east == null ) } onPress={goEast}>East</Button>
                    <Button disabled={ ( game.currentRoom.south == null ) } onPress={goSouth}>South</Button>
                    <Button disabled={ ( game.currentRoom.west == null ) } onPress={goWest}>West</Button>
                </ButtonGroup>
            </Layout>
        </SafeAreaView>
    )
}