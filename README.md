# avif-webp-checker

> The plugin checks whether the AVIF and WebP browser supports and adds the appropriate classes to the tag html.

## Install

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/avif-webp-checker@1.0.4/dist/avif-webp-checker.min.js"></script>
```

or

```html
<script src="https://unpkg.com/avif-webp-checker@1.0.4/dist/avif-webp-checker.min.js"></script>
```

#### Import

Run the command in the console

```shell
npm i avif-webp-checker
```

Perform the import

```javascript
const isAvifWebp = require("avif-webp-checker");
```
or

```javascript
import isAvifWebp from 'avif-webp-checker'
```

## Options

Type: `object`

### mode
Type: `string`<br>
Default: `all`<br>
Possible values:
   - «avif» — Add only support «AVIF»
   - «webp» — Add only support «Webp»
   - «all» — Add support «AVIF» and «Webp»

### avifClass

Type: `string`<br>
Default: `avif`

Class is added if the browser supports the AVIF format

### webpClass

Type: `string`<br>
Default: `webp`

Class is added if the browser supports the Webp format

### onlyClass

Type: `boolean`<br>
Default: `true`

In the "all" mode, only 1 of the classes is added.If the browser supports the AVIF format adds AVIF support class, if the browser does not support the AVIF format, but supports Webp format. Webp support class is added.

## Usage

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/avif-webp-checker@1.0.4/dist/avif-webp-checker.min.js"></script>

...

<script>
   isAvifWebp({mode: "webp", webpClass: "mywebpclass"});
</script>
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/avif-webp-checker@1.0.4/dist/avif-webp-checker.min.js"></script>

...

<script>
   isAvifWebp();
</script>
```

#### Import

```javascript
import isAvifWebp from 'avif-webp-checker'

isAvifWebp({mode: "webp", webpClass: "mywebpclass"});
```

or

```javascript
const isAvifWebp = require("avif-webp-checker");

isAvifWebp();
```
