import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreator } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        const { list, requestMoreList, page } = this.props;
        return (
            <Fragment>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={'./detail/' + item.get('id')}>
                                <ListItem >
                                    <img className='pic' src={item.get('imgUrl')} alt="" />
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        );
                    })
                }
                <LoadMore onClick={() => { requestMoreList(page) }}>阅读更多</LoadMore>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'articleList']),
        page: state.getIn(['home', 'articlePage']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestMoreList(page) {
            dispatch(actionCreator.getMoreList(page));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);