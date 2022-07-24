import React, { PureComponent } from "react";
import { connect } from "react-redux/es/exports";
import {
    AddButton,
    Addition,
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    NavSearchBar,
    NavSearchIcon,
    SearchInfo,
    SearchInfoItem,
    SearchInfoSwitch,
    SearchInfoTitle
} from "./style";
import { CSSTransition } from "react-transition-group";
import { actionCreator } from './store';
import { Link } from "react-router-dom";
import { actionCreator as loginActionCreator } from '../../pages/login/store';

class Header extends PureComponent {
    getListArea = () => {

        const {
            list,
            focused,
            page,
            totalPage,
            mouseIn,
            handleMouseEnter,
            handleMouseLeave,
            handleChangePage
        } = this.props;
        const newList = list.toJS();
        const pageList = [];
        // console.log();
        if (newList.length) {
            for (let i = (page * 10); i < (page + 1) * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => { handleChangePage(page, totalPage) }}>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {pageList}
                        {/* {list?.map((item) => {
                            return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                        })} */}
                    </div>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {

        const { focused, list, login, handleFocusInput, handleBlurInput, logout } = this.props;

        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='left'>会员</NavItem>
                    <NavItem className='left'>IT技术</NavItem>
                    {
                        login ?
                            <NavItem onClick={logout} className='right'>退出</NavItem> :
                            <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                    }
                    {/* <NavItem className='right'>登录</NavItem> */}
                    <NavItem className='right'>Aa</NavItem>
                    <NavSearchBar>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch className={focused ? 'focused' : ''}
                                onFocus={() => { handleFocusInput(list) }}
                                onBlur={handleBlurInput}
                            />
                        </CSSTransition>
                        <NavSearchIcon className={focused ? 'focused' : ''} />
                        {this.getListArea()}
                    </NavSearchBar>
                </Nav>
                <Addition>
                    <AddButton className="reg">注册</AddButton>
                    <Link to="/write"><AddButton className="writing">写文章</AddButton></Link>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', "list"]),
        page: state.getIn(['header', "page"]),
        totalPage: state.getIn(['header', "totalPage"]),
        mouseIn: state.getIn(['header', "mouseIn"]),
        login: state.getIn(['login', "login"]),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocusInput(list) {
            // if (list.size === 0) {
            //     dispatch(actionCreator.getList());
            // }
            (list.size === 0) && (dispatch(actionCreator.getList()));
            dispatch(actionCreator.getHandleFocusInput());
        },
        handleBlurInput() {
            dispatch(actionCreator.getHandleBlurInput());
        },
        handleMouseEnter() {
            dispatch(actionCreator.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreator.mouseLeave());
        },
        handleChangePage(page, totalPage) {
            if (page < totalPage - 1) {
                dispatch(actionCreator.pageChange(page + 1));
            } else {
                dispatch(actionCreator.pageChange(0));
            }

        },
        logout() {
            dispatch(loginActionCreator.logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);