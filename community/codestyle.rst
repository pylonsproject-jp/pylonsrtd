.. _codestyle:

.. Coding Style and Standards

コーディングスタイルと標準
==========================

.. Projects under the Pylons Project scope have rigorous standards for both
.. coding style, testing, and documentation.

Pylons プロジェクト配下のプロジェクトは、コーディングスタイル、テスト、
およびドキュメンテーションに関する厳格な標準を持っています。


.. Documentation Styling

ドキュメンテーションスタイル
----------------------------

.. Every project needs to have documentation built with `Sphinx
.. <http://sphinx.pocoo.org/>`_ using the `Pylons Sphinx Theme
.. <http://github.com/Pylons/pylons_sphinx_theme>`_ for consistency.

すべてのプロジェクトは `Sphinx <http://sphinx.pocoo.org/>`_ を用いて
ドキュメンテーションを構築する必要があり、一貫性のため `Pylons Sphinx
Theme <http://github.com/Pylons/pylons_sphinx_theme>`_ を使用します。


.. To build documentation using the Pylons theme, add the following boilerplate
.. near the top of your Sphinx ``conf.py``:

Pylons テーマを使用してドキュメンテーションを構築するためには、
Sphinx の ``conf.py`` の先頭付近に次の定型文を加えてください:


.. code-block:: python

    import sys, os

    # Add and use Pylons theme
    # protect against dumb importers
    if 'sphinx-build' in ' '.join(sys.argv): 
        from subprocess import call, Popen, PIPE

        p = Popen('which git', shell=True, stdout=PIPE)
        git = p.stdout.read().strip()
        cwd = os.getcwd()
        _themes = os.path.join(cwd, '_themes')

        if not os.path.isdir(_themes):
            call([git, 
                  'clone', 
                  'git://github.com/Pylons/pylons_sphinx_theme.git',
                   '_themes'])
        else:
            os.chdir(_themes)
            call([git, 'checkout', 'master'])
            call([git, 'pull'])
            os.chdir(cwd)

        sys.path.append(os.path.abspath('_themes'))

        parent = os.path.dirname(os.path.dirname(__file__))
        sys.path.append(os.path.abspath(parent))
        os.chdir(parent)

    html_theme_path = ['_themes']
    html_theme = 'pylons'
    html_theme_options = {github_url:'https://github.com/Pylons/yourprojname'}


.. Then cause the resulting ``_themes`` directory to be ignored in your version
.. control system.

そして、この結果作られる ``_themes`` ディレクトリをバージョン管理システムの
中で無視するようにしてください。


.. This will allow you to build the project utilizing the theme, and when
.. updates are made to the theme the changes to the theme will be pulled
.. automatically when your docs are rebuilt.

これによってテーマを利用するプロジェクトを構築することが可能になります。
また、テーマに更新があった場合、ドキュメントが再構築される時にテーマの
変更が自動的に取得されます。


.. PDF output

PDF 出力
~~~~~~~~~~

.. Set the following values for ``latex_documents`` in ``docs/conf.py``:

``docs/conf.py`` の中で ``latex_documents`` に以下の値を設定してください:


::

    # Grouping the document tree into LaTeX files. List of tuples
    # (source start file, target name, title, author, document class [howto/manual]).
    latex_documents = [
    ('latexindex', 'pyramid_<project name>.tex',
    'Pyramid\_<project name>',
    'Author', 'manual'),
        ]


.. It is important to use \\_ to escape the underscore in the document
.. title to prevent a failure in LaTeX.

LaTeX でのエラーを防ぐため、 \\_ を使用してドキュメントタイトル中の下線
をエスケープすることは重要です。


.. Comment the following line:

以下の行をコメントにしてください:


::

    #latex_logo = '_static/pylons_small.png'


.. Copy the folder ``pyramid/docs/_static`` (contains two .png files) and the
.. file ``pyramid/docs/convert_images.sh`` into your ``docs/`` folder.

フォルダ ``pyramid/docs/_static`` (2つの .png ファイルを含む) と、ファイル
``pyramid/docs/convert_images.sh`` を ``docs/`` フォルダにコピーしてください。


.. ePub output

ePub 出力
~~~~~~~~~~~

.. Make sure you have the following value for ``epub_exclude_files``
.. in ``docs/conf.py``:

``docs/conf.py`` の中で ``epub_exclude_files`` に以下の値を必ず設定してください:


::

    # A list of files that should not be packed into the epub file.
    epub_exclude_files = ['_static/opensearch.xml', '_static/doctools.js',
        '_static/jquery.js', '_static/searchtools.js', '_static/underscore.js',
        '_static/basic.css', 'search.html', '_static/websupport.js' ]


.. New Feature Code Requirements

新機能コード要件
-----------------------------

.. In order to add a feature to any Pylons Project package:

Pylons プロジェクトのすべてのパッケージで、機能を加えるために:


.. - The feature must be documented in both the API and narrative documentation
..   (in ``docs/``).

- その機能を (``docs/`` にある) API ドキュメンテーションと narrative
  ドキュメンテーションの両方で文書化しなければなりません。


.. - The feature must work fully on the CPython 2.6 and 2.7 on both UNIX and
..   Windows and PyPy on UNIX.  Most Pylons Project packages now either run or
..   want to run on Python 3; if you're working on such a package and it already
..   runs on Python 3.2, it must continue to run under Python 3.2 after your
..   change.  Some packages explicitly list Python 2.4 or Python 2.5 support;
..   such support should be maintained if it exists.  The ``tox.ini`` of most
..   Pylons Project packages indicates which versions the package is tested
..   under.

- その機能は、 UNIX と Windows 上の CPython 2.6 と 2.7 、および UNIX
  上の PyPy で完全に動作しなければなりません。ほとんどの Pylons
  プロジェクトパッケージは、今や Python 3 上で動作するか、または動作
  することが期待されています; あなたがそのようなパッケージに取り組んでおり、
  それが既に Python 3.2 上で動作するなら、あなたの変更の後でも
  Python 3.2 の下で動作し続けなければなりません。いくつかのパッケージは
  明示的に Python 2.4 あるいは Python 2.5 サポートをリストしています;
  そのようなサポートが存在する場合、それを維持すべきです。ほとんどの
  Pylons プロジェクトパッケージの ``tox.ini`` は、どのバージョンの下で
  テストされるか示します。


.. - The feature must not depend on any particular persistence layer (filesystem,
..   SQL, etc).

- その機能はどのような特別な永続化層 (ファイルシステム、 SQL など) にも依存
  してはなりません。


.. - The feature must not add unnecessary dependencies (where "unnecessary" is of
..   course subjective, but new dependencies should be discussed).

- その機能は不必要な依存性を加えてはなりません (もちろん「不必要な」
  というのは主観的なものですが、新しい依存性は議論を要します)。


.. The above requirements are relaxed for paster template dependencies. If a
.. paster template has an install-time dependency on something that doesn't work
.. on a particular platform, that caveat should be spelled out clearly in *its*
.. documentation (within its ``docs/`` directory).

上記の必要条件は paster テンプレート依存性について緩められます。
paster テンプレートが特定のプラットフォーム上で動作しないインストール時
の依存性を持っている場合、 *その* (``docs/`` ディレクトリ内にある)
ドキュメンテーションの中ではっきりと警告が書かれていなければなりません


.. To determine if a feature should be added to an existing package, or deserves
.. a package of its own, feel free to talk to one of the developer teams.

ある機能を既存のパッケージに加えるべきか、それとも単独のパッケージと
するのが相応しいかどうかを判断するために、遠慮なく開発者チームの誰かに
話しかけてください。


.. Documentation Coverage

ドキュメンテーションカバレージ
------------------------------

.. If you fix a bug, and the bug requires an API or behavior modification, all
.. documentation in the package which references that API or behavior must change
.. to reflect the bug fix, ideally in the same commit that fixes the bug or adds
.. the feature.

あなたがバグを直し、そのバグが API または振る舞いの修正を必要とする場合、
その API または振る舞いを参照するパッケージ中のすべてのドキュメンテーション
はバグフィックスを反映して変更しなければなりません。バグを修正する、または
機能を追加するのと同じコミットの中で行われるのが理想的です。


Change Log
----------

.. Feature additions and bugfixes must be added to the ``CHANGES.txt`` file in
.. the prevailing style. Changelog entries should be long and descriptive, not
.. cryptic. Other developers should be able to know what your changelog entry
.. means.

機能追加とバグフィックスは、一般的なスタイルで ``CHANGES.txt`` ファイル
に加えられなければなりません。 Changelog エントリは、暗号的でなく長文で
記述的であるべきです。他の開発者があなたの changelog エントリの意味を
理解できなければなりません。


.. Test Coverage

テストカバレージ
----------------

.. The codebase *must* have 100% test statement coverage after each commit. You
.. can test coverage via ``python setup.py nosetests --with-coverage`` (requires
.. the ``nose`` and ``coverage`` packages).

コードベースは各コミットの後で 100% のテスト行カバレージを持って
いなければなりません。 ``python setup.py nosetests --with-coverage``
によってカバレージをテストすることができます (``nose`` と ``coverage``
パッケージが必要です)。

.. Testing code in a consistent manner can be difficult, to help developers
.. learn our style ("dogma") of testing we've made available a set of testing
.. notes at :ref:`testing_guidelines`.

一貫したやり方でコードをテストすることは困難かもしれません。テストに
関する私たちのスタイル (「ドグマ(教義)」) を開発者が学習するのを助ける
ため、テストに関する諸注意を :ref:`testing_guidelines` に用意しています。


.. Coding Style

コーディングスタイル
--------------------

.. All Python code should follow `PEP-8
.. <http://www.python.org/dev/peps/pep-0008/>`_ style guide-lines. Whitespace
.. rules are relaxed and it is not necessary to put 2 newlines between classes
.. (though that's just fine if you do). 80-column lines, in particular, are
.. mandatory.

すべての Python コードは `PEP-8
<http://www.python.org/dev/peps/pep-0008/>`_ スタイルガイドラインに
従ってください。空白に関するルールは緩められ、クラス間に2行の空行を
置くことは必須ではありません (そうすることはまったく問題ありませんが)。
特に 1行 80 カラムは必ず守ってください。


.. * Single-line imports

* 単一行のインポート


  .. Do this:

  このようにしてください:


  .. code-block:: python
    :linenos:
    
    import os
    import sys


  .. Do **not** do this:

  このように **しないで** ください:

  .. code-block:: python
    :linenos:
  
    import os, sys


  .. Importing a single item per line makes it easier to read patches and commit
  .. diffs.

  1行につき1つインポートすることは、パッチを読んだり差分をコミットする
  ことをより簡単にします。


  .. If you need to import lots of names from a single package, use:

  単一のパッケージから数多くの名前をインポートする必要がある場合は、次の
  書式を使用してください:


  .. code-block:: python

     from thepackage import (
         foo,
         bar,
         baz,
         )


.. * Import Order

* インポート順


  .. Imports should be ordered by their origin. Names should be imported in
  .. this order:

  インポートはその起源の順で並べなければなりません。名前は以下の順で
  インポートすべきです:


  .. #. Python standard library

  .. #. Third party packages

  .. #. Other modules from the current package


  #. Python 標準ライブラリ

  #. サードパーティパッケージ

  #. 現在のパッケージの他のモジュール


.. * Wildcard Imports

* ワイルドカードインポート


  .. Do *not* import all the names from a package (e.g. never use ``from package
  .. import *``), import just the ones that are needed. Single-line imports
  .. applies here as well, each name from the other package should be imported
  .. on its own line.

  あるパッケージからすべての名前をインポートしては *なりません* (例えば
  ``from package import *`` を使用しないでください)。必要なものだけを
  インポートしてください。ここで、単一行インポートも同様に適用されます。
  別のパッケージからのそれぞれの名前は、別々の行でインポートしなければ
  なりません。


.. * No mutable objects as default arguments

* デフォルト引数として変更可能オブジェクトを使用しない


  .. Remember that since Python only parses the default argument for a
  .. function/method just once, they cannot be safely used as default arguments.

  Python は関数/メソッドのデフォルト引数をたった一度だけ解析するので、
  それらをデフォルト引数として安全に使用できないということを忘れないで
  ください。


  .. Do **not** do this:

  このように **しないで** ください:


  .. code-block:: python
    :linenos:
    
    def somefunc(default={}):
        if default.get(...):
            ...


  .. Either of these is fine:

  これらのどちらかであれば構いません:


  .. code-block:: python
    :linenos:
    
    def somefunc(default=None):
        default = default or {}

  .. code-block:: python
    :linenos:
    
    def somefunc(default=None):
        if default is None:
            default = {}


.. * Causing others to need to rely on import-time side effects is highly
..   discouraged.

* 人々がインポート時の副作用に依存せざるをえないようにすることは極めて
  推奨されません。


  .. Creating code that requires someone to import a module or package for the
  .. singular purpose of causing some module-scoped code to be run is highly
  .. discouraged.  It is only permissible to add such code to the core in paster
  .. templates, where it might be required by some other framework
  .. (e.g. SQLAlchemy "declarative base" classes must be imported to be
  .. registered).

  何らかのモジュールスコープのコードを実行するという単一の目的のためだけに
  モジュールやパッケージをインポートすることを誰かに要求するコードの作成は、
  極めて推奨されません。コアの中で paster テンプレートにそのようなコードを
  追加することだけは許されています。そうしたことは、他のフレームワークに
  よって必要とされる場合があります (例えば、 SQLAlchemy "declarative
  base" クラスが登録されるためにはインポートされる必要があります)。
