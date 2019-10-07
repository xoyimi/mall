<template>
  <div class="detail-param-info">
    <div><img src="detailParamInfo.image" alt=""></div>
    <table>
      <tr v-for="total in detailParamInfo.sizes[0]">
        <td v-for="item in total">{{item}}</td>
      </tr>
    </table>
    <table>
      <tr v-for="total in detailParamInfo.infos">
        <td class="color" v-for="item in total">{{item}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props: {
      detailParamInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-param-info{
    padding: 8px;
    border-bottom: 3px solid rgba(100,100,100,.1);
  }
  img{
    width: 100%;
  }
  table {
    text-align: center;
    width: 100%;
    line-height: 30px;
    border-collapse: collapse;
  }
  td {
    border-bottom: 1px solid rgba(100, 100, 100, .1);

  }
  .color:nth-last-child(1){
    color: var(--color-high-text);
    text-align: left;
    padding-left: 40px;
  }
  .color:first-child{
    white-space:nowrap;

  }
</style>