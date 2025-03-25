import { useState } from "react";
import UserCart from "./userCart";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({user})=>{
        // const {firstName, lastName, photoUrl, age, about} = user;
        const [firstName, setFirstName] = useState(user.firstName);
        const [lastName, setLastName] = useState(user.lastName);
        const [age, setAge] = useState(user.age);
        const [gender, setGender] = useState(user.gender);
        const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
        const [about, setAbout] = useState(user.about);
        const [error, setError] = useState("");
        const [showToast, setShowToast] = useState(false);
        const dispatch = useDispatch();

        const saveProfile = async ()=>{
            setError("");
            try{
                const res = await axios.patch(BASE_URL+"/profile/edit", {firstName, lastName, age, photoUrl, about,gender}, {withCredentials: true});
                dispatch(addUser(res?.data?.data));
                setShowToast(true);
                setTimeout(()=>{
                    setShowToast(false);
                }, 3000);
            }catch(err){
                setError(err.response.data);
            }
        }

    return(
        <>
        <div className="flex justify-center my-5 ">
        <div className="flex justify-center mx-5">
        <div className="card bg-emerald-300 w-96 shadow-lg rounded-lg p-6">
          <div className="card-body">
            <h2 className="card-title text-center text-2xl font-semibold text-gray-700">Login</h2>
            <div  >
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600">First Name:</span>
                </div>
                <input 
                  type="email"
                  value={firstName}
                  className="input input-bordered w-full max-w-xs focus:ring-2 focus:ring-blue-400"
                  onChange={(e) =>setFirstName(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600">Last Name:</span>
                </div>
                <input 
                  type="email"
                  value={lastName}
                  className="input input-bordered w-full max-w-xs focus:ring-2 focus:ring-blue-400"
                  onChange={(e) =>setLastName(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600">PhotoURL:</span>
                </div>
                <input 
                  type="email"
                  value={photoUrl}
                  className="input input-bordered w-full max-w-xs focus:ring-2 focus:ring-blue-400"
                  onChange={(e) =>setPhotoUrl(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600">Age:</span>
                </div>
                <input 
                  type="email"
                  value={age}
                  className="input input-bordered w-full max-w-xs focus:ring-2 focus:ring-blue-400"
                  onChange={(e) =>setAge(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600">Gender:</span>
                </div>
                <input 
                  type="email"
                  value={gender}
                  className="input input-bordered w-full max-w-xs focus:ring-2 focus:ring-blue-400"
                  onChange={(e) =>setGender(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600">About:</span>
                </div>
                <input 
                  type="email"
                  value={about}
                  className="input input-bordered w-full max-w-xs focus:ring-2 focus:ring-blue-400"
                  onChange={(e) =>setAbout(e.target.value)}
                />
              </label>
            </div>
            <div className="card-actions justify-center mt-4">
              <p className="text-red-600">{error}</p>
              <button className="btn btn-primary w-full hover:bg-blue-600 " onClick={saveProfile}>Save Profile</button>
            </div>
          </div>
        </div>
      </div>
        <UserCart user ={{firstName, lastName, photoUrl, age,about,gender}} />
      </div>
     { showToast && <div className="toast toast-top toast-center">
   <div className="alert alert-success">
    <span>Profile save successfully.</span>
  </div>
</div>}
      </>
    )
}


export default EditProfile;