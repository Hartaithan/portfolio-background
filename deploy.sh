#!/bin/bash

set -e

npm run build

touch dist/.nojekyll

git worktree add temp-gh-pages gh-pages
cp -r dist/* temp-gh-pages
cd temp-gh-pages

git add .
git commit -m "deploy"
git push origin gh-pages
cd ..

git worktree remove temp-gh-pages

echo "Deployment complete!"