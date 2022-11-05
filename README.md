## Setup
```
# setup environment variable
mv .env.example .env
# start local mongodb server
docker-compose up
# install packages
npm install
# start dev server
npm run dev

# build and deploy to vercel
vercel
```

## Notes

Have a couple of patches applied -
1. Mongoose keeps complaining about Overwrite error on module reloads -https://stackoverflow.com/questions/71653982/overwritemodelerror-cannot-overwrite-model-once-compiled-next-js-mongoose-ty
2. For some reason Vercel can't find local file config module, so I had to just import it statically.

The admin UI is served from `public/` . From my limited testing all API's seem to work including GraphQL.
