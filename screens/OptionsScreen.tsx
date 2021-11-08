import React from "react";
import {Divider, Text, TopNavigation} from "@ui-kitten/components";
import {SafeAreaView} from "react-native";

export const OptionsScreen = () => {
    return (
        <SafeAreaView>
            <TopNavigation title='Option' alignment='center'/>
            <Divider/>
            <Text>Opties</Text>
        </SafeAreaView>
    );
}