<template>
  <div>
    <Table :columns="Col" :data="Data"></Table>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: [],
  data () {
    return {
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
      Data: [

      ]
    }
  },
  beforeCreate () {
  },
  created () {
    this.getLists();
  },
  beforeMount () {
  },
  mounted () {
    //this.axios.post('http://domain.com/server/newsLists.php').then(list => {
    //  this.Data = list.Data;
    //  })

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
  },
  methods: {
    getLists () {
      this.apidata('http://domain.com/server/newsLists.php', {}, re => {
        let result = re.lists;
        if (result) {
          this.Data = result;
          console.log(this.Data)
        }
      }, err => {

      });
    }
  },
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss">
</style>
