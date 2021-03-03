export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603f67d419abb41621db74ab',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bbn2rhbr',
                  apiId: '9be49586-0d0a-4ca2-a781-3e5f69d2ba6f'
                },
                {
                  buildHookId: '603f67d4d766baf5721ada75',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8npprt9q',
                  apiId: 'e10353eb-c0e8-4981-95c1-1e1e119d4cf5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/patchygreen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8npprt9q.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
