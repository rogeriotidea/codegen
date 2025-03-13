
cd /src
chmod +x index.js
npm link
codegen --help

./src/index.js skeleton --help
./src/index.js skeleton skeleton --component-name product 