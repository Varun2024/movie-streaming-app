import { Stack } from "expo-router";
import './global.css';

export default function RootLayout() {
  return <Stack >
    {/* this is hiding the group route that is if under root app or (tabs)  */}
    <Stack.Screen
      name="(tabs)"
      options={{headerShown:false}}
    />
    <Stack.Screen
      name="movies/[id]"
      options={{headerShown:false}}
    />
  </Stack>;
}
