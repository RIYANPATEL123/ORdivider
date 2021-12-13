import React from "react";
import {Text,StyleSheet ,View} from "react-native";

export default function Or(){
    return (
        <View style={styles.container}>
            <View style={styles.line}></View>
            <Text style={styles.buttontext} >OR</Text>
            <View style={styles.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    line:{
        height:3,
        width:"45%",
        backgroundColor: "#E3E3E3",
    },
    container: {
        flex: 1,
    
        marginTop: 70,
        paddingHorizontal: 20,
        flexDirection: "row",
    },
    buttontext: {
        fontWeight: 'bold',
        fontSize: 18,
        
        textAlign: "top",
    },
})