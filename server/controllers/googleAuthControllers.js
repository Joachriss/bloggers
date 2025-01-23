import axios from "axios";

const googleAuthentication = async (req, res) => {
    console.log(req.body);
    try {
        const accessToken = req.body.accessToken;
        console.log(accessToken);
        const userData = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        console.log(userData.data);
        res.json(userData.data);
    } catch (error) {
        console.log(error);
    }

}

export {
    googleAuthentication
}