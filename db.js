const {MongoClient} = require('mongodb')

async function main() {
    const uri = 'mongodb+srv://cse341:cse341@cse-341-cluster.sesmog7.mongodb.net/?appName=cse-341-cluster';
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await listDatabases(client)
    } catch (e) {
        console.error(e)
    }
    finally {
        await client.close()
    }
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(`- ${db.name}`));
}


main().catch(console.error);