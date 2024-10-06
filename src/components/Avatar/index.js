import React from 'react';
import { Image, View } from 'react-native';

const Avatar = ({ isDarkMode }) => {
    return (
        <View
            style={{
                backgroundColor: 'gary',
                width: 150,
                padding: 20,
                margin: 20,
                height: 150,
                borderRadius: 75,
                shadowColor: isDarkMode ? '#fff' : '#000',
                shadowOpacity: 0.5,
                shadowRadius: 5,
                elevation: 5,
            }}
        >
            <Image
                source={require('../../assets/LOGO.jpg')}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 75,
                }}
            />
        </View>
    );
};

export default Avatar;
