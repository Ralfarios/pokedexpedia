import React from 'react';

import { MetaDecorator } from '../../utils/helmet/MetaDecorator';

export const NotFound = _ => {
  return (
    <div id="NotFound">
      <MetaDecorator title="404 Page Not Found" desc="If you see this page, that means the url is wrong." />
      <h1>404 Page not Found</h1>
    </div>
  );
};