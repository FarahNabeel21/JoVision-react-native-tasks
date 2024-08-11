import React, { useState} from 'react';
import {Text,Button,TextInput,View} from 'react-native';
import MyFunctionpage from '../Components/MyFunctionalComponent_task21';
const Task21=()=>{
 [x,setx]=useState(false);
  const t=()=>{setx(!x)}
   // useEffect((props)=>{console.warn("there is error ")})
return(
<View>
<Button title="SHOW"   onPress={t}></Button>
{
    x && <MyFunctionpage/>
}

</View>
)













}
export default Task21;