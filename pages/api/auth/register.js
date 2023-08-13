import { writeDB, readDB, appendDB, deleteDB,existsDB } from '../../utils/databaseUtil';


export default function handler(req, res) {
    if (req.method === "POST") {
        const { id, pass, nickname, username, gender, telnum } = req.body;
        let response = {};

        if(existsDB(id)){
            response = {
                result: false,
                message: `'${id}' is already used`
            }
            res.status(200).json(response);
        } else {
            writeDB(id, req.body);
            response = {
                result: true,
                message: "success"
            }
            res.status(200).json(response);
        }
    }
}