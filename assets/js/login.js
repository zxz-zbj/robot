$(function() {
    //点击去登陆
    $('#link_login').on('click', function() {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    // 点击去注册
    $('#link_reg').on('click', function() {
        $('.login-box').show()
        $('.reg-box').hide()
    })

    //自定义校验规则
    var form = layui.form
    form.verify({
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        repwd: function(value) {
            var pwd = $('.reg-box [name=password]').val()
            if (pwd !== value) {
                return "两次密码不一致"
            }

        }
    })
    $('#from_reg').on('submit', function(e) {
        e.preventDefault();
        $.post('http://ajax.frontend.itheima.net/api/reguser', {
            username: $('#form_reg' [name = username]).val(),
            password: $('#form_reg' [name = password]).val()
        }, function(res) {
            if (status !== 0) {
                return console.log(res.message);

            }
            alert('注册成功')
        })
    })
})