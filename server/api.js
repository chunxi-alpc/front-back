var models = require('./db'); //数据库链接信息
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('./sqlMap'); //sql语句

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 登录用户接口
router.post('/login', (req, res) => {
    var sql = $sql.user.login;
    var params = req.body;
    console.log("sql", sql);
    console.log("params", params);
    conn.query(sql, [params.username], function(err, result) {
        if (err) {
            console.log(err);
            return res.redirect('/');
        }
        if (result) {
            jsonWrite(res, result);
            return res.send("返回回来了！");
        }
    })
});
// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log("sql", sql);
    console.log("params", params);
    conn.query(sql, [params.username, params.userpsw], function(err, result) {
        if (err) {
            console.log(err);
            return res.redirect('/')
        }
        if (result) {
            jsonWrite(res, result);
            return res.send("返回回来了！");
        }


    })
});

// addnews
router.post('/addnews', (req, res) => {
    var sql = $sql.news.add;
    var params = req.body;
    console.log("sql", sql);
    console.log("params", params);
    conn.query(sql, [params.news.title, params.news.link, params.news.origin, params.news.content, params.news.theme], function(err, result) {
        if (err) {
            console.log(err);
            return res.redirect('/')
        }
        if (result) {
            jsonWrite(res, result);
            return res.send("返回回来了！");
        }

    })

});


// newslist
router.post('/all', (req, res) => {
    var sql = $sql.news.all;
    //var params = req.body;
    console.log("sql", sql);
    conn.query(sql, [], function(err, result) {
        if (err) {
            console.log(err);
            return res.redirect('/')
        }
        if (result) {
            jsonWrite(res, result);
            return res.send(result);
        }
    })
});

module.exports = router;
