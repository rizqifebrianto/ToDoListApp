import React from 'react';  
import {StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image} from 'react-native';  
import Note from './note';
export default class Main extends React.Component {  
 constructor(props){  
  super(props);  
   this.state={  
    noteArray:[],  
    noteText:'',  
   }  
  }  
 render() {  
  let notes = this.state.noteArray.map((val, key) => {   
   return <Note key={key} keyval={key} val={val}   
   deleteMethod={() => this.deleteNote(key)}/>  
  });  
  return (  
   <View style={styles.container}>  
   <View style={styles.header}>  
   <Text style={styles.textHeader}>To do list</Text>  
   </View>  
   <ScrollView style={styles.ScrollContainer}>  
{notes}  
   </ScrollView>  
   <View style={styles.footer}>  
    <TextInput  
    onChangeText={(noteText) => this.setState({noteText})}  
    style={styles.textInput}  
    placeholder="Tulis Note Disini"  
    placeholderTextColor='#656464'/>  
   </View>   
   <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>  
   <Image   
      source={{   
       uri:  
        'https://img.icons8.com/material-outlined/24/000000/filled-sent.png',  
      }}  
 
      style={styles.ImageIconStyle}  
     />  
   </TouchableOpacity>  
   </View>  
  );  
 }  
 addNote(){  
  if(this.state.noteArray){  
   var d = new Date();  
   this.state.noteArray.push({  
    'date' : d.getFullYear()+  
    '/'+(d.getMonth()+ 1)+  
    '/'+ d.getDate(),  
    'note' : this.state.noteText  
   });  
   this.setState({noteArray: this.state.noteArray})  
   this.setState({noteText: ''})   
  }  
 }  
 deleteNote(key){  
  this.state.noteArray.splice(key, 1);  
  this.setState({noteArray: this.state.noteArray})  
 }  
}  
const styles = StyleSheet.create({  
 container: {  
  flex: 1,  
 },  
 header:{  
  backgroundColor: '#0067d5',  
  alignItems: 'center',  
  justifyContent: 'center',  
  borderBottomWidth: 3,  
  borderBottomColor: '#ddd',   
 },  
 textHeader:{  
  color: 'white',  
  fontSize: 20,  
  padding: 20,  
  paddingBottom: 15,  
 },  
 ScrollContainer:{  
  flex: 1,  
  marginBottom: 100,  
 },  
 footer:{  
   position: "absolute",  
   bottom:0,  
   left:0,  
   right:0,  
   zIndex: 90,  
 },  
 textInput:{  
  alignSelf:'stretch',  
  color:'#000',  
  padding:20,  
  backgroundColor:'#DEDEDE',  
  borderRadius:15,  
  alignItems:'center',  
  borderTopWidth:20,  
  height:1,  
  marginLeft:20,  
  marginBottom:10,  
  width:270,  
  borderTopColor:'#ededed',  
 },  
 addButton:{  
  position:'absolute',  
  zIndex:10,  
  right:15,  
  bottom:10,  
  backgroundColor:'#0067d5',  
  width:50,  
  height:50,  
  borderRadius:50,  
  alignItems: 'center',  
  justifyContent:'center',  
 },  
 addButtonText:{  
  color:'white',  
  fontSize:34,  
 },  
 ImageIconStyle: {  
  padding: 10,  
  margin: 4,  
  height: 25,  
  width: 25,  
  resizeMode: 'stretch',  
 },  
});