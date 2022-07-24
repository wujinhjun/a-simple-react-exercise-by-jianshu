import React, { PureComponent, Fragment } from 'react';
import { Content, DetailWrapper, Header } from './style';
import { connect } from 'react-redux';
import { actionCreator } from './store';
// import { useParams } from 'react-router-dom';

class Details extends PureComponent {
    render() {
        // let params = useParams();
        // const a = RouteGet();
        console.log();
        return (
            <Fragment>
                {/* <RouteGet></RouteGet> */}
                <DetailWrapper>
                    <Header>{this.props.title}</Header>
                    <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
                </DetailWrapper>
            </Fragment>
        )
    }

    componentDidMount() {

        // console.log(id);
        this.props.getDetail(window.location.pathname.split('/')[2]);
        console.log(window.location.pathname.split('/')[2]);
    }
};
// function Invoice() {
//     let params = useParams();
//     let invoice = getInvoice(parseInt(params.invoiceId, 10));
//     return (
//         <main style={{ padding: "1rem" }}>
//             <h2>Total Due: {invoice.amount}</h2>
//             <p>
//                 {invoice.name}: {invoice.number}
//             </p>
//             <p>Due Date: {invoice.due}</p>
//         </main>
//     );
// };

const mapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
});

const mapDispatchToProps = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreator.getDetail(id));
    }
});

// const mapStateToId = ()

// connect(mapStateToId, null)(RouteGet);
export default connect(mapStateToProps, mapDispatchToProps)(Details);