import { VectorProps } from '../theme/theme.types';

export default function MoonIcon({
  height = 48,
  style,
  className,
  color = 'currentcolor',
  format = 'outline',
}: VectorProps) {
  let d = '';

  switch (format) {
    case 'outline':
      d =
        'M15.4398 0.000492377C15.258 0.00947514 15.0792 0.0466313 14.9089 0.110328C5.43942 3.61927 0 12.8186 0 23.2869C0 36.9119 11.0704 48 24.6966 48C35.1648 48 44.3839 42.5422 47.8931 33.0737H47.8935C48.0495 32.6462 48.0336 32.175 47.849 31.7589C47.6645 31.3433 47.3255 31.015 46.9037 30.8439C46.4823 30.6729 46.0107 30.6725 45.5884 30.8419C43.1919 31.8055 40.5568 32.3053 37.7768 32.3053C26.305 32.3053 15.6957 21.6791 15.6957 10.2084C15.6957 7.42868 16.1771 4.79389 17.1408 2.39752H17.1412C17.3576 1.84632 17.2812 1.22286 16.9382 0.739844C16.5952 0.256829 16.0321 -0.0208237 15.44 0.00122087L15.4398 0.000492377ZM12.7141 5.10387C12.3731 6.75706 12.1837 8.46177 12.1837 10.2073C12.1837 23.7936 24.1886 35.8161 37.7761 35.8161C39.5222 35.8161 41.2267 35.6083 42.88 35.2674C39.2118 41.1494 32.5517 44.4865 24.696 44.4865C12.9681 44.4865 3.51177 35.013 3.51177 23.2865C3.51177 15.4307 6.82995 8.77201 12.7133 5.10419L12.7141 5.10387Z';
      break;

    case 'fill':
      d =
        'M15.4398 0.000485534C15.258 0.0094683 15.0792 0.0466244 14.9089 0.110322C5.43942 3.61926 0 12.8186 0 23.2869C0 36.9119 11.0704 48 24.6966 48C35.1648 48 44.3839 42.5422 47.8931 33.0737C48.0491 32.6462 48.0336 32.175 47.849 31.7589C47.6645 31.3433 47.3255 31.015 46.9037 30.8439C46.4823 30.6729 46.0107 30.6724 45.5884 30.8419C43.1918 31.8055 40.5568 32.3053 37.7768 32.3053C26.305 32.3053 15.6957 21.6791 15.6957 10.2084C15.6957 7.42867 16.1771 4.79388 17.1408 2.39752C17.3572 1.84631 17.2812 1.22285 16.9382 0.739837C16.5952 0.256822 16.0318 -0.021559 15.4398 0.000485534Z';
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
      <path d={d} fill={color} />
    </svg>
  );
}
