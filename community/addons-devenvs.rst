.. Pyramid Add-On and Development Environment Guidelines

.. _addons_and_dev_envs:

Pyramid アドオンと開発環境のガイドライン
=====================================================

.. Along with the "100% test coverage, 100% documentation" requirements of all
.. packages that wish to be part of the Pylons Project, there are some more
.. specific guidelines for creating Pyramid add-ons and "development
.. environments". If you would like your add-on to be considered for inclusion
.. into the `Pyramid Add-Ons
.. <http://docs.pylonsproject.org/docs/pyramid.html#pyramid-add-ons>`_ or
.. `Development Environments
.. <http://docs.pylonsproject.org/docs/pyramid.html#pyramid-development-environment-documentation>`_
.. sections of the Pylons Project web site, you should attempt to adhere to
.. these guidelines.

Pylons プロジェクトの一部になろうとするすべてのパッケージにとっての
"100% テストカバレージ, 100% ドキュメンテーション" 要件に加えて、
Pyramid アドオンと「開発環境」を作成するための、より特殊ないくつかの
ガイドラインがあります。 Pylons プロジェクトウェブサイト上の `Pyramid
アドオン <http://docs.pylonsproject.org/docs/pyramid.html#pyramid-add-ons>`_
あるいは `開発環境
<http://docs.pylonsproject.org/docs/pyramid.html#pyramid-development-environment-documentation>`_
のセクションにあなたのアドオンを含めたいと考えるなら、これらのガイドラインを
厳守すべきです。


.. An "add-on" is a package which relies on Pyramid itself.  If your add-on does
.. not rely on Pyramid, it's not an add-on (just a library), and it will not be
.. listed on the add-ons page.

「アドオン」とは Pyramid 自体に依存するパッケージです。あなたの
アドオンが Pyramid に依存しない場合、それはアドオンではありません
(それは単なるライブラリです)。そして、それはアドオンページには掲載
されないでしょう。


.. A separate class of packages exist, which are not simply add-ons, but contain
.. opinions usually taking shape in the form of "Paster templates", which set up
.. a locally customized Pyramid application on behalf of users who like that set
.. of opinions.  These are referred to as "development environments".

異なるパッケージの種類が存在します。それは単なるアドオンではなく、通常
「Paster テンプレート」の形で実現する主張を含んでいます。それは、その
主張の集合を好むユーザの代わりに、ローカルにカスタマイズされた Pyramid
アプリケーションをセットアップします。これらは「開発環境」と呼ばれます。


.. Below, we talk about what makes a good add-on and what makes a good
.. development environment.

以下では、良いアドオンの作り方と良い開発環境の作り方について話します。


.. Contributing Addons

アドオンの投稿
----------------------

.. Pyramid provides a repository that allows everyone to share add-ons.

Pyramid は、誰でもアドオンを共有できるリポジトリを提供しています。


.. Please refer to the `community docs <https://github.com/pyramid-collective/pyramid-collective.github.com>`_

`コミュニティドキュメント
<https://github.com/pyramid-collective/pyramid-collective.github.com>`_
(英語) を参照してください。


.. Making Good Add-Ons

良いアドオンの作り方
--------------------

.. Add-on packages should be named ``pyramid_foo`` where ``foo`` describes the
.. functionality of the package.  For example, ``pyramid_mailer`` is a great
.. name for something that provides outbound mail service.  If the name you want
.. has already been taken, try to think of another, e.g. ``pyramid_mailout``.
.. If the functionality of the package cannot easily be described with one word,
.. or the name you want has already been taken and you can't think of another
.. name related to functionality, use a codename, e.g. ``pyramid_postoffice``.

アドオンパッケージは ``pyramid_foo`` のような名前にすべきです。ここで
``foo`` はパッケージの機能についての説明です。例えば
``pyramid_mailer`` はメールサービスを提供する何かに対する素晴らしい名前
です。希望する名前が既に使われている場合は別の名前を考えてみてください。
例えば ``pyramid_mailout`` です。パッケージの機能について1単語で簡潔に
記述できないか、希望する名前が既に使われていて、機能と関係する別名に
ついて考えつかない場合は、コード名を使用してください (例えば
``pyramid_postoffice``)。


.. If your package provides "configuration" functionality, you will be tempted
.. to create your own framework to do the configuration, ala:

あなたのパッケージが「設定」機能を提供している場合、設定を行う独自の
フレームワークを作成する誘惑にかられるでしょう:


::

    class MyConfigurationExtender(object):
        def __init__(self, config):
            self.config = config

        def doit(self, a, b):
            self.config.somedirective(a, b)

    extender = MyConfigurationExtender(config)
    extender.doit(1, 2)


.. Instead of doing so, use the ``add_directive`` method of a configurator as
.. documented at
.. http://docs.pylonsproject.org/projects/pyramid/1.0/narr/advconfig.html#adding-methods-to-the-configurator-via-add-directive

そうする代わりに、
http://docs.pylonsproject.org/projects/pyramid/1.0/narr/advconfig.html#adding-methods-to-the-configurator-via-add-directive
で文書化されるように configurator の ``add_directive`` メソッドを使用し
てください。


::

    def doit(config, a, b):
        config.somedirective(a, b)

    config.add_directive('doit', doit)


.. If your add-on wants to provide some default behavior, provide an
.. ``includeme`` method in your add-on's ``__init__.py``, so
.. ``config.include('pyramid_foo')`` will pick it up.  See `Including
.. Configuration From External Sources
.. <http://docs.pylonsproject.org/projects/pyramid/1.0/narr/advconfig.html#including-configuration-from-external-sources>`_.

あなたのアドオンが何らかのデフォルトの振る舞いを提供したい場合、
アドオンの ``__init__.py`` の中で ``includeme`` メソッドを提供してください。
そうすれば、 ``config.include('pyramid_foo')`` はそれを探し出します。
`外部ソースからの設定インクルード
<http://docs.pylonsproject.org/projects/pyramid/1.0/narr/advconfig.html#including-configuration-from-external-sources>`_
を参照してください。


.. Making Good Development Environments

良い開発環境の作り方
------------------------------------

.. If you are creating a higher-level framework atop the Pyramid codebase that
.. contains "template" code (skeleton code rendered by a user via ``paster
.. create -t foo``), for the purposes of uniformity with other "development
.. environment" packages, we offer some guidelines below.

Pyramid コードベース上に高レベルのフレームワークを作成していて、
それが他の「開発環境」パッケージとの画一化のために「テンプレート」
コード (``paster create -t foo`` を通してユーザによって生成される
スケルトンコード) を含む場合、以下にいくつかのガイドラインを提示します。


.. * It should not be named with a ``pyramid_`` prefix.  For example, instead
..   of ``pyramid_foo`` it should just be named ``foo``.  The ``pryamid_``
..   prefix is best used for add-ons that plug some discrete functionality in
..   to Pyramid, not for code that simply uses Pyramid as a base for a
..   separate framework with its own "opinions".

* その名前は ``pyramid_`` 接頭辞を付けるべきではありません。例えば、
  ``pyramid_foo`` の代わりに単に ``foo`` と命名すべきです。
  ``pryamid_`` 接頭辞は Pyramid に特定の機能を追加するアドオンに対して
  使用されるのが適切で、それ自身の「主張」を持った個別のフレームワークの
  基礎として単に Pyramid を使用するコードに対してではありません。


.. * It should be possible to subsequently run ``paster serve
..   development.ini`` to start any ``paster create`` -rendered application.

* ``paster create`` によって生成されたどんなアプリケーションであっても、
  開始するためにその後で ``paster serve development.ini`` を実行することが
  できるべきです。


.. * ``development.ini`` should ensure that the ``pyramid_debugtoolbar``
..   package is active.

* ``development.ini`` では、 ``pyramid_debugtoolbar`` パッケージが
  有効化されているべきです。


.. * There should be a ``production.ini`` file that mirrors
..   ``development.ini`` but disincludes ``pyramid_debugtoolbar``.

* ``development.ini`` とよく似た、しかし ``pyramid_debugtoolbar`` を
  インクルードしない ``production.ini`` ファイルが存在しているべきです。


.. * The ``[server:main]`` section of both ``production.ini`` and
..   ``development.ini`` should start ``paste.httpserver`` on port 6543, ala:

* ``production.ini`` と ``development.ini`` の両方の ``[server:main]``
  セクションは、ポート 6543 上で ``paste.httpserver`` を開始すべきです:


  ::

    [server:main]
    use = egg:Paste#http
    host = 0.0.0.0
    port = 6543


.. * ``development.ini`` and ``production.ini`` should configure logging (see
..   any existing template).

* ``development.ini`` と ``production.ini`` は logging を設定すべきです
  (既存のいずれかのテンプレートを参照)。


.. * It should be possible to use ``paster pshell development.ini`` to visit
..   an interactive shell using a ``paster create``-rendered application.

* ``paster create`` によって生成されたアプリケーションで、 ``paster
  pshell development.ini`` を使用して対話型シェルを起動できるべきです。


.. * Startup/configuration code should live in a function named ``main``
..   within the ``__init__.py`` of the main package of the rendered template.
..   This function should be linked within a ``paster.app_factory`` section in
..   the template's ``setup.py`` like so:

* 開始/設定コードは、生成されたテンプレートの主なパッケージの
  ``__init__.py`` の中の ``main`` という名の関数に置かれるべきです。
  この関数はテンプレートの ``setup.py`` の中の
  ``paster.app_factory`` セクション内からリンクされるべきです。次のように:


  ::

    entry_points = """\
    [paste.app_factory]
    main = {{package}}:main
    """


  .. This makes it possible for users to use the following pattern
  .. (particularly ``use = egg:{{project}}``):

  これは、ユーザが次のパターン (特に ``use = egg:{{project}}``) を使用
  できるようにします:


  ::

    [app:{{project}}]
    use = egg:{{project}}
    reload_templates = true
    .. other config ..


.. * WSGI middleware configuration should not be inlined into imperative code
..   within the ``main`` function.  Instead, middleware should be configured
..   within a ``[pipeline:main]`` section in the configuration file, e.g.:

* WSGI ミドルウェアの設定は ``main`` 関数内の命令的なコードにインラインで
  埋め込まれるべきではありません。代わりに、ミドルウェアは設定ファイル中の
  ``[pipeline:main]`` セクション内で設定されるべきです。例えば:


  ::

    [pipeline:main]
    pipeline =
        egg:WebError#evalerror
        tm
        {{project}}
