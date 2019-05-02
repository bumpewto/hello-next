module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
      "@babel/preset-react",
    ],
  ],
  babelrcRoots: [".", "frontend/*"],

  // overrides: [
  //   {
  //     test: "../frontend",
  //     extends: "../frontend/.babelrc",
  //   },
  // ],
};
