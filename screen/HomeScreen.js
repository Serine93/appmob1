import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class HomeScreen extends React.Component{
    state = {
        name: ""
    }
    continue = () => {
        this.props.navigation.navigate("Chat",{name:this.state.name})
    }
    render(){
        return(
            <View style={styles.container}>
              <Text>HomeScreen</Text>
                        
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#F4F5F7"
    },
   
});