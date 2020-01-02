<template>
  <div>
    <Row>
      <Col span="15">
        <Form :label-width="80" :model="formItem">
          <FormItem label="新闻链接">
            <Input v-model="formItem.link" placeholder="请输入新闻的链接" />
          </FormItem>
          <FormItem label="新闻名称">
            <Input v-model="formItem.title" />
          </FormItem>
          <FormItem label="新闻内容">
            <Input v-model="formItem.content" placeholder type="textarea" :rows="10" />
          </FormItem>
          <FormItem label="新闻主题">
            <Input v-model="formItem.theme" />
          </FormItem>
          <FormItem label="新闻来源">
            <Input v-model="formItem.origin" />
          </FormItem>
          <Button type="primary" @click="submit">提交</Button>
        </Form>
      </Col>
    </Row>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'addnews',
  components: {},
  props: [],
  data () {
    return {
      formItem: {
        link: '',
        title: '',
        content: '',
        theme: '',
        origin: '',
      },
      editor: null
    }
  },
  beforeCreate () {
  },
  created () {
    //this.getCat();
  },
  beforeMount () {
  },
  mounted () {
  },
  beforeUpdate () {
  },
  updated () {
  },
  activited () {
  },
  deactivated () {
  },
  beforeDestroy () {
  },
  destroyed () {
    //this.editor.destory();
  },
  methods: {
    submit: function () {
      console.log(this.loginData);
      var url = "/api/addnews";
      this.$http.post(url, {
        news: this.formItem,
        user: this.editor
      }, {}).then(function (data) {
        console.log("请求成功！ ", data.body);
        var content = data.body;
        if (content.length != 0) {
          alert("登录成功！");
          this.$router.push({ name: '/addNews', params: { id: content[0].id } });
        } else {
          alert("账户密码错误！");
        }
      }, function (response) {
        console.log(response);
      })
    }
  },
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style >
</style>
