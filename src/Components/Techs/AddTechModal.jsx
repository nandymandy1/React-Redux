import PropTypes from 'prop-types';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTech } from '../../store/actions/TechnicianActions';


const AddTechModal = ({ addTech }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            // eslint-disable-next-line
            M.toast({ html: 'Please enter a message and Tech' });
        }
        else {
            addTech({ firstName, lastName });
            // eslint-disable-next-line
            M.toast({ html: `${firstName} ${lastName} added.` });
            // Clear Fields
            setFirstName("");
            setLastName("");
        }
    }

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={
                                (e) => setFirstName(e.target.value)
                            }
                        />
                        <label htmlFor="firstName" className="active">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={
                                (e) => setLastName(e.target.value)
                            }
                        />
                        <label htmlFor="lastName" className="active">Last Name</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a
                    href="#!"
                    className="modal-close waves-effect waves-blue btn blue"
                    onClick={onSubmit}
                >Enter</a>
            </div>
        </div>
    )
}

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired,
}

export default connect(null, { addTech })(AddTechModal)