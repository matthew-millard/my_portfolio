const { flatRoutes } = require("remix-flat-routes");

/** @type {import('@remix-run/dev').AppConfig} */

module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*", "**/*.test.{ts,tsx}"],
  serverModuleFormat: "cjs",
  routes: async (defineRoutes) => {
    return flatRoutes("routes", defineRoutes, {
      ignoredRouteFiles: ["**/.*"], // Ignore dot files (like .DS_Store)
      //appDir: 'app',
      //routeDir: 'routes',
      //basePath: '/',
      //paramPrefixChar: '$',
      //nestedDirectoryChar: '+',
      //routeRegex: /((\${nestedDirectoryChar}[\/\\][^\/\\:?*]+)|[\/\\]((index|route|layout|page)|(_[^\/\\:?*]+)|([^\/\\:?*]+\.route)))\.(ts|tsx|js|jsx|md|mdx)$$/,
    });
  },
};
