db.auth($MONGO_INITDB_ROOT_USERNAME, $MONGO_INITDB_ROOT_PASSWORD)
db = db.getSiblingDB($MONGO_INITDB_NAME)
db.getSiblingDB($MONGO_INITDB_NAME).createUser({user:$MONGO_INITDB_USERNAME, pwd:$MONGO_INITDB_PASSWORD, roles:[{role:'dbOwner',db:$MONGO_INITDB_NAME}],mechanisms:['SCRAM-SHA-256']});
db.createRole({role : "readWriteSystem", privileges: [{resource: { db: $MONGO_INITDB_NAME, collection: "system.indexes" }, actions: [ "changeStream", "collStats", "convertToCapped", "createCollection", "createIndex", "dbHash", "dbStats", "dropCollection", "dropIndex", "emptycapped", "find", "insert", "killCursors", "listCollections", "listIndexes", "planCacheRead", "remove", "renameCollectionSameDB", "update" ]}], roles:[]});
db.grantRolesToUser($MONGO_INITDB_USERNAME, ['readWriteSystem']);
