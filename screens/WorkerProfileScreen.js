import React,{Component} from 'react';
import {Text,View,StyleSheet, TextInput, TouchableOpacity, Alert,Modal,ScrollView,KeyboardAvoidingView} from 'react-native';
import MyHeader from '../components/MyHeader';

export default class WorkerProfileScreen extends Component{
    render(){
        return(
            <View>
                <MyHeader title = "Worker Details"/>
                <Text style ={{fontSize:20,fontWeight:'bold',alignSelf:'center',marginTop:290}}>More Functionality soon be added</Text>
                <Text style ={{fontSize:20,fontWeight:'bold',alignSelf:'center',marginTop:30}}>Swipe Right for side menu</Text>
            </View>
        )
    }
}