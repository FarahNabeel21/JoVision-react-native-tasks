import React,{useEffect,useState,Component} from 'react';
import {Text,StyleSheet,TouchableOpacity,View,FlatList } from 'react-native';
export default function farah(){
const[x,setx]=useState("");
const[person,setpersoninfo]=useState([
'farah',
'sara',
'farah',
'sara','farah',
'sara','farah',
'sara','farah',
'sara','farah',
'sara',
]);


return(
<View style={styles.container}>
<FlatList 
numColumns={2}
 data={person}  
keyExtractor={(item)=>item.index}
renderItem={({item,index})=>
    <TouchableOpacity  onPress={()=>{console.log({index,item})}}> 
<Text style={styles.items}>{item}</Text> 
 </TouchableOpacity> }/>




{/*<TextInput  style={style.input} placeholder='Enter A Text' onChangeText={(name,age)=>{setpersoninfo({name,age})}}></TextInput>*/}
{/*<Button title ={x ?'HIDE':'SHOW'}  onPress={()=>{setx(!x)}}  ></Button>*/}
{/*x?<Text>farah</Text> : null*/}
{/*<Text>User Name is {person.name} {person.age}</Text> */}
{/*<ScrollView> 
{
person.map((item)=>
{
  
    return(
<View style={styles.container} key={item.age}>
<Text style={styles.items} >{item.name}</Text>
</View>

      
    );
    
  })
  }
  </ScrollView>*/}


</View>
);
}



const styles=StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'#fff',
        //justifyContent:'center',
        //alignItems:'center',
        paddingTop:50,
        paddingHorizontal:4
        //margin:20,
     
    },
    text:{
        fontSize:30,
       // color:'white'

    },
    button:{
        
    },
    input:{

padding:10,
margin:7,
color:'#777',
fontSize:20,
borderWidth:1,
padding:8,
width:30},
     
items:  {
marginTop:20,
padding:24,
backgroundColor:'pink',
fontSize:24,
marginHorizontal:20

    }

    
    });
    //export default farah;  