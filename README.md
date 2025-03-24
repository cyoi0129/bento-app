# App Name

弁当販売店検索アプリ

## Architecture

主に使用するライブラリは以下となります
react-google-maps
TanStack Query

## Local Start

.env.development ファイルをトップディレクトリに作成した上、
API のエンドポイントと GoogleMap 用の API キーをセットします

```
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_API_BASE=
```

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)

## Pages

- Top: /
- Shop: /shop/${id}

## Directory

- \_components: コンポーネント
- \_services: API 関連(TanStack Query)
