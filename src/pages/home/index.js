import React, { PureComponent, Fragment } from 'react';
import List from './components/List';
import Recommend from './components/Recommend'
import Topic from './components/Topic';
import Writer from './components/Writer';
import { HomeWrapper, HomeLeft, HomeRight, BackToTop } from './style';
import * as actionCreator from './store/actionCreator';
import { connect } from 'react-redux';


class Home extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Fragment>
                <HomeWrapper>
                    <HomeLeft>
                        <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
                        <Topic />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />
                    </HomeRight>
                    {this.props.showScroll ? <BackToTop onClick={this.handleScrollTop}>回到顶部</BackToTop> : null}
                </HomeWrapper>
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bineEvents();
    }

    bineEvents() {
        window.addEventListener('scroll', this.props.changeScrollShow);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollShow);
    }
}

const mapStateToProps = (state) => {
    return {
        showScroll: state.getIn(['home', 'showIf']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreator.getHomeInfo());
        },

        changeScrollShow() {
            if (document.documentElement.scrollTop > 100) {
                dispatch(actionCreator.getToggleShow(true));
            } else {
                dispatch(actionCreator.getToggleShow(false));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);