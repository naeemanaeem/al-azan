import {createIcon, IIconProps} from 'native-base';

export function BrightnessMediumIcon({...props}: IIconProps) {
  const Icon = createIcon({
    viewBox: '0 0 48 48',
    d: 'M24.05 46.55 17.3 40H8V30.7L1.3 24L8 17.3V8H17.3L24.05 1.3L30.7 8H40V17.3L46.7 24L40 30.7V40H30.7ZM24.05 37Q29.45 37 33.225 33.2Q37 29.4 37 23.95Q37 18.55 33.225 14.775Q29.45 11 24.05 11ZM24.05 42.35 29.45 37H37V29.45L42.45 24L37 18.55V11H29.45L24.05 5.55L18.55 11H11V18.55L5.55 24L11 29.45V37H18.5ZM24 23.95Z',
  });
  return <Icon {...props} />;
}
