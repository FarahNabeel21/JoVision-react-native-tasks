//import { Component } from 'react';
import React ,{Component}from 'react';
import{View,Text,Platform,TextInput,Button}from 'react-native';
class MyclassPge extends Component{


    
  
render()
{   
  
return(
<View>
<TextInput  style={{fontSize:15,height:40,margin:12,borderWidth:1,padding:10} }  placeholder='please Enter a Text..'
 onChangeText={this.props.onText} />
</View>
);


}














}
export default MyclassPge;