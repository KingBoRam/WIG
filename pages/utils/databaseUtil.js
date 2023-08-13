const fs = require('fs');

const filePath = `${process.cwd()}/database/`;

// JSON 데이터를 파일로 쓰는 함수
export function writeDB(dbName, data) {
    const dbPath = filePath + dbName;
    const jsonData = JSON.stringify(data, null, 2); // 들여쓰기 2
    fs.writeFileSync(dbPath, jsonData, 'utf8');
    console.log(`JSON data written to ${dbPath}`);
}

// JSON 파일을 읽어 데이터를 반환하는 함수
export function readDB(dbName) {
    const dbPath = filePath + dbName;
    try {
        const jsonString = fs.readFileSync(dbPath, 'utf8');
        const data = JSON.parse(jsonString);
        console.log(`JSON data read from ${dbPath}`);
        return data;
    } catch (err) {
        console.error(`Error reading JSON file from ${dbPath}:`, err);
        return null;
    }
}

// JSON 파일에 데이터를 추가하는 함수
export function appendDB(dbName, newData) {
    const dbPath = filePath + dbName;
    try {
        const existingData = readJSONFromFile(dbPath) || [];
        const updatedData = [...existingData, newData];
        writeJSONToFile(dbPath, updatedData);
        console.log(`JSON data appended to ${dbPath}`);
    } catch (err) {
        console.error(`Error appending JSON data to ${dbPath}:`, err);
    }
}

// JSON 파일 삭제하는 함수
export function deleteDB(dbName) {
    const dbPath = filePath + dbName;
    try {
        fs.unlinkSync(dbPath);
        console.log(`JSON file ${dbPath} deleted`);
    } catch (err) {
        console.error(`Error deleting JSON file ${dbPath}:`, err);
    }
}

// 파일의 존재 여부 확인하는 함수
export function existsDB(dbName) {
    const dbPath = filePath + dbName;
    return fs.existsSync(dbPath);
}
