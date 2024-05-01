export const signup = async (user) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/verify-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const signup2 = async (user) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export async function login(email, password) {
  try {
    const user = { email, password }; // Create a user object with email and password
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });
    const { _id, shopName, ownerName} = user;
    const responseData = await response.json(); // Parse the response JSON
    return responseData;
  } catch (err) {
    console.error(err);
    return null; // or handle the error as needed
  }
}

export async function sendOTP(email) {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/sendEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(email),
    });

    if (!response.ok) {
      throw new Error(`Failed to send OTP: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error sending OTP:", err);
    throw err; // Re-throw the error to propagate it to the caller
  }
}

