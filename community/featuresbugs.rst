.. Adding Features and Dealing with Bugs

.. _featuresbugs:

機能の追加とバグの取り扱い
=====================================

.. Unfortunately no code is perfect, sometimes bugs will occur, or a feature is
.. desired. When reporting bugs, being as thorough as possible, and including
.. additional details makes a huge improvement. No one should feel discouraged in
.. attempting to fix a bug or suggest a feature that might be missing.

残念ながら、完全なコードというものはありません。バグが見つかることも
あれば、新しい機能が必要とされることもあります。バグを報告する場合、
できるだけ完全で、追加の詳細を含んでいることは大きな改善を生みます。
バグを直そうとしたり、足りない機能を提案しようとすることを躊躇する
必要はありません。


.. Reporting a Bug

バグの報告
---------------

.. Bugs with a Pylons Project package should be reported to the individual issue
.. tracker on GitHub_. First, some general guidelines on reporting a bug.

Pylons プロジェクトのパッケージに関するバグは、 GitHub_ 上の個別の課題
トラッカーに報告してください。最初に、バグ報告についてのいくつかの
一般的なガイドラインです。


.. 1) Create a GitHub account

1) GitHub アカウントを作る
!!!!!!!!!!!!!!!!!!!!!!!!!!


.. You will need to  `create a GitHub account <https://github.com/signup/free>`_
.. account to report and correspond regarding the bug you are reporting.

バグを報告したり、報告したバグに関してやり取りするために、 `GitHub
アカウントを作成する <https://github.com/signup/free>`_ 必要があるでしょう。


.. 2) Determine if your bug is really a bug

2) 報告しようとしたバグが本当にバグかどうか確認する
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

.. You should not file a bug if you are:

以下のような場合、バグを登録すべきではありません:


.. * **Proposing features and ideas**: you should follow the policy below on 
..   :ref:`proposing_features`.
.. * **Requesting support**: there are a variety of ways to request support,
..   from the `mailing list <http://groups.google.com/group/pylons-devel>`_, 
..   `Stackoverflow <http://stackoverflow.com/questions/tagged/pylons>`_, or IRC
..   at ``#pylons`` on `FreeNode <http://freenode.net/>`_.

* **機能やアイデアの提案**: :ref:`proposing_features` に載せられたポリシーに
  従ってください。
* **サポートの要請**: サポートを要請する様々な方法があります。
  `メーリングリスト <http://groups.google.com/group/pylons-devel>`_ 、
  `Stackoverflow <http://stackoverflow.com/questions/tagged/pylons>`_ 、
  あるいは `FreeNode <http://freenode.net/>`_ の ``#pylons`` IRC です。


.. 3) Make sure your bug hasn't already been reported

3) バグがすでに報告されていないかどうか確認する
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

.. Search through the appropriate Issue tracker on GitHub_ (see
.. :ref:`issue_trackers` below). If a bug like yours was found, check to see
.. if you have new information that could be reported to help the developers fix
.. it.

GitHub_ 上の適切な課題トラッカーを検索してください (下記の
:ref:`issue_trackers` を参照)。あなたのバグと似たようなバグが見つかった
場合、開発者がそのバグを修正する手助けをするために新しい情報を報告
できないかチェックしてください。


.. 4) Collect information about the bug

4) バグに関する情報を集める
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

.. To have the best chance of having a bug fixed, we need to be able to easily
.. replicate the conditions that caused it. Most of the time this information
.. will be from a Python traceback message, though some bugs might be in design,
.. spelling, or other errors on the website/docs/code.

バグを直せる可能性を最大化するために、そのバグを引き起こした条件を容易
に再現できる必要があります。通常この情報は Python のトレースバック
メッセージから得ることができますが、いくつかのバグは設計上のものや
スペリング、あるいはウェブサイト/ドキュメント/コード上の他の誤りである
場合もあります。


.. If the error is from a Python traceback (`see a Python traceback 
.. <http://pastebin.com/TyaPKpt9>`_), include it in the bug report being filed.
.. We will also need to know what platform you're running (Windows, OSX, Linux),
.. and which Python interpreter you're running if its not CPython (e.g. Jython, 
.. Google App Engine).

エラーが Python トレースバックから生じた場合 (`Python トレースバックの例
<http://pastebin.com/TyaPKpt9>`_ を参照)、登録しようとするバグレポートに
それを含めてください。さらに、あなたがどのプラットフォームで実行して
いるか (Windows, OSX, Linux) 、そして (CPython ではない場合) どの
Python インタープリタで実行しているか (例えば Jython, Google App Engine)
を知らせる必要があるでしょう。


.. 5) Submit the bug

5) バグを登録する
!!!!!!!!!!!!!!!!!

.. By default GitHub_ will email you to let you know when new comments have been
.. made on your bug. In the event you've turned this feature off, you should
.. check back on occasion to ensure you don't miss any questions a developer
.. trying to fix the bug might ask.

デフォルトでは、 GitHub_ はあなたのバグに対して新しいコメントが付けられた
ときにはそれを知らせるためにメールを送ります。この機能をオフにしている
場合は、バグを直そうとした開発者からの質問を見逃さないように、時々確認
するようにしてください。


.. Issue Trackers

.. _issue_trackers:

課題トラッカー
--------------

.. Bugs are reported and tracked on GitHub_'s issue trackers. Each Pylons Project
.. has their own:

バグは GitHub_ の課題トラッカー上に報告され追跡されます。 Pylons
プロジェクトはそれぞれ固有の課題トラッカーを持っています:


.. * `pyramid issue tracker <https://github.com/Pylons/pyramid/issues>`_
.. * `pyramid_beaker issue tracker <https://github.com/Pylons/pyramid_beaker/issues>`_
.. * `pyramid_xmlrpc issue tracker <https://github.com/Pylons/pyramid_xmlrpc/issues>`_
.. * `pyramid_jinja2 issue tracker <https://github.com/Pylons/pyramid_jinja2/issues>`_
.. * `Pylons Project issue tracker <https://github.com/Pylons/pylonshq/issues>`_ (All
..   bugs with the pylonshq.com/pylonsproject.org website should be reported here.)

* `pyramid 課題トラッカー <https://github.com/Pylons/pyramid/issues>`_
* `pyramid_beaker 課題トラッカー <https://github.com/Pylons/pyramid_beaker/issues>`_
* `pyramid_xmlrpc 課題トラッカー <https://github.com/Pylons/pyramid_xmlrpc/issues>`_
* `pyramid_jinja2 課題トラッカー <https://github.com/Pylons/pyramid_jinja2/issues>`_
* `Pylons プロジェクト課題トラッカー <https://github.com/Pylons/pylonshq/issues>`_
  (pylonshq.com/pylonsproject.org ウェブサイトに関するすべてのバグはここに報告してください)


.. Working on Code

コード上での作業
------------------

.. To fix bugs or add features to a package managed by the Pylons project, an
.. account on GitHub_ is required. All Pylons Project packages are under the
.. `Pylons organization on github <http://github.com/Pylons>`_.

Pylons プロジェクトによって管理されているパッケージに対してバグを直したり
機能を加えるために、 GitHub_ 上のアカウントが必要です。すべての
Pylons プロジェクトのパッケージは `github 上の Pylons organization
<http://github.com/Pylons>`_ にあります。


.. The general practice for contributing new features and bug fixes is to `fork
.. the package <http://help.github.com/forking/>`_ in question and make changes
.. there. Then send a `pull request <http://help.github.com/pull-requests/>`_.
.. This allows the developers to review the patches and accept them, or comment
.. on what needs to be addressed before the change sets can be accepted.

新機能やバグ修正を貢献する一般的なやり方は、問題となっている `パッケージを
fork <http://help.github.com/forking/>`_ して、そこに変更を加えることです。
次に `pull request <http://help.github.com/pull-requests/>`_ を
送ってください。これによって、開発者がパッチをレビューして、それらを
受け入れるか、あるいは変更セットが受け入れられる前に対処すべきことについて
コメントすることが可能になります。


.. Proposing Features and Ideas

.. _proposing_features:

機能やアイデアの提案
----------------------------

.. When proposing an idea that isn't just a fix or a plain bug report, the best
.. place to do so is on the `Pylons-Devel maillist
.. <http://groups.google.com/group/pylons-devel>`_ .  Another reasonable venue
.. is IRC at ``#pylons`` on `FreeNode <http://freenode.net/>`_.

単なる修正や通常のバグレポートでないアイデアを提案する場合、それを行う
最良の場所は `Pylons-Devel メーリングリスト
<http://groups.google.com/group/pylons-devel>`_ です。他の適切な場所は
`FreeNode <http://freenode.net/>`_ 上の ``#pylons`` IRC です。


.. _GitHub: http://github.com/
