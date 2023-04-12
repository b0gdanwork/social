import { ArticleList } from 'entitiess/Article'
import { PageLayout } from 'pages/PageLayout'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ArticlePage () {
  const { t } = useTranslation()

  return (
    <PageLayout>
      <ArticleList 
        view='list'
        isLoading={false}
        articles={
        [
          {
            id: '1',
            title: 'Javascript news',
            subtitle: 'Что нового в JS за 2022 год?',
            img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
            views: '1022',
            createdAt: 123,
            user: {
              avatar: '',
              id: '',
              username: 'username'
            },
            type: [
              'IT'
            ],
            blocks: []
          }
        ]
      }
      />
    </PageLayout>
  )
}
