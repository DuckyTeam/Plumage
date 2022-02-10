# Plumage
Plumage is Ducky's design system

### Local development
To run the project locally
```
npm start
```

#### Create a new component
All our components have the `plmg-` prefix.

1. Use the scaffolding command line tool:
    ```
    npm run generate
    ```
2. Rename `.css` to `.scss`
3. Add `plmg-new-component.stories.js` for Storybook stories
4. Remove prefix `Plmg` from the class name
5. Develop your component
