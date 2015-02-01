---
layout: post
title: "Alpha3 released"
description: "Recent release of 1.0.0-alpha3"
author: Giovanni Bassi
categories: [release]
---
{% include JB/setup %}

We have released yesterday our third alpha, version `1.0.0-alpha3`. This is the first
release that includes Visual Basic analyzers. CodeCracker has also been updated to
support Visual Studio 2015 CTP 5 and the `1.0.0.0-beta2` Roslyn APIs.

## Stats:

* 52 total Analyzers in C# (17 new)
* 8 total Analyzers in VB (all new)
* 724 tests
* 89% code coverage

## New analyzers/code fixes:

### C&#35;

#### Performance

* StringBuilderInLoop

#### Refactoring

* AllowMembersOrdering StyleCop
* ParameterRefactory
* StringType

#### Reliability

* UseConfigureAwaitFalse

#### Style

* ConvertLambdaExpressionToMethodGroup
* InterfaceName
* RemoveTrailingWhitespace
* TaskNameAsync

#### Usage

* AbstractClassShouldNotHavePublicCtors
* DisposableFieldNotDisposed
* DisposableVariableNotDisposed
* IPAddress
* JsonNet
* ReadonlyField
* UnusedParameters
* Uri

### VB

#### Design

* CatchEmpty
* EmptyCatchBlock
* NameOf
* StaticConstructorException

#### Performance

* MakeLocalVariableConstWhenPossible
* RemoveWhereWhenItIsPossible
* SealedAttribute
* StringBuilderInLoop

## Other updates

* Analyzing CoreFx and Mono Cecil on server build as an end to end test to prevent bugs
* Using psake to build
* Using appveyor.yml to build
* Concentrating diagnostic ids on a single project file that will later be shared between VB and C#

## Known issues:

* [#192](https://github.com/code-cracker/code-cracker/issues/192) Null Reference on ConvertToExpressionBodiedMemberAnalyzer
* [#95](https://github.com/code-cracker/code-cracker/issues/95) Several small problems on DisposablesShouldCallSuppressFinalizeAnalyzer

All the above analyzers are disabled by default, you need to enable them to be able to use them.

As usual, you should go to Nuget ([C#](https://www.nuget.org/packages/codecracker.CSharp/1.0.0-alpha3), [VB](https://www.nuget.org/packages/codecracker.VisualBasic/1.0.0-alpha3)) to get the packages or download the extension on the Visual Studio Extensions Gallery ([C#](https://visualstudiogallery.msdn.microsoft.com/ab588981-91a5-478c-8e65-74d0ff450862), [VB](https://visualstudiogallery.msdn.microsoft.com/1a5f9551-e831-4812-abd0-ac48603fc2c1)).
