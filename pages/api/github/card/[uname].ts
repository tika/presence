import { GithubCardImage } from "@github/card/image";

import { base } from "@lib/assets/base";

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";
import {
  GithubAllReposResponse,
  GithubColorResponse,
} from "@lib/types/GithubResponse";

type Query = {
  [p: string]: string | string[] | undefined;
  bg?: string;
  text?: string;
  desc?: string;
  stats?: string;
  stats_text?: string;
  theme?: string;
  icon?: string;
  rounded?: string;
  type?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query as Query,
    uname = req.query.uname;

  const repoResponse = await fetch(
    `https://api.github.com/users/${uname}/repos`
  );
  const colorResponse = await fetch(
    "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
  );

  const body: GithubAllReposResponse.RootObject = await repoResponse.json();
  const colors: GithubColorResponse = await colorResponse.json();

  axios
    .get(`https://api.github.com/users/${uname}`)
    .then(async (r: AxiosResponse) =>
      res.send(
        query.type?.toLowerCase() === "base64"
          ? {
              data: await base(
                await GithubCardImage(r.data, body, colors, query)
              ),
            }
          : await GithubCardImage(r.data, body, colors, query)
      )
    )
    .catch((err) => {
      console.log(err);
      res.send({ error: "Sorry, that user doesn't exist." });
    });

  query.type?.toLowerCase() !== "base64"
    ? res.setHeader("Content-Type", "image/svg+xml; charset=utf-8")
    : null;

  res.setHeader(
    "content-security-policy",
    "default-src 'none'; img-src * data:; style-src 'unsafe-inline'"
  );
}