
export default function handler(req, res) {
    if (req.method === "GET") {
        // res.status(200).json({ message: "GET request handled" });
    } else if (req.method === "POST") {
        const { id, pass } = req.body;
        let response = {};
        if(id === "admin" && pass === "1234"){
            response = {
                result: true,
                message: "success"
            }
        } else {
            response = {
                result: false,
                message: "not matched id / pass."
            }
        }
        res.status(200).json(response);
    } else if (req.method === "PUT") {
        // res.status(200).json({ message: "PUT request handled" });
    } else {
        // res.status(405).json({ message: "Method Not Allowed" });
    }
}