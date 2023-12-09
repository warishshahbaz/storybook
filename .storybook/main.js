// /** @type { import('@storybook/react-webpack5').StorybookConfig } */
// const config = {
//   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/preset-create-react-app",
//     "@storybook/addon-onboarding",
//     "@storybook/addon-interactions",
//   ],
//   framework: {
//     name: "@storybook/react-webpack5",
//     options: {
//       builder: {
//         useSWC: true,
//       },
//     },
//   },
//   docs: {
//     autodocs: "tag",
//   },
//   staticDirs: ["..\\public"],
// };
// export default config;

/*************************************/
// import custom from "../webpack.config.js";
// const {
//   withStorybookModuleFederation,
// } = require("storybook-module-federation");

// /** @type { import('@storybook/react-webpack5').StorybookConfig } */
// const config = {
//   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
//   // webpackFinal: async (config) => {
//   //   return {
//   //     ...config,
//   //     module: {
//   //       ...config.module,
//   //       rules: [...config.module.rules, ...custom.module.rules],
//   //     },
//   //   };
//   // },
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/preset-create-react-app",
//     "@storybook/addon-onboarding",
//     "@storybook/addon-interactions",
//   ],
//   core: {
//     builder: "webpack5",
//   },
//   framework: {
//     name: "@storybook/react-webpack5",
//     options: {
//       builder: "webpack5",
//       useSWC: true,
//       fsCache: true,
//       lazyCompilation: true,
//     },
//   },

//   docs: {
//     autodocs: "tag",
//   },
//   staticDirs: ["..\\public"],
// };

// const moduleFederationConfig = {
//   name: "components",
//   filename: "remoteEntry.js",
//   exposes: {
//     "./Button": "./src/stories/Button.jsx",
//   },
//   shared: {
//     react: {
//       singleton: true,
//     },
//     "react-dom": {
//       singleton: true,
//     },
//   },
// };

// module.exports = withStorybookModuleFederation(moduleFederationConfig)(config);

/********************************************************************************** */
const { withModuleFederation } = require("@module-federation/storybook-addon");
const moduleFederationConfig = {
  name: "components",
  filename: "remoteEntry.js",
  // core: {
  //   builder: "webpack5",
  // },
  exposes: {
    "./Button": "./src/stories/Button.jsx",
  },
  shared: {
    react: {
      singleton: true,
    },
    "react-dom": {
      singleton: true,
    },
  },
};

const storybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    // other addons,
    {
      name: "@module-federation/storybook-addon",
      options: {
        moduleFederationConfig,
      },
    },
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {
      name: "components",
      filename: "remoteEntry.js",
      // core: {
      //   builder: "webpack5",
      // },
      exposes: {
        "./Button": "./src/stories/Button.jsx",
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
      },
    },
  },

  core: {
    builder: "webpack5",
  },

  docs: {
    autodocs: true,
  },
};

module.exports = storybookConfig;
