import React from 'react';
import Food from '../../components/Food';
import SpecialFood from '../../components/SpecialFood';
import SpecialItems from '../../Utils/SpecialItems';
import MeatItems from '../../Utils/MeatItems';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native';


const Home = ({navigation}) => {

    return ( 
        <SafeAreaView style={{backgroundColor: '#111'}}>
            <StatusBar barStyle="light-content" />

            <ScrollView style={{backgroundColor: '#111'}}>

                <View style={{paddingHorizontal: 20, borderRadius: 10, overflow: 'hidden', marginTop: 10, marginBottom: 30}}>
                    <ImageBackground source={require('../../Images/village_banner.png')} style={{ width: '100%', backgroundColor: '#1f2326', height: 200, borderRadius: 10, overflow: 'hidden', }} resizeMode="stretch">
                    </ImageBackground>
                </View>


                <View style={{paddingLeft: 20}}>

                    <View style={{marginBottom: 30}}>
                        <View style={styles.headingContainer}>
                            <Text style={styles.heading}>Chef's Recommendations</Text>
                            <Icon style={styles.headingIcon} name='angle-down' size={22} color='#ffffff' />
                        </View>
                        <ScrollView style={{marginBottom: 20}} horizontal showsHorizontalScrollIndicator={false}>
                            {SpecialItems.map((item, index) => <SpecialFood key={index} details={item} /> )}
                        </ScrollView>
                    </View>

                    <View style={{marginBottom: 30}}>
                        <View style={styles.headingContainer}>
                            <Text style={styles.heading}>Meat Specialities</Text>
                            <Icon style={styles.headingIcon} name='angle-down' size={22} color='#ffffff' />
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {MeatItems.map((item, index) => <Food key={index} details={item} /> )}
                        </ScrollView>
                    </View>

                </View>


                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 50}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Menu')} >
                        <Text style={{color: '#ffffff', backgroundColor: '#05c46b', paddingVertical: 10, borderRadius: 10, fontWeight: '500', fontSize: 18, overflow: 'hidden', width: 250, textAlign: 'center'}}>Discover More</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginBottom: 30, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../../Images/food_delivery.png')} style={{height: 200, marginBottom: 20}} resizeMode="contain" />
                </View>

                <View style={{marginBottom: 50}}>
                    <TouchableOpacity onPress={() => Linking.openURL('tel:+852 27912525')} style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{backgroundColor: '#05c46b', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 250, paddingVertical: 10, borderRadius: 10, }}>
                            <Text style={{color: '#fff', fontWeight: '500', fontSize: 18, marginRight: 10}}>Call Us Now</Text>
                            <Icon name="phone" size={20} color='#fff' />
                        </View>
                    </TouchableOpacity>
                </View>

                

            </ScrollView>


        </SafeAreaView>

        
    );
}

const styles = StyleSheet.create({
headingContainer: {
    marginBottom: 20, flex: 1, flexDirection: 'row', alignItems: 'center'
},
heading: {
    color: '#ffffff', fontWeight: '400', fontSize: 22, marginRight: 10
},
headingIcon: {
    display: 'flex', justifyContent: 'center', alignItems: 'center'
},

});
 
export default Home;