<template>
  <div class="Loading">
    <div class="Loading__label">
      <div class="Loading__label__text">{{ subtitle }}</div>
      <div class="Loading__label__text">{{ title }}</div>
    </div>
    <div class="Loading__progress">
      <div class="progress__bar">
        <div class="progress__current" :style="`width:${progress}%`"></div>
      </div>
      <div class="Loading__text">
        <span>{{ `${progress.toFixed(2)}%` }}</span>
      </div>
    </div>
    <!-- <div class="Loading__line"></div> -->
  </div>
</template>
<script>
  export default {
    props: {
      progress: {
        type: Number,
        defaultValue: 0,
      },
      title: {
        type: String,
        default: 'TITLE',
      },
      subtitle: {
        type: String,
        default: 'SUBTITLE',
      },
      isShow: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
<style lang="scss" scoped>
  .Loading {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgb(30, 30, 30);
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }

  .Loading__label {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 1.1em;
    letter-spacing: 0.6em;
    text-align: center;
  }

  .Loading__label__text {
    margin: 8px 0;
  }

  .Loading__text {
    color: #666;
    letter-spacing: 2px;
    font-size: 0.6em;
  }

  .Loading__progress {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 20vh;
  }

  .Loading__line {
    width: 1px;
    height: 8%;
    background-color: #666;
    position: absolute;
    left: 50%;
    bottom: 0;
  }

  .progress__bar {
    width: 100px;
    height: 2px;
    background-color: #444;
    position: relative;
    margin: 8px 0;

    .progress__current {
      height: 2px;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #aaa;
    }
  }
</style>
