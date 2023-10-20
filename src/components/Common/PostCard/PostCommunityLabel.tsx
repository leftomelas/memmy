import React, { useCallback, useMemo } from 'react';
import {
  usePostCommunityActorId,
  usePostCommunityIcon,
  usePostCommunityId,
  usePostCommunityName,
  useSettingsStore,
} from '@src/state';
import { Image } from 'expo-image';
import { Globe } from '@tamagui/lucide-icons';
import { Text, XStack } from 'tamagui';
import { createName } from '@helpers/text';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IProps {
  itemId: number;
}

interface ICommunityIconProps {
  communityIcon?: string;
}

function CommunityIcon({
  communityIcon,
}: ICommunityIconProps): React.JSX.Element {
  if (communityIcon == null) {
    return <Globe size={14} color="$accent" />;
  }

  return (
    <Image
      source={{ uri: communityIcon }}
      style={{
        width: 16,
        height: 16,
        borderRadius: 25,
      }}
    />
  );
}

function PostCommunityLabel({ itemId }: IProps): React.JSX.Element {
  const communityName = usePostCommunityName(itemId);
  const actorId = usePostCommunityActorId(itemId);
  const communityIcon = usePostCommunityIcon(itemId);
  const communityId = usePostCommunityId(itemId);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const showIcon = useSettingsStore((state) => state.showCommunityIconInFeed);
  const fullName = useMemo(
    () => createName(communityName, actorId, true),
    [communityName, actorId],
  );

  const onPress = useCallback((): void => {
    navigation.push('Community', {
      name: fullName,
      id: communityId,
    });
  }, [communityId]);

  return (
    <Pressable onPress={onPress} hitSlop={5}>
      <XStack space="$2" alignItems="center">
        {showIcon && <CommunityIcon communityIcon={communityIcon} />}
        <Text color="$secondary" fontSize="$2">
          {fullName}
        </Text>
      </XStack>
    </Pressable>
  );
}

export default React.memo(PostCommunityLabel);
