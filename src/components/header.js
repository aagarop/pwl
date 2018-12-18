import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import mq from '../utils/mq';
import AlertOnUpdate from './alert-on-update';

const Header = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
  >
    {({ site: { siteMetadata } }) => (
      <header>
        <AlertOnUpdate />
        <section
          css={css`
            display: flex;
            padding: 1rem 1rem 0;
            ${mq.md} {
              justify-content: center;
              padding: 0;
            }
          `}
        >
          <h1
            css={css`
              color: #1c304a;
              font-family: 'Nunito', sans-serif;
              font-size: 2.25rem;
              font-variant: small-caps;
              text-shadow: 1px 1px 1px #046b99;
              margin: 0;
              ${mq.md} {
                font-size: 3rem;
                margin-top: 4rem;
              }
              ${mq.lg} {
                font-size: 5rem;
              }
            `}
          >
            {siteMetadata.title}
          </h1>
        </section>
      </header>
    )}
  </StaticQuery>
);

export default Header;
