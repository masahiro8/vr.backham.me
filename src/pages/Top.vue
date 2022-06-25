<template>
  <div class="wrapHeader">
    <div class="header" v-if="!isLoaded">
      <p class="subtitle">{{ subtitle }}</p>
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="contents">
      <div class="overlay">
        <h2>新次元の3D体験。<br />ウェブサイトの常識が一変します。</h2>
        <img class="logo" src="/images/vrmonkey_tran.png" alt="BACKHAM" />
      </div>
      <!-- <video v-if="src" :src="src" muted autoplay playsinline loop></video> -->
      <div class="to_scroll">
        <svg
          width="71"
          height="88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70.5 35.523c0 19.343-15.67 35.023-35 35.023S.5 54.866.5 35.523C.5 16.18 16.17.5 35.5.5s35 15.68 35 35.023Z"
            stroke="#000"
          />
          <path d="m22 44.648 13.5 13.5 13.5-13.5" stroke="#000" />
          <path d="m22 31.763 13.5 13.5 13.5-13.5M36 14v30.553" stroke="#000" />
        </svg>
        <div class="to_scroll-text">Scroll</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      src: {
        type: String,
        defaultValue: null,
      },
      title: {
        type: String,
        default: 'TITLE',
      },
      subtitle: {
        type: String,
        default: 'SUBTITLE',
      },
      isLoaded: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
<style lang="scss" scoped>
  .overlay {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 48px;
      line-height: 64px;
      font-weight: 600;
      padding: 16px;
    }
  }
  .wrapHeader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100vh;
  }

  .contents {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .wrapHeader .header {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    color: #ffffff;
    z-index: 1;

    .subtitle {
      font-size: 1.5em;
      margin: 0;
      letter-spacing: 0.435em;
    }
    .title {
      font-size: 2.25em;
      font-weight: normal;
      margin: 0;
      letter-spacing: 0.435em;
    }
  }

  .to_scroll {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .to_scroll-text {
    letter-spacing: 0.8em;
    text-align: center;
  }

  .logo {
    width: 128px;
  }

  @media screen and (max-width: 559px) {
    .overlay {
      h2 {
        font-size: 32px;
        line-height: 42px;
        font-weight: 600;
        padding: 16px;
      }
    }
    .wrapHeader {
      height: 100vh;
      width: 100%;
    }
    .wrapHeader .header {
      .subtitle {
        font-size: 1.2em;
        margin: 0;
        letter-spacing: 0.435em;
      }
      .title {
        font-size: 1.5em;
        font-weight: normal;
        margin: 0;
        letter-spacing: 0.25em;
      }
    }
  }
</style>
