export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d12f2a00908c244c408da24',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2uz71n48',
                  apiId: '03989bc2-ac23-4715-8274-0031c4b2dd20'
                },
                {
                  buildHookId: '5d12f2a00908c21d4f08d9c4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xbwrycpj',
                  apiId: '28f51b19-9ac1-4090-97cd-7ad3095f145f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jtensminger/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xbwrycpj.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
