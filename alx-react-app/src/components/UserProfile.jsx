const UserProfile = (props) => {
    return (
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px", maxWidth: "300px", textAlign: "center", margin: "20px auto" }}>
            <h2>{props.name}</h2>
            <p><strong>Age:</strong> {props.age}</p>
            <p><strong>Bio:</strong> {props.bio}</p>
        </div>
    );
};

export default UserProfile;

