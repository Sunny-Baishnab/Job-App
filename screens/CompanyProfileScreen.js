import React ,{Component} from 'react';
import {View , Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';
import {ListItem} from 'react-native-elements';

export default class CompanyProfileScreen extends Component{
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            allRequest:[]
        }
        this.requestRef = null
    }

    BusinessManRequest = ()=>{
        this.requestRef = db.collection('Requests_as_a_BusinessMan')
        .onSnapshot((snapShot)=>{
            var RequestList = snapShot.docs.map((doc)=>doc.data())
            this.setState({
                allRequest:RequestList
            })
        })
    }

    componentDidMount(){
        this.BusinessManRequest()
    }
    
    componentWillUnmount(){
        this.requestRef()
    }


    keyExtractor = (item,index)=>index.toString()
    
    renderItem = ({item,i})=>{
        return(
            <ListItem
            key={i}
            title={item.company_name}
            subtitle={item.company_details}
            titleStyle={{color:'black',fontWeight:'bold'}}
            rightElement={
                <TouchableOpacity style={styles.button}>
                    <Text style = {{color:'#ffff',fontSize:15}}>View</Text>
                </TouchableOpacity>
            }
            bottomDivider
            />
        )
    }

    render(){
        return(
            <View style = {{flex:1}}>
                <MyHeader title = 'Company Details' navigation ={this.props.navigation}/>
                <View style={{flex:1,marginTop:50}}>
                    {this.state.allRequest.length===0?(
                    <View style = {styles.subContainer}>
                        <Text style = {{fontSize:20}}>List of All Requested BusinessMan</Text>
                    </View>):(
                        <FlatList
                        keyExtractor = {this.keyExtractor}
                        data = {this.state.allRequest}
                        renderItem = {this.renderItem}/>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       },
       borderRadius:10
    }
  })