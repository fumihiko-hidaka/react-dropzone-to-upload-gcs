# description

Drag&Dropを使用してブラウザからファイルをアップロードし、
サーバ上では更にGCSにファイルをアップロードするための検証プログラム

MemoryStorageを使ってしまっているので、GCSの認証付きURLで実装した方が良さそう。

# run

```
cd front
yarn
yarn build

cd ../api

cp .env.example .env
vi .env

yarn
yarn start
```