import React from 'react';
import { View, Text, ImageBackground } from 'react-native';


const Food = (props) => {
    return ( 
        <ImageBackground style={{width: 200, height: 200, borderRadius: 30, marginRight: 20, borderRadius: 10, overflow: 'hidden'}} source={{uri: props.details.image}}>
            <View style={{backgroundColor: 'rgba(0,0,0, 0.50)', flex: 1, padding: 20}}>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                    <Text style={{color: '#ffffff', fontSize: 18, fontWeight: '500', marginBottom: 10}}>{props.details.name}</Text>
                    <Text style={{color: '#fff', fontSize: 12, fontWeight: '500', backgroundColor: '#05c46b', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10, overflow: 'hidden'}}>$<Text style={{color: '#fff', fontSize: 16, fontWeight: '500', }}>{props.details.price}</Text></Text>
                </View>
            </View>
        </ImageBackground>
    );
}

 
export default Food;