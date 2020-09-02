// DOCUMENTATION: http://styletron.org
import React from 'react';
import { withApollo } from 'lib/apollo';
import requireAuthentification from 'lib/requireAuthentification';

import { Dashboard } from 'layouts';
import { LogoutButton } from 'atoms/buttons';

const IndexPage = ({ user }) => {
  // an alternative hook based API
  return (
    <Dashboard>
      <h1>{`Welcome ${user.username}!`}</h1>
      <h3>You successfully logged in.</h3>
      <LogoutButton />
    </Dashboard>
  );
};

IndexPage.getInitialProps = async (context) => {
  // redirects if not logged in, and adds user object to props
  return await requireAuthentification(context);
};

export default withApollo(IndexPage);
