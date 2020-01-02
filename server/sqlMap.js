// sql语句
var sqlMap = {
    // 用户
    user: {
        login: 'SELECT `userpsw`,`id` FROM `user` WHERE `username` = ?;',
        add: 'insert into `user`(`username`, `userpsw`) values (?,?);'
    },
    news: {
        add: 'INSERT INTO `news`(`title`, `link`, `origin`, `content`, `theme`) values (?,?,?,?,?);'
    }


}

module.exports = sqlMap;
