import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { updateLog } from '../../store/actions/LogActions';


const EditLogModal = ({ current, updateLog }) => {

    const [tech, setTech] = useState("");
    const [message, setMessage] = useState("");
    const [attention, setAttention] = useState(false);

    useEffect(() => {
        if (current) {
            setTech(current.tech);
            setMessage(current.message);
            setAttention(current.attention);
        }
    }, [current])

    const onSubmit = () => {
        if (message === '' || tech === '') {
            // eslint-disable-next-line
            M.toast({ html: 'Please enter a message and Tech' });
        }
        else {
            // Clear Fields
            updateLog({ tech, message, attention, id: current.id })
            setAttention(false);
            setMessage("");
            setTech("");
        }
    }

    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Edit System Log</h4>
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
                            <option value="Brad Traversy">Brad Traversy</option>
                            <option value="Alex Garret">Alex Garret</option>
                            <option value="Narendra Maurya">Narendra Maurya</option>
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
                    onClick={() => onSubmit()}
                >Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: "75%",
    height: "75%"
}

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);