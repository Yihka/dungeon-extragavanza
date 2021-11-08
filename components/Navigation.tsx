import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import {StartScreen} from "../screens/StartScreen";
import {ChooseCharacterScreen} from "../screens/ChooseCharacterScreen";
import {OptionsScreen} from "../screens/OptionsScreen";
import {StartOfDungeonScreen} from "../screens/StartOfDungeonScreen";

const { Navigator, Screen } = createStackNavigator();

// Level generation:
// 1. StartOfDungeon - Before you venture off, you may choose one item to take with you.
// 2. FloorStart - Gives some info of where you've been put. This is always an empty room.
// 3. EmptyRoom - Similar to FloorStart, no items or mobs
// 4. MobRoom - Contains enemies
// 5. TreasureRoom - Contains perk
// 6. ItemRoom - Contains items
// 7. MiniBossRoom - Contains miniboss, strong to kill.
// 8. BossRoom - Beat the boss to go to the next level, drops items/perks.

export const AppNavigator = () => (
    <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='Start' component={StartScreen}/>
            <Screen name='ChooseCharacter' component={ChooseCharacterScreen}/>
            <Screen name='Options' component={OptionsScreen}/>
            <Screen name='StartOfDungeon' component={StartOfDungeonScreen}/>
        </Navigator>
    </NavigationContainer>
);