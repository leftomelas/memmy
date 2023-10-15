import {
  ArrowDown,
  ArrowUp,
  Bookmark,
  BookmarkCheck,
  CalendarCheck,
  CalendarDays,
  CalendarMinus,
  CalendarPlus,
  CalendarRange,
  CircleEllipsis,
  Clock1,
  Clock11,
  Clock6,
  Flame,
  MessageCircle,
  Zap,
} from '@tamagui/lucide-icons';

export const IconMap = {
  dots: CircleEllipsis,
  upvote: ArrowUp,
  downvote: ArrowDown,
  undefined: CircleEllipsis,
  reply: MessageCircle,
  comment: MessageCircle,
  save: Bookmark,
  saved: BookmarkCheck,
  Active: Zap,
  Hot: Flame,
  New: Clock1,
  Old: CalendarMinus,
  Top: ArrowUp,
  TopHour: Clock1,
  TopSixHour: Clock6,
  TopTwelveHour: Clock11,
  TopDay: CalendarRange,
  TopWeek: CalendarDays,
  TopMonth: CalendarCheck,
  TopYear: CalendarPlus,
  TopAll: ArrowUp,
  MostComments: MessageCircle,
  NewComments: MessageCircle,
};

export type IconType = keyof typeof IconMap;
