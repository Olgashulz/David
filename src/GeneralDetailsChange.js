import React, {useState} from "react";
import "./generalDetailsChange.css";
import EditName from "./EditName"

export const GeneralDetailsChange = () => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleEditClick = (index) => {
        if (clickedIndex === index) {
            setClickedIndex(null);
        } else {
            setClickedIndex(index);
        }
    };

    const generalDetailsItems = [
        {
            title: "Name",
            type: "name",
            value: "John Doe",
            edit: <EditName/>,
        },
        {
            title: "Username",
            type: "username",
            value: "https://www.comuniverse.com/John.Doe.666",
            edit: "Username"
        },
        {
            title: "Email (Primary)",
            type: "email",
            value: "johnd@gmail.com",
            edit: "Email",
        },
        {
            title: "Mobile (Primary)",
            type: "mobile",
            value: "The community is / can be hidden from search.",
            edit: "Mobile"
        },
        {
            title: "Password",
            type: "password",
            value: "********",
            edit: "Mobile"
        }
    ];

    return (
        <div className="overlap-general-details-change">
            <div className="text-wrapper-20">General Details</div>
            <ul className="overlap-general-details-change-list">
                {generalDetailsItems.map((item, index) => (
                    <li key={index} className="overlap-8 overlap-general-details-change-list-item">
                        <div className="overlap-general-details-change-box-item-info">
                            <div className="overlap-general-details-change-box-item-title">{item.title}</div>
                            <div className="overlap-general-details-change-box-item-value">{item.value}</div>
                            {clickedIndex === index && item.edit}
                        </div>
                        <img
                            className="edit"
                            alt="Edit"
                            src={clickedIndex === index ? "https://cdn-icons-png.flaticon.com/256/106/106830.png" : "https://cdn-icons-png.flaticon.com/512/5996/5996831.png"}
                            onClick={() => handleEditClick(index)}
                        />

                    </li>
                ))}
            </ul>
        </div>
    );
};
