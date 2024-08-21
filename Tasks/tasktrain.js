import React,{useEffect,useState,Component} from 'react';
import {Text,StyleSheet,ScrollView,Button,View,FlatList } from 'react-native';
export default function farah(){
const[x,setx]=useState("");
const[person,setpersoninfo]=useState([
    {name:'farah',age:'19'},
    {name:'ali',  age:'20'},
    {name:'sara', age:'21'},
    {name:'mohammad',age:'22'},
    {name:'mohammad',age:'22'},
    {name:'Nada',age:'22'},
]);


return(
<View style={styles.container}>

{/*<TextInput  style={style.input} placeholder='Enter A Text' onChangeText={(name,age)=>{setpersoninfo({name,age})}}></TextInput>*/}
{/*<Button title ={x ?'HIDE':'SHOW'}  onPress={()=>{setx(!x)}}  ></Button>*/}
{/*x?<Text>farah</Text> : null*/}
{/*<Text>User Name is {person.name} {person.age}</Text> */}
<ScrollView>

{person.map((item)=>{
  
    return(
<View style={styles.container} key={item.age}>
<Text style={styles.items} >{item.name}</Text>
</View>
      
    );
    
  })
  }
  </ScrollView>
</View>
);
}


/*class farah extends Component{

constructor(){
    super();
    this.state={flag:false}
 
}

render(){

   return(<View style={style.container}> 
   <TextInput placeholder='enter text' onChangeText={(txt)=>{!this.state.flag &&txt}}> </TextInput>
<Button title='show' onPress={()=>{this.setState(pre=>({flag:!pre.flag}))}}></Button>
    {this.state.flag && <Text>farah </Text>}
    </View>);


}



}*/
const styles=StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'#fff',
        //justifyContent:'center',
        //alignItems:'center',
        paddingTop:40,
        paddingHorizontal:20
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
marginTop:24,
padding:30,
backgroundColor:'pink',
fontSize:24,

    }

    
    });
    //export default farah;  