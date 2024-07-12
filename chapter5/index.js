// 基本データを操作する 組み込みオブジェクト

// 5.1 オブジェクトとは？
// 5.1.2 オブジェクトを生成するための準備

// // new演算子
// // 引数に最初に設定しておきたい値、挙動を左右するためのパラメーターを渡す
// let dat = new Date(2022,11,4,11,36,54);

// // オブジェクトの複製を作ることをインスタンス化、できあがったものをインスタンスと呼ぶ

// // インスタンスを初期化するための専用のメソッド＝コンストラクター
// // new演算子はコンストラクターを呼び出すための構文
// // なぜインスタンス化するのか→複数の箇所からセットするとデータが衝突する等不具合が出るためコピーを生成する

// // // インスタンスがnullの場合のアクセスを簡略化する
// // // リスト5-01 nullish_old.js
// // let str = null;

// // if (str !== null && str !== undefined) {
// //     console.log(str.length);
// // }
// // リスト5-02 nullish.js
// let str = null;
// console.log(str?.length);

// // 5.1.4 静的メソッド／プロパティ
// // 例外的にインスタンスを生成せずに呼び出せるものがある

// // 5.1.5 組み込みオブジェクト
// // リスト5-03 built_in.js
// let str = 'こんにちは';
// console.log(str.length);

// // JavaScriptではリテラルをそのまま対応する組み込みオブジェクトのインスタンスとして利用できる
// // 主要なデータ型であればリテラル記述がそのままインスタンス化を意味している

// // リスト5-04 wrapper.js
// // 本来はlet flag = false;と書くべき
// let flag = new Boolean(false);

// if (flag) {
//     console.log('flagはtrueです');
// }
// // コンストラクタで生成され無条件にtrueとみなされてしまっている(null以外のオブジェクトをtrueとみなす)
// // 標準の型をnew演算子を使ってインスタンス化するのは原則NG

// // 5.2 文字列を操作する Stringオブジェクト

// // リスト5-05 str_len.js
// let str1 = 'WINGSメンバー';
// console.log(str1.length);

// let str2 = '叱る';
// console.log(str2.length);
// // 叱という漢字がサロゲートペア(Unicodeで表現できる上限を超えた文字)のため4バイト=2文字とみなしてしまう

// // リスト5-05 str_len_pair.js
// let str = '叱る';
// console.log([...str].length);

// // 5.2.2 文字列を大文字、小文字で変換する

// // リスト5-07 str_upper.js
// // 全角も半角も変換できる
// let str1 = 'Wings';
// let str2 = 'Ｗｉｎｇｓ';

// console.log(str1.toLowerCase());
// console.log(str1.toUpperCase());
// console.log(str2.toLowerCase());

// // リスト5-08 str_substring.js
// let str = 'WINGSプロジェクト';

// console.log(str.charAt(5)); //結果：プ
// console.log(str.substring(5)); //結果：プロジェクト
// console.log(str.substring(5,8)); //結果：プロジ
// console.log(str.slice(5)); //結果：プロジェクト
// console.log(str.slice(5,8));

// 5.2.4 文字列を検索する

// // リスト5-11 str_index.js
// let str = 'にわにはにわにわとりがいる';

// console.log(str.indexOf('にわ'));
// console.log(str.lastIndexOf('にわ'));
// console.log(str.indexOf('にど'));
// console.log(str.indexOf('にわ', 5));
// console.log(str.lastIndexOf('とり', 7));
// console.log(str.indexOf('', 5));
// console.log(str.indexOf('とり', -5));
// console.log(str.lastIndexOf('にわ', -5));
// console.log(str.indexOf('にわ', 15));
// console.log(str.lastIndexOf('にわ', 15));

// // リスト5-13 str_index_count.js
// let str = 'にわにわにわにわとりがいる';
// let count = 0;
// let keywd = 'にわ';
// let pos = str.indexOf(keywd);

// while(pos !== -1) {
//     count++;
//     pos = str.indexOf(keywd, pos + keywd.length);
// }

// // console.log(`${count}件がヒットしました`);

// // 5.2.5 文字列に特定の部分文字列が含まれるかを判定する

// // リスト5-14 str_includes.js
// // includes(部分一致) startsWith(前方一致) endsWith(後方一致)

// let str = 'うりうりがうりうりにきてうりうりのこし';

// console.log(str.includes('うり'));
// console.log(str.startsWith('うり'));
// console.log(str.endsWith('うり'));
// console.log(str.includes('うり',10));
// console.log(str.startsWith('うり',3));
// console.log(str.endsWith('うり',2));

// // 5.2.6 文字列の前後から空白を除去する
// // リスト5-15 str_trim.js
// let str = ' WINGSプロジェクト \n\t\n';

// console.log(`「${str.trim()}」`);
// console.log(`「${str.trimStart()}」`);
// console.log(`「${str.trimEnd()}」`);

// // 5.2.7 文字列を置き換える
// // リスト5-16 str_replaceall.js
// let str = 'にわにはにわにわとりがいる';

// console.log(str.replace('にわ','二羽'));
// console.log(str.replaceAll('にわ','二羽'));

// // リスト5-17 str_replaceall.js
// console.log(str.split('にわ').join('二羽'));