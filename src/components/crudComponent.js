import React, { useState } from 'react'

const CrudComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [course, setCourse] = useState("");
    const [user, setUser] = useState("");
    const [array, setArray] = useState([]);

    const handleSubmit = () => {
        setArray([...array, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            gender: gender,
            course: course,
            user: user,
        }])
        setFirstName('')
        setLastName('')
        setEmail('')
        setGender('')
        setCourse('')
        setUser('')
        console.log(array);
    }

    return (
        <div>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div>
                <label> Gender: </label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => { setGender(e.target.value) }}
                />
                Male &nbsp;
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => { setGender(e.target.value) }}
                />
                Female
                <br />
            </div>
            <div>
                <label> Courses </label>
                <select
                    name="courses"
                    value={course}
                    onChange={(e) => { setCourse(e.target.value) }}
                >
                    <option value=""> -- Select -- </option>
                    <option value="React"> React </option>
                    <option value="Angular"> Angular </option>
                    <option value="Node"> Node </option>
                </select>
            </div>
            <div>
                <label> User </label>
                <select
                    name="user"
                    value={user}
                    onChange={(e) => { setUser(e.target.value) }}
                >
                    <option value=""> -- Select -- </option>
                    <option value="teacher"> Teacher </option>
                    <option value="student"> Student </option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default CrudComponent