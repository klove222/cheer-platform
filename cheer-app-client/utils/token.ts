import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const TOKEN_KEY = 'authToken';

// For web fallback (not secure, just for dev)
let memoryToken: string | null = null;

export async function saveToken(token: string) {
  if (Platform.OS === 'web') {
    memoryToken = token;
  } else {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  }
}

export async function getToken() {
  if (Platform.OS === 'web') {
    return memoryToken;
  } else {
    return await SecureStore.getItemAsync(TOKEN_KEY);
  }
}

export async function deleteToken() {
  if (Platform.OS === 'web') {
    memoryToken = null;
  } else {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  }
}

// --- REAL validateToken, calls backend /auth/validate-token ---
export async function validateToken(): Promise<boolean> {
  const token = await getToken();
  if (!token) return false;

  try {
    // Use your .env setting or fallback to localhost
    const apiUrl =
      process.env.EXPO_PUBLIC_API_URL ||
      Constants.expoConfig?.extra?.API_URL ||
      'http://localhost:3000';

    const response = await fetch(`${apiUrl}/auth/validate-token`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.ok; // true if valid token, false otherwise
  } catch (err) {
    return false;
  }
}
