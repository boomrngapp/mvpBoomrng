// jest is creating an warning that there is a haste module naming collision
// the fix is to list paths that jest should ignore
const blacklist = require('metro-config/src/defaults/blacklist');
module.exports = {
  resolver: {
    blacklistRE: blacklist([/#current-cloud-backend\/.*/]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};