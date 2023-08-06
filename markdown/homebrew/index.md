# Projects

## Formula

{% for name, project in list_projects('jmoney', ['github-site', 'homebrew-formula']).items() %}

* [{{ name.replace('-', ' ').title() }}]({{ project.url }}) - {{ project.description }}

{% endfor %}

## Taps

{% for name, project in list_projects('jmoney', ['github-site', 'homebrew-tap']).items() %}

* [{{ name.replace('-', ' ').title() }}]({{ project.url }}) - {{ project.description }}

{% endfor %}
