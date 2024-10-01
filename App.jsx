import React, { useEffect, useState } from 'react';
import { View, Alert, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import MyCards from './MyCards/MyCards'; // Adjust the path based on your file structure

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        Alert.alert('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCardPress = (title) => {
    Alert.alert(`${title} Pressed!`);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MyCards
            title={item.title}
            content={item.description}
            imageUrl={item.image}
            onPress={() => handleCardPress(item.title)}
          />
        )}
      />
    </View>
  );
};

export default App;
// import { View, Text } from 'react-native'
// import React from 'react'
// import MyCards from './MyCards/MyCards'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>

//       <MyCards />
//     </View>
//   )
// }

// export default App