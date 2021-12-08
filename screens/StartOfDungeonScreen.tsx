import React, {useContext, useEffect, useState} from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import {Button, Card, Divider, Layout, List, Text, TopNavigation} from "@ui-kitten/components";
import {GameContext} from "../contexts/GameContext";
import {useNavigation} from "@react-navigation/native";
import {Item} from "../components/Item";
import {Items} from "../data/Items";

export const StartOfDungeonScreen = () => {
    const [itemChosen, setItemChosen ] = useState<boolean>(false);
    const { nextFloor } = useContext(GameContext);
    const navigation = useNavigation();
    const items = new Items().getItems()

    useEffect(() => {
        console.log('Usee effect');
        nextFloor();
    }, [])

    const pickThreeRandomItems = () => {
        return [items[0], items[1], items[2]];
    }

    const renderItem = ({ item }) => {
        console.log('item here');
        console.log(item);
        return (
            <>
                <Item item={item}/>
                <Button onPress={ () => { chooseItem() }}>Choose item</Button>
            </>
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
        <SafeAreaView style={{flex:1}}>
            <TopNavigation title='Before the dungeon' alignment='center'/>
            <Divider/>
            <Layout style={{ flex: 1}}>
                <Text>
                    Before you venture forth into the dungeon, a hooded man appears before you, giving you a choice between 3 items to take with you. Which one do you pick?
                </Text>
                <List data={ pickThreeRandomItems() } renderItem={renderItem}/>
                <Button disabled={ (!itemChosen) } onPress={traverseIntoTheDungeon}>Continue</Button>
            </Layout>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    list: {
        maxHeight: 360
    }
})