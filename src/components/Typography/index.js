import React from 'react';
import { Text, View } from 'react-native';

const Typography = ({ text, size, isUppercase, color }) => {
    return (
        <View>
            <Text style={{
                fontSize: size ?? 50,
                textTransform: isUppercase ? 'uppercase' : 'none',
                color: color ?? 'black',
            }}>
                {text}
            </Text>
        </View>
    );
};

export default Typography;
