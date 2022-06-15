import React, {Component} from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet, FlatList } from 'react-native';
import Produto from './Produto';


export default class Produtos extends Component {

   

    state = {
        produtos: [
            { nome: 'Jaqueta Frida', descricao:'Estilização em jaqueta jeans com tinta de tecido feito a mão pela artista. Imagem da Frida Kahlo.', imagem: 'https://i.pinimg.com/originals/82/3e/74/823e74daec7e8a6eed6c60a5562828cf.jpg' },
            { nome: 'Jaqueta "Not ur Baby"',   descricao:'Estilização em jaqueta jeans com tinta de tecido feito a mão pela artista. Efeito de pichado com frase "Not Your Baby".',imagem: 'https://phooto.com.br/wp-content/uploads/images/nfwwcz3f/products/jaqueta-jeans-feminina/tudu_not-your-baby_n-custom_jac-jea-long-jeans-f-adu_jea-lig_costas_large.jpg' },
            { nome: 'Calça Desenhos',   descricao:'Estilização em calça jeans com tinta de tecido feito a mão pela artista. Diversas ilustrações.',imagem: 'https://i.customizando.net/wp-content/uploads/2020/01/remendar-calca-jeans.jpg' },
            { nome: 'Calça Gibi', descricao:'Estilização em calça jeans com tinta de tecido feito a mão pela artista. Efeito de respingo de tinta e ilustrações.', imagem: 'https://i.pinimg.com/564x/17/58/fc/1758fcc3b7671f7136b7bc89b830a8c1.jpg' },
            { nome: 'Jaqueta "Ready"',descricao:'Estilização em jaqueta jeans com tinta de tecido feito a mão pela artista. Coração como uma bomba, frase "Ready to Explode Anytime".', imagem: 'https://i.pinimg.com/564x/b8/9c/41/b89c41eec03def5c6d2640eedc0851e3.jpg' },
            { nome: 'Calça Dragão',  descricao:'Estilização em calça jeans com tinta de tecido feito a mão pela artista. Desenho de Dragão.',imagem: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/555/049/products/e61e53fc-cb4e-4ddb-a6c2-8afde80421551-9f914aee13873ab24416198336467432-640-0.jpeg' },
          
        ]
    }
  


       
    renderProduto = ({item}) => (<Produto 
        nome={item.nome} 
        imagem={item.imagem}
        descricao={item.descricao}/>)
       

render() {
    
    return (
            <FlatList
                data={this.state.produtos}
                renderItem={this.renderProduto}
            numColumns={2}

            />
        );
    }

}
