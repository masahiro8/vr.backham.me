<template>
  <div class="header">
    <ul class="header-content">
      <li class="header-text">
        <p class="subtitle">{{ subtitle }}</p>
        <p class="title">{{ title }}</p>
      </li>
    </ul>
    <!-- <div class="header-sns">
      <a class="header-btn" :href="twitterURL" target="_blank" rel="nofollow">
        <img :src="`./images/i_twitter.png`" alt="Twitter" />
      </a>
      <a class="header-btn" :href="facebookURL" target="_blank" rel="nofollow">
        <img :src="`./images/i_facebook.png`" alt="Facebook" />
      </a>
    </div> -->
  </div>
</template>
<script>
  import { meta, shareUrl } from '../../constants';
  export default {
    data: () => {
      return {
        meta,
        shareUrl,
      };
    },
    props: {
      title: {
        type: String,
        default: 'TITLE',
      },
      subtitle: {
        type: String,
        default: 'SUBTITLE',
      },
    },
    computed: {
      twitterURL() {
        return encodeURI(
          `https://twitter.com/intent/tweet?url=${
            this.shareUrl || location.href
          }&text=${this.meta.title}`
        );
      },
      facebookURL() {
        return encodeURI(
          `https://www.facebook.com/sharer/sharer.php?u=${
            this.shareUrl || location.href
          }&t=${this.meta.title}`
        );
      },
    },
  };
</script>
<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 48px;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;

    .header-logo {
      width: 140px;
    }

    .header-sns {
      display: flex;
      padding: 0 8px;
    }

    .header-btn {
      margin: 0 4px;
      height: 24px;
      width: 24px;
      padding: 0;
      background: none;
      border: none;
      transition: filter 0.2s ease, opacity 0.5s ease-out;
      opacity: 0.7;
      filter: grayscale(100%);

      img {
        width: 100%;
      }

      &:hover {
        cursor: pointer;
        opacity: 1;
        filter: grayscale(50%);
      }
    }
    .header-content {
      padding: 0;
      margin: 0;
      margin: 0 16px;
      .icon {
        width: 34px;
      }
      li {
        float: left;
        list-style: none;
      }
      .header-text {
        margin-left: 0.875em;
        color: white;
        letter-spacing: 0.2em;
      }
      .subtitle {
        font-size: 9px;
        margin: 0;
        padding: 0;
        filter: invert(50%);
      }
      .title {
        font-size: 11px;
        margin: 0;
        padding: 0;
        filter: invert(1);
      }
    }

    @media screen and (max-width: 559px) {
      .header-logo {
        width: 80px;
      }

      .header-content {
        .header-text {
          margin-left: 2px;
        }
        .icon {
          width: 32px;
        }
        .subtitle {
          font-size: 8px;
          padding-top: 2px;
          letter-spacing: 0;
        }
        .title {
          font-size: 8px;
        }
      }
    }
  }
</style>
