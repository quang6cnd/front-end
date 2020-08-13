import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom"

const DetailCategory = ({ category,onUpdateCate,onAddCate }) => {
    const { id } = useParams();
    const cate = id ? category.find(cate => cate.id == id) : {};
    const [valueInput, setValueInput] = useState(cate);
    const { handleSubmit, register, errors } = useForm();
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setValueInput({
            ...valueInput,
            [name]: value
        })
    }
    const history = useHistory();
    const onHandleSubmit = data => {
        if (data) {
            if (!id) {
                onAddCate(valueInput);
                history.push("/admin/category");

            } else {
                onUpdateCate(id, valueInput);
                history.push("/admin/category");
            }
        }
        
    }
    return (
        <div>
            <div className="main-panel">
                <div className="card shadow ml-10">
                    <div className="card-body">
                        <div className="table-responsive">
                            <form onSubmit={handleSubmit(onHandleSubmit)}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">image</th>                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input defaultValue={valueInput.nameCate || ""}
                                                    ref={register({
                                                        required: true
                                                    })} className="form-control" name="nameCate" type="text"
                                                    onChange={onHandleChange}
                                                ></input>
                                                {errors.nameCate && errors.nameCate.type === "required" && <span className='text-danger'>Bạn không để trống</span>}
                                            </td>

                                            <td>
                                                <img src={cate.imageCate} width="100"></img>
                                                <br></br>
                                                <br></br>
                                                <input className="form-control" defaultValue={valueInput.imageCate || ""} border="0px" type="text" name="imageCate"
                                                    onChange={onHandleChange}
                                                ></input>
                                            </td>

                                            <td></td>
                                            <td>

                                                <button className="btn btn-primary" >Update</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Mô tả danh mục</label>
                                    <textarea className="form-control" rows={3} onChange={onHandleChange} defaultValue={valueInput.textAra || ""} name="textAra" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

DetailCategory.propTypes = {

}

export default DetailCategory
