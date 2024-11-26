import { Button, Typography } from '@acid-info/lsd-react'
import React from 'react'
import './ListView.scss'
import Link from '@docusaurus/Link'

interface TableItem {
  title: string
  description: string
}

interface ListViewProps {
  title?: string
  sectionTitle: string
  description?: string
  buttonText?: string
  buttonLink?: string
  buttonTarget?: string
  data: TableItem[]
}

export const ListView: React.FC<ListViewProps> = ({
  title,
  sectionTitle,
  description = '',
  buttonText = '',
  buttonLink = '',
  buttonTarget = '_self',
  data,
  ...props
}) => {
  return (
    <div {...props}>
      {title && (
        <Typography className="mdx-list-view-box-title" component="p">
          {title}
        </Typography>
      )}
      <div className="mdx-list-view">
        <div className="mdx-list-view-header">
          <div className="mdx-list-view-header-title">
            <Typography
              className="mdx-list-view-section-title"
              component="h2"
              variant="h2"
            >
              {sectionTitle}
            </Typography>
            {description && (
              <Typography className="mdx-list-view-description" variant="body1">
                {description}
              </Typography>
            )}
          </div>
          {buttonLink && (
            <Link href={buttonLink} target={buttonTarget}>
              <Button size="large">{buttonText || 'Learn More'}</Button>
            </Link>
          )}
        </div>
        <div className="mdx-list-view-content">
          {data.map((item, index) => (
            <div key={index} className="mdx-list-view-row">
              <Typography variant="body2" className="mdx-list-view-number">
                {index + 1}
              </Typography>
              <Typography
                component="h3"
                variant="h4"
                className="mdx-list-view-title"
              >
                {item.title}
              </Typography>
              <Typography variant="body1" className="mdx-list-view-description">
                {item.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
