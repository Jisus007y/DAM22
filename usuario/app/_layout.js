import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="(tabs)" screenOptions={{ headerShown: false }} />;

    <Stack.Screen name="detalle" options={{ title: "Detalle del Usuario" }} /> 

    <Stack.Screen name="actualiza" options={{ title: "Actualizar Usuario" }} />

  </Stack>
  );
}