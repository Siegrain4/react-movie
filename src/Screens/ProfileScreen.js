import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  const handleGithubLink = () => {
    Linking.openURL('https://github.com/Siegrain4');
  };

  const handleLinkedinLink = () => {
    Linking.openURL('https://www.linkedin.com/in/rey-sandy-alzamora-1900a01a5/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>REY SANDY ALZAMORA </Text>
      <Text style={styles.bio}>About Me</Text>
      <Text style={styles.bio}>As a recent graduate with a passion for IT, particularly in programming, I possess a range of skills including PHP, MySql, Java, Kotlin, Android Studio, Laravel, Dart, and Flutter with GetX state management. I am confident that my abilities will contribute significantly to your company. Some of my notable projects include a cashier system developed using Laravel and Flutter, a marketplace platform built with Laravel, and a laundry management system implemented with Laravel and Flutter.

With my diverse skill set, I am confident in my ability to adapt quickly to new environments. Currently, I am actively engaged as a freelance programmer, undertaking various projects for clients. I believe that my experience and skills make me a valuable asset to any team or organization.</Text>
      <Text style={styles.sectionTitle}>Portofolio:</Text>
      
      <View style={styles.portfolioLinks}>
        <TouchableOpacity onPress={handleGithubLink}>
          <Text style={styles.portfolioItem}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLinkedinLink}>
          <Text style={styles.portfolioItem}>LinkedIn</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleGithubLink}>
          <Icon name="github" size={30} color="#000" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLinkedinLink}>
          <Icon name="linkedin" size={30} color='#0077B5' style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  portfolioLinks: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  portfolioItem: {
    fontSize: 16,
    marginRight: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '50%',
    marginTop: 10,
  },
  icon: {
    marginRight: 20,
  },
});

export default ProfileScreen;
