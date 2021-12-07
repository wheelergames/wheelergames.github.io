---
layout: default_style
title: Dev Blog
short_description: A weekly blog highlighting the current work being done.<br/><br/>This will mainly be technical but will give an insight into roadmaps, deadlines and progress, and sometimes a look behind the scenes in to the code. 
---
<ul>
  {% for post in site.categories.devblog %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <p>{{ post.sections['full_intro'] | textilize }}</p>
    </li>
  {% endfor %}
</ul>

