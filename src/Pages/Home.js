import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";

export default function Home({ navigation }) {
    return (

        <ScrollView>

            <View style={header.background}>
                <View style={header.container}>
                    <Text style={header.title}> Illeron´s</Text>
                    <Text style={header.subtitle}> Log-in </Text>
                    <Image style={header.logo} source={require('../Assets/Images/logoil.png')}></Image>

                </View>
            </View>
            <View style={{ alignItems: "center" }}>
                <Image style={banner.posicao} source={require('../Assets/Images/banner.jpg')} />
            </View>

            <Text style={other.criators}> Últimos Trabalhos</Text>


            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 5, width: 350, height: 190, backgroundColor: "#E1BFBF", }} >
                <Image style={{ flex: 1, height: 150 }} source={require('../Assets/Images/jaq1.jpg')} />
                <Image style={{ flex: 1, height: 150 }} source={require('../Assets/Images/cal1.jpg')} />
                <Image style={{ flex: 1, height: 150 }} source={require('../Assets/Images/jaq2.jpg')} />

            </View>

            <View style={{ alignItems: 'center', backgroundColor: "#E1BFBF", }} >
                <Image style={{ flex: 1, height: 200, width: 200 }} source={require('../Assets/Images/jaq3.jpg')} />
            </View>


            <View style={form.container}>

                <Text style={form.title}>Faça seu Pedido!</Text>
                <Text style={form.texts}>Nome: </Text>
                <TextInput placeholder="Informe seu nome" style={form.inputs} />
                <Text></Text>
                <Text style={form.texts}>E-mail: </Text>
                <TextInput placeholder="Informe seu E-mail" style={form.inputs} />
                <Text></Text>
                <Text style={form.texts}>Telefone</Text>
                <TextInput placeholder="Informe seu Telefone" keyboardType="numeric" style={form.inputs} />
                <Text></Text>
                <Text style={form.texts}>Detalhes do Pedido </Text>
                <TextInput placeholder="Informe os Detalhes" style={form.inputs} />
                <Text></Text>


                <Text style={form.texts}>Anexo </Text>

                <TextInput placeholder="Anexe seus Arquivos" style={form.inputs} />
                <Text></Text>
                <View style={styles.container}>

                    <RNCamera

                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        onGoogleVisionBarcodesDetected={({ barcodes }) => {
                            console.log(barcodes);
                        }}

                    />
                    <Text style={form.texts}>Tire uma Foto da sua Peça: </Text>

                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                            <Text style={{ fontSize: 12 }}> Foto </Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <TouchableOpacity style={form.button}>

                    <Text style={form.textButton}>Enviar!</Text>

                </TouchableOpacity>

            </View>

        </ScrollView>

    );

}
takePicture = async () => {
    if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        console.log("Imagem Salva!" + data.uri);

        CameraRoll.save(data.uri)
        console.log("Imagem salva camera roll")
    }
};

const form = StyleSheet.create({
    container: {
        margin: 1,
        backgroundColor: "#CE4A4A",
        opacity: 0.7,
        borderColor: "#A32929",
        borderRadius: 10,
        flex: 2,
    },
    texts: {
        color: "#A32929",
        fontFamily: "RedRose-Regular",
        textAlign: 'center',
    },
    inputs: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#A32929'
    },
    title: {
        color: "#A32929",
        fontFamily: "RedRose-Bold",
        fontSize: 15,
        textAlign: 'center',

    },
    button: {
        backgroundColor: "#A32929",
        padding: 10,

    },
    textButton: {
        textAlign: 'center',
        fontFamily: "RedRose-Regular",
        color: "white"

    }
});

const other = StyleSheet.create({
    criators: {
        fontSize: 20,
        color: "#A32929",
        fontFamily: "RedRose-Regular",
        textAlign: "center",
    },

});
const banner = StyleSheet.create({
    posicao: {
        width: 350,
        height: 150,
        alignItems: 'center',
        margin: 5,

    },
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
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


