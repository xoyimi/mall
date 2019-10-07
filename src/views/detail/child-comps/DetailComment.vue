<template>
  <div class="detail-comment">
    <header>
      <span>用户评价</span>
      <span>更多...</span>
    </header>
    <main>
      <div class="avatar">
        <img :src="detailComment.avatar" alt="">
      </div>
      <span class="name"> {{detailComment.userName}}</span>
      <p class="content">{{detailComment.content}}</p>
      <span class="date">{{detailComment.time | showDate}} </span>
      <span class="style">{{detailComment.style}}</span>
      <div class="img" ><img v-for="item in detailComment.images" :src="item" alt=""></div>
    </main>
  </div>
</template>

<script>
  import {formatDate} from "common/utils"

  export default {
    name: "DetailComment",
    props: {
      detailComment: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(date) {
        const time = new Date(date*1000)
        return formatDate(time, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .detail-comment {
    padding: 8px;
    font-size: 14px;
    margin-bottom: 10px;
    border-bottom: 3px solid rgba(100,100,100,.1);
  }

  header {
    display: flex;
    justify-content: space-between;
    color: #333333;
    margin-top: 10px;
    padding-bottom: 20px;
    border-bottom: 3px solid rgba(100, 100, 100, .1);
  }

  .avatar {
    display: inline-block;
    height: 50px;
    width: 50px;
    vertical-align: middle;
    border-radius: 50%;
    overflow: hidden;
    margin: 8px 0;
  }

  .avatar img {
    height: 50px;
    width: 50px;
  }


  .name {
    color: #222
  }
.content{
  padding: 10px 0 ;
}
  .date,
  .style {
    color: #888;
    font-size: 13px
  }
  .img img{
    height: 100px;
    vertical-align: top;

  }
</style>