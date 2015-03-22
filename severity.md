---
layout: page
title: Severity Levels
---
{% include JB/setup %}

These are the 4 severity levels supported on Roslyn and how they are understood on the Code Cracker project:

1. **Hidden**: Only used for refactorings. See #66 (and its comments) to understand why.
2. **Info**: An alternative way (ex: replacing for with foreach). Clearly a matter of opinion and/or current way could be correct, or maybe the new code could be correct. We cannot determine.
3. **Warning**: Code that could/should be improved. It is a code smell and most likely is wrong, but there are situations where the pattern is acceptable or desired.
4. **Error**: Clearly a mistake (ex: throwing ArgumentException with an non-existent parameter). There is no situation where this code could be correct. There are no differences of opinion.

You can read [directly on Microsoft's source code](http://source.roslyn.codeplex.com/#Microsoft.CodeAnalysis/Diagnostic/DiagnosticSeverity.cs,e70281df673d47f6,references)
how they interpret these levels.
