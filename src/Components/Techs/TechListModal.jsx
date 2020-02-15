import TechItem from './TechItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useEffect } from 'react'
import { getTechs } from '../../store/actions/TechnicianActions';

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, [])

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading &&
                        techs.map(
                            tech => (
                                <TechItem key={tech.id} tech={tech} />
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    tech: state.tech
});


export default connect(mapStateToProps, { getTechs })(TechListModal)