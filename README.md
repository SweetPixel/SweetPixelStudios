
SweetPixel Studios Official Website
================================================================================

* [Ali Raza](github.com/aliirz)
* [Mubassir Hayat](github.com/aliirz)
* [Sayyam](github.com/msayyam)

The website is based on [Yeoman][yo].

## Initial Setup

* Clone from github
* `fab setup` will setup apache, download node modules via npm, and then
  set mercurial hooks, and finally do a debug build. This is the same as
  doing `grunt dev` after the initial setup.
* Develop.
* Commit hooks will help keep things clean and organized.

## Useful Tools

* `grunt watch`: Unit test our javascript and css on file change.
* `grunt jshint`: Weird problem? Lint it before you bug hunt it.

## Release

For the moment, the release looks like this:
`dploy production`

## Code Style

We developer with a fairly strict [JSHint][jshint] setup. You can see the
style format in the `.jshintrc` file.

Code comments are done with [Markdown][markdown], and processed with
[Docker][docker]. Whitespace is nice, use it, and keep to the established
style of the project.

## Build and Deploy

The build process is automated with [Grunt JS][grunt]. The build process is
quite involved, ultimately producing a single CSS file, and only one or two
JS files. The app can be run in development, staging, and production
environments.
