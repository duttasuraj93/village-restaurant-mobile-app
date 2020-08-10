import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const SpecialFood = (props) => {
    const navigation = useNavigation(); 
    return ( 
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('SpecialFoodDetails', props.details)}>
            <View  style={{position: 'relative', overflow: 'hidden', padding: 20, width: 200, borderRadius: 10, marginRight: 20, backgroundColor: '#1f2326'}}>
                <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}>
                    <View>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 35, position: 'relative'}}> 
                            <Image style={{height: 120, width: 120, borderRadius: 100}} resizeMode="cover" source={{uri: props.details.image}} />
                            <Image style={[styles.blackback, {
                                transform: [{ rotate: "-35deg" }]
                            }]} source={require('../Images/black_dash.png')} />
                        </View>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{color: '#ffffff', fontSize: 18, fontWeight: '500', marginBottom: 10}}>{props.details.name}</Text>
                        <Text numberOfLines={2} ellipsizeMode='tail' style={{fontSize: 12, lineHeight: 20, fontWeight: '300', color: '#fff', width: '95%', marginBottom: 10}}>{props.details.description}</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{color: '#fff', fontSize: 12, fontWeight: '500', backgroundColor: '#05c46b', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10, overflow: 'hidden'}}>$<Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>{props.details.price}</Text></Text>
                        <Image source={require('../Images/right_arrow.png')} style={{height: 10, width: 20}} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    blackback: {
        height: 50,
        width: '180%',
        backgroundColor: '#000000',
        zIndex: -1,
        position: 'absolute',
    },
});
 
export default SpecialFood;