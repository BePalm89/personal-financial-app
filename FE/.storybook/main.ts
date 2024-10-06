
/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
   staticDirs: ['../public'],
   addons: [
     '@storybook/addon-links',
     '@storybook/addon-essentials',
     '@storybook/addon-interactions',
     '@chakra-ui/storybook-addon',
   ],
   core: {
    builder: '@storybook/builder-vite'
   },
  framework: {
     name: '@storybook/react-vite',
     options: {},
   }, 
 };
 export default config;