import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const AddCategory = ({onAddCate}) => {
    const { handleSubmit, register, errors } = useForm();
    let history = useHistory();
    const onHandSubmit = (data)=>{
        const newData ={
            id:Math.random().toString(36).substr(2,9),
            ...data
        }
        onAddCate(newData);
        history.push("/admin/category");
        console.log(newData);
        
    }
    return (
        <div className="main-panel">
            <div className="card shadow ml-10">
                <form action="" onSubmit={handleSubmit(onHandSubmit)}>
                    <div className="form-group row ml-2 mt-5">
                        <label htmlFor="" className="col-sm-2 col-form-label">
                            Name Category
                        </label>
                        <div className="col-sm-10">
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
                                name="nameCate"
                            />
                        </div>

                        {errors.nameCate && errors.nameCate.type === "required" && <span className="text-danger">Bạn không được để trống</span>}
                        {errors.nameCate && errors.nameCate.type === "minLength" && <span className="text-danger">Bạn nhập ngắn hơn 3 kí tự</span>}
                        {errors.nameCate && errors.nameCate.type === "maxLength" && <span className="text-danger">Bạn nhập dài quá 35 kí tự</span>}
                        {errors.nameCate && errors.nameCate.type === "pattern" && <span className="text-danger">Không đúng định dạng</span>}
                    </div>
                    <div className="form-group row ml-2">
                        <label htmlFor="" className="col-sm-2 col-form-label">
                            Image
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                ref={register({
                                    required: true,
                                })}
                                name="imageCate"
                            />
                            {errors.imageCate && errors.imageCate.type === "required" && <span className="text-danger">Bạn không được để trống</span>}
                        </div>
                    </div>
                   
                    <br></br>
                    <div className="form-group ml-4">
                        <label htmlFor="exampleFormControlTextarea1">Dateil Category</label>
                        <textarea
                            className="form-control"
                            rows={3}
                            name="textAra"
                            ref={register({
                                required: true,
                            })}
                        />
                        {errors.textAra && errors.textAra.type === "required" && <span className="text-danger">Bạn không được để trống</span>}
                    </div>
                    <button className="btn btn-success ml-4">Add Category</button>
                </form>
            </div>
        </div>
    )
}

AddCategory.propTypes = {

}

export default AddCategory
