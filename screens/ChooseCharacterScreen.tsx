import React, {useContext} from "react";
import {Button, Card, Divider, Icon, Layout, List, Text, TopNavigation, ViewPager} from "@ui-kitten/components";
import {SafeAreaView, StyleSheet, View} from "react-native";
import characters from '../data/characters.json';
import {CharacterContext} from "../contexts/CharacterContext";
import {useNavigation} from "@react-navigation/native";

export const ChooseCharacterScreen = () => {
    const { setCharacter } = useContext(CharacterContext);
    const navigation = useNavigation();

    const CardHeader = (name, props) => (
        <View {...props}>
            <Text category='h2'>
                {name}
            </Text>
        </View>
    );

    const hpIndicator = (hp: number) => (
        <View>
            <Icon name='heart' style={styles.icon}/>
            <Text>HP: {hp}
            </Text>
        </View>
    )

    const damageIndicator = (damage: number) => (
        <View>
            <Icon name='heart' style={styles.icon}/>
            <Text>Damage: {damage}
            </Text>
        </View>
    )

    const speedIndicator = (speed: number) => (
        <View>
            <Icon name='heart' style={styles.icon}/>
            <Text>Speed: {speed}
            </Text>
        </View>
    )

    function selectCharacter(characterIndex: number){
        console.log(`You have selected ${characterIndex}`);
        setCharacter(characterIndex);

        navigation.navigate('StartOfDungeon');
    }

    const renderItem = (character) => {
        return (
            <Card header={CardHeader(character.item.name)}>
                <Text>
                    {character.item.description}
                </Text>
                {hpIndicator(character.item.hp)}
                {damageIndicator(character.item.damage)}
                {speedIndicator(character.item.speed)}
                <Button onPress={() => selectCharacter(character.index)}>
                    Select {character.item.name}
                </Button>
            </Card>
        )
    }

    console.log(characters);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Choose a character' alignment='center'/>
            <Divider/>
            <Layout style={{ flex: 1}}>
                <Text category='h1'>Choose your character</Text>
                <List data={characters} renderItem={ renderItem }>

                </List>
            </Layout>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    class: {
        width: '750%'
    },
    icon: {
        width: 32,
        height: 32
    }
});