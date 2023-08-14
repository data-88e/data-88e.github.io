---
layout: home
title: Home / Calendar
description: Listing of course modules and topics.
permalink: /:path/
nav_order: 0
seo:
  type: Course
  name: Just the Class
---

# Data 88E: Economic Models

{: .mb-2 }
UC Berkeley, Fall 2023
{: .mb-0 .fs-6 .text-grey-dk-000 }

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

{: .announcement }
> This website is still under construction and is subject to change.

{% for module in site.modules %}
{{ module }}
{% endfor %}
