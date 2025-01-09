import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
    const username = useLogin();
    const navigate = useNavigate();

    useEffect(() => {
        if (!username) {
            navigate("/login"); // Pastikan pengguna dialihkan jika username kosong
        }
    }, [username, navigate]);

    return (
        <div>
            <h1>Profile</h1>
            <p>Username: {username}</p>
        </div>
    );
}

export default ProfilePage;
