import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navLinks}>
          <Pressable onPress={() => {}}>
            <Text style={styles.navLink}>Home</Text>
          </Pressable>
          <Pressable onPress={() => {}}>
            <Text style={styles.navLink}>About</Text>
          </Pressable>
          <Pressable onPress={() => {}}>
            <Text style={styles.navLink}>Contact</Text>
          </Pressable>
          <Pressable onPress={() => {}} style={{ marginLeft: 'auto' }}>
            <Text style={[styles.navLink, { color: 'red' }]}>
              Emergency Button
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={{ marginTop: 80 }}>
        <Text style={styles.heading}>Your friendly cloud-based coding platform.</Text>
        <Text style={styles.paragraph}>923-234-2342</Text>
      </View>

      <View style={styles.section} id="home">
        <Text style={styles.sectionHeading}>Basic Information</Text>
        <Text style={styles.paragraph}>
          It is a long established fact that a reader will be distracted...
        </Text>
      </View>

      <View style={styles.section} id="About">
        <Text style={styles.sectionHeading}>About Us</Text>
        <Text style={styles.paragraph}>
          It is a long established fact that a reader will be distracted...
        </Text>
      </View>

      <View style={styles.section} id="Contact">
        <Text style={styles.sectionHeading}>Contact</Text>
        <Text style={styles.paragraph}>
          It is a long established fact that a reader will be distracted...
        </Text>
      </View>

      <View style={styles.counterContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.counterButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>Click Me</Text>
        </Pressable>
        <Text style={styles.counterDisplay}>Counter: {count}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 35,
    width: '100%',
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navLink: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    marginRight: 15,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
  },
  paragraph: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  section: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  sectionHeading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  counterContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  counterButton: {
    padding: 10,
    backgroundColor: '#5F7394',
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: '#2A4D77',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  counterDisplay: {
    marginTop: 10,
    fontSize: 18,
  },
});
