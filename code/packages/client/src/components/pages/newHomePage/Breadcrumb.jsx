import React from 'react';

export function Breadcrumb() {
  return (
    <nav data-depth={1} className="breadcrumb container">
      <ol
        className="hidden-md-down"
        itemScope
        itemType="http://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
        >
          <a itemProp="item" href="#0">
            <span itemProp="name">Home</span>
          </a>
          <meta itemProp="position" content={1} />
        </li>
      </ol>
    </nav>
  );
}
