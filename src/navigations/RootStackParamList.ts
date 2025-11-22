import ScreenName from "../constant/ScreenName";

type HomeScreenParams = {
  title: string;
  description: string;
  age:number
};

type SettingsScreenParams = {
  title: string;
  description: string;
  age:number
};
 
export type RootStackParamList = {
  [ScreenName.Home]: HomeScreenParams;  
  [ScreenName.Settings]: SettingsScreenParams;  
};