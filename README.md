# gulp-merge-link 
> Merge `<link>` or `<script>` on html.
> This is necessary work with [gulp-concat](https://www.npmjs.com/package/gulp-concat)

## Install

```
npm install gulp-replace
```

## Normal Usage
```javascript
var merge=require('gulp-merge-link');

gulp.task('merge', function () {
    gulp.src('./html/index.html')
        .pipe(merge({
            'base.css':['header.css','footer.css','./lib/common.css'],
            'base.js':['lib/jquery.js','header.js']
        }))
        .pipe(gulp.dest('dist/html/'));
});
```
## GLOB Usage
```javascript
var merge=require('gulp-merge-link');

gulp.task('merge', function () {
    gulp.src('html/*.html')
        .pipe(merge({
            'base.css':['header.css','footer.css','./lib/*.css',],
            'base.js':['lib/*.js','header.js']
        }))
        .pipe(gulp.dest('dist/html/'));
});
```

## API

### merge(options)
Type:`Array`

key/value Map.

#### key
Type:`String`

The new Url of some file concated.

#### value: {Array}
Urls will be replaced.

## Example
>Before:

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="footer.css"/>
    <link href="header.css"/>
    <link rel="stylesheet" href="./lib/ini.css" />
</head>
<body>
<script src="./lib/jquery.js"></script>
<script type="text/javascript" src="header.js"></script>
<script src="footer.js"></script>
</body>
</html>
```
>After  require('gulp-merge-link')(options)

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="base.css"/>


</head>
<body>
<script type="text/javascript" src="base.js"></script>

<script src="footer.js"></script>
</body>
</html>
```


