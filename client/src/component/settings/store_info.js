import React, { Component ,Fragment} from 'react'
import Tabset_profile from './tabset_store';
import Breadcrumb from '../common/breadcrumb';


export class StoreInfo extends Component {
    render() {
        return (
            <Fragment>
                <Breadcrumb title="Profile" parent="Settings" />
                 <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="card profile-card">
                            <div className="card-body">
                                <Tabset_profile />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}



export default StoreInfo