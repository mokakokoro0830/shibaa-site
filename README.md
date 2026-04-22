# しば海日和 (shibaa-site)

熊本在住のしばぁが柴犬とアウトドアを楽しむアフィリエイトブログ。

## 技術スタック
- Astro v5 / TypeScript / Tailwind CSS v4 / MDX / Cloudflare Pages

## セットアップ
```bash
npm install
npm run dev   # http://localhost:4321
npm run build
```

## 記事の追加
`src/content/blog/` に .md または .mdx を作成。

フロントマター:
- title, description, pubDate (必須)
- category: シーカヤック / キャンプ / 釣り / グッズレビュー / 熊本スポット
- tags, heroImage, author, draft

アフィリリンク（.mdx内）:
```
import KaereLab from '../../components/affiliate/KaereLab.astro';
<KaereLab title="商品名" image="URL" amazon="..." rakuten="..." yahoo="..." />
```

## Cloudflare Pages デプロイ
- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 22

## 将来の拡張予定
- /sedori — せどり実践記
- /ai — AI活用記録
