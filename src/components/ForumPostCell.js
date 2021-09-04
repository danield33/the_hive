import {ProfilePicture} from "./ProfilePicture";
import '../index.css'

export function ForumPostCell() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
        }}>

            <div className={'forumPostCell'}>
                <ProfilePicture size={75}/>
                <p style={{
                    fontSize: 30,
                }}>Daniel</p>
            </div>
            <div style={{
                'display': 'flex',
                flex: 1
            }}>
                <p style={{fontSize: 30, marginLeft: 20}}>Covid-19 Disaster Plan</p>
            </div>

        </div>
    );
};