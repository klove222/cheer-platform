import React from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { deleteToken } from '../../utils/token';
import RequireAuth from './RequireAuth';

export default function DashboardScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    await deleteToken();
    Alert.alert('Logged out', 'You have been logged out.');
    router.replace('/login');
  };

  return (
    <RequireAuth>
      <View style={styles.container}>
        <Text style={styles.title}>Mock Dashboard</Text>
        <Text style={styles.subtitle}>
          You are now "logged in" using a mock token.
        </Text>
        <Button title="Log Out" onPress={handleLogout} />
      </View>
    </RequireAuth>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 24,
    color: '#555',
    textAlign: 'center',
  },
});
