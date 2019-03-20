<template>
  <div class>
    <div class="title">自定义参数接口</div>

    <div class="item_input">
      <el-input class="item_input_box" placeholder="请输入接口地址" v-model="request_url" clearable></el-input>
    </div>

    <div class="item_input">
      <el-input class="item_input_box" placeholder="请输入参数名" v-model="params.name" clearable></el-input>
    </div>

    <div class="item_input">
      <el-input class="item_input_box" placeholder="请输入参数值" v-model="params.value" clearable></el-input>
    </div>

    <img class="img_show" :src="params_file.showImg" alt>
    
    <input accept="image/png, image/gif, image/jpeg" @change="handleFile" type="file">

    <el-button class="btn_submit" type="primary" @click="submit">提交</el-button>

    <div class="res_data">请求参数:{{ params }}</div>

    <div class="res_data">响应参数:{{ resData }}</div>
  </div>
</template>

<script>
export default {
  name: "Parameter",
  data() {
    return {
      sysConfig: {
        isUploadImg: 0
      },
      request_url: "",
      params: {
        name: "",
        value: ""
      },
      params_file: {
        img: "",
        showImg: ""
      },
      resData:''
    };
  },
  methods: {
    submit() {
      console.log("要请求的地址:", this.request_url);
      console.log("要提交的参数1:", this.params);
      console.log("要提交的参数2:", this.params_file.img);
      this.callInterface();
    },
    handleFile(e) {
      this.sysConfig.isUploadImg += 1;
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      var reader = new FileReader();
      reader.onload = data => {
        let res = data.target || data.srcElement;
        this.params_file.showImg = res.result;
      };
      reader.readAsDataURL(file);
      this.params_file.img = file;
      console.log("要上传的图片值:", this.params_file.img);
    },
    callInterface() { 
        this.callInterFaceUpload();
    },
    callInterFaceUpload() {
      let formData = new FormData();
      formData.append(this.params.name, this.params.value);
      formData.append("img", this.params_file.img);
      this.$upImg(this.request_url, formData).then(res => {
        console.log(res);
        this.resData = res;
      });
    },
    callInterFaceData() {
      console.log("调用接口");
    }
  },
  components: {},
  mounted() {}
};
</script>

<style scoped src=''>
.title {
}
.item_input_box {
  margin-top: 20px;
  width: 500px;
}
.img_show {
  margin-top: 20px;
}
.btn_submit {
  margin-top: 20px;
}
</style>
