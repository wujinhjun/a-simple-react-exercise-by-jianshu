import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

class Write extends PureComponent {
    render() {
        const { loginState } = this.props;
        // console.log(login);
        if (loginState) {

            return (
                <Fragment>
                    <div>write</div>
                </Fragment>
            )
        } else {
            return <Navigate to="/login" />;
        }

    }
};

const mapStateToProps = (state) => ({
    loginState: state.getIn(['login', 'login'])
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Write);