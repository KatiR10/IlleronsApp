import React from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions, ScrollView } from 'react-native';


export default function Sobre({ navigation }) {
    return (
        <ScrollView>
            <View style={header.background}>
                <View style={header.container}>
                    <Text style={header.title}> Illeron´s</Text>
                    <Text style={header.subtitle}> Log-in </Text>
                    <Image style={header.logo} source={require('../Assets/Images/logoil.png')}></Image>

                </View>
            </View>

            <Text style={body.about}>Sobre Illerons Fashion</Text>

            <Text style={body.criator}>Criadora e Responsável: Rebecca Illeron</Text>

            <Text style={body.historic}>Histórico</Text>

            <Text style={body.since}>Desde seus 7 anos é interessada no ramo de moda,
                por influência de seus próprios pais.
                Desenhando suas proóprias roupas desde cedo.
                Aos 16 anos começou a personalizar suas
                próprias vestimentas e divulgar para quem
                tivesse interesse,principalmente em sua escola.
                Aos 18 anos começou a fazer algumas vendas em casa.
                Aos 22 anos abriu sua primeira e única loja
                física na sua cidade natal.</Text>
        </ScrollView>

    );
}






const body = StyleSheet.create({
    about: {
        fontSize: 20,
        color: "#AA4040",
        fontFamily: "RedRose-Regular",
        textAlign: "center",
        opacity: 0.5,
    },
    criator: {
        fontSize: 18,
        color: "#933232",
        fontFamily: "RedRose-Regular",
        textAlign: "center",
    },
    historic: {
        fontSize: 18,
        color: "#EA7A7A",
        fontFamily: "RedRose-Regular",
        textAlign: "center",
    },
    since: {
        fontSize: 13,
        color: "#630909",
        fontFamily: "RedRose-Regular",

    },


});

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


