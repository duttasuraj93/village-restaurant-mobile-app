import React from 'react';
import SpecialItems from '../../Utils/SpecialItems';;
import { SafeAreaView, StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';

const Menu = ({navigation}) => {

    return ( 
        <SafeAreaView style={{backgroundColor: '#111'}}>
            <StatusBar barStyle="light-content" />
            <View style={{backgroundColor: '#111', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#fff', fontSize: 20, textAlign: 'center', marginBottom: 20}}>Choose:</Text>
                <TouchableOpacity onPress={() => navigation.navigate('MenuPage', SpecialItems)} style={styles.menuItemContainer}>
                    <Text style={styles.menuItemText}>Starters</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItemContainer}>
                    <Text style={styles.menuItemText}>Rice</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItemContainer}>
                    <Text style={styles.menuItemText}>Bread</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItemContainer}>
                    <Text style={styles.menuItemText}>Vegetables</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
menuItemContainer: {
    backgroundColor: '#1f2326', marginBottom: 20, borderRadius: 10, width: 250
},
menuItemText: {
    color: '#fff', fontSize: 20, textAlign: 'center', paddingVertical: 10
}
});
 
export default Menu;