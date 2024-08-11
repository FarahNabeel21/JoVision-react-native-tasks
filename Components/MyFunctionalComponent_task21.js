import React,{useEffect,useState} from "react";
import {Text,Button,View} from "react-native";
export default function MyFunctionpage()
{
[x,setx]=useState(false);    
useEffect(()=>{if(!x){console.log('loading')}else{console.log('unloading')}});

return(
<View>
{
  
x &&<Text>Welcome page </Text>
}
</View>


);





}