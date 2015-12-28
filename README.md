# README

エリア内文字、パス上文字のテキストオブジェクトから、テキストパス（文字以外のパス）だけを選択するIllustrator用のスクリプトです。

<div class="fig center" style="margin-bottom: 20px;"><img src="http://www.graphicartsunit.com/saucer/images/select-text-path/eye.png" alt="イメージ" class="noshadow"></div>

-----

### 更新履歴

* 0.1.1：グループ内のテキストオブジェクトに対応
* 0.1.0：新規作成（公開）

-----

### 対応バージョン

* Illustrator CS5／CS6／CC／CC 2014／CC 2015

-----

### インストール方法

1. ダウンロードしたファイルを解凍します。
2. 所定の場所に「テキストパスだけを選択.jsx」をコピーします。
3. Illustratorを再起動します。
4. `ファイル > スクリプト > テキストパスだけを選択`と表示されていればインストール成功です。

### ファイルをコピーする場所

| OS | バージョン | フォルダの場所 |
|:-----|:-----|:-----|
| Mac | 全 | /Applications/Adobe Illustrator *(ver)*/Presets/ja_JP/スクリプト/ |
| 32bit Win | CS5まで | C:\Program Files\Adobe\Adobe Illustrator *(ver)*\Presets\ja_JP\スクリプト\ |
| 64bit Win | CS5, CS6（32bit版） | C:\Program Files (x86)\Adobe\Adobe Illustrator *(ver)*\Presets\ja_JP\スクリプト\ |
| 64bit Win | CS6（64bit版）以降 | C:\Program Files\Adobe\Adobe Illustrator *(ver)* (64 Bit)\Presets\ja_JP\スクリプト\ |

* Windows版ではお使いのIllustratorの種類によって保存する場所が異なります
* *(ver)*にはお使いのIllustratorのバージョンが入ります

-----

### 使い方

<div class="fig center"><img src="http://www.graphicartsunit.com/saucer/images/select-text-path/fig01.png" alt="使い方" class="noshadow"></div>

1. エリア内文字、またはパス上文字のテキストオブジェクトを選択します（複数可）。
2. `ファイル > スクリプト > テキストパスだけを選択`を選択します。
3. それぞれのテキストパス（文字以外のパス）のみが選択さた状態になります。

-----

### 注意

* **データが多い時は処理に時間がかかります。必ず事前にドキュメントを保存してから実行してください。**
* 必要なオブジェクトが選択されていないときは、警告を表示して処理を中断します。
* エリア内文字、パス上文字以外のオブジェクトは選択が解除されます。
* ~~グループ化などの構造が混在しているとうまく動かないことがあります。~~（0.1.1でグループ内のテキストオブジェクトに対応）

-----

### 免責事項 ###

* このスクリプトを使って起こったいかなる現象についても制作者は責任を負えません。すべて自己責任にてお使いください。
* CS5からCC 2015で動作の確認はしましたが、OSのバージョンやその他の状況によって実行できないことがあるかもしれません。もし動かなかったらごめんなさい。

-----

### ライセンス ###

* テキストパスだけを選択.jsx
* Copyright (c) 2015 Toshiyuki Takahashi
* Released under the MIT license
* [http://opensource.org/licenses/mit-license.php](http://opensource.org/licenses/mit-license.php)
* Created by Toshiyuki Takahashi ([Graphic Arts Unit](http://www.graphicartsunit.com/))
* [Twitter](https://twitter.com/gautt)
