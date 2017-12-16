import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

// create BusinessList prop
// iterate through the businesses props and render Business component for each prop
class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
            {//console.log(this.props.businesses)
            }
            {this.props.businesses.map(
                (business) => {
                    return <Business business={business} key={business.id} />;
                })} 
          </div>
        );

    }
}

export default BusinessList;