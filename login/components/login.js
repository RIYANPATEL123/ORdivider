import React,{useState} from "react";
import {Button, View,ScrollView, Text ,StyleSheet ,TextInput} from "react-native";
import Or from "./ordivider";

export default function Login(){

    const [email,setEmail] = useState('');
    const [Password,setPassword] = useState('');


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.form}><Text style={styles.label}>Email Address</Text></View>
            <TextInput
            style={styles.inputField}
            keyboardType="default"
            placeholder="Enter your Email"
            //value="email"
            onChangeText={(val)=>setEmail}
            ></TextInput>
            <View style={styles.divider}></View>
            <View style={styles.form}><Text style={styles.label}>Password</Text>
                </View>
            <TextInput
            style={styles.inputField}
            keyboardType="numeric"
            secureTextEntry
            placeholder="Enter your Password"
            //value="password"
            onChangeText={(val)=>setPassword}
            ></TextInput>
            <Button title="login"></Button>
            

            <Or></Or>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        marginTop: 60,
        paddingHorizontal: 30,
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
        letterSpacing: 0.1,
        color: '#2E2E2E',
    },
    form: {
        marginVertical: 35,
    },
    label: {
        fontSize: 16,
        lineHeight: 18,
        color: '#666666',
        marginBottom: 3,
    },

    inputField: {
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#BFBFBF',
        paddingVertical: 6,
    },

    divider: {
        paddingVertical: 12,
    },

    log: {
        textAlign: "center",
        marginVertical: 2,
    },

    signup: {
        marginTop: 40,
    }
    ,
    buttoncontainer: {
        backgroundColor: '#2B35E0',
        borderRadius: 8,
        padding: 10,
    },

    buttontext: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: "center",
    },
});