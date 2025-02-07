# BetterPhotos

### Short description

The [BetterPhotos](https://nazar-pichak.github.io/BetterPhotos/) is a single page project which is using an advanced styling techniques.
The core technologies are [Sass](https://sass-lang.com/) and [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) with additional external libraries
for optimization and compiling [*CSS*](https://developer.mozilla.org/en-US/docs/Web/CSS) code to [*vendor prefixed code*](https://www.npmjs.com/package/autoprefixer)
with values from [*Can I Use*](https://caniuse.com/) and [*CSS minifier*](https://www.npmjs.com/package/csso) for compression and cleaning the extra spaces and redundant code.

### Usage

Ensure you have installed [Node](https://nodejs.org/en) and [npm](https://www.npmjs.com/) on your system.

- install libraries

```
npm install 
```

- compile **sass** to **css** via sass watching for convinience

```
npm run compile
```

- compile **sass** to **css** for final building

```
npm run build:compile
```

- build vendor prefixes from builded **css** file

```
npm run build:prefixes
```

- compress prefixed **css** file

```
npm run build:optimize
```

- convert compressed **css** file units from **pixels** to **rem**

```
npm run convert-px-to-rem
```

**Would you like to contribute ??? 🧑‍💻🧑‍💻🧑‍💻**

Make changes to the code and open Pull Reauest.






