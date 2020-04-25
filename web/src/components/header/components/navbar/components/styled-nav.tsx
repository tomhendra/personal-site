/** @jsx jsx */
import { jsx } from '@emotion/react';

import { withMediaQueries } from '../../../../../utils/style-helpers';
import { Children } from '../../../../../utils/types';

type Props = {
  children: Children;
};

export const StyledNav = ({ children }: Props) => (
  <nav
    css={(theme) =>
      withMediaQueries(theme)({
        alignItems: 'center',
        display: ['none', 'none', 'flex'],

        '& > :not(:last-of-type)': {
          marginRight: theme.spacings.golf,
        },
      })
    }
  >
    {children}
  </nav>
);