import { useSelector } from "react-redux";
import Header from "../Components/Header";

function UserProfile() {
  const { user } = useSelector((state) => state.auth);

  const changePic = () => {};

  return (
    <>
      <Header />
      <section className="heading">
        <img
          src={
            user?.profilePic ||
            "https://img.freepik.com/free-icon/user_318-159711.jpg"
          }
          alt="Profile-Pic"
          width="200"
          height="200"
        />
        <p>Profile Picture</p>
      </section>

      <section className="form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user && user.name}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user && user.email}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block" onClick={changePic}>
            Change Photo
          </button>
        </div>
      </section>
    </>
  );
}

export default UserProfile;
