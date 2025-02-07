import { useState } from "react";
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import Input from "./Input";

const ChangePassword = ({ closeModal }) => {
  const [showInput, setShowInput] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordChange = async () => {
    if (!oldPassword.trim() || !newPassword.trim()) {
      setMessage("Please enter both old and new passwords.");
      return;
    }

    try {
      if (auth.currentUser) {
        // Re-authenticate the user with old password
        const credential = EmailAuthProvider.credential(
          auth.currentUser.email,
          oldPassword
        );
        await reauthenticateWithCredential(auth.currentUser, credential);

        // Update password
        await updatePassword(auth.currentUser, newPassword);
        setMessage("Password updated successfully!");
        setOldPassword("");
        setNewPassword("");
        setShowInput(false); // Hide input after success
      } else {
        setMessage("You must be logged in to change your password.");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-semibold mb-4">Change Password</h2>

      {!showInput ? (
        <button
          onClick={() => setShowInput(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Change Password
        </button>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <Input
            type="password"
            placeholder="Enter old password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="mb-2"
          />
          <Input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <div className="flex flex-wrap gap-2 mt-3">
            <button
              onClick={handlePasswordChange}
              className="bg-green-500 text-white px-3 py-2 rounded cursor-pointer"
            >
              Save New Password
            </button>
            <button
              onClick={() => setShowInput(false)}
              className="bg-gray-500 text-white px-3 py-2 rounded cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <p className="mt-2 text-sm text-gray-400">{message}</p>

      {closeModal && (
        <button onClick={closeModal} className="mt-4 text-blue-600 underline">
          Close
        </button>
      )}
    </div>
  );
};

export default ChangePassword;
