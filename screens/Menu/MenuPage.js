import React from 'react';
import MenuItem from '../../components/MenuItem';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StatusBar, ScrollView, View, Image, TouchableOpacity } from 'react-native';


const MenuPage = (props) => {
    const navigation = useNavigation(); 
    const data = props.route.params;
    console.log("before props");
    console.log(props);
    return ( 
        <SafeAreaView style={{backgroundColor: '#111'}}>
            <StatusBar barStyle="light-content" />
            <ScrollView style={{backgroundColor: '#111', paddingHorizontal: 20}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{height: 40, width: 40, backgroundColor: '#3b4247', marginTop: 10, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                    <Image source={{uri: 'https://funkyimg.com/i/36Kuj.png'}} style={{height: 10, width: 16}} />
                </TouchableOpacity>
                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    {data.map((item, index) => <MenuItem key={index}  details={item} /> )}
                </View>
            </ScrollView>
        </SafeAreaView>  
    );
}
 
export default MenuPage;