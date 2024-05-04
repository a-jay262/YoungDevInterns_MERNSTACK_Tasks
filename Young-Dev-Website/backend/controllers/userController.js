const user = require('../models/userModel');


async function signUp(req, res) {
    try {
        console.log(req.body);
        // Check if a user with the provided email already exists
        const existingUser = await user.findOne({ email: req.body.email });
        console.log("Email is: ", req.body.email);

        if (existingUser) {
            // Email is already registered, return an error response
            return res.status(400).json({ error: "Email is already registered" });
        }

        // If the email is not registered, create a new user
        const newUser = await user.create(req.body); 
        // Assuming "user" is the schema
        return res.status(200).json({
            message: 'Signed Up successfully',
            id: newUser._id,
            email: req.body.email,
            uName: newUser.uName,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ apierror: error });
    }
}

async function logIn(req, res) {
    const { email, password } = req.body;
    try {
        const u = await user.findOne({ email });
        if (!u) return res.status(404).json({ error: 'User not found' });
        if (u.password != password) return res.status(401).json({ error: 'Invalid Credentials' });
        var token = GenerateToken(u);

        return res.status(200).json({
            message: 'Logged in successfull',
            id: u._id,
            email: email,
            firstName: u.firstName,
            role: u.role,
            token: token,
        });
         

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    signUp,
    logIn
}