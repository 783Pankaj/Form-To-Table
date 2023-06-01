import React from "react";
// import { useParams } from "react-router";
import { useNavigate } from "react-router";

const MainPage = () => {

    // const { first } = useParams();
    const navigate = useNavigate()
    const gotoFirst = () => {
        navigate("/first")
    }

    return (
        <div className="main-cont">
            <label>This is Test Page</label>
            <br />
            <button type="start"
                className="start"
                onClick={() => gotoFirst()}
            >Start  </button>
        </div>
    );
}
export default MainPage;