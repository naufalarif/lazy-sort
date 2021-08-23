# lazy-sort (experimental)
This library is to help sorting data in JavaScript.

# Installation
Using npm:
```shell
$ npm i lazy-sort
```

# How to use
Node Js:
```js
const lazySort = require('lazy-sort');

...
// Sort by ascending.
const sortByAsc = lazySort(data);

// Sort by descending.
const sortByDesc = lazySort(data, asc = false);
```

# Why lazy-sort?
lazy-sort is a easy way to sorting data in JavaScript,
and it will return a new array.
