import avatar from '../../assets/images/avatar.png';

export default function AvatarCard(props) {
    const basics = props.profile.basics;
    const skills = props.profile.skills;

    return (
        <div className="avatar-card">
            <div className="avatar-card__avatar">
                {/* <img src={basics.image} alt="avatar" /> */}
                <img src={avatar} alt="avatar" />
            </div>
            <div className="avatar-card__info">
                <h3>{basics.name}</h3>
                <p>{basics.label}</p>
                <div>{skills.map((skill, index) => <div key={index}>{skill.name} </div>)}</div>
            </div>
        </div>
    );
}