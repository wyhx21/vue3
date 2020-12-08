<template>
  <div @click="createCode">点击生成</div>
  <canvas id="app-menu-coder">
  </canvas>
    <div id="app-menu-image"></div>
</template>

<script>
import QrCodeWithLogo from 'qrcode-with-logos'
export default {
  mounted() {

  },
  methods: {
    createCode () {
      console.log('a')
      const myCanvas = document.getElementById('app-menu-coder')
      this.$nextTick(() => {
        new QrCodeWithLogo({
          canvas: myCanvas,
          width: 200,
          download: false,
          content: "http://192.168.43.249:9001",
          nodeQrCodeOptions:{
            margin:2,
            errorCorrectionLevel:'Q'
          }
        }).toImage()
      })
    }
  }
}
</script>