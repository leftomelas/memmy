import React from 'react';
import Animated, { FadeOut } from 'react-native-reanimated';
import LoadingAnimation from '@components/Common/Loading/LoadingAnimation';
import { YStack } from 'tamagui';

export default function LoadingScreen(): React.JSX.Element {
  return (
    <Animated.View exiting={FadeOut} style={{ flex: 1 }}>
      <YStack flex={1} justifyContent="center" alignItems="center">
        <LoadingAnimation size="normal" />
      </YStack>
    </Animated.View>
  );
}
