# Next.js 404 Query Params Bug

```
npm run dev
```

Then open http://localhost:3000/this-page-does-not-exist?foo=1

In Next.js v10 the query params would be reflected into the Next.js router
params (useRouter().query). In Next.js v11 this no longer happens.

