import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class ProfileScreen extends React.Component{
    state = {
        name: ""
    }
    continue = () => {
        this.props.navigation.navigate("Chat",{name:this.state.name})
    }
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.pdp} source={require('../assets/profile.jpg')} /> 
                <Text style={styles.descriptif}>Cheffe cuisto de mère en fille</Text>
                <Image style={styles.emoji} source={require('../assets/emoji.png')} /> 
                <Text style={styles.localisationDescriptif}>Paris</Text>

                <View style={{alignItems: "flex-end", marginRight: 25, marginTop: -130, }}>
                <TouchableOpacity style={styles.fav} onPress={this.continue}>
                    <Ionicons name="star" size={20} color="white" /*border-color="black" border-width="3px"*/ />
                    <Text style={styles.nombre}>4.2</Text>
                </TouchableOpacity>
                </View>

                
                <Text style={styles.moyenneG}>Moyenne générale</Text>

                <Text style={styles.publications}>30</Text>
                <Text style={styles.RecettePubliées}>Recettes publiées</Text>

                <Text style={styles.pseudo}>Serine93</Text>

                <TouchableOpacity style={styles.repartir} >
                    <Ionicons name="chevron-back-circle" size={45} color="#55ecc8" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.trait} onPress={this.continue}>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#F4F5F7"
    },
    pdp:{
        width:130, 
        height:130,
        marginLeft:13, 
        marginTop: 130, 
        borderRadius: 500 / 2,
        borderWidth: 4,
        borderColor: "#55ecc8",
    },
    
    trait:{
        width: 330,
        marginTop: 220,
        height:3,
        backgroundColor: "#bfbcbc",
        marginLeft: 23,
        borderRadius: 20 / 3,
    },
    emoji:{
        width:17,
        height: 17,
        marginLeft: 25,
        marginTop: 7,
    },
    descriptif:{
        fontSize: 12,
        marginLeft: 30,
        marginTop: 15,
    },
    fav:{
        width: 60,
        height:23,
        backgroundColor: "#d5c700",
        borderRadius: 20 / 3,
    },
    nombre:{
        marginTop:-18,
        marginLeft:28,
        color:"#FFF",
        fontSize:12,
    },
    localisationDescriptif:{
        marginLeft: 40,
        marginTop: -15,
        fontSize: 12,
    },
    moyenneG:{
        marginLeft: 268,
        marginTop: 6,
        fontSize : 11,
    },
    RecettePubliées:{
        marginLeft: 155,
        marginTop: 0,
        fontSize : 11,
    },
    repartir:{
        width: 100,
        height:100,
        marginHorizontal:50,
        marginTop:-35, 
        marginLeft: 14
    },
    publications:{
        fontSize: 30,
        marginTop: -50,
        marginLeft: 180,
    }, 
    pseudo:{
        marginLeft: 70,
        marginTop: -150,
        fontWeight: "bold",
    }
   
});