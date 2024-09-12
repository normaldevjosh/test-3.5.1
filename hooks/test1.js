const NormalSdk = require("@normalframework/applications-sdk");
const cowsay = require("cowsay");

/**
 * Invoke hook function
 * @param {NormalSdk.InvokeParams} params
 * @returns {NormalSdk.InvokeResult}
 */
module.exports = async ({ points, sdk, update, args, config }) => {
  console.log("test1; version 3");

  cconsole.log(
    cowsay.say({
      text: "I'm a moooodule",
      e: "oO",
      T: "U ",
    }),
  );
};

