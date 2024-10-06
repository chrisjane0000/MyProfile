import React from 'react';
import { Image, View } from 'react-native';

const Avatar = () => {
    return (
        <View
            style={{
                backgroundColor: 'gray',
                width: 150,
                padding: 20,
                boxShadow: '#000',
                border: '5px solid #000',
                margin: 20,
                height: 150,
                borderRadius: 75,
                left:120,
                top: '10%'
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
}

export default Avatar;
