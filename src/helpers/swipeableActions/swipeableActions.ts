import { ICommentGestureOption, IPostGestureOption } from '@src/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { upvotePostOption } from '@helpers/swipeableActions/upvotePostOption';
import { downvotePostOption } from '@helpers/swipeableActions/downvotePostOption';
import { savePostOption } from '@helpers/swipeableActions/savePostOption';
import { replyOption } from '@helpers/swipeableActions/replyOption';
import { customOption } from '@helpers/swipeableActions/customOption';
import { upvoteCommentOption } from '@helpers/swipeableActions/upvoteCommentOption';
import { downvoteCommentOption } from '@helpers/swipeableActions/downvoteCommentOption';

export interface SwipeableActionParams {
  commentId?: number;
  postId?: number;
  screenId?: string;
  navigation: NativeStackNavigationProp<any>;
  custom?: (params?: SwipeableActionParams) => unknown;
}

export const postSwipeableActions: Record<
  IPostGestureOption,
  (params: SwipeableActionParams) => any
> = {
  upvote: upvotePostOption,
  downvote: downvotePostOption,
  save: savePostOption,
  hide: () => {},
  reply: replyOption,
  custom: customOption,
};

export const commentSwipeableActions: Record<
  ICommentGestureOption,
  (...args: any[]) => any
> = {
  upvote: upvoteCommentOption,
  downvote: downvoteCommentOption,
  save: () => {},
  collapse: () => {},
  reply: replyOption,
  hide: () => {},
};