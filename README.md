# Atmo

A monorepo Next.js web application with custom Express server as an API gateway
for others backend microservices

## Design Structure

Each page will be rendered with this basis

```
_document
  |__ _app
    |__ shell
```

Here comes the following _arborescence_ for defining components nesting.
Reading top to bottom,

> cf [atomic design system](http://atomicdesign.bradfrost.com/table-of-contents/)

```
pages
  |__ layout
  |__ modules
  |__ components
  |__ elements
```

---

## TODO

- :lipstick: upgrade styling
  -- add Image component
  --update existing components
- :mag: improve SEO
- :lock: fix security
- :building_construction: set subscribing as its own microservice
- :recycle: refactor custom dependencies
- :see_no_evil: add/update .gitignore
- :rocket: serverless deployment
