---
layout: page
title: Change log
---
{% include JB/setup %}

{% for release in site.github.releases %}

# {{release.name}}
[Download]({{release.html_url}})

{{release.published_at | date: '%B %d, %Y' }}

{{release.body}}

---

{% endfor %}
