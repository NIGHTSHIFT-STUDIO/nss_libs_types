# nss_libs_types

This is a collection of types for the **nss_libs** libraries, e.g. for code completion in your IDE.

## Setup in other scripts

1. Create a folder, e.g. `nss_libs_types` in the html root of your script.
2. Copy and paste all files from the `types` folder of this script into your new `nss_libs_types` folder of the target
   script.

Alternatively you can check out this repository as a git submodule into your `nss_libs_types` folder.

## Setup and compilation

This section is only for the maintainer of this repository.

The following steps are taken from
documentation [Creating .d.ts Files from .js files](https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html)
.

1. Install node/npm to ubuntu 22.04

   See [NodeSource Node.js Binary Distributions](https://github.com/nodesource/distributions/blob/master/README.md) for
   more details.

   This package still includes _npm_.

```bash
curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```

2. Point to the root of this project and install typescript locally.

```bash
npm install typescript --save-dev
```

3. Generate definition files

   See [tsconfig.json](./tsconfig.json) for more details and set up the correct paths to the source files of *nss_libs*.

```bash
npx tsc
```