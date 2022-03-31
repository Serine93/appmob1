import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class Setting2Screen extends React.Component{
    state = {
        name: ""
    }
    continue = () => {
        this.props.navigation.navigate("Chat",{name:this.state.name})
    }
    render(){
        return(
            <View style={styles.container}>



                <TouchableOpacity >
                    <Image style={styles.cross} source={require('../assets/cross.png')} /> 
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image style={styles.slide} source={require('../assets/chevronRight.png')} /> 
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image style={styles.slide1} source={require('../assets/chevronRight.png')} /> 
                </TouchableOpacity>

                 <TouchableOpacity >
                    <Image style={styles.slide2} source={require('../assets/chevronRight.png')} /> 
                </TouchableOpacity>

                 <TouchableOpacity >
                    <Image style={styles.slide3} source={require('../assets/chevronRight.png')} /> 
                </TouchableOpacity>

                 <TouchableOpacity >
                    <Image style={styles.slide4} source={require('../assets/chevronRight.png')} /> 
                </TouchableOpacity>   

                <Text style={styles.param1}>Notifications</Text>

                <Text style={styles.param1}>Couleur thème</Text>

                <Text style={styles.param1}>Condition d'utilisateur</Text>

                <Text style={styles.param1}>Mention légale</Text>

                <Text style={styles.param1}>Supprimer compte</Text>

                <TouchableOpacity style={styles.trait2} onPress={this.continue}>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image style={styles.insta} source={require('../assets/insta.png')} /> 
                </TouchableOpacity>


                <TouchableOpacity >
                    <Image style={styles.twitter} source={require('../assets/twitter.png')} /> 
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image style={styles.fb} source={require('../assets/fb.png')} /> 
                </TouchableOpacity>

                <Text style={styles.term}>Term and Privacy Policy</Text>

                <Text style={styles.sousTerm}>Version yo no sabes</Text>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#F4F5F7"
    },
    cross:{
        width: 35,
        height : 35,
        marginTop: 70,
        marginLeft : 20,
        backgroundColor : "#55ecc8",
        borderRadius: 500 / 2,
    }, 

    insta:{
        width: 45,
        height : 45,
        marginTop: 30,
        marginLeft: 100,
    },

    fb:{
        width: 37,
        height : 37,
        marginTop: -42,
        marginLeft: 200,
    },


    twitter:{
        width: 45,
        height : 45,
        marginTop: -46,
        marginLeft: 150
    },
    
    trait:{
        width: 30,
        height:4,
        backgroundColor: "#908f8f",
        marginLeft: 20,
        borderRadius: 20 / 3,
        marginTop: 15,
    },

    trait2:{
        width: 330,
        height:4,
        backgroundColor: "#908f8f",
        marginLeft: 20,
        borderRadius: 20 / 3,
        marginTop: 160,
    },


    slide:{
        width: 26,
        height : 26,
        marginTop: 24,
        marginBottom: -900,
        marginLeft : 290,
        backgroundColor:"#f4f5f7",
    },

    slide1:{
        width: 26,
        height : 26,
        marginTop: 100,
        marginBottom: -900,
        marginLeft : 290,
        backgroundColor:"#f4f5f7",
    },


    slide2:{
        width: 26,
        height : 26,
        marginTop: 180,
        marginBottom: -900,
        marginLeft : 290,
        backgroundColor:"#f4f5f7",
    },


    slide3:{
        width: 26,
        height : 26,
        marginTop: 250,
        marginBottom: -900,
        marginLeft : 290,
        backgroundColor:"#f4f5f7",
    },

    slide4:{
        width: 26,
        height : 26,
        marginTop: 325,
        marginBottom: -900,
        marginLeft : 290,
        backgroundColor:"#f4f5f7",
    },

    titre:{
        fontSize: 25,
        marginTop: 20,
        marginLeft: 20,
        width : 200,
        fontWeight: "bold",
    }, 
    sousTitre:{
        fontSize: 15,
        marginTop: 2,
        width : 200,
        marginLeft: 20,
        color: "#908f8f",
    }, 
    sousTerm:{
        fontSize: 15,
        marginTop: -6,
        width : 200,
        marginLeft: 37,
        color: "#908f8f",
    }, 

    deco:{
        width: 100,
        height : 30,
        marginLeft: 235,
        borderRadius:  20 / 3,
        borderWidth: 2,
        borderColor: "#c25d5d",
        marginTop: -230,
    },


    param1:{
        fontSize: 17,
        marginTop: 30,
        marginBottom : 25,
        marginLeft: 35,
    }, 
    term:{
        fontSize: 17,
        marginTop: 15,
        marginBottom : 15,
        marginLeft: 35,
    }
    
   
});