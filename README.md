# API server template project for TypeScript

## Work in progress, the Readme below is a copy form the other template

Level: beginner

This is a template file layout for TypeScript API server project. It contains
prepared config files for typescript, git and Microsoft VS Code editor to
jumpstart any development. It also has certain modules to make a server work.

> I advise to run it before editing to make sure that all necessary tools are
> installed on your system.

## VS Code extensions

This template contains a list of recommended extensions (and predefined configurations) for VS Code editor. They should be installed manually, by
checking `Recommended` section of `Extensions` tab. Not all suggested extensions will be the ones recommended for this project, you can refer to
`.vscode\extensions.json` file.

## Build

### Prerequisites

In order to make it work, make sure you have prepared your environment tools

#### Node.js

Install Node.js tool to your system.

Use [official site](https://nodejs.org/en/download) to get it for your OS

You can safely skip `node-gyp` tool installation if you are not planning to
develop and/or compile C/C++ written Node.js modules.

#### Typescript

Get Node.js package (`-g` flag will install it globally)

```
npm install -g typescript
```

### Compile

This will compile (translate to JavaScript) a whole project

```
tsc
```

The JavaScript files will appear in `dist` directory

## Run

```
node dist/_entrypoint.ts
```

You can rename your main file as you please, just make sure you are working with
`.ts` one

## Test

For a fast test, you can simply visit `localhost:3000` using your browser. The
expected response is JSON formatted data

## Edit

After first successfull run (just a recommendation), you are good to go. Add
your own code and make an aweosme API server!
