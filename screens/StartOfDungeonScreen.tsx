import React, {useContext, useEffect, useState} from "react";
import {SafeAreaView} from "react-native";
import {Button, Card, Divider, Layout, List, Text, TopNavigation} from "@ui-kitten/components";
import items from "../data/items.json";
import {CharacterContext} from "../contexts/CharacterContext";
import {GameContext} from "../contexts/GameContext";
import {useNavigation} from "@react-navigation/native";

export const StartOfDungeonScreen = () => {
    const [itemChosen, setItemChosen ] = useState<boolean>(false);
    const { nextFloor } = useContext(GameContext);
    const navigation = useNavigation();

    useEffect(() => {
        console.log('Usee effect');
        nextFloor();
    }, [])

    const pickThreeRandomItems = () => {
        return [items[0], items[1], items[2]];
    }

    const renderItem = (item) => {
        return (
            <Card>
                <Text>{item.item.name}</Text>
                <Button onPress={ () => { chooseItem() }}>Choose item</Button>
            </Card>
        )
    }

    function chooseItem(){
        // todo: highlight item
        setItemChosen(true);
    }

    function traverseIntoTheDungeon(){
        // todo: use navigation.reset to reset the navigation stack so it'll be in the order you want it to be
        // or use navigation.replace, replaces current one
        navigation.reset({
            index: 1,
            routes: [
                { name: "Start"},
                { name: "Dungeon"},
            ],
        });
    }

    return (
        <SafeAreaView>
            <TopNavigation title='Before the dungeon' alignment='center'/>
            <Divider/>
            <Layout>
                <Text>
                    Before you venture forth into the dungeon, a hooded man appears before you, giving you a choice between 3 items to take with you. Which one do you pick?
                </Text>
                <List data={ pickThreeRandomItems() } renderItem={renderItem}/>
                <Button disabled={ (!itemChosen) } onPress={traverseIntoTheDungeon}>Continue</Button>
            </Layout>
        </SafeAreaView>
    );
}