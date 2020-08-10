import React from 'react';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, ImageBackground, TouchableOpacity, Linking, Share } from 'react-native';

const About = ({navigation}) => {
    
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'App store link',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    };

    return ( 
        <SafeAreaView style={{backgroundColor: '#000'}}>
            <StatusBar barStyle="light-content" />

            <ScrollView style={styles.body}>

                <View style={{marginTop: 10, paddingHorizontal: 20, marginBottom: 20}}>
                    <Text style={{color: '#fff', fontSize: 20, marginBottom: 20}}>Village Indian and Malaysian Restaurant</Text>
                    
                    <View style={{marginBottom: 20}}>
                        <Text style={{color: '#fff', fontSize: 16, marginBottom: 10}}>Established in 2006 Village Malaysian & Indian restaurant is been serving authentic food to its consumers with very friendly and homely hospitality.</Text>
                        <Text style={{color: '#fff', fontSize: 16, marginBottom: 10}}>The restaurant was made with the very unique concept of providing traditional food with the theme of a local village in order to allow its customers to experience the very traditional Indian and Malaysian culture.</Text>
                        <Text style={{color: '#fff', fontSize: 16}}>Today the village is {moment().format('YYYY') - 2006} years old and is been consistently maintaining its authenticity and its standard by satisfying its consumers.</Text>
                    </View>

                    
                    <View style={{marginBottom: 20}}>
                        <Text style={{color: '#fff', fontSize: 18, marginBottom: 10}}>Services provided:</Text>
                        <Text style={{color: '#fff', fontSize: 16, marginBottom: 5}}>1. Catering</Text>
                        <Text style={{color: '#fff', fontSize: 16, marginBottom: 5}}>2. Delivery</Text>
                        <Text style={{color: '#fff', fontSize: 16, marginBottom: 5}}>2. Dine In</Text>
                        <Text style={{color: '#fff', fontSize: 16}}>2. Takeaway</Text>
                    </View>

                    <View style={{marginBottom: 20}}>
                        <Text style={{color: '#fff', fontSize: 18, marginBottom: 10}}>Opening Hours:</Text>
                        <Text style={{color: '#fff', fontSize: 16, marginBottom: 5}}>Tue-Fri: 11am - 3pm & 5:30pm - 11pm</Text>
                        <Text style={{color: '#fff', fontSize: 16}}>Sat-Sun: 11am - 11pm</Text>
                    </View>
                    
                    

                    <View style={{marginBottom: 20}}>
                        <Text style={{fontSize: 18, color: '#fff', marginBottom: 10}}>Contact:</Text>
                        <TouchableOpacity onPress={() => Linking.openURL('tel:+852 27912525')} style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                            {/* <Text style={{fontSize: 16, color: '#fff', width: 90}}>Phone:</Text> */}
                            <Icon name="phone" size={20} color='#fff' style={{marginRight: 10}} />
                            <Text style={{fontSize: 16, color: '#fff', backgroundColor: '#1f2326', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10, overflow: 'hidden'}}>+852 2791 2525</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?text=hello&phone=+852 96140885')} style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                            {/* <Text style={{fontSize: 16, color: '#fff', width: 90}}>Whatsapp:</Text> */}
                            <Icon name="whatsapp" size={20} color='#25D366' style={{marginRight: 10}} />
                            <Text style={{fontSize: 16, color: '#fff', backgroundColor: '#1f2326', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10, overflow: 'hidden'}}>+852 9614 0885</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('mailto:admin@saikungvillage.com')} style={{flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                            {/* <Text style={{fontSize: 16, color: '#fff', width: 90}}>Email:</Text> */}
                            <Icon name="envelope" size={18} color='#4b86de' style={{marginRight: 10}} />
                            <Text style={{fontSize: 16, color: '#fff', backgroundColor: '#1f2326', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10, overflow: 'hidden'}}>admin@saikungvillage.com</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginBottom: 20}}>
                        <Text style={{fontSize: 18, color: '#fff', marginBottom: 10}}>Address:</Text>
                        <Text style={{fontSize: 16, color: '#fff', marginBottom: 10}}>G/F, 1E Po Tung Road, Sai Kung, NT</Text>
                    </View>


                    <View style={{marginBottom: 20}}>
                        <Text style={{fontSize: 18, color: '#fff', marginBottom: 10}}>Share the app</Text>
                        <TouchableOpacity onPress={() => onShare()} style={{width: 100, backgroundColor: '#5e5ce6', borderRadius: 20, overflow: 'hidden', paddingVertical: 10, flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
                            <Icon name="apple" size={20} color='#fff' />
                        </TouchableOpacity>
                    </View>

                    <View style={{marginBottom: 20}}>
                        <Text style={{color: '#fff', fontSize: 18, marginBottom: 10}}>Terms and conditions:</Text>
                        <Text style={{color: '#fff', fontSize: 16}}>1. 10% service charge on all delivery.</Text>
                        <Text style={{color: '#fff', fontSize: 16}}>2. All prices mentioned in this app are subject to change.</Text>
                    </View>

                    <Text style={{color: '#fff', fontSize: 16}}>&copy; {moment().format('YYYY')} Village Restaurant</Text>
                </View>

            </ScrollView>

        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
body: {
    backgroundColor: '#000000',
},

});
 
export default About;