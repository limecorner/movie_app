# 速查電影

## 介紹
此專案串接 The Movie Database (TMDB) 的 API，可以快速查詢想看的電影及詳細介紹。

## 功能
- 透過年分、類型查詢電影，此類顯示電影的排序，是以受歡迎度(領獎台圖示的數字)，由大到小作排序
- 透過電影名稱查詢電影
- 每頁顯示 20 部電影，可用分頁切換頁面
- 可以查看特定電影的詳細資料
- 可以切換電影顯示方式，有卡片、清單 2 種型式
- 可以加電影到最愛
- 可以單獨查看最愛電影
- 可以幫電影評分
- 可以單獨查看評分過的電影

## 開始使用
1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

  ```bash
  npm install
  ```

4. 安裝完畢後，繼續輸入：

  ```bash
  npm run serve
  ```
  
5. 若看見此行訊息則代表順利運行
  ```bash
   Compiled successfully

   App running at:
  - Local:   http://localhost:8080/
  - Network: http://172.20.10.4:8080/
  ```

6. 接著複製 Local 端網址，貼到瀏覽器，即可進行開發

7. 欲暫停使用

  ```bash
  ctrl + c
  ```

## 開發工具
- @fortawesome/free-solid-svg-icons : 6.1.2
- @fortawesome/vue-fontawesome : 2.0.8
- node.js : 16.15.0
- bootstrap : 4.6.2
- core-js : 3.6.5
- jquery : 3.4.1
- popper.js : 1.16.0
- axios : 0.27.2
- vue : 2.7.8
- vue-router : 3.5.1
- vuejs-paginate : 2.1.0
