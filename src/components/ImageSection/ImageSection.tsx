import { ButtonProps, Typography } from '@acid-info/lsd-react'
import clsx from 'clsx'
import React from 'react'
import './ImageSection.scss'
import Link from '@docusaurus/Link'

export type VideoSectionProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'title'
> & {
  /**
   * The title of the section
   */
  title?: React.ReactNode
  /**
   * The description of the section
   */
  description?: React.ReactNode
  /**
   * The number of columns to display the content in
   */
  columns?: 1 | 2
  /**
   * The URL to link to when the button is clicked
   */
  href?: string
  /**
   * The label to display on the button
   */
  label?: string
  /**
   * The target attribute for the link e.g., `_self`, `_blank`
   */
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target']
  /**
   * Whether to display a border-top in the section
   */
  border?: boolean
  /**
   * The text alignment of the section
   */
  align?: 'unset' | 'left' | 'right' | 'center'
  /**
   * The variant of the button
   */
  variant?: ButtonProps['variant']
  /**
   * The position of the call-to-action button
   */
  ctaPosition?: 'top' | 'bottom'
  /**
   * The source of the image
   */
  src: string
  /**
   * The alt text of the image
   */
  alt: string
}

export const ImageSection: React.FC<VideoSectionProps> = ({
  label,
  href,
  title,
  columns = 1,
  description,
  target = '_self',
  border = true,
  src,
  align = 'unset',
  className,
  children,
  variant = 'outlined',
  ctaPosition = 'bottom',
  alt = '',
  ...props
}) => {
  const withDescription = !!description
  const withButton = !!href

  const display =
    title && !withDescription && !withButton
      ? 'title-only'
      : title && !description && withButton
      ? 'title-button'
      : title && description && columns === 2
      ? `full-width`
      : title && description
      ? 'list'
      : 'simple'

  const button = href && (
    <Link target={target} href={href} className="mdx-image-section__link">
      {label}
    </Link>
  )

  return (
    <div
      className={clsx(
        className,
        'mdx-image-section',
        `mdx-image-section--${display}`,
        !border && 'mdx-image-section--no-border',
      )}
      {...(props as any)}
    >
      <div
        className={clsx(
          'mdx-image-section__container',
          align !== 'unset' && `mdx-image-section--align-${align}`,
        )}
      >
        <div className="mdx-image-section__header">
          <Typography
            component="h2"
            className={clsx('mdx-image-section__title')}
          >
            {title}
          </Typography>
        </div>
        {description && (
          <Typography component="h3" className="mdx-image-section__description">
            {description}
          </Typography>
        )}
        <div className="mdx-image-section__header__mobile-button">{button}</div>
      </div>

      <div className="mdx-image-section__video-container">
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}
