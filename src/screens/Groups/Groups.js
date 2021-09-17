import React, {Component} from 'react';
import '../../index.css'

export class Groups extends Component {

    renderGroupRow() {
        return (
            <tr style={{backgroundColor: 'lightblue'}}>
                <td style={{display: 'flex', flex: 1, justifyContent: 'center'}}>
                    <img
                        src={"data:image/jpeg;base64,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"}/>
                </td>
                <td>
                    <p>Members: 23</p>
                    <p>Queen Bee: George Washington</p>
                    <p>Created At: January 1st Feb 20</p>
                    <p>Other Data</p>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <table style={{flex: 1}} border={2}>
                    <tr>
                        <th style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <button className={"newButton"}>
                                <p className={"plusButton"}>+</p>
                            </button>
                            Create Group
                        </th>
                        <th>
                            Active Groups
                        </th>
                        <th>
                            Archived Groups
                        </th>
                    </tr>
                </table>

                <table border={1}>
                    <tr>
                        <th style={{width: '20%'}}>Icon</th>
                        <th>Settings</th>
                    </tr>

                    {this.renderGroupRow()}

                </table>

            </div>
        );
    }
}

Groups.propTypes = {};
