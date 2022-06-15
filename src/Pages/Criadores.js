import React from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';

export default function Criadores({ navigation }) {
    return (
        <ScrollView>
            <View style={header.background}>
                <View style={header.container}>
                    <Text style={header.title}> Illeron´s</Text>
                    <Text style={header.subtitle}> Log-in </Text>
                    <Image style={header.logo} source={require('../Assets/Images/logoil.png')}></Image>
                </View>
            </View>

            <Text style={other.criators}> Outros Artistas</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 5, width: 350 , height: 190 }}>
                <Image style={{ flex: 2, height: 150 }} source={require('../Assets/Images/abcd.jpg')} />
                <Image  style={{ flex: 2, height: 150 }} source={require('../Assets/Images/123.jpg')} />
            </View>
            <View style={{ margin: 1 }} >
            <Text style={other.leg} >Por: @abcd_                                               Por: @123_</Text>
          </View >

        
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 5, width: 350 , height: 190 }}>
                <Image style={{ flex: 2, height: 150 }} source={require('../Assets/Images/rick.jpg')} />
                <Image  style={{ flex: 2, height: 150 }} source={require('../Assets/Images/flower.jpg')} />
            </View>
            <View style={{ margin: 1 }} >
            <Text style={other.leg} >Por: Por: Rick__                                               Por: Flower__</Text>
          </View >
        </ScrollView>
    );
}
const other = StyleSheet.create({
    criators: {
        fontSize: 20,
        color: "#7759F0",
        fontFamily: "RedRose-Regular",
        textAlign: "center",
    },
    leg:{
        fontSize: 12,
        color: "#7759F0",
        fontFamily: "RedRose-Regular",
        textAlign: "center",
    }
})

const header = StyleSheet.create({
    background: {
        width: 359,
        height: 80,
        backgroundColor: "#CE4A4A",
        opacity: 0.6,
    },
    container: {
        textAlign: "center"
    },
    title: {
        fontSize: 30,
        color: "#630909",

        fontFamily: "RedRose-Regular",
        textAlign: "center"
    },
    subtitle: {
        fontSize: 14,
        color: "#630909",
        fontFamily: "RedRose-Regular",
        textAlign: "right",


    },
    logo: {
        width: 40,
        height: 40,
      right: 95,
      position: "absolute"
      }  


});


