---
layout: post
title: "Alpha5 released"
description: "Recent release of 1.0.0-alpha5"
author: Giovanni Bassi
categories: [release]
---
{% include JB/setup %}

We have released today our fifth alpha, version `1.0.0-alpha5`. This release
is targeting CTP 6 of Visual Studio 2015.

## Stats:

* 58 Analyzers in C#, 50 Code fixes
* 21 Analyzers in VB, 17 Code fixes
* 1186 tests
* 90% code coverage

## Known issues:

* [#293](https://github.com/code-cracker/code-cracker/issues/293) Incorrect diagnostic on NoPrivateReadonlyFieldAnalyzer (CC0074)

The above analyzer is disabled by default, you need to enable it to be able to use it.

As usual, you should go to Nuget ([C#](https://www.nuget.org/packages/codecracker.CSharp/1.0.0-alpha5), [VB](https://www.nuget.org/packages/codecracker.VisualBasic/1.0.0-alpha5)) to get the packages or download the extension on the Visual Studio Extensions Gallery ([C#](https://visualstudiogallery.msdn.microsoft.com/ab588981-91a5-478c-8e65-74d0ff450862), [VB](https://visualstudiogallery.msdn.microsoft.com/1a5f9551-e831-4812-abd0-ac48603fc2c1)).

For a list of what worked on see the [corresponding milestone](https://github.com/code-cracker/code-cracker/issues?q=milestone%3A1.0.0-alpha5).
