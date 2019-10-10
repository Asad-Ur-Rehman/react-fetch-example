import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchList: [],
            searchText:''
        };
    }
    handleSearchInput = (input) =>{
        //will be used later when API with search is found :p
        this.setState({ searchText: input.target.value });
    }
    getData = () => {
    this.fetchAPI().then((data) => {
        console.log(data);
        this.setState({
            searchList: data,
          })
    });
    }

 fetchAPI = () => {
        return fetch('https://jsonplaceholder.typicode.com/comments', {
            cache: 'no-cache',
            //'content-type': 'application/json',
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
        })
        .then(response => {
            console.log(response)
            return response.json();
        })
        .then(jsonData => {
            console.log(jsonData)
            return jsonData
        });
    }

    render() {
        return (
            <div>
            <div className="SearchBar">
            <h1>Search</h1>
              <input type="text" onChange={(input) => this.handleSearchInput(input)} />
              <button onClick={this.getData}>Search</button>
          </div>
          <div>
          {this.state.searchList.map(src => <Comments data = {src}/> )}
              </div>
              </div>
        );
    }
}

const Comments = ({data}) => {
    console.log(data)
    return (
      <div>
        <p>Body: {data.body}</p>
        <p>Email: {data.email}</p>
        <p>Id: {data.id}</p>
        <p>postId: {data.postId}</p>
      </div>
    );
  }

export default Search;