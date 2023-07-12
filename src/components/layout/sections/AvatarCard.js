import avatar from '../../assets/images/avatar.png';

import Skills from './Skills';

export default function AvatarCard(props) {
    const basics = props.profile.basics;    

    return (
        <div className="avatar-card">
            <div className="avatar-card__avatar">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="avatar-card__info">
                <h3>{basics.name}</h3>
                <p>{basics.label}</p>
                <Skills profile={props.profile} />
            </div>
        </div>
    );
}