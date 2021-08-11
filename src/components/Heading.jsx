import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Heading() {
    const { user, color, setColor } = useContext(UserContext);
    const [state, setState] = useState({ value: "" })
   
    return (
        <div className="heading">
            <p>
                Welcome, {user.name}, &nbsp;
                <a href="#" onClick={() => { setUser(null) }}>Log out</a>
            </p>
            <hr />
            <p>Switch theme</p>
            <select
                onChange={(e) => setColor({ value: e.currentTarget.value })}
                className="ant-input selectBox"
                placeholder="Select a person"
                value={color.value}
                defaultValue={color.value}
            >
                <option value="light">Light blue</option>
                <option value="dark">Dark green</option>
            </select>
            <hr />

        </div >
    );
}