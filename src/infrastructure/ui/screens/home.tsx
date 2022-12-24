import { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { Button } from '~/infrastructure/ui/components/button';

export const Home: FunctionComponent = () => {
  return (
    <View className="items-center justify-center flex-1 px-4 bg-white">
      <Text className="mb-4 text-3xl font-bold text-center text-violet-400">
        Clean architecture starter for React Native with TailwindCSS, Jest, TypeScript. All the tools you need to build
        your mobile application.
      </Text>
      <Button />
    </View>
  );
};
