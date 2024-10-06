import React from 'react';
import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Typography from '../Typography';

const NameTitle = ({ isDarkMode }) => {

    const openFacebook = () => {
        const facebookUrl = 'https://www.facebook.com/christinejane.cabactulan.1?mibextid=ZbWKwL';
        Linking.openURL(facebookUrl).catch(err => console.error("Couldn't open the URL", err));
    };


    const openInstagram = () => {
        const instagramUrl = 'https://www.instagram.com/chrisjane8?igsh=MWl5OGk0ZnNldjh3YQ==';
        Linking.openURL(instagramUrl).catch(err => console.error("Couldn't open the URL", err));
    };

    return (
        <View style={styles.container}>
            <Typography text="Christine Jane" size={50} color={isDarkMode ? 'black' : 'white'} />
            <Typography text="Yburan" size={30} color={isDarkMode ? 'black' : 'white'} />

            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.row} onPress={openInstagram}>
                    <Icon name="instagram" size={25} color={isDarkMode ? 'black' : 'white'} />
                    <Typography text="  Instagram" size={15} color={isDarkMode ? 'black' : 'white'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={openFacebook}>
                    <Icon name="facebook" size={25} color={isDarkMode ? 'black' : 'white'} />
                    <Typography text="   Facebook" size={15} color={isDarkMode ? 'black' : 'white'} />
                </TouchableOpacity>
                <View style={styles.row}>
                    <MaterialIcons name="phone" size={25} color={isDarkMode ? 'black' : 'white'} />
                    <Typography text=" 0968 651 5971" size={15} color={isDarkMode ? 'black' : 'white'} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    iconContainer: {
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
});

export default NameTitle;
