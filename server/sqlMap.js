// sql语句
var sqlMap = {
    // 用户
    user: {
        login: 'SELECT `userpsw`,`id` FROM `user` WHERE `username` = ?;',
        add: 'insert into `user`(`username`, `userpsw`) values ( ?, ?);'
    }
}

module.exports = sqlMap;
