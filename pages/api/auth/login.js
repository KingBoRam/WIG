import { writeDB, readDB, appendDB, deleteDB, existsDB } from '../../utils/databaseUtil';

export default function handler(req, res) {
    if (req.method === "POST") {
        const { id, pass } = req.body;
        let response = {};

        const failMsg = "not matched id / pass.";
        const succMsg = "success";

        const user = readDB(id);
        if (user === null) {
            failResponse(res, failMsg);
        } else {
            if (user.pass === pass) {
                succResponse(res, succMsg);
            } else {
                failResponse(res, failMsg);
            }
        }
    } else if (req.method === "DELETE") {
        const id = req.body.id;
        if(existsDB(id)) {            
            deleteDB(id);
            succResponse(res, "success");
        } else{
            failResponse(res, "no such id");
        }
    }
}

function failResponse(res, message) {
    const response = {
        result: false,
        message: message
    }
    res.status(200).json(response);
}

function succResponse(res, message) {
    const response = {
        result: true,
        message: message
    }
    res.status(200).json(response);
}