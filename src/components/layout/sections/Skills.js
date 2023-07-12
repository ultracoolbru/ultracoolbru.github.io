export default function Skills(props) {
    const skills = props.profile.skills;
    const keywords = [];
    skills.map((skill) => keywords.push(...skill.keywords));

    return (
        <div>
            {/* {skills.map((skill, index) => <div key={index}>{skill.name} </div>)} */}
            {keywords.map((keyword, index) => <div key={index}>{keyword} </div>)}
        </div>
    )
}