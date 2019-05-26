import React, { Component } from 'react';

import { storeProducts, detailProduct } from './data';


const ProductContext = React.createContext();

class ProductContextProvider extends Component {
	
	state = {
		products : storeProducts,
		detailProduct : detailProduct,
	}

	handleDetail = () => { console.log('Hello from handleDetail()'); }

	addToCart = () => { console.log('Hello from addToCart()'); }

	render() {
		return (
			<ProductContext.Provider 
			 value={{ ...this.state, 
			 					handleDetail : this.handleDetail,
			 					addToCart : this.addToCart,
			}}>
				{ this.props.children }
			</ProductContext.Provider>
		);
	}

}

const ProductConsumer = ProductContext.Consumer;

export { ProductContextProvider, ProductConsumer };