# kangxi-strokecount

A stroke count lookup table according to Kangxi radicals stroke order.

Includes all han characters in Kangxi Zidian that are encoded in Unicode 11.0.0, with 63696 characters in total.

The CSV table is encoded in UTF-8, with BOM and Windows EOL marks (CR/LF) to facilitate interoperation with Excel.


## 康熙字典筆劃數對照表

在一些傳統場合之中，需要根據康熙字典的部首，來計算筆劃數。這有時候會跟手寫筆劃數不同。

例如「華」，手寫計12劃。而康熙字典裏，部首為「艸」，計6劃。加上「艸」部首以外的8劃，共計14劃。

此對照表收錄Unicode 11.0.0裏所有源自康熙字典的漢字，包括正典和補遺，共計63696字。

CSV格式，UTF8編碼，包含BOM和以Windows的CR/LF換行，可直接雙擊或拖放到Excel使用。

[用Excel計算康熙字典筆劃數](https://breezyreeds.wordpress.com/2017/04/08/%E7%94%A8excel%E8%A8%88%E7%AE%97%E5%BA%B7%E7%86%99%E5%AD%97%E5%85%B8%E7%AD%86%E5%8A%83%E6%95%B8/)

[MIT License](https://github.com/breezyreeds/kangxi-strokecount/blob/master/LICENSE)
