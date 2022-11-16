import React from 'react';

class ControlledForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            courses: '',
            user: '',
            error: {
                firstName: '',
                lastName: '',
                email: '',
                gender: '',
                user: '',
            },
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const errKeys = Object.keys(this.state).filter((key) => {
            if (this.state[key] === '' && key != 'error') {
                return key;
            }
        });

        if (errKeys.length >= 1) {
            alert('Please fill all the fields');
        } else {
            console.log(this.state);
        }
    };
    handleChange = (e) => {
        let error = { ...this.state.error };

        if (e.target.value === '') {
            error[e.target.name] = `${e.target.name} is required`;
        } else {
            error[e.target.name] = '';
        }
        this.setState({ [e.target.name]: e.target.value, error });
    };
    render() {
        return (
            <>
                <h3> Controlled Form </h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            First Name: <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                        <br />
                        <span style={{ color: 'red' }}>{this.state.error.firstName} </span>
                    </div>
                    <br />
                    <div>
                        <label> Last Name: * </label>
                        <input
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                        <br />
                        <span style={{ color: 'red' }}>{this.state.error.lastName} </span>
                    </div>
                    <br />
                    <div>
                        <label> Email: * </label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <br />
                        <span style={{ color: 'red' }}>{this.state.error.email} </span>
                    </div>
                    <br />
                    <div>
                        <label> Gender * </label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={this.handleChange}
                        />
                        Male &nbsp;
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={this.handleChange}
                        />
                        Female
                        <br />
                        <span style={{ color: 'red' }}>{this.state.error.gender} </span>
                    </div>
                    <br />
                    <div>
                        <label> Courses </label>
                        <select
                            name="courses"
                            value={this.state.courses}
                            onChange={this.handleChange}
                        >
                            <option value=""> -- Select -- </option>
                            <option value="React"> React </option>
                            <option value="Angular"> Angular </option>
                            <option value="Node"> Node </option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label> User </label>
                        <select
                            name="User"
                            value={this.state.user}
                            onChange={this.handleChange}
                        >
                            <option value=""> -- Select -- </option>
                            <option value="React"> Teacher </option>
                            <option value="Angular"> Student </option>
                        </select>
                    </div>
                    <br />
                    <button type="submit"> Submit </button> &nbsp; &nbsp;
                    <button type="button"> Reset </button>
                </form>
            </>
        );
    }
}

export default ControlledForm;
