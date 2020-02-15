import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useRef } from 'react';
import { searchLogs } from '../../store/actions/LogActions';

const SearchBar = ({ searchLogs }) => {
    const keyword = useRef('')

    const onChange = (e) => {
        searchLogs(keyword.current.value)
    }

    return (
        <nav style={{ marginBottom: '30px' }} className="blue">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input
                            id="search"
                            required
                            type="search"
                            ref={keyword}
                            onChange={onChange}
                            placeholder="Search Logs..."
                        />
                        <label className="label-icon" htmlFor="search">
                            <i className="material-icons">search</i>
                        </label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

SearchBar.propTypes = {
    searchLogs: PropTypes.func.isRequired
}

export default connect(null, { searchLogs })(SearchBar)