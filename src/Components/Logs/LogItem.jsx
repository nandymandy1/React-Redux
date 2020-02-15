import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../store/actions/LogActions';

const LogItem = ({ log, deleteLog, setCurrent }) => {
    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal" className={`modal-trigger 
                    ${log.attention ? 'red-text' : 'blue-text'}`}
                >
                    {log.message}
                </a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span> last updated by{' '}
                    <span className="black-text">{log.tech}</span> on {' '}
                    <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
                </span>
                <a
                    href="#!"
                    className="secondary-content"
                    onClick={() => deleteLog(log.id)}
                >
                    <i className="material-icons grey-text">delete</i>
                </a>
                <a
                    href="#edit-log-modal"
                    className="modal-trigger secondary-content"
                    onClick={() => setCurrent(log)}
                >
                    <i className="material-icons grey-text">edit</i>
                </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { deleteLog, setCurrent })(LogItem);