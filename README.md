# Pantallas Migradas a React Native (Expo)

Proyecto creado con `npx create-expo-app@latest pantallas-react-native --template blank` que replica las tres pantallas de React Web utilizando componentes nativos y manejo de estados con `useState`.

## Componentes migrados

- `components/Registro.js` — Formulario de registro con captura de datos mediante `useState` y `TextInput`.
- `components/Login.js` — Formulario de inicio de sesión con captura de datos mediante `useState` y `TextInput`.
- `components/Bienvenida.js` — Pantalla de bienvenida con los datos del usuario activo y botones de navegación.

## Equivalencia Web → React Native

| React Web | React Native |
| --- | --- |
| `<div>`, `<nav>`, `<form>` | `<View>`, `<ScrollView>` |
| `<h1>`, `<p>`, `<label>`, `<span>` | `<Text>` |
| `<input onChange={...} />` | `<TextInput onChangeText={...} />` |
| `<button onClick={...}>` | `<TouchableOpacity onPress={...}>` |
| CSS (`App.css`) | `StyleSheet.create(...)` |

## Cómo ejecutar el proyecto

```bash
npm install
npx expo start
```
