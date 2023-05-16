// eslint-disable-next-line react/prop-types
export default function Card({children, title, footer}) {
  let classCard = 'card';

  classCard +=
    title && footer
      ? ' with-both'
      : title
      ? ' with-title'
      : footer
      ? ' with-footer'
      : '';

  return (
    <article className={classCard}>
      {title ? <h2>{title}</h2> : null}
      {children}
      {footer ? <span>{footer}</span> : null}
    </article>
  );
}
