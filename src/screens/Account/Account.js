import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import {Dropdown} from "../../components/Dropdown";
import {Switch} from "../../components/Switch";

class Account extends Component {

    renderCheckBox(){
        return(
            <div>
                <p>Private:</p>
                <input type={'checkbox'}/>
            </div>
        )
    }


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
                                <div>
                                    <p>Name:</p>
                                    <input className={'formInput'}/>
                                </div>

                                {this.renderCheckBox()}
                            </div>

                            <div className={'tblDesc'}>
                                <div>
                                    <p>Email:</p>
                                    <input className={'formInput'}/>
                                </div>
                                {this.renderCheckBox()}
                            </div>

                            <div className={'tblDesc'}>

                                <div>
                                    <p>Alias:</p>
                                    <input className={'formInput'}/>
                                </div>
                                {this.renderCheckBox()}

                            </div>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p>Bio/Other Info</p>
                                <textarea/>
                            </div>

                        </td>

                        <td>

                            <div className={'tblDesc'}>
                                <div>
                                    <p>Language:</p>
                                    <Dropdown data={[
                                        {
                                            text: "English",
                                            val: "eng"
                                        },
                                        {
                                            text: "Spanish",
                                            val: "esp"
                                        }
                                    ]} name={'languages'}/>
                                </div>
                            </div>

                            <div className={'tblDesc'}>
                                <div>
                                    <p>Light/Dark Mode</p>
                                    <Switch trueColor={'black'} falseColor={'lightgrey'}/>
                                </div>
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