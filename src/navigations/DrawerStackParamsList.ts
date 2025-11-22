import ScreenName from "../constant/ScreenName";

export type DrawerStackParamList = {
  [ScreenName.Chat]: undefined;  // No parameters passed to ChatScreen
  [ScreenName.Help]: undefined;  // No parameters passed to HelpScreen
};