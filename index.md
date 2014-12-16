---
layout: page
title: Welcome to Code Cracker!
---
{% include JB/setup %}

## Installing

You may use CodeCracker in two ways: as an analyzer library that you install with Nuget into your project or as a Visual Studio extension.
The way you want to use it depends on the scenario you are working on. You most likely want the Nuget package.

If you want the analyzers to work during your build, and generate warnings and errors during the build, also on build servers, then you want
to use the Nuget package. The package is available on nuget at [nuget.org/packages/codecracker](https://www.nuget.org/packages/codecracker).
If you want to be able to configure which analyzers are being used in your project, and which ones you will ignore, and commit those
changes to source control and share with your team, then you also want the Nuget package.

To install from Nuget, for the C# version:

{% highlight powershell %}
Install-Package CodeCracker.CSharp
{% endhighlight %}

Or for the Visual Basic version:

{% highlight powershell %}
Install-Package CodeCracker.VisualBasic
{% endhighlight %}

Or use the Package Manager in Visual Studio.

There is also a version for both named `CodeCracker` only, but it makes not sense to get it, you should search for the C# or VB version.

If you want the alpha builds that build on each push to the repo, add https://www.myget.org/F/codecrackerbuild/ to your nuget feed.
We are now only pushing complete alpha releases to Nuget.org, and commit builds go to Myget.org.

If you want global analyzers that will work on every project you open in Visual Studio, then you want the Extension.
Grab the extension at the [Visual Studio Extensions Gallery](https://visualstudiogallery.msdn.microsoft.com/ab588981-91a5-478c-8e65-74d0ff450862).

To build from source:

{% highlight bat %}
git clone https://github.com/code-cracker/code-cracker.git
cd CodeCracker
msbuild
{% endhighlight %}

Then add a reference to CodeCracker.dll from within the Analyzers node inside References, in Visual Studio.
