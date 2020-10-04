import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';
import React, { Component } from 'react'
import AlbumsList from './AlbumsList';

const ListAlbums = `query ListAlbums {
    listAlbums(limit: 9999) {
        items {
            id
            name
        }
    }
}`;

const SubscribeToNewAlbums = `
  subscription OnCreateAlbum {
    onCreateAlbum {
      id
      name
    }
  }
`;

export default class AlbumsListLoader extends Component {

    onNewAlbum = (prevQuery, newData) => {
        let updatedQuery = Object.assign({}, prevQuery);
        updatedQuery.listAlbums.items = prevQuery.listAlbums.items.concat([newData.onCreateAlbum]);
        return updatedQuery;
    }
    
    render() {
        return (
            <Connect query={graphqlOperation(ListAlbums)} subscription={graphqlOperation(SubscribeToNewAlbums)} onSubscriptionMsg={this.onNewAlbum}>
                {({ data, loading, errors }) => {
                    if (loading) { return <div>Loading...</div>; }
                    if (errors.length > 0) { return <div>{JSON.stringify(errors)}</div>; }
                    if (!data.listAlbums) return;

                return <AlbumsList albums={data.listAlbums.items} />;
                }}
            </Connect>
        );
    }
}
  