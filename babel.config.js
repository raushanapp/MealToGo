module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg', '.png', '.jpg'],
        alias: {
          '@': './src',
          '@assets': './assets',
        },
      },
    ],
  ],
};
