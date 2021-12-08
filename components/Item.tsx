import {Card, Text} from "@ui-kitten/components";
import {Image, StyleSheet, View} from "react-native";
import React from "react";
import {ItemType} from "../data/Items";

export const Item : React.FC<{ item: ItemType }> = ({item}) => {
    const header = (item: ItemType, props) => (
        <View {...props}>
            <Text category='h6'>
                {item.name}
            </Text>
            <Text category='s1'>{item.type}</Text>
        </View>
    );

    console.log(item);

    let image = require('../assets/items/moldy-croissant.png');

    return (
        <Card header={header(item)}>
            <Image source={ image } style={styles.image}></Image>
            <Text>{item.description}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 128,
        height: 128
    }
})