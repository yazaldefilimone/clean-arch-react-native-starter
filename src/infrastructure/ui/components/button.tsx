import { FunctionComponent } from 'react';
import { Text } from 'react-native';

export const Button: FunctionComponent = () => {
  return (
    <Text className="px-8 py-2 text-base font-medium border cursor-pointer bg-zinc-900 border-zinc-500/200 text-zinc-100">
      Get Start
    </Text>
  );
};
