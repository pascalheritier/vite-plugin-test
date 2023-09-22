# Vite Plugin Test
Everything in this test is based on the tuorial: https://www.youtube.com/watch?v=ui717bVHS4I&ab_channel=ProgramWithErik and on his code example found at https://github.com/ErikCH/i-viewer-vue-app-test.

This repository consists of two Vite apps:
- <i>pluginTest</i>: This is a simple and almost empty new Vite project which provides a pluginable Vue component, to be consumed for display by another Vite app,
- <i>mainApp</i>: This is a simple and almost empty new Vite project created with "npm create vite" to test the plugin import and use.

Here are the steps to reproduce to be able to display a Vite plugin in a Vite app:

1. Retrieve the two applications (<i>pluginTest</i> and <i>mainApp</i>) code,
1. Navigate to <i>pluginTest</i> to create the plugin package:
    1. Install the small utility `rollup/typescript2` he mentions in the middle of his video for packaging (`npm i rollup-plugin-typescript2 -D`),
    1. `npm run build` to create the package,
    2. `npm link` to make this package available locally (the package name '<i>plugintest</i>' is in the json),
1. Navigate to <i>mainApp</i> to import the plugin package and use its Vue components for display:
    1. `npm link plugintest` in the <i>mainApp</i> project to link it to the plugin package,
    1. `npm run dev` to serve the <i>mainApp</i> and allow verification that the app displays the plugin's component correctly."

Result: 
<image src="result.png"/>