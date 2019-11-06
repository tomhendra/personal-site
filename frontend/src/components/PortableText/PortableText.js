import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';

import sanityConfig from '../../../sanity-config';

import Heading from '../Heading';
import Text from '../Text';
import Figure from '../Figure';

import { sizes } from '../../assets/styles/constants';

const { CHARLIE, DELTA, ECHO } = sizes;

const serializers = {
  types: {
    block({ node, children }) {
      switch (node.style) {
        case 'h2':
          return (
            <Heading as="h2" size={ECHO}>
              {children}
            </Heading>
          );

        case 'h3':
          return (
            <Heading as="h3" size={DELTA}>
              {children}
            </Heading>
          );

        case 'h4':
          return (
            <Heading as="h4" size={CHARLIE}>
              {children}
            </Heading>
          );

        case 'blockquote':
          return <blockquote>{children}</blockquote>;

        case 'code':
          return <code>{children}</code>;

        default:
          return <Text size={DELTA}>{children}</Text>;
      }
    },
    contentImage({ node }) {
      return <Figure node={node} />;
    },
  },
  listItem: ({ children }) => (
    <Text size={DELTA}>
      <li css={{ marginLeft: '2rem' }}>{children}</li>
    </Text>
  ),
};

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializers}
    {...sanityConfig}
  />
);

export default PortableText;
