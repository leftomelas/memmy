import React, { useCallback } from 'react';
import { ICommentInfo } from '@src/types';
import { PressableComment } from '@components/Comment/components/Comment';
import { setPostCommentHidden } from '@src/state/post/actions/setPostCommentHidden';
import CommentShowMoreButton from '@components/Comment/components/CommentShowMoreButton';
import { useCommentGesturesCollapse } from '@src/state/settings/settingsStore';
import { useCommentSwipeOptions } from '@components/Common/SwipeableRow/hooks/useCommentSwipeOptions';

interface IProps {
  commentInfo: ICommentInfo;
  ignoreLoadMore?: boolean;
}

function CommentChain({
  commentInfo,
  ignoreLoadMore = false,
}: IProps): React.JSX.Element | null {
  const collapseOnTap = useCommentGesturesCollapse();

  const leftOptions = useCommentSwipeOptions('left');
  const rightOptions = useCommentSwipeOptions('right');

  const onCommentPress = useCallback(() => {
    if (!collapseOnTap) return;

    setPostCommentHidden(commentInfo, !commentInfo.collapsed);
  }, [commentInfo.collapsed, collapseOnTap]);

  if (commentInfo.hidden) {
    return null;
  }

  if (commentInfo.showLoadMore && !ignoreLoadMore) {
    return <CommentShowMoreButton commentInfo={commentInfo} />;
  }

  return (
    <PressableComment
      onPress={onCommentPress}
      itemId={commentInfo.commentId}
      depth={commentInfo.depth}
      collapsed={commentInfo.collapsed}
      leftOptions={leftOptions}
      rightOptions={rightOptions}
    />
  );
}

export default React.memo(CommentChain);