import * as React from "react";
import numeral from "numeral";

import { themes } from "@themes";
import { ThemesTypes } from "@lib/types/ThemesTypes";
import { TwitterResponse } from "@lib/types/TwitterResponse";

export const TwitterImage = (props: {
  twitter: TwitterResponse;
  bg: string | null;
  text: string | null;
  description: string | null;
  stats: string | null;
  statsText: string | null;
  theme: string | null;
  icon: string | null;
  rounded: boolean | null;
  children: React.ReactNode;
}) => {
  const defaultThemes: ThemesTypes = themes;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={940}
      height={460}
      fill="none"
      viewBox="0 0 1920 940"
      style={{ borderRadius: props.rounded ? "20px" : "0" }}
    >
      {/*background*/}
      <path
        fill={
          !props.theme
            ? props.bg
              ? `#${props.bg}`
              : "#fff"
            : defaultThemes[props.theme].bg
        }
        d="M0 0h1920v940H0z"
      />

      {/*twitter icon*/}
      <path
        d="M104.256 75.2854C102.517 76.0562 100.648 76.577 98.6833 76.8124C100.688 75.6124 102.225 73.7083 102.95 71.4416C101.075 72.5541 98.9979 73.3624 96.7875 73.7958C95.0167 71.9124 92.4958 70.7333 89.7042 70.7333C84.3458 70.7333 80 75.0791 80 80.4416C80 81.1999 80.0875 81.9374 80.25 82.6499C72.1813 82.2437 65.0333 78.3791 60.2458 72.5083C59.4125 73.9458 58.9333 75.6124 58.9333 77.3874C58.9333 80.7541 60.6479 83.727 63.25 85.4666C61.6583 85.4145 60.1625 84.9791 58.8542 84.252V84.377C58.8542 89.0791 62.1979 93.002 66.6396 93.8937C65.8229 94.1145 64.9667 94.2312 64.0833 94.2312C63.4583 94.2312 62.8479 94.1729 62.2563 94.0604C63.4917 97.9145 67.075 100.723 71.3229 100.798C68 103.402 63.8146 104.954 59.2688 104.954C58.4854 104.954 57.7125 104.908 56.9521 104.819C61.2479 107.575 66.3479 109.179 71.8271 109.179C89.6813 109.179 99.4417 94.3916 99.4417 81.5666C99.4417 81.1499 99.4313 80.7291 99.4125 80.3124C101.308 78.9416 102.954 77.2354 104.252 75.2916L104.256 75.2854Z"
        fill={
          !props.theme
            ? props.icon
              ? `#${props.icon}`
              : "#C4C4C4"
            : defaultThemes[props.theme].icon
        }
      />

      {/* vertical text */}
      <text
        fill={
          !props.theme
            ? props.text
              ? `#${props.text}`
              : "#000"
            : defaultThemes[props.theme].text
        }
        x={83}
        y={350}
        fontSize={36}
        fontWeight="bold"
        transform="rotate(-90 100 355)"
      >
        {`@${
          props.twitter.data.username.length > 11
            ? `${props.twitter.data.username.slice(0, 11)}...`
            : props.twitter.data.username
        }`}
      </text>

      {/*profile picture*/}
      <clipPath id="prefix__a">
        <rect width={273} height={306} x={143} y={82} rx={31} />
      </clipPath>

      <g>
        <text
          fill={
            !props.theme
              ? props.text
                ? `#${props.text}`
                : "#000"
              : defaultThemes[props.theme].text
          }
          x={440}
          y={175}
          fontSize={86}
          fontWeight="bold"
        >
          {props.twitter.data.name === ""
            ? props.twitter.data.name
            : props.twitter.data.username}
        </text>
        {props.twitter.data.description.length > 84 ? (
          <>
            <text
              fill={
                !props.theme
                  ? props.description
                    ? `#${props.description}`
                    : "#B4B4B4"
                  : defaultThemes[props.theme].description
              }
              x={446}
              y={245}
              fontSize={36}
            >
              {props.twitter.data.description.substring(0, 84)}
            </text>{" "}
            <text
              fill={
                !props.theme
                  ? props.description
                    ? `#${props.description}`
                    : "#B4B4B4"
                  : defaultThemes[props.theme].description
              }
              x={446}
              y={295}
              fontSize={36}
            >
              {props.twitter.data.description.length >= 154
                ? `${props.twitter.data.description.substring(84, 154)}...`
                : props.twitter.data.description.substring(84)}
            </text>{" "}
          </>
        ) : (
          <text
            fill={
              !props.theme
                ? props.description
                  ? `#${props.description}`
                  : "#B4B4B4"
                : defaultThemes[props.theme].description
            }
            x={446}
            y={245}
            fontSize={40}
          >
            {props.twitter.data.description}
          </text>
        )}
        <g>
          <g
            fill={
              !props.theme
                ? props.statsText
                  ? `#${props.statsText}`
                  : "#838383"
                : defaultThemes[props.theme].statsText
            }
          >
            <text x={450} y={370} fontSize={36}>
              <tspan
                fill={
                  !props.theme
                    ? props.text
                      ? `#${props.text}`
                      : "#000"
                    : defaultThemes[props.theme].text
                }
                fontWeight="bold"
              >
                {numeral(
                  props.twitter.data.public_metrics.followers_count
                ).format("0a")}
              </tspan>{" "}
              Followers
            </text>
          </g>
          <g
            fill={
              !props.theme
                ? props.statsText
                  ? `#${props.statsText}`
                  : "#838383"
                : defaultThemes[props.theme].statsText
            }
          >
            <text x={783} y={370} fontSize={36}>
              <tspan
                fill={
                  !props.theme
                    ? props.text
                      ? `#${props.text}`
                      : "#000"
                    : defaultThemes[props.theme].text
                }
                fontWeight="bold"
              >
                {numeral(
                  props.twitter.data.public_metrics.following_count
                ).format("0a")}
              </tspan>{" "}
              Following
            </text>
          </g>
          {!props.twitter.includes ? null : props.children}
          <g>
            {props.twitter.data.location ? (
              <g>
                <g
                  fill={
                    !props.theme
                      ? props.stats
                        ? `#${props.stats}`
                        : "#C4C4C4"
                      : defaultThemes[props.theme].stats
                  }
                >
                  <path d="M177 815.823c-4.35 0-7.89-3.538-7.89-7.888s3.542-7.893 7.89-7.893 7.89 3.541 7.89 7.889c0 4.348-3.542 7.886-7.89 7.886v.006zm0-12.652a4.771 4.771 0 00-4.765 4.764 4.768 4.768 0 004.765 4.761 4.77 4.77 0 004.765-4.763 4.773 4.773 0 00-4.765-4.766v.004z" />
                  <path d="M195.108 808.271c0-9.979-8.125-18.104-18.108-18.104s-18.108 8.125-18.108 18.104c0 3.962 1.256 7.725 3.631 10.881l.006-.004.015.031c3.391 4.313 13.079 11.994 13.489 12.317a1.559 1.559 0 001.938.002c.41-.323 10.098-8 13.489-12.317l.015-.029.004.004a17.954 17.954 0 003.629-10.881v-.004zm-18.108 20c-2.55-2.063-9.417-7.74-11.992-11.011a14.834 14.834 0 01-2.991-8.983c0-8.262 6.723-14.985 14.983-14.985 8.26 0 14.983 6.721 14.983 14.979 0 3.271-1.035 6.379-2.991 8.985-2.575 3.271-9.442 8.946-11.992 11.011v.004z" />
                </g>

                <text
                  fill={
                    !props.theme
                      ? props.statsText
                        ? `#${props.statsText}`
                        : "#646464"
                      : defaultThemes[props.theme].statsText
                  }
                  x={216}
                  y={823}
                  fontSize={40}
                >
                  {props.twitter.data.location}
                </text>
              </g>
            ) : null}

            {props.twitter.data.url ? (
              <g>
                <g
                  fill={
                    !props.theme
                      ? props.stats
                        ? `#${props.stats}`
                        : "#C4C4C4"
                      : defaultThemes[props.theme].stats
                  }
                >
                  <path d="M780.917 817.135a1.7 1.7 0 01-.423-.056 10.812 10.812 0 01-5.823-4.025 10.842 10.842 0 01-2.017-8.11 10.856 10.856 0 014.308-7.163l7.355-5.433c4.837-3.575 11.687-2.55 15.27 2.292a10.872 10.872 0 012.015 8.114 10.854 10.854 0 01-4.312 7.163l-3.084 2.279a1.564 1.564 0 11-1.858-2.517l3.083-2.281a7.732 7.732 0 003.075-5.104 7.756 7.756 0 00-1.437-5.788c-2.552-3.45-7.442-4.187-10.896-1.633l-7.354 5.433a7.749 7.749 0 00-3.073 5.104 7.726 7.726 0 001.437 5.788 7.715 7.715 0 004.15 2.869 1.567 1.567 0 011.084 1.933 1.564 1.564 0 01-1.505 1.14l.005-.005z" />
                  <path d="M771.146 831.946a10.915 10.915 0 01-8.802-4.427 10.855 10.855 0 01-2.017-8.113 10.854 10.854 0 014.313-7.162l3.079-2.279a1.564 1.564 0 011.86 2.516l-3.083 2.282a7.739 7.739 0 00-3.073 5.104 7.746 7.746 0 001.437 5.787c2.553 3.452 7.438 4.188 10.896 1.636l7.35-5.434c3.454-2.552 4.188-7.437 1.636-10.896a7.71 7.71 0 00-4.15-2.866 1.565 1.565 0 01-1.084-1.931 1.574 1.574 0 011.93-1.088 10.81 10.81 0 015.82 4.025c3.577 4.842 2.55 11.692-2.291 15.271l-7.354 5.433a10.81 10.81 0 01-6.469 2.138l.002.004z" />
                </g>

                <text
                  fill={
                    !props.theme
                      ? props.statsText
                        ? `#${props.statsText}`
                        : "#646464"
                      : defaultThemes[props.theme].statsText
                  }
                  x={817}
                  y={823}
                  fontSize={40}
                  textDecoration="underline"
                >
                  {props.twitter.data.url}
                </text>
              </g>
            ) : null}

            {props.twitter.data.created_at ? (
              <g>
                <g
                  fill={
                    !props.theme
                      ? props.stats
                        ? `#${props.stats}`
                        : "#C4C4C4"
                      : defaultThemes[props.theme].stats
                  }
                >
                  <path d="M1417.06 790.167h-32.12a4.777 4.777 0 00-4.77 4.775v32.116a4.777 4.777 0 004.77 4.775h32.12c2.63 0 4.77-2.141 4.77-4.775v-32.116a4.777 4.777 0 00-4.77-4.775zm1.65 36.891c0 .911-.74 1.65-1.65 1.65h-32.12c-.91 0-1.65-.739-1.65-1.65v-27.687c0-.911.74-1.646 1.65-1.65h32.12c.91 0 1.65.739 1.65 1.646v27.696-.005z" />
                  <path d="M1390.65 806.906a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm0 9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm20.7-9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm0 9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm-10.35-9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm0 9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm-10.35 9.021a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm10.35 0a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354z" />
                </g>

                <text
                  fill={
                    !props.theme
                      ? props.statsText
                        ? `#${props.statsText}`
                        : "#646464"
                      : defaultThemes[props.theme].statsText
                  }
                  x={1442}
                  y={823}
                  fontSize={40}
                >
                  {`Joined ${new Date(
                    props.twitter.data.created_at
                  ).toDateString()}`}
                </text>
              </g>
            ) : null}
          </g>
        </g>
      </g>

      <image
        clipPath="url(#prefix__a)"
        xlinkHref={`${
          props.twitter.data.profile_image_url.split("_normal")[0] +
          props.twitter.data.profile_image_url.split("_normal")[1]
        }`}
        width={350}
        height={390}
        x={105}
        y={50}
      />
    </svg>
  );
};