import React from 'react';
import { Helmet } from 'react-helmet-async';

export const MetaDecorator = ({ title, desc }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
    </Helmet>
  );
};
