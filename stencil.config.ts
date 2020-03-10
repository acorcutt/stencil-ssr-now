import { Config } from '@stencil/core';
//import nodePolyfills from 'rollup-plugin-node-polyfills';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'dist-hydrate-script'
    },
    {
      type: 'www',
      // comment the following line to disable service workers in production
      // serviceWorker: null,
      baseUrl: 'https://myapp.local/'
    }
  ],
  commonjs: {
    namedExports: {
    }
  },
  plugins: [
    //nodePolyfills(),
  ]
};
