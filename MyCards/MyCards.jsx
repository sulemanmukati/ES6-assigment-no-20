import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MyCards = ({ title, content, imageUrl, onPress }) => {
  return (
    // <TouchableOpacity style={styles.card} onPress={onPress}>
    //   {/* <Image source={{ uri: imageUrl }} style={styles.image} /> */}
    //   <Image
    //             source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }} // Image ka path
    //     style={styles.image}
    //   />

    //   <Text style={styles.title}>kcvfdnv</Text>
    //   <Text style={styles.content}>flg;lr;fl;rl</Text>
    // </TouchableOpacity>

<TouchableOpacity style={styles.card} onPress={onPress}>
<Image source={{ uri: imageUrl }} style={styles.image} />
<Text style={styles.title}>{title}</Text>
<Text style={styles.content}>{content}</Text>
</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black'
  },
  content: {
    fontSize: 14,
    color: '#666',
  },
});

export default MyCards;
