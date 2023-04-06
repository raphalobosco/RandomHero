import axios from "axios";

export default async (req, res) => {
    const { name } = req.query;

    try {
        const response = await axios.get(
            `https://superheroapi.com/api/910406413624867/${name}`
        );
        const data = response.data;
        res.status(200).json({ data });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};
