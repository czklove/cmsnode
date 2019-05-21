/* 关闭线程池,已经弃用 */
function handleDisconnect(connection) {
    connection.on('error', function(err) {
        if (!err.fatal) {
        return;
        }

        if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
        throw err;
        }

        console.log('Re-connecting lost connection: ' + err.stack);

        connection = mysql.createConnection(connection.config);
        handleDisconnect(connection);
        connection.connect();
    });
}
/* 生成guid */
function getguid() {
    return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}
module.exports = { handleDisconnect, getguid }