import Loadable from 'react-loadable';
import React from 'react';
const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading() {
        return (<div>正在加载</div>)
    }
});

const DefaultCom = () => (
    <LoadableComponent />
);

export default DefaultCom;
// export default () => <LoadableComponent />

// export default class App extends React.Component {
//     render() {
//         return <LoadableComponent />;
//     }
// }