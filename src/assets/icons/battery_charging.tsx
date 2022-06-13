import {createIcon, IIconProps} from 'native-base';

export function BatteryCharging({...props}: IIconProps) {
  const Icon = createIcon({
    viewBox: '0 0 48 48',
    d: 'M16 44Q15.15 44 14.575 43.425Q14 42.85 14 42V10Q14 9.15 14.575 8.575Q15.15 8 16 8H20V4H28V8H32Q32.85 8 33.425 8.575Q34 9.15 34 10V42Q34 42.85 33.425 43.425Q32.85 44 32 44ZM22.5 38.2 29.3 25.55H25.45V15.85L18.65 28.5H22.5Z',
  });
  return <Icon {...props} />;
}
