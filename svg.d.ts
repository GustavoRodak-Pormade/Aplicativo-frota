declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  const SvgComponent: React.FC<SvgProps>;
  export default SvgComponent;
}
declare module '*.png' {
  const value: number;
  export default value;
}

declare module '*.jpg' {
  const value: number;
  export default value;
}

declare module '*.jpeg' {
  const value: number;
  export default value;
}

declare module '*.webp' {
  const value: number;
  export default value;
}