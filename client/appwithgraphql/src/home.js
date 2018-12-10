import React, { Component } from 'react';

import { graphql, compose } from 'react-apollo';

import '../style.css';
import { getJeansQuerry, deleteJeansMutation } from '../queries/queries';
import ItemList from '../../container/itemLIst';

class Jeans extends Component {
  displayJeans() {
    var data = this.props.getJeansQuerry;
    if(data.loading){
      return(<div>Loading Jeans...</div>)
    } else {
        return <ItemList items={data.jeans} delItemfunc={this.deleteHandler.bind(this)}/>
    }
  }
  deleteHandler(id) {
    let con = window.confirm("Are you sure you want to delete ?");
    if (con) {
      this.props.deleteJeansMutation({
        variables: {
          id: id,
        },
        refetchQueries:[{query:getJeansQuerry}]
      })
    }
  }
  render() {  
    return (
   <div>
  {this.displayJeans()}
   </div>
    );
  }
}

export default compose(
  graphql(getJeansQuerry, { name: "getJeansQuerry" }),
  graphql(deleteJeansMutation, { name: "deleteJeansMutation" })
)(Jeans);