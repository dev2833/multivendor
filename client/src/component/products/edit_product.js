import React, { Component,Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import { connect } from 'react-redux'
import 'react-dropzone-uploader/dist/styles.css'
import {getCategory,registerProduct} from '../../actions/index'
import {makeStoreList} from '../../services/index'
import Dropzone from 'react-dropzone-uploader'


export class edit_product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: 'hello world',
            name:this.props.product?this.props.product.name:'',
            productCode:this.props.product?this.props.product.productCode:'',
            storeId:this.props.product?this.props.product.storeId._id:'',
            category:this.props.product?this.props.product.category:'',
            height:this.props.product?this.props.product.height:'',
            width:this.props.product?this.props.product.width:'',
            weight:this.props.product?this.props.product.weight:'',
            discount:this.props.product?this.props.product.discount:'',
            stock:this.props.product?this.props.product.stock:'',
            new:this.props.product?this.props.product.new:'',
            design:this.props.product.design?this.props.product.design:'',
            gender:this.props.product?this.props.product.gender:'',
            makingCharge:this.props.product?this.props.product.makingCharge:'',
            nextDay:this.props.product?this.props.product.nextDay:'',
            collection:this.props.product?this.props.product.collection:'',
            tenPlusOne:this.props.product?this.props.product.tenPlusOne:'',
            gst:this.props.product?this.props.product.gst:'',
            // color:this.props.product?this.props.product.color[0]:'',
            occasion:this.props.product?this.props.product.occasion[0]:'',
            goldType:this.props.product?this.props.product.metal.type:'',
            purity:this.props.product?this.props.product.metal.purity:'',
            goldWeight:this.props.product?this.props.product.metal.weight:'',
            type:this.props.product?this.props.product.type:'',
            diamondWeight:this.props.product?this.props.product.Diamond.totalWeight:'',
            diamondPrice:this.props.product?this.props.product.Diamond.price:'',
            diamondNumber:this.props.product?this.props.product.name:'',
            diamondShap:this.props.product?this.props.product.name:'',
            diamondColor:this.props.product?this.props.product.name:'',
            diamondSettingType:this.props.product?this.props.product.name:'',
            gemType:this.props.product?this.props.product.name:'',
            gemSize:this.props.product?this.props.product.name:'',
            gemPrice:this.props.product?this.props.product.name:'',
            gemShape:this.props.product?this.props.product.name:'',
            gemSettingType:this.props.product?this.props.product.name:'',
            weekend:this.props.product?this.props.product.name:'',
            romance:this.props.product?this.props.product.name:'',
            vacation:this.props.product?this.props.product.name:'',
            pictures:{}
        }
        this.onDrop = this.onDrop.bind(this);
    }


	onDrop(pictureFiles, pictureDataURLs) {

		this.setState({
            pictures: pictureDataURLs[0],
        });
 
	}
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        console.log(nam)
        console.log(val)
        this.setState({[nam]: val});
    }
    mySubmitHandler = (event) => {
        event.preventDefault();

        const product = {
            type:"Diamond",
            name : this.state.name,
            price : 0,
            discount : this.state.discount,
            stock:this.state.stock,
            gst:this.state.gst,
            makingCharge:this.state.makingCharge,
            new:this.state.new,
            occasion:[this.state.romance],
            design:this.state.design,
            color:this.state.color,
            tags:[this.state.weekend,this.state.vacation,this.state.romance],
            variants:[{color:"white",images:"/assets/images/product/"+this.state.category + "/" +this.uploadInput.files[0].name}],
            gender:this.state.gender,
            productCode:this.state.productCode,
            height:this.state.height,
            width:this.state.width,
            weight:this.state.weight,
            collection:this.state.collection,
            approved:false,
            category:this.state.category,
            tenPlusOne:this.state.tenPlusOne,
            storeId:this.state.storeId,
            metal:{
                type:this.state.goldType,
                purity:this.state.purity,
                weight:this.state.goldWeight
            },
            stone:{
                type:this.state.gemType,
                shape:this.state.gemShape,
                size:this.state.gemSize,
                price:this.state.gemPrice,
                settingType:this.state.gemSettingType
            },
            Diamond:{
                totalWeight:this.state.diamondWeight,
                numOfDiamonds:this.state.diamondNumber,
                price:this.state.diamondPrice,
                details:[{
                    clarity:this.state.diamondClarity,
                    color:this.state.diamondColor,
                    numOfDiamonds:this.state.diamondNumber,
                    shape:this.state.diamondShape,
                    weight:this.state.diamondWeight,
                    settingType:this.state.diamondSettingType
                }]
            }
        };
        var myJSON = JSON.stringify(product)
        console.log(myJSON)
        let data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('fileName', this.uploadInput.files[0].name);
        data.append('category', this.state.category);
        data.append('product',myJSON);
        this.props.registerProduct(data);
    }
    renderAlert(error) {
        let message = this.state.message || this.props.message
    
        if (message) {
          return (
            <div className="alert alert-warning">
              <strong>Oops!
                    </strong> {message}
            </div>
          )
        }
    }
    selectType(e){
        console.log(e)
    }
    getUploadParams = ({ meta }) => { return {url: 'https://httpbin.org/post'  } }
  
    // called every time a file's `status` changes
    handleChangeStatus = ({ meta }, status) => { console.log(status, meta) }
    
    // receives array of files that are done uploading when submit button is clicked
    handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta))
      allFiles.forEach(f => f.remove())
    }
    render() {
        const {category,stores} = this.props
        return (
            <Fragment>
                <Breadcrumb title="Add Products" parent="Digital" />
                <div className="container-fluid">
                <form className="theme-form" onSubmit={this.mySubmitHandler}>
                    <div className="row product-adding">
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 >General</h5>
                                </div>
                                <div className="card-body">
                                    <div className="digital-add needs-validation">
                                        <div className="row">
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Name</label>
                                                <input className="form-control" value={this.state.name} name="name" onChange={this.myChangeHandler} id="validationCustom01" type="text" required={true} />
                                            </div>
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> SKU</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="productCode" id="validationCustom02" type="text"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Store</label>
                                                <select className="custom-select" onChange={this.myChangeHandler} name="storeId" required={true}>
                                                <option value="">--Select--</option>
                                                    {
                                                        stores.map((store,index) => 
                                                            <option key = { index } value={store._id}>{store.name}</option>
                                                        )
                                                    }
                                              
                                                </select>
                                            </div>
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Category</label>
                                                <select className="custom-select" onChange={this.myChangeHandler} name="category" required={true}>
                                                <option value="">--Select--</option>
                                                    {
                                                        category.map((cat,index) => 
                                                            <option key = { index } value={cat.category}>{cat.name}</option>
                                                        )
                                                    }
                                              
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-xl-3">
                                                <label className="col-form-label pt-0"><span>*</span> Height</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="height" type="text"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-3">
                                                <label className="col-form-label pt-0"><span>*</span> Width</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="width"  type="text"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-3">
                                                <label className="col-form-label pt-0"><span>*</span> weight</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="weight" type="text"  required={true} />
                                            </div>
                  
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-xl-3">
                                                <label className="col-form-label pt-0"><span>*</span> Discount</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="discount" type="text"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-3">
                                                <label className="col-form-label pt-0"><span>*</span> Stock</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="stock" type="number"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-3">
                                                <label className="col-form-label pt-0"><span>*</span> </label>
                                                <label className="d-block">
                                                        <input className="checkbox_animated" onChange={this.myChangeHandler} value={true} name="new" type="checkbox" />
                                                        New
                                                </label>
                                            </div>
                  
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-xl-3">
                                                <label className="col-form-label pt-0"><span>*</span> Gender</label>
                                                <select className="custom-select" onChange={this.myChangeHandler} name="gender" required={true}>
                                                <option value="">--Select--</option>
                                                <option value="man">Male</option>
                                                <option value="woman">Female</option>                                           
                                             
                                                </select>
                                            </div>
                                            <div className="form-group col-xl-3">
                                                <label className="col-form-label pt-0"><span>*</span> Making Charge (Price INR)</label>
                                                <input className="form-control" type="number" onChange={this.myChangeHandler} name="makingCharge" required={true} />
                                            </div>
                                            <div className="form-group col-xl-3">
                                                <label className="col-form-label pt-0"><span>*</span> </label>
                                                <label className="d-block">
                                                        <input className="checkbox_animated" onChange={this.myChangeHandler} value={true} name="nextDay" type="checkbox" />
                                                        NextDayDelivery
                                                                </label>
                                            </div>
                  
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-xl-3">
                                                <label className="col-form-label pt-0"><span>*</span> Collection</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="collection" type="text"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-3">
                                                <label className="col-form-label pt-0"><span>*</span> Design</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="design" type="text"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-3">
                                                <label className="col-form-label pt-0"><span>*</span>  </label>
                                                <label className="d-block">
                                                        <input className="checkbox_animated"  onChange={this.myChangeHandler} value={true} name="tenPlusOne" id="chk-ani1" type="checkbox" />
                                                        10 + 1 Monthly Plan
                                                                </label>
                                            </div>
                           
                  
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> GST (INR) </label>
                                                <input className="form-control"  onChange={this.myChangeHandler} name="gst" type="number"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Color</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="color" type="text"  required={true} />
                                            </div>
                           
                  
                                        </div>
                                        <div className="account-setting" style={{marginLeft:"20px"}}>
                                
                                            <h5 className="f-w-600 f-16">Ocassion</h5>
                                            <div className="row">
                                                <div className="col">
                                                    <label className="d-block" >
                                                        <input className="checkbox_animated" value="weekend" onChange={this.myChangeHandler} name="weekend" type="checkbox"  />
                                                        Weekend
                                                                </label>
                                                    <label className="d-block">
                                                        <input className="checkbox_animated" value="romance" onChange={this.myChangeHandler} name="romance" type="checkbox" />
                                                        Romance
                                                                </label>
                                                    <label className="d-block">
                                                        <input className="checkbox_animated" value="vacation" onChange={this.myChangeHandler} name="vacation" type="checkbox" />
                                                        Vacation
                                                                </label>
                                            
                                                </div>
                                            </div>
                                        </div>   
                                        <div style={{marginLeft:"20px"}}>
                                            <label className="col-form-label pt-0"> Image Upload</label>
                                            <div>
                                                <input ref={(ref) => { this.uploadInput = ref; }} type="file" required={true}/>
                                            </div>
                                            <label className="col-form-label pt-0"> </label>
                                        </div>                      
                          
                                  
                                  
                                        {/* <ImageUploader
                                                withIcon={true}
                                                buttonText='Choose images'
                                                onChange={this.onDrop}
                                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                                maxFileSize={5242880}
                                        /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Metal Description</h5>
                                </div>
                                <div className="card-body">
                                    <div className="digital-add needs-validation">
                                        <div className="form-group mb-0">                         
                                        <div className="row">
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Gold Type</label>
                                                <select className="custom-select" onChange={this.myChangeHandler}  name="goldType" required={true}>
                                                    <option value="">--Select--</option>
                                                    <option value="plain gold">Plan Gold</option>
                                                    <option value="rose gold">Rose Gold</option>
                                                    <option value="platium">Platium Impact</option>
                                                    <option value="white gold">White Gold</option>                                     
                                                </select>
                                            </div>
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Purity</label>
                                                <select className="custom-select" onChange={this.myChangeHandler}  name="purity" required={true}>
                                                    <option value="">--Select--</option>
                                                    <option value="14kt">14 kt</option>
                                                    <option value="18kt">18 kt</option>
                                                    <option value="22kt">22 kt</option>
                                                    <option value="24kt">24 kt</option>                                    
                                                </select>
                                            </div>
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Weight(gram)</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="goldWeight" type="number"  required={true} />
                                            </div>                                                                
                  
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Diamond Description</h5>
                                </div>
                                <div className="card-body">
                                    <div className="digital-add needs-validation">
                                        <div className="form-group mb-0">
                                        <div className="form-group">
                                            <div className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                                                <label className="d-block">
                                                    <input className="radio_animated" onChange={this.myChangeHandler}  type="radio" name="type" checked={true} onChange={this.selectType}/>
                                                    Diamond
                                            </label>
                                                <label className="d-block" >
                                                    <input className="radio_animated" onChange={this.myChangeHandler} type="radio" name="type" />
                                                    Solitaire
                                            </label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Total Weight (gram)</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="diamondWeight" type="number"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Total NO.Of Diamonds</label>
                                                <input className="form-control" onChange={this.myChangeHandler}name="diamondNumber" type="number"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Price ( INR )</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="diamondPrice" type="number"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Clarity</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="diamondClarity" type="text"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Shape</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="diamondShape" type="text"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Color</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="diamondColor" type="text"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Setting Type</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="diamondSettingType" type="text"  required={true} />
                                            </div>
                  
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    <h5>Gemstone Description</h5>
                                </div>
                                <div className="card-body">
                                    <div className="digital-add needs-validation">
                                        <div className="form-group mb-0">                       
                                        <div className="row">
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> type (eg:Ruby)</label>
                                                <input className="form-control"  onChange={this.myChangeHandler} name="gemType" type="text"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Total Weight (gram)</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="gemSize" type="number"  required={true} />
                                            </div>
                                    
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Price ( INR ) </label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="gemPrice"  type="number"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Shape</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="gemShape"  type="text"  required={true} />
                                            </div>
                                      
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span> Setting Type</label>
                                                <input className="form-control" onChange={this.myChangeHandler} name="gemSettingType" type="text"  required={true} />
                                            </div>
                                            <div className="form-group col-xl-5">
                                                <label className="col-form-label pt-0"><span>*</span></label>
                                               
                                            </div>
                                            <hr/>
                                            <div className="form-group mb-0" >
                                            <div className="product-buttons text-center" >
                                                <button type="submit" className="btn btn-secondary" style={{marginLeft:"20px"}}>Register</button>
                                                <button type="reset" className="btn btn-primary" style={{marginLeft:"20px"}}>Reset</button>
                                            </div>
                                            <label className="col-form-label pt-0"> </label>
                                        </div>
                  
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                    </form>

                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    category:state.data.category,
    stores: makeStoreList(state.store.stores,state.auth.currentUser._id),
    product:state.data.selectedProduct
})

export default connect(
    mapStateToProps, {getCategory,registerProduct}
)(edit_product)