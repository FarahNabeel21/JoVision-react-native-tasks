import React,{Component,useEffect,useState} from 'react';
import {Text,View,Button,TextInput} from 'react-native';
import MyclassPge from '../Components/MyClassPage_task23';
export default function Task23()
{
 [x,setx]=useState('hello world fff');
 const handelText=(text)=>{
    setx(text);
 }   
return(
<View>
<Text style={{fontSize:20 , color:'red', justifyContent:'center',alignItems:'center' ,padding:50,margin:50,flex:-150}}>{x} </Text>  
<MyclassPge onText={handelText}></MyclassPge>

</View>


);



}