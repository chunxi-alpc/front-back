<template>
  <div>
    <a href="javascript:void(0)" v-on:click="add">||&nbsp;&nbsp;&nbsp;增&nbsp;&nbsp;&nbsp;|</a>
    <a href="javascript:void(0)" v-on:click="del">|&nbsp;&nbsp;&nbsp;删&nbsp;&nbsp;&nbsp;|</a>
    <a href="javascript:void(0)" v-on:click="all">|&nbsp;&nbsp;&nbsp;查&nbsp;&nbsp;&nbsp;|</a>
    <a href="javascript:void(0)" v-on:click="modify">|&nbsp;&nbsp;&nbsp;改&nbsp;&nbsp;&nbsp;||</a>
    <div id="all">
      <Table :columns="Col" :data="tempData"></Table>
    </div>
    <Row id="add">
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
      editor: null,
      tempData: [],
      Col: [
        {
          title: '新闻名称',
          key: 'title'
        },
        {
          title: '新闻主题',
          key: 'theme'
        },
        {
          title: '新闻来源',
          key: 'origin'
        },
        {
          title: '新闻内容',
          key: 'content'
        },
      ],
      Data: []
    }

  },
  watch: {
    data (val) {
      this.tempData = util.deepCopy(val);
    },
  },
  mounted () {
    document.getElementById("add").style.display = "none";
    document.getElementById("all").style.display = "none";
  },
  methods: {
    add: function () {
      document.getElementById("add").style.display = "block";
      document.getElementById("all").style.display = "none";
    },
    all: function () {
      document.getElementById("all").style.display = "block";
      document.getElementById("add").style.display = "none";
      var url = "/api/all";
      this.$http.post(url).then(function (data) {
        var content = data.body;
        if (content.length != 0) {
          this.Data = content.lists;
          alert("获取成功");
          console.log("请求成功！ ", this.Data);

        } else {
          alert("获取失败");
        }
      }, function (response) {
        console.log(response);
      })
    },
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
          alert("添加成功！");
          this.$router.push({ name: '/addNews', params: { id: content[0].id } });
        } else {
          alert("失败");
        }
      }, function (response) {
        console.log(response);
      })
    }
  }
}
</script>

<style >
</style>
