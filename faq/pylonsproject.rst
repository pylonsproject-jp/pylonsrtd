.. Pylons Project FAQ

Pylons プロジェクト FAQ
=======================

.. How does "The Pylons Project" relate to Pylons-the-web-framework?

「Pylons プロジェクト」は Pylons ウェブフレームワークとどのような関係がありますか?
-----------------------------------------------------------------------------------

.. The Pylons Project was founded by the people behind the Pylons web framework
.. to develop web application framework technology in Python. Rather than
.. focusing on a single web framework, the Pylons Project will develop a
.. collection of related technologies.

Pylons プロジェクトは、Python におけるウェブアプリケーションフレームワーク
技術を開発するために、Pylons ウェブフレームワークをバックアップする人々
によって設立されました。単一のウェブフレームワークにフォーカスするので
はなく、 Pylons プロジェクトは関連技術のコレクションを開発します。


.. The first package from the Pylons Project will be the Pyramid web framework.
.. Other packages will be added to the collection over time, including
.. higher-level components, applications and other frameworks which rely
.. on a particular persistence mechanism (Pyramid does not). Ben Bangert, the
.. Pylons web framework project lead, is already aiming to develop layers above
.. the core web framework.

Pylons プロジェクトから生まれる最初のパッケージは Pyramid ウェブフレーム
ワークになります。他のパッケージは、時間とともにコレクションに加えられる
でしょう。例えば、特別な永続化メカニズムに依存する (Pyramid はしません)、
より高いレベルのコンポーネント、アプリケーションおよび他のフレームワーク
が含まれます。 Ben Bangert (Pylons ウェブフレームワークプロジェクトの
リーダー) は、既に中核ウェブフレームワークの上のレイヤーを開発しようと
しています。


.. "The Pylons Project" was chosen to reflect the shared core ethos with the
.. Pylons web framework: an overall effort combining the best parts from
.. different projects.

「Pylons プロジェクト」は、 Pylons ウェブフレームワークと共有するコアと
なる価値観 (ethos) を反映するために選ばれました: 異なるプロジェクトから
の最良の部分を組み合わせる総合的な努力。


.. Why not just continue developing the Pylons 1.0 code-base?

なぜ単純に Pylons 1.0 コードベースの開発を続けなかったのですか?
---------------------------------------------------------------

.. Unfortunately, the Pylons 1.0 code-base has hit a point of diminishing returns
.. in flexibility and extendability. Due to the use of `sub-classing
.. <http://be.groovie.org/post/1347858988/why-extending-through-subclassing-a-frameworks>`_
.. , extensive, sometimes confusing, use of Stacked Object Proxy globals, and
.. issues with configuration organization, attempts to re-factor or re-design the
.. existing ``pylons`` core weren't working out.

不運にも、 Pylons 1.0 のコードベースは、柔軟性と拡張性の臨界点に達しま
した。 `サブクラス
<http://be.groovie.org/post/1347858988/why-extending-through-subclassing-a-frameworks>`_
の使用、広範囲で使用され、時に混乱の原因となる Stacked Object Proxy
グローバル変数の使用、そして設定構成の問題により、既存の ``Pylons``
コアに対するリファクタリングや再設計の試みは、うまくいきませんでした。

.. Over the course of several months, serious attempts were made to re-write
.. sections of the ``pylons`` core. After realizing that Pylons users would have
.. to put in extensive effort to port their existing applications, and that
.. Pylons 2 was looking more and more like ``repoze.bfg``, continued development
.. seemed a waste of development effort.

数か月もの間 Pylons コアセクションを書き直す本格的な試みがなされました。
Pylons ユーザが既存のアプリケーションを移植するのに大変な努力を注ぐ
必要があること、そして Pylons 2 がますます ``repoze.bfg`` と似てきたこと
を理解した後で、開発の継続は開発努力の浪費に見えました。


.. Ben Bangert started collaborating with Chris McDonough to bring the
.. ``repoze.bfg`` routes functionality up to par with the stand-alone
.. `Routes <http://routes.groovie.org>`_ project. Further development showed that
.. the two projects had much in common, and the developers shifted from building
.. Pylons 2 on top of BFG and towards a full merger.

Ben Bangert は、 Chris McDonough と共に ``repoze.bfg`` のルーティング機能
をスタンドアローンの `Routes <http://routes.groovie.org>`_ プロジェクトと
同等になるように協力を始めました。さらに開発を続けるうちに、2つのプロジェクトが
多くのことを共通に持っていることが分かってきました。そして、開発者達は
BFG 上に Pylons 2 を構築することから、完全合併の方向へとシフトしました。


.. What does the Pylons Project mean for Pylons-the-web-framework?

Pylons ウェブフレームワークにとって Pylons プロジェクトは何を意味しますか?
--------------------------------------------------------------------------

.. The Pylons web framework 1.x line will continue to be maintained, though not
.. enhanced. We will provide a package that allows Pylons 1.x applications and
.. Pyramid applications to run in the same interpreter. The future of
.. Pylon-style web application development is Pyramid.  See also
.. :ref:`should_i_port`.

Pylons ウェブフレームワーク 1.x ラインのメンテナンスは続けられます
(ただし改善はされません)。私たちは、 Pylons 1.x アプリケーションと
Pyramid アプリケーションを同一インタープリタ内で動作させることを可能にする
パッケージを提供するつもりです。 Pylons スタイルのウェブアプリケーション
開発の未来は Pyramid です。さらに :ref:`should_i_port` を参照してください。


.. What does the Pylons Project mean for repoze.bfg?

repoze.bfg にとって Pylons プロジェクトは何を意味しますか?
----------------------------------------------------------

.. The Pyramid codebase is derived almost entirely from ``repoze.bfg``. Some
.. changes have been made for the sake of Pylons compatibility, but those
.. used to development with ``repoze.bfg`` will find Pyramid very familiar. By
.. merging ``repoze.bfg`` with the philosophically-similar Pylons framework,
.. both gain a dramatically expanded audience.

Pyramid のコードベースは、ほとんど完全に ``repoze.bfg`` に由来します。
Pylons 互換性のためにいくつかの変更が行なわれましたが、
``repoze.bfg`` を使って開発していた人は、 Pyramid は非常に馴染みがある
と分かるでしょう。 ``repoze.bfg`` と、哲学的に類似した Pylons フレーム
ワークの合併により、両者は劇的に拡大した聴衆を獲得します。


.. What does this mean for the Repoze project?

Repoze プロジェクトにとってこれは何を意味しますか?
--------------------------------------------------

.. The Repoze project will continue to exist. Repoze will be able to regain its
.. original focus: bringing Zope technologies to WSGI. The popularity of BFG as
.. its own web framework hindered this goal.

Repoze プロジェクトは存在し続けます。 Repoze はそのオリジナルの焦点を
回復することができるでしょう: Zope 技術を WSGI にもたらすこと。 BFG それ
自身のウェブフレームワークとしての人気は、このゴールの妨げとなっていま
した。


.. Why should I care about The Pylons Project?

なぜ私は Pylons プロジェクトのことを気にしなければならないのですか?
-------------------------------------------------------------------

.. This really is a good question. We hope that people are attracted at
.. first by the spirit of the thing. It takes humility to sacrifice a
.. little sovereignty and work together. The opposite, forking or splintering
.. of projects, is much more common in the open source world.  We feel there is a
.. limited amount of oxygen in the space of "top-tier Python web frameworks" and
.. we don't do the Python community a service by over-crowding.

これは実際によい質問です。私たちは、人々が最初はものごとの精神によって
引きつけられることを期待しています。小さな主権を犠牲にし、ともに働くことは
謙遜を必要とします。その反対、プロジェクトの分岐あるいは分裂は、オープン
ソースの世界においてはるかにより一般的です。私たちはあたかも、「一流の
Python ウェブフレームワーク」の空間には限られた量の酸素があり、混雑
によっては Python コミュニティに利益をもたらさない、と感じています。


.. We are a group of project leaders with experience going back to the start of
.. Python web frameworks.  We aim to bring fresh ideas to classic problems.  We
.. hope to combine a lot of hard-earned maturity into the development of a secure
.. choice that developers and companies can bet on. Couple this with the humility
.. and irreverence gained by surviving every stupid decision that could be
.. imagined, and you've got a good basis for a team of developers.

私たちは Python ウェブフレームワークの初期からの経験を持つプロジェクト
リーダーのグループです。古典的問題に最新のアイデアを持ち込むつもりです。
私たちは、苦労して手に入れた多くの成熟を、開発者と会社が賭けることので
きる開発の安全な選択に組み合わせることを望んでいます。これを、想像できる
すべての愚かな決定から生存することにより獲得された謙遜および不遜
(irreverence) と結び付けてください。そうすれば、開発者チームのための
よい基礎を持っています。


.. Why is the Pylons Project different than other projects?

Pylons プロジェクトはなぜ他のプロジェクトと異なるのですか?
----------------------------------------------------------

.. Our mantra is: "Small, Documented, Tested, Extensible, Fast, Stable,
.. Friendly". Everything we do, from Pyramid to the batteries we want to develop
.. for later "batteries-included" projects, should retain these qualities.

私たちのマントラは次のとおりです: 「小さい、文書化された、拡張可能な、
テストされた、安定している、速い、フレンドリー」。 Pyramid に始まって
後の "batteries-included" プロジェクトで開発したいと思っているバッテリー
に至るまで、私たちが行うことはすべて、これらの特質を保持するべきです。


.. What do you mean by "Friendly"?

「フレンドリー」とはどういう意味ですか?
---------------------------------------

.. All of us have been around the block a few times. We've seen good
.. communities and bad communities, effective communities and
.. dysfunctional communities, arrogant ones and irreverant ones. We
.. pride ourselves on constructive listening, telling the truth even when
.. it makes us look bad, admitting when we're wrong, and attracting lots of
.. people who actually like to help.

私たちは皆、何度も経験を積んでいます。様々なコミュニティを見てきました。
良いコミュニティも悪いコミュニティも、活発なコミュニティも機能障害の
コミュニティも、傲慢なコミュニティも不遜なコミュニティも。私たちは、
建設的に聞くこと、真実を述べること(それによって自分たちが悪く見える場合
でも)、間違っていた場合にそれを認めること、そして実際に手助けが好きな
多くの人々を引きつけていることに誇りを持っています。


.. What does the Pylons Project mean for Zope and Plone?

Zope と Plone にとって Pylons プロジェクトは何を意味しますか?
-------------------------------------------------------------

.. The repoze.bfg people came from the world of Zope and Plone. Paul, for
.. example, was a co-founder of Zope and was at the first Python conference at
.. NIST. Zope was a tremendous success in the first cycle, with some truly
.. fresh ideas and a large commercial ecosystem. Plone continued that in a
.. second cycle, with an even larger ecosystem and an obvious, out-of-the-box
.. value proposition.

repoze.bfg の人々は Zope と Plone の世界から来ました。例えば、 Paul は
Zope の共同創立者で、 NIST の第1回 Python 会議にいました。 Zope は最初
のサイクルで大成功をおさめました。いくつかの本当に斬新な考えと、大きな
商用エコシステムを持っていました。 Plone は、さらに大きなエコシステム
と明白な out-of-the-box 価値命題を持ち、次のサイクルでそれに続きました。


.. Since then, the cycle has moved on and focus has shifted to other projects. We
.. love our Zope roots, the experience we gained helping establish the Zope
.. Foundation and the Plone Foundation, and consulting experience we have on
.. very large projects. But we want to take these experiences and start fresh
.. together with Pylons, one of the clear winners of the last cycle, to work on
.. something for the next cycle.

その時以来、サイクルは動き続けました。また、フォーカスは他のプロジェク
トに移りました。私たちは Zope のルーツ、Zope 財団および Plone 財団を設
立するのを支援することで得た経験、非常に大規模なプロジェクトに対するコ
ンサルティングの経験を愛しています。しかし、私たちはこれらの経験を活か
して最近のサイクルの明らかな勝者のうちの一つである Pylons と一緒に新た
にスタートをしたいと思っています。次のサイクルに関わるために。


.. If you're doing Zope and Plone and have a project that fits their bulls-eye,
.. use them. If you have something that could use those ideas for an alternate
.. need, keep an eye on what we're doing.

Zope と Plone を使っていて、それらの標的 (bulls-eye) に適合するプロジェクト
を持っている場合は、それを使用してください。もし、代替的なニーズに使え
るアイデアを持っている場合は、私たちが行っていることに注目していてくだ
さい。


.. How do I participate?

どのように参加すればよいですか?
-------------------------------

.. Join the Pylons-discuss and/or Pylons-dev maillists on google groups,
.. or join the #pylons IRC channel on freenode.net.

google groups の Pylons-discuss や Pylons-dev メーリングリストに参加す
るか、 freenode.net の #pylons IRC チャンネルに参加してください。


.. Where is the code?

コードはどこですか?
-------------------

https://github.com/Pylons

