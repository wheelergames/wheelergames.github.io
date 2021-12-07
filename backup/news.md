---
layout: page
title: News
short_description: Latest news stories relating to Wheeler Games new releases and added features.
---

<ul>
  {% for post in site.categories.news %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <p class="post_date">{{ post.date | date_to_string }}</p>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>

