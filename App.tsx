import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastrarMulta from './pages/cadastrarMulta/cadastrarmulta';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="CadastrarMulta"
      >
        <Stack.Screen
          name="CadastrarMulta"
          component={CadastrarMulta}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
