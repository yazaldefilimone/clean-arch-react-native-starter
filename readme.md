 <p align="center">
  <img src="https://img.shields.io/static/v1?label=Clean-Arch TDD ReactNative&message=Welcome&color=FFFFFF&labelColor=110C2F" alt="Unsplash welcome!" />
  <img alt="License" src="https://img.shields.io/static/v1?label=version&message=1.0&color=FFFFFF&labelColor=110C2F">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=FFFFFF&labelColor=110C2F">
  <img alt="Stars" src="https://img.shields.io/github/stars/yazaldefilimonepinto/clean-arch-react-native-starter?color=FFFFFF&labelColor=110C2F">
  <img alt="Languages" src="https://img.shields.io/github/languages/count/yazaldefilimonepinto/clean-arch-react-native-starter?color=FFFFFF&labelColor=110C2F">
</p>
<p align="center" >
Clean architecture starter for React Native with TailwindCSS, Jest, TypeScript. <br>
All the tools you need to build your mobile application. 
<P/>

## Features

- ⚡️ Expo 47.0.9
- ⚛️ React 18.1.0
- ⛑ TypeScript
- ✨ TailwindCSS 3.2.4 - CssInJs for component styling
- ✨ NativeWind 2.0.11 - Suporte by TailwindCSS in ReactNative
- 📏 TSLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `~/` prefix
- ‽ Either Error Handler - For error handling. (Either is designed to hold either a left or a right value but never both).

## Quick Start

The best way to start with this template is using [create-expo-app](https://docs.expo.dev/get-started/create-a-new-app/).

```
# npx

npx create-expo-app --template clean-arch-react-native-starter

```

### Development

To start the project locally, run:

```bash
  npm start
  our
  yarn start
```

Open `http://localhost:{port}` with your browser to see the result or scan qr code or open in device machine.

### Requirements

- Node.js >= 12.22.0
- npm our yarn

### Directory Structure

- [`public`](./public) — Static assets such as images<br>
- [`src`](./src) — Application source code, including screens, components, scripts.<br>
- [`tests`](./tests) — Application test source code.<br>

### Scripts

- `yarn/npm android`
- `yarn/npm ios`
- `yarn/npm start`
- `yarn/npm test`
- `yarn/npm test:watch`
- `yarn/npm test:ci`

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `~/` prefix.

```tsx
import { Button } from '~/infrastructure/ui/components/button';

// To import images or other files from the public folder
import avatar from '~/public/avatar.png';
```

<a id="license"></a>

## License

[MIT](https://github.com/yazaldefilimonepinto/clean-arch-react-native-starter/blob/main/LICENSE) © [Yazalde Filimone](https://www.linkedin.com/in/yazalde-filimone/)
