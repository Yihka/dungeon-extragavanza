import React from "react";
import {Divider, Layout, List, Text, TopNavigation} from "@ui-kitten/components";
import {SafeAreaView, TextInput} from "react-native";
import characters from '../data/characters.json';
import {CharacterInfo} from "../components/CharacterInfo";

export const ChooseCharacterScreen: React.FC = () => {

    const renderItem = ({ item, index }) => (
        <CharacterInfo character={item} index={index}></CharacterInfo>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Choose a character' alignment='center'/>
            <Divider/>
            <Layout style={{ flex: 1}}>
                <Text category='h1'>Choose your character</Text>
                <List data={characters} renderItem={ renderItem }>

                </List>
            </Layout>
            <Layout>
                <TextInput value={"test"} onChangeText={() => { }}/>
            </Layout>

        </SafeAreaView>
    );
}