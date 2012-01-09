Pyramid FAQ
===========

.. What is the difference between Pyramid and Pylons-the-web-framework?

Pyramid と Pylons ウェブフレームワークの違いは何ですか?
--------------------------------------------------------------------

.. Pyramid is a new web framework. It doesn't "share any DNA" with Pylons 1.0.
.. Existing Pylons 1.0 code will be able to run "inside" Pyramid via the use
.. of a fallback handler that sends requests to an existing Pylons application.
.. When run within the fallback handler, Pylons 1.0 applications may be ported
.. piecemeal to Pyramid. As each bit of functionality is translated into Pyramid
.. code, the fallback application will continue to handle yet-to-be ported
.. functionality.

Pyramid は新しいウェブフレームワークです。それは Pylons 1.0と「DNA を
共有しません」。既存の Pylons 1.0 コードは、 Pyramid の「内部で」
fallback ハンドラを使って既存の Pylons アプリケーションにリクエストを
送ることで実行できるでしょう。fallback ハンドラ内で実行される場合、
Pylons 1.0 アプリケーションは Pyramid に断片的に移植されるかもしれません。
個々のそれぞれの機能が Pyramid コードに翻訳される間、 fallback アプリ
ケーションはまだ移植されていない機能性を扱い続けるでしょう。


.. The Pylons 1.x web framework will be maintained indefinitely by The Pylons
.. Project.  There may be a Pylons 1.1 release aimed at easing a transition to
.. Pyramid in the near future.  However, as of the release of Pyramid 1.0 on
.. January 31, 2011, the Pylons web framework has effectively been shifted into
.. "legacy" status.

Pylons 1.x ウェブフレームワークは Pylons プロジェクトによって無期限に
メンテナンスされます。 Pyramid への容易な移行を目的として近い将来 Pylons
1.1 リリースがあるかもしれません。しかしながら、2011年1月31日の
Pyramid 1.0 リリースの時点で、 Pylons ウェブフレームワークは事実上
「レガシー」ステータスに変更されました。


.. Should I port my Pylons 1.0 project to Pyramid?

.. _should_i_port:

私は Pylons 1.0プロジェクトを Pyramid に移植すべきですか?
---------------------------------------------------------

.. Pyramid 1.0 was released on Jan 31, 2011. 

Pyramid 1.0 は2011年1月31日にリリースされました。


.. A draft release of a Pylons-to-Pyramid migration guide is available at
.. https://bytebucket.org/sluggo/pyramid-docs/wiki/html/migration.html .

Pylons から Pyramid への移行ガイドの草案のリリースは
https://bytebucket.org/sluggo/pyramid-docs/wiki/html/migration.html で
利用可能です。


.. We've heard reports from several Pylons users that they have ported smaller
.. apps without too much difficulty.  For larger Pylons apps, you may want to
.. wait for the migration guide document to reach non-draft status before
.. attempting a port.

数人の Pylons ユーザから、小さなアプリケーションをあまり苦労せずに移植
したという報告を聞きました。より大きな Pylons アプリケーションについて
は、移植を試みる前に移行ガイドドキュメントが非ドラフトステータスに達す
るのを待った方が良いでしょう。


.. However, there are a few things you can do now to ease a later migration to
.. Pyramid:

しかしながら、後で Pyramid への移植を楽にするために今できることが多少
あります:


.. 1) Avoid the use of Pylons global objects except directly in action methods.
..    There is no other well-known way to access them, unless 
..    self._py_object.request has been implemented.
..
..    Pylons global objects refer to 'request', 'session', 'cache', 'response', 
..    'tmpl_context', 'config', 'url' objects that are imported from ``pylons``.
..
..    This also affects your ability to use your domain models outside of a
..    Pylons app (a command line script). Domain models shouldn't depend
..    on Pylons globals to work, nor should you pass Pylons globals into class
..    methods of your domain models. Pass variables that contain just the
..    data the model needs.

1) Pylons グローバルオブジェクトの使用は、アクションメソッドの中で直接
   使う場合を除き、避けてください。 self._py_object.request が実装され
   るまでは、それらにアクセスする他の良く知られた方法はありません。

   Pylons グローバルオブジェクトとは、 ``pylons`` からインポートされる
   'request', 'session', 'cache', 'response', 'tmpl_context',
   'config', 'url' オブジェクトのことを指します。

   これは、さらに Pylons アプリの外側 (コマンドラインスクリプト) で
   ドメインモデルを使用する能力に影響します。ドメインモデルは動作のため
   に Pylons グローバルに依存すべきではありません。また、ドメインモデル
   のクラスメソッドに Pylons グローバルを渡すべきではありません。モデル
   が必要とする単なるデータを含む変数を渡してください。


.. 2) Ensure all of your routes are explicit and named. All routes in Pyramid
..    must be named (uniquely), and there is no minimization available.

2) すべてのルーティングが明示的かつ名前を持っていることを確認してください。
   Pyramid のルーティングはすべて (ユニークに) 名前を持たなければならず、
   最小化は利用できません。


.. If your Pylons app is already set up like this, then your domain models will
.. most likely require no changes at all. Templates might need slight
.. alterations and controllers will need some changes.

あなたの Pylons アプリが既にこのようにセットアップされていれば、ドメイン
モデルはおそらく変更の必要は全くないでしょう。テンプレートは多少の変更
を必要とするかもしれません。また、コントローラーはいくつかの変更が必要
でしょう。


.. What is the difference between Pyramid and repoze.bfg?

Pyramid と repoze.bfg の違いは何ですか?
------------------------------------------------------

.. Pyramid *is* repoze.bfg, with:

Pyramid は以下の点を除き repoze.bfg *そのもの* です:


.. - a new name and a new set of import locations.

.. - a few added features to meet the expectations of Pylons 1.0 users.

- 新しい名前とインポート位置の新しいセット

- Pylons 1.0 ユーザの期待に合わせた少数の追加機能


.. Changes do need to be made to port existing repoze.bfg applications to
.. Pyramid. It is possible to automate most of the porting process. See
.. http://docs.pylonsproject.org/projects/pyramid/dev/tutorials/bfg/index.html 
.. for more information.

既存の repoze.bfg アプリケーションを Pyramid へ移植するためには、変更は
やはり必要ですが、ほとんどの移植プロセスを自動化することは可能です。詳細は
http://docs.pylonsproject.org/projects/pyramid/dev/tutorials/bfg/index.html
を参照してください。


.. As a reference, KARL, a very large repoze.bfg application (> 70K lines of
.. code), was ported in 30 minutes using the provided automation.

参考として、 KARL という非常に大きな (> 70K 行のコード) repoze.bfg
アプリケーションは、提供された自動化を使用して30分で移植されました。


.. repoze.bfg 1.3 (made November 1, 2010) will be its last major release. Minor
.. updates will be made for critical bug fixes (and so there may be a 1.3.1,
.. 1.3.2, etc), but new feature development will take place in Pyramid.

repoze.bfg 1.3 (2010年11月1日に作られました) は、その最後のメジャーリリース
になるでしょう。重大なバグフィックスのためにマイナーアップデートが作ら
れることはあります (そのため 1.3.1, 1.3.2 などがあるかもしれません)。
しかし、新機能開発は Pyramid の中で行われます。


.. Why is Pyramid any different than the hundred other Python web frameworks?

Pyramid は他の多くの Python ウェブフレームワークとはどこが異なっているのですか?
-------------------------------------------------------------------------------

.. It's small, documented, tested, extensible, fast, and friendly. Its core
.. contributors are long-time Python web framework developers with lots of
.. experience. It also has momentum based on the combination of its (previously
.. discrete) communities.

Pyramid の特長は、小さいこと、文書化されていること、テストされていること、
拡張可能なこと、速いこと、そしてフレンドリーなことです。そのコア貢献者は
多くの経験を持った長年の Python ウェブフレームワーク開発者です。
さらに、 (以前は別々だった) コミュニティの連携に基づく勢いがあります。


.. If you like meat-and-potatoes stuff like insanely great and up-to-date docs,
.. a magnificently-tested web framework, and a slim execution footprint, you'll
.. like Pyramid. If you're curious in fresh new ideas about extensibility, come
.. hang out with us and throw your two cents into the mix.

非常にしっかりした最新のドキュメント、素晴らしくテストされたウェブフレーム
ワーク、軽いフットプリントのような基本的な事柄
(meat-and-potatoes stuff) が好きなら、Pyramid が気に入るでしょう。
拡張性に関する最新のアイデアに興味があるなら、私たちと一緒に議論に参加
してください。


.. Is a port to Python 3 planned? When?

Python 3 への移行は計画されていますか? それはいつですか?
--------------------------------------------------------

.. Pyramid 1.3a1+ runs on Python 3.2 and better.  Earlier versions run on Python
.. 2 only.

Pyramid 1.3a1+ は Python 3.2 以上で動きます。それ以前のバージョンは
Python 2 でのみ動きます。


.. What do you mean by "Small"?

「小さい」とはどういう意味ですか?
---------------------------------

.. Pyramid has roughly 5 thousand lines of code that has the potential to be
.. executed at runtime. For more detail, see
.. http://docs.pylonsproject.org/projects/pyramid/dev/designdefense.html#pyramid-is-too-big.

Pyramid には、ランタイムに実行される可能性のあるコードがおよそ 5000 行
あります。より詳細については
http://docs.pylonsproject.org/projects/pyramid/dev/designdefense.html#pyramid-is-too-big
を参照してください。


.. What do you mean by "Documented"?

「文書化されている」とはどういう意味ですか?
-------------------------------------------

.. Literally *nothing* in Pyramid is undocumented. Every feature receives
.. documentation when (or very shortly after, but always before a release) it is
.. added, and every change and backwards incompatibility is documented in an
.. easily navigable "what's new" document between major releases. We require
.. direct contributors to treat changing documentation as a task that is as
.. important as changing code.

文字通り、 Pyramid の中で文書化されていないものは *何もありません* 。
すべての機能は追加された時 (あるいはその直後に、しかし常にリリースの前に)、
ドキュメンテーションを受け取ります。そしてすべての変更と後方非互換性は、
容易にナビゲーション可能なメジャーリリース間の "what's new" ドキュメント
の中で文書化されます。私たちは、ドキュメンテーションの変更をコードの変更
と同じくらい重要なタスクとして扱うことを直接の貢献者に要求します。


.. When renderered to PDF form, the Pyramid documentation consumes more
.. than 600 pages. Every "official" Pyramid add-on has a similar level
.. of documentation.

Pyramid ドキュメンテーションを PDF 形式でレンダリングすると 600 ページ
以上にもなります。すべての「公式」 Pyramid アドオンには同じ水準の
ドキュメンテーションがあります。


.. What do you mean by "Tested"?

「テストされている」とはどういう意味ですか?
-------------------------------------------

.. Every Pyramid release has 100% statement coverage via unit and
.. integration tests. There is, on average, more than 2 lines of test
.. code for each line of code that may be executed during a Pyramid
.. application.

すべての Pyramid リリースはユニットテストと結合テストによって 100% の
ステートメントカバレージを持ちます。 Pyramid アプリケーション中で実行
される可能性のある各命令行に対して、平均で2行以上のテストコードがあります。


.. What do you mean by "Extensible"?

「拡張可能」とはどういう意味ですか?
-----------------------------------

.. Pyramid has well-documented plug points which allow for integration of
.. third-party templating systems, session management systems, traversal
.. strategies, url generation, request generation, and generic rendering
.. (e.g. JSON, et. al).

Pyramid には十分に文書化されたプラグポイントがあり、サードパーティの
テンプレートシステム、セッション管理システム、トラバーサル戦略、 url 生成、
リクエスト生成、汎用的レンダリング (例えば JSON など) の統合が可能です。


.. Pyramid is also a great framework upon which to build *other*
.. frameworks -- like a content management system -- because it provides
.. a set of tools and patterns that make it possible to create extensible
.. applications, such as its well-documented configuration system.

Pyramid は、十分に文書化された設定システムのような拡張可能なアプリケー
ションの作成を可能にする1セットのツールおよびパターンを提供するため、
その上にさらに *他の* フレームワーク (コンテンツ管理システムのような) を
構築するための素晴らしいフレームワークでもあります。


.. What do you mean by "Fast"?

「速い」とはどういう意味ですか?
-------------------------------

.. Pyramid has an exceptionally shallow call stack, and routinely bests other
.. web frameworks in both speed and execution complexity. It has been
.. engineered with speed as a very concrete goal.

Pyramid は例外的に浅い呼び出しスタックを持ち、速度および実行複雑さの
両面で通常他のウェブフレームワークに勝ります。非常に具体的なゴールとし
て、 Pyramid は速度に関して改良されてきました。


.. What do you mean by "Stable"?

「安定」とはどういう意味ですか?
-------------------------------

.. The first release of Pyramid's predecessor, repoze.bfg, was made in
.. mid-2008. Over time, new releases of BFG have strived to retain backwards
.. compatibility with older releases. Applications written using repoze.bfg
.. 0.6.9 often work unchanged on repoze.bfg 1.3. We like our users, so we try
.. to not (within the boundaries of reason and good taste) break backwards
.. compatibility capriciously. When we do break backwards compatibility, the
.. steps to upgrade are always outlined in detail in the new release's "What's
.. New" document.

Pyramid の前身 (repoze.bfg) の最初のリリースは2008年中頃に行われました。
時間とともに、 BFG の新しいリリースは、古いリリースとの後方互換性を
維持することを努力してきました。repoze.bfg 0.6.9 を使用して書かれた
アプリケーションは、多くの場合変更なしで repoze.bfg 1.3 上で動きます。
私たちはユーザが好きです。そのため (理性と良識の範囲内で) 後方互換性を
気まぐれに壊さないように気をつけています。後方互換性を壊す場合、新しい
リリースの "What's New" ドキュメントにアップグレードのステップが常に詳細
に概説されます。

