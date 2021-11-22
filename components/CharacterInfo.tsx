import {Button, Card, Icon, Text} from "@ui-kitten/components";
import {Image, StyleSheet, View} from "react-native";
import React, {useContext} from "react";
import {useNavigation} from "@react-navigation/native";
import {CharacterContext, CharacterSheetState} from "../contexts/CharacterContext";

export const CharacterInfo: React.FC<{ character: CharacterSheetState, index: number}> = ({ character, index}) => {
    const { setCharacter } = useContext(CharacterContext);
    const navigation = useNavigation();

    const CardHeader = (name, props) => (
        <View {...props}>
            <Text category='h2'>
                {name}
            </Text>
        </View>
    );

    // todo: make component of it
    const attribute = (name: string, stat: number, iconName: string, iconColor: string) => (
        <View style={styles.attribute}>
            <Icon name={ iconName } style={styles.icon} fill={iconColor} />
            <Text>
                { name }: { stat }
            </Text>
        </View>
    )

    function selectCharacter(characterIndex: number){
        console.log(`You have selected ${characterIndex}`);
        setCharacter(characterIndex);



        navigation.navigate('StartOfDungeon');
    }

    let portraitImage = require("../assets/characters/bob.jpg");

    return (
        <Card header={CardHeader(character.name)}>
            <Image source={ portraitImage} style={styles.portrait}/>
            <Text>
                {character.description}
            </Text>
            {attribute('hp', character.hp, 'heart', '#cc0000')}
            {attribute('damage', character.damage, 'flash', '#ffcc00')}
            {attribute('speed', character.speed, 'rewind-right', '#00cc00')}
            <Button onPress={() => selectCharacter(index)}>
                Select {character.name}
            </Button>
        </Card>
    );
}

const styles = StyleSheet.create({
    attribute: {
        flex: 1,
        flexDirection: 'row'
    },
    icon: {
        width: 24,
        height: 24
    },
    portrait: {
        width: 128,
        height: 128
    }
});