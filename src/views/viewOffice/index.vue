<!-- 预览office文件 -->
<template>
  <el-upload class="upload-demo" drag accept=".docx,.xlsx,.pdf" :multiple="false" :show-file-list="true" :limit="1"
    :beforeUpload="beforeUpload" action="" :file-list="state.FileList">
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      拖曳上传/ <em>点我上传</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        仅支持上传office文件，如：docx、xlsx、pdf等
      </div>
    </template>
  </el-upload>
  <!-- 预览office文件 -->
  <vue-office-Excel :src="state.src" />
</template>

<script setup>
//引入VueOfficeDocx组件
import VueOfficeDocx from '@vue-office/docx'
//引入VueOfficeExcel组件
import VueOfficeExcel from '@vue-office/excel'
//引入VueOfficePdf组件
import VueOfficePdf from '@vue-office/pdf'
// 引入上传图标
import { UploadFilled } from '@element-plus/icons-vue'
import { reactive } from 'vue';

const state = reactive({
  src: '',
  FileList: []
})

const beforeUpload = (file) => {
  console.log(file);
  let reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onload = (loadEvent) => {
    let arrayBuffer = loadEvent.target.result;
    state.src = arrayBuffer
  };
  return false
}

defineOptions({
  name: 'ViewOffice'
})
</script>

<style scoped lang="scss"></style>