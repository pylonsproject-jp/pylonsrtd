Pyramid FAQ
===========

.. What is the difference between Pyramid and Pylons-the-web-framework?

Pyramid と Pylons ウェブフレームワークの違いは何ですか?
--------------------------------------------------------------------

.. Pyramid is a new web framework. It doesn't "share any DNA" with Pylons 1.0.
.. The Pylons 1.x web framework will be maintained indefinitely by The Pylons
.. Project.  There may be a Pylons 1.1 release aimed at easing a transition to
.. Pyramid eventually.  However, as of the release of Pyramid 1.0 on January 31,
.. 2011, the Pylons web framework has effectively been shifted into "legacy"
.. status.

Pyramid は新しいウェブフレームワークです。それは Pylons 1.0と「DNA を
共有しません」。
Pylons 1.x ウェブフレームワークは Pylons プロジェクトによって無期限に
メンテナンスされます。いずれは Pyramid への容易な移行を目的とした Pylons
1.1 のリリースがあるかもしれません。しかし、2011年1月31日の
Pyramid 1.0 のリリース時点で、 Pylons ウェブフレームワークは事実上の
「レガシー」ステータスに変更されました。


.. Existing Pylons 1.0 code will be able to run "inside" Pyramid via the use
.. of a fallback handler that sends requests to an existing Pylons application.
.. When run within the fallback handler, Pylons 1.0 applications may be ported
.. piecemeal to Pyramid. As each bit of functionality is translated into Pyramid
.. code, the fallback application will continue to handle yet-to-be ported
.. functionality.

既存の Pylons 1.0 コードは、 Pyramid の「内部で」
fallback ハンドラを使って既存の Pylons アプリケーションにリクエストを
送ることで実行できるでしょう。fallback ハンドラ内で実行される場合、
Pylons 1.0 アプリケーションは Pyramid に断片的に移植されるかもしれません。
個々のそれぞれの機能が Pyramid コードに翻訳される間、 fallback アプリ
ケーションはまだ移植されていない機能性を扱い続けるでしょう。


.. Should I port my Pylons 1.0 project to Pyramid?

.. _should_i_port:

私は Pylons 1.0プロジェクトを Pyramid に移植すべきですか?
---------------------------------------------------------

.. Pyramid 1.0 was released on Jan 31, 2011. 

Pyramid 1.0 は2011年1月31日にリリースされました。


.. A draft release of a Pylons-to-Pyramid migration guide is available at
.. https://bytebucket.org/sluggo/pyramid-docs/wiki/html/migration.html and a
.. Pyramid guide for users of Pylons is available at
.. http://docs.pylonsproject.org/projects/pyramid_cookbook/en/latest/pylons/index.html


Pylons から Pyramid への移行ガイドの草案のリリースは
https://bytebucket.org/sluggo/pyramid-docs/wiki/html/migration.html で
利用可能です。
Pylons ユーザのための Pyramid ガイドは
http://docs.pylonsproject.org/projects/pyramid_cookbook/en/latest/pylons/index.html
で利用可能です。


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
http://pylons-ja.readthedocs.org/projects/pyramid-doc-ja/en/doc-ja/tutorials/bfg/index.html
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

.. See http://docs.pylonsproject.org/projects/pyramid/en/1.3-branch/narr/introduction.html#what-makes-pyramid-unique

http://pylons-ja.readthedocs.org/projects/pyramid-doc-ja/en/doc-ja/narr/introduction.html#what-makes-pyramid-unique
を見てください。

.. Is a port to Python 3 planned? When?

Python 3 への移行は計画されていますか? それはいつですか?
--------------------------------------------------------

.. Pyramid 1.3a1+ runs on Python 3.2 and better.  Earlier versions run on Python
.. 2 only.

Pyramid 1.3a1+ は Python 3.2 以上で動きます。それ以前のバージョンは
Python 2 でのみ動きます。

