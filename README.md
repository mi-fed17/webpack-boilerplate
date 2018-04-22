# Webpack boilerplate
> Webpack boilerplate with [Babel](https://babeljs.io/), [SASS](https://sass-lang.com/), [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)

* Write your JavaScript code in `index.js`
* Write your HTML in `index.ejs`

## Installation

1 . Clone this repository
```bash
git clone https://github.com/mi-fed17/webpack-boilerplate.git
```
2 . `cd` into the folder `webpack-boilerplate` that is created when cloning
```bash
cd webpack-boilerplate
```
3 . Install all dependencies with `npm`. This might take a while.
```bash
npm install
```
## Usage

### Development
To run development server on localhost (you can choose port of your choice in the config-file). Your browser should open automatically with the correct localhost.

```bash
npm run dev
```

### Production

To create a production ready build that is minified and properly packed and will be available in the folder `dist`.

```bash
npm run build
```

## ESLint integration 

> If you want to see ESLint-errors in your editor and you want your code to automatically format according to your linter, you must install and configure some packages. Below are for the most popular editors.

### VSCode

1. Install the [ESLint extension](https://github.com/Microsoft/vscode-eslint) by going to **View > Extensions** (or _`SHIFT + CMD/CTRL + X`_) and search for **ESLint**. There should be a extension called _ESLint_. Install it by clicking the *Install* button and then press the _Reload_-button.
![ESLint Extension](https://i.imgur.com/mEo0gvQ.png)
2. Open your settings file for VSCode by pressing **`CMD + ,`** for Mac and **`CTRL + ,`** for Windows. To the right is your settings for VSCode. It is formatted as `.json`. In the json-object, add the following new settings at the bottom:
```json
"[javascript]": {
  "editor.formatOnSave": false
},
"eslint.autoFixOnSave": true
```
3. You should now be able to autoformat your files whenever you save.

### Atom

1. Install `linter-eslint`, `linter` and `prettier-atom` packages. Make sure to restart Atom after installing these packages. You can install packages via **Preferences > Install** (or **`Command + ,`** for Mac and **`CTRL + ,`** for Windows) and then searching for the package names under **Install**.
![prettier-at0m](https://i.imgur.com/JZVvxoN.png)
![linter-eslint](https://i.imgur.com/sk5SAms.png)

2. Go to settings for `prettier-atom` and make sure **ESLint Integration** is checked and that **Format Files on Save** is checked. Atom should now format your `.js`-files when you are saving your files.
![prettier-atom](https://i.imgur.com/RP2BgTL.png)
3. You should now be able to autoformat your files whenever you save.

### Brackets

> In newer versions of Brackets, ESLint is already installed. But you have to configure it.

1. Open **Preferences** from the menu bar (or **`Command + ,`** for Mac and **`CTRL + ,`** for Windows)
2. In the file at the right side of the editor `brackets.json`. Add the following settings in the json-object at the bottom:
```json
"brackets-eslint.gutterMarks": true,
"brackets-eslint.useLocalESLint": true,
"linting.prefer": ["eslint" ],
"linting.usePreferredOnly": true
```
3. You should now be able to right click a `.js`-file and choose the option **Auto Fix with ESLint**.

### Sublime

1. If you don't have **Package Control** installed, install it according to these instructions: [Package Control Installation](https://packagecontrol.io/installation). Be sure to restart Sublime when the installation is finished.
2. Go to **Tools > Command Palette** in the menu bar (or **`SHIFT + COMMAND/CTRL + P`**). A Search bar should pop up in the center of the screen. Search for **Install** and an option called **Package Controll: Install Package** should pop up, press enter and the search bar should clear and you will now be able to search the package you want.
3. Install the package: **SublimeLinter**
4. Install the package: **SublimeLinter-eslint**.
5. Install the package: **ESLint-formatter**.
6. If you want autoformat on save -> In the menu bar, go to: **Preferences > Package Settings > ESLint Formatter > Settings**
7. In the settings file to the right in the editor, add the following content:
```json
{
  "format_on_save" : true
}
```

## Packages used

* [Webpack](https://github.com/webpack/webpack)
  * Webpack handles converting and packaging all the resources in your project so they can be read by a browser.
* [Webpack-dev-server](https://github.com/webpack/webpack-dev-server)
  * Webpack does not handle creating a `localhost` and serving the content, you need to have a separate module that handles reloading and updating the page when in development mode
* [Webpack Babel Loader](https://github.com/babel/babel-loader)
  * Handles converting JavaScript with Babel
* [Style-loader](https://github.com/webpack-contrib/style-loader)
  * Handles `<style>`-tags and inserting css via webpack. Needed for loading CSS
* [CSS-loader](https://github.com/webpack-contrib/css-loader)
  * Makes it possible to do `import './styles.css` inside our `app.js`-file. Without this loader, webpack does not know how to handle `.css`-files.
* [Sass-loader](https://github.com/webpack-contrib/sass-loader)
  * Makes it possible to do `import './styles.scss` inside our `app.js`-file. Without this loader, webpack does not know how to handle `.scss`-files.
* [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
  * By default, webpack inlines css into your JavaScript, it does not actually create a `.css`-file. This plugin handles extracting the `css` into a separate file.
* [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)
  * This plugin handles creating a `index.html` from `index.ejs`. This is mainly so we don't have to handle linking and moving our files, webpack moves and inserts script-tags for us.