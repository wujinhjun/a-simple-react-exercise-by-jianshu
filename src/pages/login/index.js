import React, { PureComponent, Fragment } from 'react';
import { LoginWrapper, LoginBox, Input, TheButton } from './style';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import { Navigate } from 'react-router-dom';

class Login extends PureComponent {
    render() {
        const { loginState } = this.props;
        // console.log(login);
        if (!loginState) {

            return (
                <Fragment>
                    <LoginWrapper>
                        <LoginBox>
                            {/* <div>login</div> */}
                            <Input placeholder='账号' ref={(input) => { this.account = input }} />
                            <Input placeholder='密码' type='password' ref={(input) => { this.password = input }} />
                            <TheButton onClick={() => this.props.login(this.account, this.password)}>登录</TheButton>
                        </LoginBox>
                    </LoginWrapper>
                </Fragment>
            )
        } else {
            // return null;
            return <Navigate to="/" />;
        }

    }
};

const mapStateToProps = (state) => ({
    loginState: state.getIn(['login', 'login'])
});

const mapDispatchToProps = (dispatch) => ({
    login(account, password) {
        dispatch(actionCreator.login(account.value, password.value))
        // console.log(account.value, password.value);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);