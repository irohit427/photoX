import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Grid } from 'semantic-ui-react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import AlbumsListLoader from './components/AlbumsListLoader';
import AlbumDetailsLoader from './components/AlbumDetailsLoader';
import NewAlbum from './components/NewAlbum';


function App() {
  return (
    <div className="App">
      {/* <AmplifySignOut /> */}
      <Router>
        <Grid padded>
          <Grid.Column>
            <Route path="/" exact component={NewAlbum} />
            <Route path="/" exact component={AlbumsListLoader} />
            <Route
              path="/albums/:albumId"
              render={ () => <div><NavLink to='/'>Back to Albums list</NavLink></div> }
            />
            <Route
              path="/albums/:albumId"
              render={ props => <AlbumDetailsLoader id={props.match.params.albumId}/> }
            />
        </Grid.Column>
      </Grid>
      </Router>
    </div>
  );
}

export default withAuthenticator(App, {includeGreetings: true});
