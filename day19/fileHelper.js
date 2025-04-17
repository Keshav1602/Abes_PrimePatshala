const fs = require("fs/promises")

const saveObjinFile = async (obj)=>{
    try {
        await fs.access("./data.json");
    } catch {
        await fs.writeFile("./data.json", JSON.stringify([]));
    }
    const oldData = await fs.readFile("./data.json" , "utf-8");
    const oldDataArr = JSON.parse(oldData);
    const newData = [...oldDataArr , obj];
    await fs.writeFile("./data.json" , JSON.stringify(newData));

};

module.exports = saveObjinFile;