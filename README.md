# CDD Contest #1

This is the github repository of a contest managed by '[Café des Devs](https://discord.com/cafedesdevs)', a french discord server which is a community of developers.

This contest is a design-implementation contest. You have to make the most **optimized** and **easy-to-read** website.
I personally wanted to push the challenge even further and have a clean development environment with a fully optimized final build.

You can find the design as "maquette_integration_1.jpeg" in the main directory.

## Technologies used:
1. [Gulp](https://github.com/gulpjs/gulp)
2. [Sass](https://github.com/sass/sass/blob/main/js-api-doc/compile.d.ts)
3. [Postcss](https://github.com/postcss/postcss)
4. [cssnano](https://github.com/cssnano/cssnano)

Check the README.md located under the "build/" directory to get more informations of how is organized the project.

## For CDD review team
To review the code just run these lines in your terminal

```bash
cd /random-dir/
git clone https://github.com/5CYTH3/first_cdd_contest.git
cd first_cdd_contest
npm i
```

:warning: Don't run "gulp". It will launch the dev environment but **isn't production-ready**. Instead, just open the index.html file under the "build/" folder.

I want to say it again but only the **build folder** is production-ready and is the __most optimized__. If you want to evaluate the size or the loading time of the website, just check this folder **only**.