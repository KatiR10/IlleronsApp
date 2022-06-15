import React, { useState } from 'react';
import Modal from "react-native-modal";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Produto(props, { navigation }) {

    


    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Modal style={{
                flex: 1,
                borderRadius: 10,
                height: 300,
                width: 300,
                backgroundColor: '#DEBBBB',
                alignItems: 'center',
                justifyContent: 'center'
            }} isVisible={isModalVisible}>
               
               
                <ScrollView >
                    
                <Image style={header2.images} source={{ uri: props.imagem }} />
                <Text style={header2.subtitle2}>{props.nome}</Text>
                <Text style={header2.description}>{props.descricao}</Text>
              
                </ScrollView>

                <TouchableOpacity onPress={toggleModal} style={{
                    backgroundColor: '#2977A3',
                    padding: 8,
                    marginBottom: 10,
                    borderRadius: 15,
                    alignItems: 'center'
                }}>

                    <Text style={{ color: 'white' }}><Icon name="arrow-left" />Voltar</Text>
                </TouchableOpacity>

            </Modal>
              
           
      

            <Image style={{ flex: 1, width: 100, height: 200 }} source={{ uri: props.imagem }} />
            <Text style={header2.subtitle}>{props.nome}</Text>
          
            <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
                <View style={{ flex: 1, padding: 10 }}>
                    <TouchableOpacity onPress={toggleModal} style={{ backgroundColor: '#A32929', padding: 5, borderRadius: 15, alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontFamily: "RedRose-Regular", }}>Detalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>


    );
}
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


const header2 = StyleSheet.create({
  
    subtitle: {
        fontSize: 14,
        color: "#630909",
        fontFamily: "RedRose-Regular",
        textAlign: "center",

    },
   
    subtitle2: {
        fontSize: 14,
        color: "#2977A3",
        fontFamily: "RedRose-Regular",
        textAlign: "center",

    },

    description:{
        fontSize: 12,
        color: "#630909",
        fontFamily: "RedRose-Regular",
        textAlign: "left",
    },
    images:{
        weight: 300,
        height:300,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
