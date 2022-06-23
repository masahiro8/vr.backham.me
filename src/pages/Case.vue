<template>
  <div class="caseStudy">
    <h2 class="caseStudy__title">Case study</h2>
    <div class="caseStudy__list">
      <div v-for="item in caseStudy" :key="item.id" class="caseStudy__item">
        <a class="item__btn" :href="item.url" target="_blank">
          <div class="item__subtitle">{{ item.subtitle }}</div>
          <div class="item__title">{{ item.title }}</div>
          <div class="item__image">
            <img :src="item.image" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {
        caseStudy: [
          {
            id: 1,
            subtitle: '沖縄タイムス＋プラス',
            title: '沖縄本土復帰50周年 知る32軍壕',
            image: '/images/caseStudy_image_1.jpg',
            url: 'https://www.okinawatimes.co.jp/common/otp/feature/the32nd-army-headquarters-cave/',
          },
        ],
      };
    },
    methods: {
      open(url) {
        window.location.href = url;
      },
    },
  };
</script>
<style lang="scss">
  .caseStudy {
    width: 100%;
    padding: 32px 0 64px 0;
    border-bottom: 1px solid #efefef;
  }

  .caseStudy__title {
    font-size: 48px;
    letter-spacing: 0.2em;
    text-align: center;
  }

  .caseStudy__list {
    padding: 32px;
    display: flex;
    justify-content: center;
  }

  .caseStudy__item {
    width: 320px;
    padding-top: 16px;
    box-sizing: border-box;
  }

  .item__btn {
    background: none;
    border: none;
    width: 100%;
    padding: 0;
    margin: 0;
    border: 1px solid #efefef;
    border-radius: 4px;
    transition: all 0.2s ease-out;
    overflow: hidden;
    text-decoration: none;
    &:hover {
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      .item__image {
        img {
          transform: scale(1.1);
        }
      }
    }
  }

  .item__title {
    font-size: 18px;
    text-align: left;
    padding: 0 16px 16px 16px;
    color: black;
  }

  .item__subtitle {
    font-size: 14px;
    text-align: left;
    color: #888;
    padding: 8px 16px 8px 16px;
  }

  .item__image {
    height: 128px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      transition: all 0.2s ease-out;
      width: 100%;
      background-color: black;
    }
  }
</style>
