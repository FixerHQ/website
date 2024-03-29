import { useTheme } from 'styled-components';

import { VectorProps } from '../theme/theme.types';

export default function AvatarIcon({
  height = 48,
  style,
  className,
  color = 'currentcolor',
  format = 'outline',
}: VectorProps) {
  const theme = useTheme();

  let children;

  switch (format) {
    case 'outline':
      children = (
        <>
          <path
            d="M23.9999 28.4735C18.3171 28.4735 13.7229 23.8792 13.7229 18.1965C13.7229 12.5138 18.3173 7.91958 23.9999 7.91958C29.6825 7.91958 34.2768 12.5139 34.2768 18.1965C34.2768 23.8788 29.6825 28.4735 23.9999 28.4735ZM23.9999 11.5466C20.3122 11.5466 17.3498 14.5089 17.3498 18.1967C17.3498 21.8843 20.3121 24.8467 23.9999 24.8467C27.6876 24.8467 30.65 21.8844 30.65 18.1967C30.65 14.5086 27.6876 11.5466 23.9999 11.5466Z"
            fill={color}
          />
          <path
            d="M24 48C10.7607 48 0 37.2393 0 24C0 10.7607 10.7607 0 24 0C37.2393 0 48 10.7607 48 24C48 37.2393 37.2393 48 24 48ZM24 3.6272C12.7557 3.6272 3.6272 12.7556 3.6272 24C3.6272 35.2444 12.7556 44.3728 24 44.3728C35.2444 44.3728 44.3728 35.2444 44.3728 24C44.3728 12.7556 35.2444 3.6272 24 3.6272Z"
            fill={color}
          />
          <path
            d="M9.85372 40.6851L6.83105 38.6902C10.6397 32.8864 17.108 29.4408 24.0603 29.4408C30.8916 29.4408 37.2996 32.8261 41.1686 38.5088L38.1459 40.5641C34.8812 35.8492 29.6214 33.0079 23.9998 33.0079C18.2569 33.0079 12.9973 35.8492 9.85372 40.6851Z"
            fill={color}
          />
        </>
      );
      break;

    case 'fill':
      children = (
        <>
          <path
            d="M24 48C10.7607 48 0 37.2393 0 24C0 10.7607 10.7607 0 24 0C37.2393 0 48 10.7607 48 24C48 37.2393 37.2393 48 24 48Z"
            fill={color}
          />
          <path
            d="M13.7229 17.1965C13.7229 22.8792 18.3171 27.4735 23.9999 27.4735C29.6825 27.4735 34.2768 22.8788 34.2768 17.1965C34.2768 11.5139 29.6825 6.91958 23.9999 6.91958C18.3173 6.91958 13.7229 11.5138 13.7229 17.1965Z"
            fill={theme.colors.white.main}
          />
          <path
            d="M24.0603 29.4408C17.108 29.4408 10.6397 32.8864 6.83105 38.6902L10.9155 40.5951L15 42.5L19 44L24.0603 44.5L28.5 44L33 42.5L41.1686 38.5088C37.2996 32.8261 30.8916 29.4408 24.0603 29.4408Z"
            fill={theme.colors.white.main}
          />
          <circle cx="24" cy="24" r="22" stroke={color} strokeWidth="4" />
        </>
      );
      break;

    default:
      break;
  }
  return (
    <svg
      height={height}
      viewBox="0 0 48 48"
      style={style}
      className={className}
      fill="none"
    >
      {children}
    </svg>
  );
}
