import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StatusBar, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';

const SpecialFoodDetails = (props) => {
    const data = props.route.params;
    const navigation = useNavigation(); 
    return ( 
        <SafeAreaView style={{backgroundColor: '#111'}}>
            <StatusBar barStyle="light-content" />
            <ScrollView style={{backgroundColor: '#111', height: '100%', paddingHorizontal: 20}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{height: 40, width: 40, backgroundColor: '#3b4247', marginTop: 10, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                    <Image source={{uri: 'https://funkyimg.com/i/36Kuj.png'}} style={{height: 10, width: 16}} />
                </TouchableOpacity>
                <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, position: 'relative'}}>
                    <Image style={{height: 250, width: '100%', borderRadius: 10,}} resizeMode="cover" source={{uri: data.image}} />
                </View>
                <View style={{ marginTop: 0}}>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                        <Text style={{color: '#ffffff', fontSize: 20, fontWeight: '600'}}>{data.name}</Text>
                        <Text style={{color: '#fff', fontSize: 12, fontWeight: '500', backgroundColor: '#05c46b', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10, overflow: 'hidden'}}>$<Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>{data.price}</Text></Text>
                    </View>
                    <Text style={{fontSize: 16, lineHeight: 20, fontWeight: '300', color: '#fff', width: '95%', marginBottom: 10}}>{data.description}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
        
    );
}

 
export default SpecialFoodDetails;