// import React, { Component } from "react";
// import AddressDataService from "../../services/address.data.service";
// import CustomerViewCSS from "./CustomerView.Module.css";
// import { Redirect } from "react-router-dom";

// class AddressesView extends Component {
//   state = {
//     address: [
//       {
//         deleted: false,
//       },
//     ],
//   };

//   componentDidMount() {
//     const {
//       match: {
//         params: { id },
//       },
//     } = this.props;

//     AddressDataService.view(id)
//       .then(({ data: address }) => 
//       this.setState({ address }))
//       .catch(console.error);
//   }

//   deleteAddress(id) {
//     AddressDataService.delete(id)
//       .then((res) => {
//       console.log(res);
//       console.log(res.data);
//       this.setState({ deleted: true });
//     });
//   }

//   render() {
//     const { address } = this.state;
//     if (this.state.deleted) {
//       return <Redirect to={{ pathname: "/addresses" }} />;
//     }

//     return (
//       <div>
//         const {addresses} = this.state; const addressListItems =
//         addresses.map((address, index) => (
//         <li key={`${address.zip}-${index}`}>
//           <p>Address ID: {address.id}</p>
//           <p>Address Line 1: {address.address_line_1}</p>
//           <p>Address Line 2: {address.address_line_2}</p>
//           <p>City: {address.city}</p>
//           <p>State {address.state}</p>
//           <p>Zip: {address.zip}</p>
//         </li>
//         ));
//       </div>
//     );
//   }
// }

// export default AddressesView;
