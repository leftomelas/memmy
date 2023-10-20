import React from 'react';
import { YStack } from 'tamagui';

interface IProps {
  children: React.ReactNode;
}

export default function FeedItemContainer({
  children,
}: IProps): React.JSX.Element {
  return (
    <YStack backgroundColor="$fg" paddingVertical="$2">
      {children}
    </YStack>
  );
}
