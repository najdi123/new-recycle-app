import React, {useReducer, useState} from 'react';
import Navbar from "../components/Navbar";
import submitOrder from '../reducers/orders'
import counter from '../reducers/counter'
import {useSelector} from "react-redux";

const Sell = () => {
    const [state2, dispatch2] = useReducer(counter, 0);

    const [state, dispatch] = useReducer(submitOrder, []);
    // const currentState = useSelector(state => state)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        category: '',
        weight: '',
        photo: {},
        address: '',

        dateStart: '',
        timeStart: '',
        dateEnd: '',
        timeEnd: '',

        error: '',
        success: false
    });

    const {name,
        phone,
        category,
        weight,
        photo,
        address,
        dateStart,
        timeStart,
        dateEnd,
        timeEnd,
        error, success} = formData;

    const handleChange = name => event => {
        setFormData({...formData, [name]: event.target.value, error: false, success: false })
        console.log(formData)
    };
    const handleSelectedPhoto = e => {
        // setPhoto(e.target.files[0]);
        setFormData({...formData, photo: e.target.files[0] });
        console.log(formData.photo)
    };
    const increment = ()=>{
        dispatch({type: 'INCREMENT'})
    }
    const onSubmit = e => {
        e.preventDefault()
        dispatch({type: 'submit-order', payload: formData})
        setFormData({
            name: '',
            phone: '',
            category: '',
            weight: '',
            photo: {},
            address: '',

            dateStart: '',
            timeStart: '',
            dateEnd: '',
            timeEnd: '',

            error: '',
            success: false
        });
        console.log(state)
    };

    // const counter = useSelector(state => state)
    // console.log('counter')
    // console.log(counter)

    return (
        <div className="App">
            <Navbar/>
            <br/>
            sell
            <form>
                <input
                    type="text"
                    onChange={handleChange('name')}
                    value={name}
                />
                نام و نام حانوادگی

                <div className="form-group">
                    <input
                        onChange={handleChange('phone')}
                        value={phone}

                        // placeholder="Name"
                        // onChange={handleChange('name')}
                        type="text"
                        className="form-control"
                        // value={name}
                    />
                    <label className="text-muted"> شماره تلفن
                    </label>
                </div>

                <div>
                    <select
                        name="category"
                        onChange={handleChange('category')}
                        value={category}
                    >
                        <option value="plastic">پلاستیک</option>
                        <option value="paper" selected>کاغذ</option>
                        <option value="papaya">Papaya</option>
                        <option value="watermelon">Watermelon</option>
                    </select>
                    <label>نوع زباله</label>
                </div>

                <div className="form-group">
                    <label className="text-muted">
                        وزن حدودی
                    </label>
                    <input
                        onChange={handleChange('weight')}
                        value={weight}

                        // placeholder="Name"
                        // onChange={handleChange('name')}
                        type="text"
                        className="form-control"
                        // value={name}
                    />
                    <label className="text-muted">
                        کیلوگرم
                    </label>
                </div>

                <div className="custom-file was-validated mb-3">

                    <input
                        onChange={handleSelectedPhoto}
                        // value={photo}

                        placeholder="Cover Photo"
                        type="file"
                        name="photo"
                        // onChange={handleSelectedPhoto}
                        className="custom-file-input"
                        id="validatedCustomFile"
                        required

                    />
                    <label className="custom-file-label text-center" htmlFor="validatedCustomFile">عکس</label>
                </div>

                <div>
                    زمان مناسب برای تحویل
                    <div>

                        <input
                            type="date"
                            onChange={handleChange('dateStart')}
                            value={dateStart}

                        />
                        <input
                            type="time"
                            onChange={handleChange('timeStart')}
                            value={timeStart}

                        />
                        از
                    </div>
                    <div>
                        <input
                            type="date"
                            onChange={handleChange('dateEnd')}
                            value={dateEnd}

                        />
                        <input
                            type="time"
                            onChange={handleChange('timeEnd')}
                            value={timeEnd}

                        />

                        تا
                    </div>

                </div>

                <label className="custom-file-label text-center" htmlFor="validatedCustomFile">آدرس</label>
                <div>
                    <textarea
                        name="message" rows="10" cols="30"
                        onChange={handleChange('address')}
                    ></textarea>
                </div>
                <button
                    onClick={(e) => onSubmit(e)}
                >
                    submit</button>

            </form>
            <button onClick={()=>dispatch2({ type: 'INCREMENT' })}>
                increment
            </button>
        </div>
    );
};

export default Sell;