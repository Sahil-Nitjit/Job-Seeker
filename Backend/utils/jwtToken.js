export const sendToken = (user, statusCode, res, message) => {
  try {
    const token = user.getJWTToken();
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    return res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
  } catch (err) {
    console.error("Error in sendToken:", err);
    console.log("JWT_SECRET_KEY =", process.env.JWT_SECRET_KEY);
    return res.status(500).json({ success: false, message: "Server error in sending token" });
  }
};
