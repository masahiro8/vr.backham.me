<template>
  <div class="footer">
    <div class="footer-contents">
      <p class="footer-subtitle">{{ subtitle }}</p>
      <h2 class="footer-title">{{ title }}</h2>
      <div class="footer-message">
        <p>あらゆるWebサイトに、</p>
        <p>驚くほど新しい体験を。</p>
      </div>
      <div class="footer-container">
        <div class="footer-lisence-title">License</div>
        <div class="footer-lisence">
          3D model "iPhone 13 Pro Max" ©
          <a href="https://datsketch.artstation.com/" target="_blank"
            >DatSketch</a
          >
          (<a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
          >
            Licensed under CC BY 4.0</a
          >)
        </div>
      </div>
      <div class="footer-container">
        <div class="footer-logo">
          <img src="/images/vrmonkey_tran.png" alt="" />
        </div>
      </div>
      <div class="footer-container">
        <div class="footer-contact">
          <p>お問い合わせ</p>
          <p>victoria@backham.me</p>
          <p><a href="https://backham.me">バッカム株式会社</a></p>
        </div>
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
    },
  };
</script>
<style lang="scss" scoped>
  .footer {
    padding-top: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.6em;
    text-align: center;
  }
  .footer-title {
    font-size: 32px;
  }
  .footer-subtitle {
    font-size: 16px;
  }
  .footer-message {
    font-size: 48px;
    padding: 16px;
    text-align: center;
    @media screen and (max-width: 559px) {
      font-size: 24px;
    }
  }

  .footer-contact {
    font-size: 24px;
    padding: 16px;
    text-align: center;

    a {
      color: black;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    @media screen and (max-width: 559px) {
      font-size: 16px;
    }
  }

  .footer-lisence-title {
    text-align: center;
    font-size: 24px;
  }

  .footer-lisence {
    font-size: 16px;
    padding: 48px 16px;
    letter-spacing: 0.1em;
    a {
      color: black;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    @media screen and (max-width: 559px) {
      font-size: 16px;
    }
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 64px 0;
  }

  .footer-logo {
    img {
      width: 128px;
    }
  }
</style>
