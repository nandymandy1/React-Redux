import LogItem from './LogItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Preloader from '../Layouts/Preloader';
import { getLogs } from '../../store/actions/LogActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, [])

    return loading || logs === null ?
        <Preloader />
        : (
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4 className="center">System Logs</h4>
                </li>
                {
                    logs.length === 0 ?
                        (
                            <p className="text-grey">No Logs found...</p>
                        )
                        :
                        (
                            logs.map(logItem => <LogItem key={logItem.id} log={logItem} />)
                        )
                }
            </ul>
        )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);