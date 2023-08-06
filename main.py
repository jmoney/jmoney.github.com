
import ghapi.all as ghapi
import requests

from collections import OrderedDict


def define_env(env):
    "Hook function"

    @env.macro
    def get_user(owner: str):
        g = ghapi.GhApi()
        user = g.users.get_by_username(owner)
        return user

    @env.macro
    def list_projects(owner: str, topics: list):
        g = ghapi.GhApi()
        searchStr = f"org:{owner} "
        for topic in topics:
            searchStr += f"topic:{topic} "

        output = {}
        # TODO - Add Pagination. Right now it assumes that each search will return less than 100 results
        repos = g.search.repos(searchStr, order="asc", sort="name", per_page=100)

        for repo in repos['items']:
            output[repo['name']] = {'url': repo['homepage'] if repo['homepage'] else repo['full_url'], 'description': repo['description']}
        return output
    
    @env.macro
    def list_blogs(user: str):
        resp = requests.get(f'https://dev.to/api/articles?username={user}')
        output = {}
        for blog in resp.json():
            output[blog['title']] = {'url': blog['url'], 'description': blog['description']}
        return OrderedDict(sorted(output.items()))