# What is build directory?

The 'build' directory contains all the preprocessed and minified .scss files to the main.css file, and the minified .html files.

```
project
│   index.html
│
└───build
│   │   index.html
│   │   main.css
│   │   main.css.map
│   │   ...
...
```

The index.html below the project dir is readable by human, it is the dev file.
The index.html below the /project/build dir contains the minified and optimized file, which you have to run to get the best UX and performance. If you are human, you basically cannot read it.