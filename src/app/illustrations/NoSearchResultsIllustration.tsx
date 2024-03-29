import { useTheme } from 'styled-components';

import { VectorProps } from '../theme/theme.types';

export default function NoSearchResultsIllustration({
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
      viewBox="0 0 167 88"
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
        <g id="NoSearchResults" transform="translate(-47.000000, -64.000000)">
          <g id="Group" transform="translate(47.000000, 65.000000)">
            <path
              d="M129,70 L46,70 C42.1340068,70 39,66.8659932 39,63 C39,59.1340068 42.1340068,56 46,56 L7,56 C3.13400675,56 0,52.8659932 0,49 C0,45.1340068 3.13400675,42 7,42 L47,42 C50.8659932,42 54,38.8659932 54,35 C54,31.1340068 50.8659932,28 47,28 L22,28 C18.1340068,28 15,24.8659932 15,21 C15,17.1340068 18.1340068,14 22,14 L62,14 C58.1340068,14 55,10.8659932 55,7 C55,3.13400675 58.1340068,0 62,0 L160,0 C163.865993,0 167,3.13400675 167,7 C167,10.8659932 163.865993,14 160,14 L120,14 C123.865993,14 127,17.1340068 127,21 C127,24.8659932 123.865993,28 120,28 L142,28 C145.865993,28 149,31.1340068 149,35 C149,38.8659932 145.865993,42 142,42 L131.826087,42 C126.951574,42 123,45.1340068 123,49 C123,51.5773288 125,53.9106622 129,56 C132.865993,56 136,59.1340068 136,63 C136,66.8659932 132.865993,70 129,70 Z M160,42 C156.134007,42 153,38.8659932 153,35 C153,31.1340068 156.134007,28 160,28 C163.865993,28 167,31.1340068 167,35 C167,38.8659932 163.865993,42 160,42 Z"
              id="Background"
              fill={theme.palette.background.level2}
            />
            <g
              id="Search"
              transform="translate(40.000000, 1.000000)"
              strokeWidth="2.5"
            >
              <circle
                id="Oval"
                stroke={color}
                fill={theme.palette.background.level2}
                cx="33.5"
                cy="33.5"
                r="33.5"
              />
              <path
                d="M28.1320801,59.4938965 C29.890814,59.818529 31.6801207,59.9872302 33.5,60 C48.1355459,60 60,48.1355459 60,33.5 C60,18.8644541 48.1355459,7 33.5,7 C29.7403616,7 26.1635859,7.78292845 22.9238202,9.19463803 C17.293841,11.6478697 12.681584,15.9999304 9.89598776,21.4418818 C8.04450607,25.0589434 7,29.157493 7,33.5 C7,37.4400034 7.85985082,41.1791779 9.40213862,44.5401097 C10.5032232,46.9395777 11.9521427,49.1462571 13.6843385,51.0955896"
                id="Oval"
                stroke={color}
                fill={theme.palette.background.level1}
                strokeLinecap="round"
              />
              <path
                d="M16.7974263,54.0747242 C18.9455459,55.8207047 21.3723828,57.2370261 24.0008698,58.2466213"
                id="Oval"
                stroke={color}
                strokeLinecap="round"
              />
              <path
                d="M34,15 C32.2773142,15 30.6081757,15.2292632 29.0214315,15.6589426 C20.9428274,17.8465728 15,25.2292755 15,34"
                id="Oval"
                stroke={color}
                strokeLinecap="round"
              />
              <path d="M61,60 L67,66" id="Path-4" stroke={color} />
              <path
                d="M66.0302921,65.0302921 C64.1375776,66.9230066 64.1375776,69.9917031 66.0302921,71.8844176 L77.1155824,82.9697079 C79.0082969,84.8624224 82.0769934,84.8624224 83.9697079,82.9697079 C85.8624224,81.0769934 85.8624224,78.0082969 83.9697079,76.1155824 L72.8844176,65.0302921 C70.9917031,63.1375776 67.9230066,63.1375776 66.0302921,65.0302921 Z"
                id="Rectangle"
                stroke={color}
                fill={theme.palette.background.level2}
              />
              <path
                d="M71,67 L82,78"
                id="Line"
                stroke={theme.palette.background.level1}
                strokeLinecap="round"
              />
            </g>
            <path
              d="M133.5,27 L116.324219,27 L133.5,27 Z M140.5,27 L138.278809,27 L140.5,27 Z M127.175781,34.7773438 L119,34.7773438 L127.175781,34.7773438 Z"
              id="Line-8"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32.5,48 L15.3242188,48 L32.5,48 Z M9.5,48 L5.27880859,48 L9.5,48 Z M37.1757812,56.7773438 L29.0000002,56.7773438 L37.1757812,56.7773438 Z"
              id="Line-8"
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
