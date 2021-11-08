import React, {useState} from "react";
import {SafeAreaView} from "react-native";
import {Button, Card, Divider, Layout, List, Text, TopNavigation} from "@ui-kitten/components";
import items from "../data/items.json";

export const StartOfDungeonScreen = () => {
    const [itemChosen, setItemChosen ] = useState<boolean>(false);


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

    return (
        <SafeAreaView>
            <TopNavigation title='Before the dungeon' alignment='center'/>
            <Divider/>
            <Layout>
                <Text>
                    Before you venture forth into the dungeon, a hooded man appears before you, giving you a choice between 3 items to take with you. Which one do you pick?
                </Text>
                <List data={ pickThreeRandomItems() } renderItem={renderItem}/>
                <Button disabled={ (!itemChosen) }>Continue</Button>
            </Layout>
        </SafeAreaView>
    );
}