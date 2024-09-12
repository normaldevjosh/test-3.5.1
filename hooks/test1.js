const NormalSdk = require("@normalframework/applications-sdk");

/**
 * Invoke hook function
 * @param {NormalSdk.InvokeParams} params
 * @returns {NormalSdk.InvokeResult}
 */
module.exports = async ({ points, sdk, update, args, config }) => {
  console.log("test1; version 1");

  console.log(JSON.stringify(config));
};

