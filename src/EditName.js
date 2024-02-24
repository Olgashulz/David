import React from "react";
const EditName = ({ setShowEditName }) => {
    return (
        <div className="editName-general">
            <div className="overlap-5">
                <div className="text-wrapper-8">Preview Your New Name</div>
                <img
                    className="close"
                    alt="Close"
                    // src={close}
                    onClick={() => setShowEditName(false)}
                />
            </div>
            <div className="overlap-6">
                <div className="overlap-7">
                    <div className="text-wrapper-9">John Doe</div>
                    <img
                        className="radio"
                        alt="Radio"
                        src="https://c.animaapp.com/49S8L1kQ/img/radio-12@2x.png"
                    />
                </div>
                <div className="overlap-group-3">
                    <div className="text-wrapper-10">Doe John</div>
                    <img
                        className="radio-chosen"
                        alt="Radio chosen"
                        src="https://c.animaapp.com/49S8L1kQ/img/radiochosen@2x.png"
                    />
                </div>
                <div className="overlap-8">
                    <input className="text-wrapper-password" type="password" />
                    {/*<img className="password" alt="Password" src={eye} />*/}
                </div>
                <p className="text-wrapper-12">
                    Choose how your name will appear on your profile.
                </p>
                <p className="text-wrapper-13">
                    If you’re happy with the new name, please enter your password:
                </p>
                <div className="text-wrapper-14">Password:</div>
                <div className="overlap-wrapper">
                    <div className="div-wrapper">
                        <div className="text-wrapper-15">Cancel</div>
                    </div>
                </div>
                <div className="overlap-group-wrapper">
                    <div className="overlap-9">
                        <div className="text-wrapper-16">Save Changes</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditName;
