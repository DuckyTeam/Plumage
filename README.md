# Plumage Design System
Plumage is Ducky's design system

> The Design System is under early development

## Folder structure
- packages/design-tokens: Design tokens library, containing our design tokens in various format.
- packages/component-library: The component library itself, built with StencilJS, producing standard web components.
- packages/component-library-react: The component library wrapped for ReactJS.
- examples: Contains examples of apps using Plumage.

## Development

This repo is a monorepo managed by [Rush](https://rushjs.io/).

### Prerequisites

1. NodeJS (we recommend using [nvm](https://github.com/nvm-sh/nvm))
2. Rush
    ```
    npm install -g @microsoft/rush
    ```

### Rush cheatsheet
This repo uses RushJS to manage multiple projects from a single repo. With Rush, we don't use classic NPM commands anymore.

Install all dependencies (for all projects)
```
rush install
```

Install new dependency to one of the project 
```
cd into/project
rush add --package example-lib
```

Build (all) projects
```
rush build
```

Whenever a package.json file has changed
```
rush update
```

Document changes for the next package release (write changelogs)
```
rush change
```

Remove all temporary folders created by Rush
```
rush purge
```

### Dev workflow

Whenever you make changes to this repository

1. Make sure you've got the latest version: `git checkout main && git pull`
2. Create a new branch: `git branch -b <branchname>`
3. Do your modifications
4. Commit your changes: `git add . && git commit`
5. Run `rush build` and commit the generated files.
6. Document your changes for the next release: `rush change`
   See the next section for more details about this process.
7. Commit and push the changelog documentation

#### Document change logs

Whenever you edit this repo, first commit your changes and then run `rush change`.
This command will analyze the git history and ask you to describe your changes for each NPM package that has changed.
This command should be run once you are ready to merge your PR, after all your changes have been committed to the branch.

For each package, describe the changes in a user-friendly way. Whatever you write in there will end up in the package's CHANGELOG.

> The way in which you phrase your description is important. You don’t want to be overly concise or specific, you don’t want to reveal private information, and you want the description to be as helpful as possible. We recommend to err on the side of readability. Ask yourself:
>
> * “How is my change relevant to a third-party developer?”
> * “Could it break them?”
> * “Does it fix a bug that’s been annoying them?”
> * “Is it a new feature for them to try?”
>
> _Read more at [Rush: Authoring change logs: Recommended Practices](https://rushjs.io/pages/best_practices/change_logs/#recommended-practices)_

