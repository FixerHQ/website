import { useTheme } from 'styled-components';

import { VectorProps } from '../theme/theme.types';

export default function CreditCardIllustration({
  height = 96,
  style,
  className,
  color: baseColor,
}: VectorProps) {
  const theme = useTheme();

  const color = baseColor || theme.palette.primary.main;

  return (
    <svg
      height={height}
      viewBox="0 0 167 80"
      style={style}
      className={className}
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="NoCreditCard" transform="translate(-47.000000, -55.000000)">
          <g id="Group" transform="translate(47.000000, 56.000000)">
            <path
              d="M129,79 L46,79 C42.1340068,79 39,75.8659932 39,72 C39,68.1340068 42.1340068,65 46,65 L7,65 C3.13400675,65 0,61.8659932 0,58 C0,54.1340068 3.13400675,51 7,51 L47,51 C50.8659932,51 54,47.8659932 54,44 C54,40.1340068 50.8659932,37 47,37 L22,37 C18.1340068,37 15,33.8659932 15,30 C15,26.1340068 18.1340068,23 22,23 L62,23 C58.1340068,23 55,19.8659932 55,16 C55,12.1340068 58.1340068,9 62,9 L160,9 C163.865993,9 167,12.1340068 167,16 C167,19.8659932 163.865993,23 160,23 L120,23 C123.865993,23 127,26.1340068 127,30 C127,33.8659932 123.865993,37 120,37 L142,37 C145.865993,37 149,40.1340068 149,44 C149,47.8659932 145.865993,51 142,51 L131.826087,51 C126.951574,51 123,54.1340068 123,58 C123,60.5773288 125,62.9106622 129,65 C132.865993,65 136,68.1340068 136,72 C136,75.8659932 132.865993,79 129,79 Z M160,51 C156.134007,51 153,47.8659932 153,44 C153,40.1340068 156.134007,37 160,37 C163.865993,37 167,40.1340068 167,44 C167,47.8659932 163.865993,51 160,51 Z"
              id="Background"
              fill={theme.palette.background.level2}
            />
            <path
              d="M22.9524711,14.517534 L105.977279,1.2258164 C107.613301,0.963900301 109.151883,2.07783272 109.413799,3.7138541 C109.414323,3.71712873 109.414842,3.72040422 109.415356,3.72368057 L117.537123,55.5557727 C117.793011,57.1888165 116.679715,58.7211639 115.047529,58.982466 L32.0227206,72.2741836 C30.3866992,72.5360997 28.8481169,71.4221673 28.5862008,69.7861459 C28.5856765,69.7828713 28.5851577,69.7795958 28.5846443,69.7763194 L20.462877,17.9442273 C20.2069892,16.3111835 21.3202849,14.7788361 22.9524711,14.517534 Z"
              id="Rectangle"
              fill={theme.palette.background.level2}
            />
            <path
              d="M36.3448504,71.4233581 L33.1614775,71.9480322 C30.9748078,72.3084327 28.9214022,70.7559548 28.5750677,68.4804758 L21.0499395,19.0390458 C20.7036051,16.7635668 22.1954916,14.6267643 24.3821613,14.2663639 L104.558306,1.05196779 C106.744976,0.691567325 108.798381,2.24404521 109.144716,4.51952419 C109.48216,6.73659658 109.75109,8.5035117 109.951504,9.82026955 M110.523095,13.575722 C110.704628,14.7684246 110.863596,15.8128747 111,16.7090721"
              id="Shape"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M26.9770284,16.7919422 L102.737046,4.96087086 C104.369014,4.70601446 105.899988,5.81829835 106.161959,7.44913908 L113.522114,53.268177 C113.784895,54.9040598 112.671776,56.4432305 111.035893,56.7060111 C111.031587,56.7067027 111.02728,56.7073849 111.022972,56.7080578 L35.2629539,68.5391291 C33.6309863,68.7939855 32.1000118,67.6817016 31.8380411,66.0508609 L24.4778857,20.231823 C24.2151051,18.5959402 25.3282244,17.0567695 26.9641072,16.7939889 C26.9684128,16.7932973 26.9727199,16.7926151 26.9770284,16.7919422 Z"
              id="Rectangle"
              stroke={theme.palette.background.level3}
            />
            <rect
              id="Rectangle"
              stroke={color}
              strokeWidth="2.5"
              fill={theme.palette.background.level2}
              x="41.25"
              y="21.25"
              width="86.5"
              height="56.5"
              rx="4"
            />
            <rect
              id="Rectangle"
              fill={theme.palette.background.level2}
              x="42.5"
              y="33"
              width="84"
              height="14"
            />
            <path
              d="M127.171113,33 L61.3308824,33 L127.171113,33 Z M121.171113,46 L42.3315548,46 L121.171113,46 Z M78.0625,65 L49.7546471,65 L78.0625,65 Z M56.2890625,33 L49.0926339,33 L56.2890625,33 Z"
              id="lines"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
