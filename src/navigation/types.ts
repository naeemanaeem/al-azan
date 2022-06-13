import {MessageDescriptor} from '@lingui/core';
import {defineMessage} from '@lingui/macro';

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  FullscreenAlarm: {options: string};
  DisplaySettings: undefined;
  LocationSettings: undefined;
  NotificationSettings: undefined;
  CalculationSettings: undefined;
  BatteryOptimizationSettings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const routeTranslations = {
  Home: defineMessage({
    id: 'home',
    message: 'Home',
  }),
  Settings: defineMessage({
    id: 'settings',
    message: 'Settings',
  }),
  FullscreenAlarm: defineMessage({
    id: 'fullscreen_alarm',
    message: 'Playing Adhan',
    comment: 'screen title',
  }),
  DisplaySettings: defineMessage({
    id: 'display_settings',
    message: 'Display',
    comment: 'screen title',
  }),
  LocationSettings: defineMessage({
    id: 'location_settings',
    message: 'Location',
    comment: 'screen title',
  }),
  NotificationSettings: defineMessage({
    id: 'notification_settings',
    message: 'Notification & Sound',
    comment: 'screen title',
  }),
  CalculationSettings: defineMessage({
    id: 'calculation_settings',
    message: 'Calculation',
    comment: 'screen title',
  }),
  BatteryOptimizationSettings: defineMessage({
    id: 'battery_optimization_settings',
    message: 'Battery Optimization',
    comment: 'screen title',
  }),
} as Record<string, MessageDescriptor>;
