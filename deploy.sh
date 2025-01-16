#!/bin/bash

set -e

npm run build

git worktree add temp-gh-pages gh-pages

cd temp-gh-pages
git rm -rf . 
touch .nojekyll

cp -r ../dist/* .

git add .
git commit -m "deploy"
git push origin gh-pages

cd ..

git worktree remove temp-gh-pages

echo "Deployment complete!"