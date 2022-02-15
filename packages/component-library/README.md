# Plumage
Plumage is Ducky's design system

### Local development
To run the project locally
```
npm start
```

#### Create a new component
##### Note
All our components have the `plmg-` prefix.

The `generate` script is a bit rigid at the moment and some additional steps are required.

Improvements to the scripts are tracked by the issue [Custom generate #2507](https://github.com/ionic-team/stencil/issues/2507)

##### Steps

1. Use the scaffolding command line tool:
    ```
    npm run generate
    ```
2. Rename `.css` to `.scss`
3. Add `plmg-new-component.stories.js` for Storybook stories
4. Remove prefix `Plmg` from the class name in `.tsx`
5. Develop your component
