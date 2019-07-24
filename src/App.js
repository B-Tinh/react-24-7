import React, {Component} from 'react';
import './App.css';
import Product from './components/Product';

class App extends Component{

    constructor(props){
      super(props);
      this.onAddProduct = this.onAddProduct.bind(this);
    }

    onAddProduct(){
      console.log(this.refs);

    }

    onClick(){
      console.log("Day la App Component");
    }

    render(){

      var products =[
        {
          id : 1,
          name : 'Iphone 8 64G',
          price : 15000000,
          image : 'https://cdn1.vienthonga.vn/image/2017/11/3/iphone-8-1.jpg',
          status : true
        },
        {
          id : 2,
          name : 'SamSung Galaxy S8',
          price : 18000000,
          image : 'https://images-na.ssl-images-amazon.com/images/I/61zohu8WkmL._SL1456_.jpg',
          status : true
        },
        {
          id : 3,
          name : 'Oppo F1s',
          price : 5000000,
          image : 'https://cdn.fptshop.com.vn/Uploads/Thumbs/2017/9/5/636402026888373686_1o.jpg',
          status : true
        }
      ];

      let elements = products.map((product, index) =>{

        let result = '';
        if(product.status ){
          result = <Product
                  key={index}
                  name={product.name}
                  price={product.price} 
                  image={product.image}
                  status={product.status ? 'Active' : 'Pending'}
                /> 
        }
        return  result;
              
      });
      return (
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <a href="1" className="navbar-brand">Props</a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title">Them San Pham</h3>
                  </div>
                  <div className="panel-body">
                    <form>
                      <div className="form-group">
                        <label>Them San Pham</label>
                        <input type="text" className="form-control" ref="name" />
                      </div>                    
                      <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>
                      Save
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">                
                {elements }
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-warning" onClick={this.onClick}>
                Click Me !
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }


export default App;
