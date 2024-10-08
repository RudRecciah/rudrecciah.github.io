# Building Guide
Builds are completed with GitHub Actions, so no local building is necessary. When you have a stable source, make a PR `origin/dev` -> `origin/main` and merge. The app will be built and plugins will be bundled with the build and deployed within a few minutes. Following deployment, `origin/dev` will be synced with `origin/main` and the build will be removed from `origin/dev`. Once complete, just pull `origin/dev` and continue working.

> [!NOTE]
> As of September 22, 2024, the website is overwritten by an `index.html` file in `plugins`. All builds will be discarded in favor of this plugin.
