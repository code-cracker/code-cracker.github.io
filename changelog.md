---
layout: page
title: Change log
---
{% include JB/setup %}

{% for repo in site.github.public_repositories %}

(% if repo.name == 'code-cracker' }
{% for release in site.github.releases %}

# {{release.name}}
[Download]({{release.html_url}})

{{release.published_at | date: '%B %d, %Y' }}

{{release.body}}

---

{% endfor %}
{% endif }
{% endfor %}
