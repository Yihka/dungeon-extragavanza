import {Button, ButtonGroup, Divider, Layout, Text, TopNavigation} from "@ui-kitten/components";
import React from "react";
import {BackHandler, SafeAreaView} from "react-native";
import {useNavigation} from "@react-navigation/native";

export const StartScreen = () => {

    const navigation = useNavigation();

    const continueButton = () => {
        console.log('A', 'Bcdefg');
    }

    const newGameButton = () => {
        navigation.navigate('ChooseCharacter');
    }

    const optionsButton = () => {
        navigation.navigate('Options');
    }

    const exitButton = () => {
        BackHandler.exitApp();
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Main Menu' alignment='center'/>
            <Divider/>
            <Layout style={{ flex: 1 }}>
                <Text category='h1'>
                    Welcome to Dungeon Extragavanza!
                </Text>

                <Button onPress={continueButton} appearance='ghost' disabled={true}>
                    Continue
                </Button>
                <Button onPress={newGameButton} appearance='ghost'>
                    New game
                </Button>
                <Button onPress={optionsButton} appearance='ghost'>
                    Options
                </Button>
                <Button onPress={exitButton} appearance='ghost'>
                    Exit
                </Button>
            </Layout>
        </SafeAreaView>
    );
}