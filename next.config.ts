import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // // 設置為 'export' 啟用靜態 HTML 導出 (GitHub Pages 需要)
  // output: 'export',

  // // 設置 base path 為你的 Repo 名稱
  // // 範例: https://hunlin99.github.io
  // basePath: '/app-dev-class-note',

  // // 確保靜態資源 (JS/CSS/圖片) 能夠從正確的子路徑載入
  // assetPrefix: '/app-dev-class-note/',

  // // GitHub Pages 不支援 Next.js 內建的圖片優化服務
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
