# Vite Plugin Test
A lot in this test is based on the tutorial: https://www.youtube.com/watch?v=ui717bVHS4I&ab_channel=ProgramWithErik and on his code example found at https://github.com/ErikCH/i-viewer-vue-app-test (mostly for the configuration of the projects to be able to create a bundle).

This repository consists of three Vite apps:
- <i>framework-model</i>: This is a simple and almost empty new Vite project which provides a framework TypeScript model, to be consumed for polymorphism inheritance by a plugin,
- <i>plugin-test</i>: This is a simple and almost empty new Vite project which provides a plugin model based on the framework moddel and a pluginable Vue component, to be consumed for display by another Vite app,
- <i>main-app</i>: This is a simple and almost empty new Vite project created with "npm create vite" to test the plugin import and use.

Following are the steps to reproduce to be able to display a Vite plugin in a Vite app, with several options to import the plugin.

## Framework package

### Build the framework

1. Navigate to <i>framework-model</i> to build the framework package:
    1. Install the small utility `rollup/typescript2` that is mentioned in the middle of the video for packaging (`npm i rollup-plugin-typescript2 -D`),
    1. `npm run build` to create the package,

## Plugin package

### Import the framework in the plugin locally with `npm link`

1. Navigate to <i>framework-model</i> to link locally the pre-built framework package:
    1. `npm link` to make this package available locally (the package name '<i>framework-model</i>' is in the json),
1. Navigate to <i>plugin-test</i> to import the framework package and use its framework model:
    1. `npm link framework-model` in the <i>main-app</i> project to link it to the plugin package,

### Build the plugin

1. Navigate to <i>plugin-test</i> to build the plugin package:
    1. Install the small utility `rollup/typescript2` that is mentioned in the middle of the video for packaging (`npm i rollup-plugin-typescript2 -D`),
    1. `npm run build` to create the package,

## Main app

There are several ways to import a plugin package in your application, which are listed below. Please note that only the `npm link` has been tested to import both the plugin and the framework model.

### Import the plugin locally with `npm link`

1. Navigate to <i>plugin-test</i> to link locally the pre-built plugin package:
    1. `npm link` to make this package available locally (the package name '<i>plugin-test</i>' is in the json),
1. Navigate to <i>main-app</i> to import the plugin package and use its Vue components for display:
    1. `npm link plugin-test` in the <i>main-app</i> project to link it to the plugin package,
    1. If you want to import also the framework model in the <i>main-app</i>, use instead the command `npm link plugin-test framework-model` in the <i>main-app</i> project to link it to the plugin package <b>and</b> to the framework model,
    1. `npm run dev` to serve the <i>main-app</i> and allow verification that the app displays the plugin's component correctly."

### Import the plugin locally with `npm pack`

1. Navigate to <i>plugin-test</i> to pack locally the pre-built plugin package:
    1. `npm pack` to create the <i>tgz/tar</i> archive of the package (the package name '<i>plugin-test</i>' is in the json),
    1. The package can then be extracted anywhere on your file management system so that the JavaScript module can be imported dynamically (use 7-zip or command-line to extract it)
1. Navigate to <i>main-app</i> to import the plugin package and use its Vue components for display:
    1. Adapt accordingly in `main.ts` the import line: `import PluginProvider from "<local-path-to-extracted-package>"` in the <i>main-app</i> project to dynamically import the plugin package,
    1. `npm run dev` to serve the <i>main-app</i> and allow verification that the app displays the plugin's component correctly."

### Import the plugin from a local NPM Repository

[Not tested yet]
1. Mount a local NPM Repository (e.g. https://github.com/local-npm/local-npm or https://github.com/verdaccio/verdaccio) on your local system
1. [Optional] On your machine, set the local npm registry: `npm set registry <local-registry-url>`
1. Navigate to <i>plugin-test</i> to publish locally the pre-built plugin package:
    1. `npm publish` to publish the package (the package name '<i>plugin-test</i>' is in the json),
1. Navigate to <i>main-app</i> to import the plugin package and use its Vue components for display:
    1. Adapt accordingly in `main.ts` the import line: `import PluginProvider from "<local-registry-package-url>"` in the <i>main-app</i> project to dynamically import the plugin package,
    1. `npm run dev` to serve the <i>main-app</i> and allow verification that the app displays the plugin's component correctly."

## Result
You should see the following output in your main app:
<image src="result.png"/>