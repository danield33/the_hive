import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import {Dropdown} from "../../components/Dropdown";
import {Switch} from "../../components/Switch";

class Account extends Component {

    renderCheckBox(){
        return(
            <div style={{marginTop: -50}}>
                <p style={{fontSize: 20}} className={'inputName'}>Private:</p>
                <input type={'checkbox'} style={{height: 20, width: 20}}/>
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
                                    <p className={'inputName'}>Name:</p>
                                    <input className={'formInput'}/>
                                </div>

                                {this.renderCheckBox()}
                            </div>

                            <div className={'tblDesc'}>
                                <div>
                                    <p className={'inputName'}>Email:</p>
                                    <input className={'formInput'}/>
                                </div>
                                {this.renderCheckBox()}
                            </div>

                            <div className={'tblDesc'}>

                                <div>
                                    <p className={'inputName'}>Alias:</p>
                                    <input className={'formInput'}/>
                                </div>
                                {this.renderCheckBox()}

                            </div>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p className={'inputName'}>Bio/Other Info</p>
                                <textarea/>
                            </div>

                        </td>

                        <td>

                            <div className={'tblDesc'}>
                                <div>
                                    <p className={'inputName'}>Language:</p>
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
                                    <p className={'inputName'}>Light/Dark Mode</p>
                                    <Switch trueColor={'black'} falseColor={'lightgrey'}/>
                                </div>
                            </div>

                            <br/><br/>
                            <p className={'inputName'}>Invitations</p>
                            <br/>
                            <p className={'inputName'}>Group Requests</p>


                        </td>

                    </tr>
                </table>
            </div>
        );
    }
}

Account.propTypes = {};

export default Account;