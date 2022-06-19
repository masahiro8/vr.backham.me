<template>
  <div class="frame">
    <div class="cycle" :style="getRot"></div>
    <div class="n">{{ progress }} / {{ total }}</div>
  </div>
</template>
<script>
  import { scrolling } from '@/util/scrollCallback';
  export default {
    data: () => {
      return {
        rot: 0,
        progress: 0,
        total: 100,
        normalizeRot: 0,
      };
    },
    props: {
      pageRect: {
        type: DOMRect,
        default: {},
      },
    },
    mounted() {
      this.$nextTick(() => {});
      scrolling((scroll) => {
        this.rot = scroll;
        if (this.pageRect) {
          this.progress = Math.ceil((this.rot / this.pageRect.height) * 100);
        }
      });
    },
    computed: {
      getRot() {
        return `transform:rotate(${this.rot}deg)`;
      },
    },
  };
</script>
<style lang="scss" scoped>
  .frame {
    position: fixed;
    left: 16px;
    bottom: 16px;
    z-index: 100;
    display: flex;
  }
  .cycle {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border-top: 1px solid #666;
    border-left: 1px solid transparent;
    border-bottom: 1px solid #666;
    border-right: 1px solid #666;
  }
  .n {
    font-size: 12px;
    color: #666;
    margin-left: 8px;
  }
</style>
