import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';



import Home from './src/Pages/Home';
import Produtos from './src/Pages/Produtos';
import Criadores from './src/Pages/Criadores';
import Sobre from './src/Pages/Sobre';


const Tab = createBottomTabNavigator();

const icones = {
  Inicio: {
    name: 'home'
  },
  Produtos: {
    name: 'rocket'
  },
  Criadores: {
    name: 'heart'
  },
  Sobre: {
    name: 'info-circle'
  }
}
export default function App() {

  return (

    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            const { name } = icones[route.name];
            return <Icon name={name} color='#A32929' size={20} />
          }

        })}
      >
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Produtos" component={Produtos} />
        <Tab.Screen name="Criadores" component={Criadores} />
        <Tab.Screen name="Sobre" component={Sobre} />

      </Tab.Navigator>
    </NavigationContainer>

  );
}

