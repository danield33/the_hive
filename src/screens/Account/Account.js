import React, {Component} from 'react';
import './styles.css'
import {Dropdown} from "../../components/Dropdown";
import {Switch} from "../../components/Switch";

export class Account extends Component {

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
            <div style={{display: 'flex', flex: 1}}>
                <table border={1} style={{flex: 1}}>
                    <tr>
                        <th>
                           <p style={{fontSize: 20}}>
                               Personal Information
                           </p>
                        </th>
                        <th>
                            <p style={{fontSize: 20}}>
                                Display Settings
                            </p>
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
                                <textarea style={{fontSize: 20}}/>
                            </div>

                        </td>

                        <td>

                            <div className={'tblDesc'}>
                                <div>
                                    <p className={'inputName'}>Language:</p>
                                    <Dropdown
                                    selectStyle={{fontSize: 20}}
                                    optionStyle={{fontSize: 20}}
                                        data={[
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
                            <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                                <p className={'inputName center'}>Invitations</p>
                                <br/>
                                <p className={'inputName center'}>Group Requests</p>
                            </div>


                        </td>

                    </tr>
                </table>
            </div>
        );
    }
}

Account.propTypes = {};

