# Cloud

## AWS

{% for name, project in list_projects('jmoney', ['github-site', 'aws']).items() %}

* [{{ name.replace('-', ' ').title() }}]({{ project.url }}) - {{ project.description }}

{% endfor %}

## Fastly

{% for name, project in list_projects('jmoney', ['github-site', 'fastly']).items() %}

* [{{ name.replace('-', ' ').title() }}]({{ project.url }}) - {{ project.description }}

{% endfor %}

## Snowflake

{% for name, project in list_projects('jmoney', ['github-site', 'snowflake']).items() %}

* [{{ name.replace('-', ' ').title() }}]({{ project.url }}) - {{ project.description }}

{% endfor %}
