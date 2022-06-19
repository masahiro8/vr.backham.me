<template>
  <div class="about">
    <div class="about-contents">
      <!-- <p>We provide new experience value.</p> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .about {
    background-size: cover;
    background-position: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
  }
  .about-contents {
    margin: auto;
    width: 58.125em;
    position: relative;
    z-index: 1;
    p {
      padding-top: 1.875em;
      font-size: 20px;
      margin: 0;
      line-height: 2.25em;
      letter-spacing: 0.4em;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 559px) {
    .about-contents {
      padding: 48px 15px 15px;
      position: relative;
      z-index: 1;
      p {
        padding-top: 1.875em;
        font-size: 18px;
        margin-right: -0.5em;
        line-height: 2.25em;
        letter-spacing: 0.28em;
        font-weight: 600;
      }
    }
  }
</style>
