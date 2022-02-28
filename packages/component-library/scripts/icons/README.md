# Generate icons
A bunch of scripts to download, clean, rename icons.

Icons are downloaded from [Google Material Icons](https://fonts.google.com/icons).

And they are hosted on https://static.ducky.eco/plumage/icons/icon-name.svg

## Usage
Follow the instructions below to download the latest icons from Material Icons and 
to make them available for every user of the design system.

> Note: at the end of these steps, you do **not need** to deploy a new version of the library to make new icons available.

### Download, clean, rename, generate enum

```shell
cd packages/component-library
npm run generate-icons
```

### Upload to static.ducky.eco

```shell
cd packages/component-library/scripts/icons/cleaned-icons
gsutil -m cp ./* gs://ducky_static_assets/plumage/icons
```

### Clean up

1. Move `packages/component-library/scripts/icons/cleaned-icons` to `static-assets/icons`
2. Delete `packages/component-library/scripts/icons/material-icons`