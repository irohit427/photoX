import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Grid } from 'semantic-ui-react';
import AlbumsListLoader from './components/AlbumsListLoader';
import NewAlbum from './components/NewAlbum';


function App() {
  return (
    <div className="App">
      {/* <AmplifySignOut /> */}
      <Grid padded>
        <Grid.Column>
          <NewAlbum />
          <AlbumsListLoader />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default withAuthenticator(App, {includeGreetings: true});
