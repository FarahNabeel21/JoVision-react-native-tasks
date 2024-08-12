import React,{Component,useEffect,useState} from 'react';
import {Text,View,Button,TextInput} from 'react-native';
//import 
export default function MyFunctionPage(prop){

    const onTextChange = prop.onTextChange;
return(
<TextInput style={{fontSize:15,height:40,margin:12,borderWidth:1,padding:10} } placeholder='Add A Text ' onChangeText={onTextChange}/> 





);



}