import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import firebase from "../../../firebase";

const AddProduct = ({ onAdd, category }) => {
    const { handleSubmit, register, errors } = useForm();

    let history = useHistory();
    const onHandSubmit = (data) => {
        //upimage
        // console.log(data.image[0]);
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    image: url,
                };
                console.log(newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAdd(newData);
                history.push("/admin/products");
            });
        });
    };
    return (
        <div className="main-panel">
            <div className="card shadow ml-10">
                <form action="" onSubmit={handleSubmit(onHandSubmit)}>
                    <div className="form-group">
                        <label htmlFor="productName">Tên sản phẩm</label>
                        <input
                            type="text"
                            className="form-control"
                            ref={register({
                                required: true,
                                minLength: 3,
                                maxLength: 35,
                                pattern: {
                                    value: /\S/,
                                },
                            })}
                            name="name"
                        />

                        {errors.name && errors.name.type === "required" && <span className="text-danger">Bạn không để trống</span>}
                        {errors.name && errors.name.type === "minLength" && <span className="text-danger">Bạn nhập ngắn hơn 3 kí tự</span>}
                        {errors.name && errors.name.type === "maxLength" && <span className="text-danger">Bạn nhập dài quá 35 kí tự</span>}
                        {errors.name && errors.name.type === "pattern" && <span className="text-danger">Không đúng định dạng</span>}
                    </div>




                    <div className="form-group row ml-2">
                        <label htmlFor="" className="col-sm-2 ">
                            Image
                        </label>
                    </div>

                    <input
                        type="file"
                        ref={register({
                            required: true,
                        })}
                        name="image"
                    />
                    {errors.image && errors.image.type === "required" && <span className="text-danger">Bạn không để trống</span>}
                    <div className="form-group row ml-2">
                        <label htmlFor="" className="col-sm-2 col-form-label">
                            price
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                ref={register({
                                    required: true,

                                    pattern: {
                                        value: /^\d{0,10}$/,
                                    },
                                })}
                            />
                            {errors.price && errors.price.type === "required" && <span className="">Bạn không để trống</span>}
                            {errors.price && errors.price.type === "pattern" && <span className="">Nhập sai </span>}
                            {/* {errors.price && errors.price.type === "minLength" && <span className="">Nhập số đi bạn</span>} */}
                        </div>
                    </div>
                    <div className="form-group row ml-2">
                        <label htmlFor="" className="col-sm-2 col-form-label">
                            price sale
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                name="priceSale"
                                ref={register({
                                    required: true,

                                    pattern: {
                                        value: /^\d{0,10}$/,
                                    },
                                })}
                            />
                            {errors.priceSale && errors.priceSale.type === "required" && <span className="">Bạn không để trống</span>}
                            {errors.priceSale && errors.priceSale.type === "pattern" && <span className="">Nhập sai </span>}
                            {/* {errors.price && errors.price.type === "minLength" && <span className="">Nhập số đi bạn</span>} */}
                        </div>
                    </div>

                    <div className="form-group">
                    <label htmlFor="statys">Trạng thái</label>
                    
                    <div className="form-group form-check ml-4">
                        <input type="radio" name="status" ref={register} value="Còn hàng" width="50px" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Còn hàng
                        </label>
                    </div>
                    <div className="form-group form-check ml-4">
                        <input type="radio" name="status" ref={register} value="Hết hàng" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Hết hàng
                        </label>
                    </div>
                    </div>
                    <br></br>
                    <label htmlFor="" className="col-sm-2 col-form-label">
                        Danh mục
                    </label>
                    <select className="form-control ml-4" name="id_cate" ref={register}>
                        <option value={0}>Choose Category</option>
                        {category.map(({ id, nameCate }) => (
                            <option value={id}>{nameCate}</option>
                        ))}
                    </select>
                    <div className="form-group ml-4">
                        <label htmlFor="exampleFormControlTextarea1">Dateil Product</label>
                        <textarea
                            className="form-control"
                            rows={3}
                            name="textAra"
                            ref={register({
                                required: true,
                            })}
                        />
                        {errors.textAra && errors.textAra.type === "required" && <span className="text-danger">Bạn không để trống</span>}
                    </div>

                    <button className="btn btn-success ml-4">Add Product</button>
                </form>
            </div>
        </div>
    );
};

AddProduct.propTypes = {};

export default AddProduct;
