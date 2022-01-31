# Plasmic integration as Web component

![npm](https://img.shields.io/npm/v/lit-plasmic)

This web component is a simple way to integrate designs from [Plasmic](https://www.plasmic.app/) into your website.
It is implemented using [lit](https://lit.dev/). Therefore, this component does not require any additional scripts or packages, so it can be used even on plain html page.

```bash
npm i lit-plasmic
```

## How to use it?

Place component ether in lit template literal or just in html file.

```html
<plasmic-component name="name-of-your-plasmic-component" projectId="your-project-id"
                   publicApiToken="your-public-api-token"></plasmic-component>
```

Don't forget to import the component!

1. For usage in literal templates:
```js
import "lit-plasmic";
```

2. For usage in html files:
```html
<script src="https://cdn.jsdelivr.net/npm/lit-plasmic/index.min.js" type="module"></script>
```

## API

Here is a table of accepted attributes. Detailed descriptions can be found in [Plasmic docs here](https://docs.plasmic.app/learn/rest-api).

| Attribute name              | Type                     | Default value |
|-----------------------------|--------------------------|---------------|
| name (*Required*)           | String                   | -             |
| projectId (*Required*)      | String                   | -             |
| publicApiToken (*Required*) | String                   | -             |
| version                     | "published" or "preview" | published     |
| hydrate                     | Boolean                  | true          |
| embedHydrate                | Boolean                  | true          |
| componentProps              | Object                   | -             |
| globalVariants              | Array                    | -             |
