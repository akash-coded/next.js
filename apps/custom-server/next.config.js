
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig;

// const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

// module.exports = (phase) => {
//   const env =
//     phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD
//       ? { ...require('next-runtime-dotenv').default() }
//       : {};

//   return {
//     env,
//     // other Next.js configurations...
//   };
// };
