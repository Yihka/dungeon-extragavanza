import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Button, ButtonGroup, Icon, IconRegistry, Layout, Text} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {StartScreen} from "./screens/StartScreen";
import {AppNavigator} from "./components/Navigation";
import {CharacterProvider} from "./contexts/CharacterContext";
import {GameProvider} from "./contexts/GameContext";

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <GameProvider>
          <CharacterProvider>
            <AppNavigator/>
          </CharacterProvider>
        </GameProvider>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introText: {
    alignItems: 'center'
  }
});
