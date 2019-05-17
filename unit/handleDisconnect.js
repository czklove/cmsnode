/* 关闭线程池 */
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
module.exports = handleDisconnect