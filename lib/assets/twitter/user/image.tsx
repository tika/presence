import * as React from "react";
import numeral from "numeral";

import { TwitterResponse } from "@twitter/TwitterResponse";

export const TwitterImage = (props: {
  twitter: TwitterResponse;
  bg: string | null;
  text: string | null;
  description: string | null;
  stats: string | null;
  icon: string | null;
  rounded: boolean | null;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={940}
      height={285}
      fill="none"
      viewBox="0 0 1920 582"
      style={{ borderRadius: props.rounded ? "20px" : "0" }}
    >
      {/*background*/}
      <path fill={props.bg ? `#${props.bg}` : "#fff"} d="M0 0h1920v582H0z" />

      {/*github icon*/}
      <path
        fill={props.icon ? `#${props.icon}` : "#C4C4C4"}
        fillRule="evenodd"
        d="M80.5 65C66.411 65 55 76.188 55 90c0 11.062 7.3 20.406 17.436 23.719 1.275.219 1.753-.531 1.753-1.188 0-.593-.032-2.562-.032-4.656-6.407 1.156-8.064-1.531-8.575-2.937-.286-.719-1.53-2.938-2.613-3.532-.893-.468-2.168-1.625-.032-1.656 2.008-.031 3.442 1.812 3.92 2.562 2.296 3.782 5.961 2.719 7.427 2.063.223-1.625.893-2.719 1.626-3.344-5.674-.625-11.602-2.781-11.602-12.344 0-2.718.988-4.968 2.613-6.718-.255-.625-1.147-3.188.255-6.625 0 0 2.136-.656 7.013 2.562a24.111 24.111 0 016.375-.844c2.167 0 4.335.282 6.375.844 4.877-3.25 7.012-2.562 7.012-2.562 1.403 3.437.51 6 .255 6.625 1.626 1.75 2.614 3.969 2.614 6.719 0 9.593-5.96 11.718-11.634 12.343.924.781 1.72 2.281 1.72 4.625 0 3.344-.031 6.032-.031 6.875 0 .657.478 1.438 1.753 1.188 5.062-1.676 9.461-4.865 12.577-9.12A24.703 24.703 0 00106 90c0-13.813-11.411-25-25.5-25z"
        clipRule="evenodd"
      />

      {/*profile picture*/}
      <clipPath id="prefix__a">
        <rect width={273} height={306} x={1540} y={82} rx={31} />
      </clipPath>

      <g>
        <text
          fill={props.text ? `#${props.text}` : "#000"}
          x={202}
          y={250}
          fontSize={86}
          fontWeight="bold"
        >
          {`${props.twitter.data.name}`}
        </text>
        {props.twitter.data.description.length > 72 ? (
          <>
            <text
              fill={props.description ? `#${props.description}` : "#B4B4B4"}
              x={202}
              y={325}
              fontSize={40}
            >
              {props.twitter.data.description.substring(0, 72)}
            </text>{" "}
            <text
              fill={props.description ? `#${props.description}` : "#B4B4B4"}
              x={202}
              y={375}
              fontSize={40}
            >
              {props.twitter.data.description.length >= 154
                ? `${props.twitter.data.description.substring(72, 154)}...`
                : props.twitter.data.description.substring(72)}
            </text>{" "}
          </>
        ) : (
          <text
            fill={props.description ? `#${props.description}` : "#B4B4B4"}
            x={202}
            y={325}
            fontSize={40}
          >
            {props.twitter.data.description}
          </text>
        )}
        <g>
          <g fill={props.stats ? `#${props.stats}` : "#838383"}>
            <svg
              x={202}
              y={444}
              aria-hidden="true"
              viewBox="0 0 16 16"
              height={40}
              width={40}
            >
              <path
                fillRule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
              />
            </svg>
            <text x={244} y={475} fontSize={36}>
              {`${numeral(
                props.twitter.data.public_metrics.follower_count
              ).format("0a")} Followers`}
            </text>
          </g>
          <g fill={props.stats ? `#${props.stats}` : "#838383"}>
            <svg x={496} y={443} viewBox="0 0 26 26" height={40} width={40}>
              <path
                fillRule="evenodd"
                d="M8 4.05a1.405 1.405 0 11-2.812 0c0-.373.148-.731.411-.995a1.41 1.41 0 011.989 0c.264.264.412.622.412.995zm0 3.979a4.226 4.226 0 002.233-1.843 4.22 4.22 0 10-7.797-2.848 4.214 4.214 0 002.752 4.691v1.646a4.218 4.218 0 004.218 4.219h2.813v3.99a4.215 4.215 0 00-2.754 4.692 4.22 4.22 0 105.566-4.692v-3.99h2.813a4.22 4.22 0 004.219-4.219v-1.646a4.22 4.22 0 10-2.813 0v1.646a1.405 1.405 0 01-1.406 1.406h-8.438a1.405 1.405 0 01-1.406-1.406v-1.646zm7.031 13.833a1.407 1.407 0 11-2.814 0 1.407 1.407 0 012.814 0zm5.625-16.406a1.407 1.407 0 100-2.814 1.407 1.407 0 000 2.814z"
                clipRule="evenodd"
              />
            </svg>

            <text x={550} y={475} fontSize={36}>
              {`${numeral(
                props.twitter.data.public_metrics.following_count
              ).format("0a")} Following`}
            </text>
          </g>
        </g>
      </g>

      <image
        clipPath="url(#prefix__a)"
        xlinkHref={`${props.twitter.data.profile_image_url}`}
        width={350}
        height={390}
        x={1500}
        y={50}
      />
    </svg>
  );
};
