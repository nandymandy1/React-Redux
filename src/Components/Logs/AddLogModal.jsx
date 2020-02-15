import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { addLog } from '../../store/actions/LogActions';

const AddLogModal = ({ addLog, techs }) => {

    const [tech, setTech] = useState('');
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);

    const onSubmit = () => {
        if (message === '' || tech === '') {
            // eslint-disable-next-line
            M.toast({ html: 'Please enter a message and Tech' });
        }
        else {
            const newLog = { tech, attention, message, date: new Date };
            addLog(newLog);
            // eslint-disable-next-line
            M.toast({ html: `Log added by ${tech}` })
            // Clear Fields
            setAttention(false);
            setMessage("");
            setTech("");
        }
    }

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text"
                            id="message"
                            name="message"
                            value={message}
                            onChange={
                                (e) => setMessage(e.target.value)
                            }
                        />
                        <label htmlFor="message" className="active">Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select
                            name="tech"
                            id="tech"
                            className="browser-default"
                            value={tech}
                            onChange={
                                (e) => setTech(e.target.value)
                            }
                        >
                            <option value="" disabled>Select Technician</option>
                            {techs.map(tech => (
                                <option
                                    key={tech.id}
                                    value={`${tech.firstName} ${tech.lastName}`}
                                >
                                    {`${tech.firstName} ${tech.lastName}`}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention}
                                    onChange={
                                        (e) => setAttention(!attention)
                                    }
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
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

const modalStyle = {
    width: "75%",
    height: "75%"
}

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired,
    techs: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    techs: state.tech.techs
});

export default connect(mapStateToProps, { addLog })(AddLogModal)