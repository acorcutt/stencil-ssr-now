import { Component, h, State } from '@stencil/core';
import { Head } from 'stencil-head';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  @State() name = 'Loading...';

  async componentWillLoad() {
    console.log('Component is about to be rendered');
    this.name = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
      headers: {
        'Accept': 'application/json',
      },
      method: 'GET'
    }).then(r => r.json()).then(r => r.title);
  }

  render() {
    return (
      <div class='app-home'>
        <Head data={{ title: 'SSR Head Test', metas: [{ name: 'description', content: 'SSR Head Description Test' }, { property: 'og:title', content: 'OG Update Title' }] }}></Head>
        <p>
          Welcome to the ({this.name}).
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
