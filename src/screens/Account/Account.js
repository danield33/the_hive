import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css'

class Account extends Component {
    render() {
        return (
            <div>
                <table border={2}>
                    <tr>
                        <th>
                            Personal Information
                        </th>
                        <th>
                            Display Settings
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <div className={'tblDesc'}>
                                <p>Name:</p>
                                <input className={'formInput'}/>
                            </div>
                            <div className={'tblDesc'}>

                                <p>Email:</p>
                                <input className={'formInput'}/>

                            </div>
                            <div className={'tblDesc'}>

                                <p>Alias:</p>
                                <input className={'formInput'}/>

                            </div>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p>Bio/Other Info</p>
                                <textarea/>
                            </div>

                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

Account.propTypes = {};

export default Account;