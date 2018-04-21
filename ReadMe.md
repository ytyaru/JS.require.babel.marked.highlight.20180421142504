# このソフトウェアについて

マークダウンのcodeタグで示された言語のハイライト用JSを動的読込してハイライトする。

## 要点

### require.js

JSファイル分割する。

### ES6

* class構文
* let スコープ修飾子

### マークダウン文字列の取得

方法|問題
----|----
HTML埋め込み|HTMLコードと分離できない
JS埋め込み(文字列リテラル)|ファイル分割には要require.js。可読性最悪。改行を`\\n`と表記せねばならない
JS埋め込み(テンプレート文字列)|要ES6(ES2015), require.js。バッククォート`\``をエスケープせねばならない
プレーンテキスト|ローカルでファイル参照できない([Same-origin_policy](https://developer.mozilla.org/ja/docs/Web/Security/Same-origin_policy)エラーにより。(ajax通信でURLのファイルを取得する仕組み))

今回はJSのテンプレート文字列を使ってみた。

### マークダウンの`<code>`で用いる言語の取得

今回の本題。2回markedでパースさせることで解決した。

1回目は言語を取得するためだけに。2回目はパースするために。

# 開発環境

* [Raspberry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 3 Model B
    * [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) GNU/Linux 8.0 (jessie)
        * Chromium 51.0.2704.91

# ライセンス

このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

使用ソフトウェアは以下。

Library|License|Copyright
-------|-------|---------
[require](http://requirejs.org/)|[MIT](https://opensource.org/licenses/MIT)|[Copyright jQuery Foundation and other contributors](https://github.com/requirejs/requirejs/blob/master/LICENSE)
[jQuery](https://jquery.com/)|[MIT](https://opensource.org/licenses/MIT)|[Copyright JS Foundation and other contributors](https://jquery.org/license/)
[highlight](https://highlightjs.org/)|[BSD-3-clause](https://spdx.org/licenses/BSD-3-Clause-Clear.html)|[Copyright (c) 2006, Ivan Sagalaev](https://github.com/isagalaev/highlight.js/blob/master/LICENSE)
[marked](https://github.com/markedjs/marked)|[MIT](https://opensource.org/licenses/MIT)|[Copyright (c) 2011-2018, Christopher Jeffrey.](https://github.com/markedjs/marked/blob/master/LICENSE.md)
