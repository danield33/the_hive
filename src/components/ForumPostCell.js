import {ProfilePicture} from "./ProfilePicture";
import '../index.css'

export function ForumPostCell({item}) {

    const {index, username, postName} = item;

    return (
        <div className={'formPostCellContainer'}>

            <div className={'cellNumber'}>
                <p style={{fontSize: 30, alignSelf: 'center'}}>{index + 1}</p>
            </div>
            <div className={'forumPostCell'}>
                <ProfilePicture size={75}/>
                <p style={{
                    fontSize: 30,
                }}>{username}</p>
            </div>
            <div>
                <p style={{fontSize: 30, marginLeft: 20}}>{postName}</p>
            </div>

        </div>

    );
};