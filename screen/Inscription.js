import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator } from "react-navigation";


export default class Inscription extends React.Component{
    state = {
        name: ""
    }
    continue = () => {
        this.props.navigation.navigate("Chat",{name:this.state.name})
    }
    render(){
        return(
            <View style={styles.container}>

                {/* <View style={styles.circle}/>   */}
                <View style={{marginHorizontal:50, marginTop:-32, marginLeft: 14}}>
                    <Text style={styles.header}>Username</Text>
                    <TextInput style={styles.input} 
                        placeholder="ChooseYourShoes" 
                        onChangeText={name => {
                            this.setState({name});
                        }
                        }
                        value={this.state.name}
                        />

                </View>
                <View style={{marginHorizontal:50, marginTop:-30, marginLeft: 14}}>
                    <Text style={styles.header}>Password</Text>
                    <TextInput style={styles.input} 
                        secureTextEntry={true}
                        placeholder="Password"
                        onChangeText={password => {
                            this.setState({password});
                        }
                        }
                        value={this.state.password}
                        />
                </View>

                <View style = {styles.SeConnecter}>
                    <Text style={{color: "#514E5A", fontSize: 18}}>Already have an account</Text>
                </View>
                <View style = {styles.err}>
                    <Text style={{color: "red"}}>Error password</Text>
                </View>


                <View style={{alignItems: "flex-end", marginRight: 10, marginTop: 90, }}>
                <TouchableOpacity style={styles.continue} >
                    <Ionicons name="arrow-forward" size={60} color="#FFF"/>
                </TouchableOpacity>
                </View>
                



                <TouchableOpacity style={styles.deco}>
                    <Text style={{fontSize: 20, marginLeft:10, marginTop: 4, color:"#514E5A"}} >Connection</Text>
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
    circle:{
        width: 580,
        height: 580,
        borderRadius: 500 / 2,
        backgroundColor: "#FFF",
        position: "absolute",
        left: -180,
        top: -20
    },
    header:{
        fontWeight:"800",
        fontSize: 30,
        marginTop: 150,
        color: "#514E5A",
    },
    input:{
        marginTop: 32,
        height:50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#BAB7C3",
        borderRadius: 30,
        paddingHorizontal: 16,
        color: "#514E5A",
        fontWeight: "600",
    }, 
    continue:{
        width: 70,
        height:70,
        borderRadius:70/2,
        backgroundColor: "#9075E3",
        alignItems: "center",
        justifyContent: "center"
    },
    err:{
        fontWeight:"800",
        fontSize: 30,
        marginTop: -100,
        marginLeft: 20,
    },

    SeConnecter:{
        fontWeight:"800",
        fontSize: 40,
        marginTop: 100,
        marginLeft: 20,
    },

    deco:{
        width: 130,
        height : 40,
        marginLeft: 20,
        borderRadius:  20 / 3,
        borderWidth: 2,
        borderColor: "#514E5A",
        marginTop: -55,
    }
});