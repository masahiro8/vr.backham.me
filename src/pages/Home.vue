<template>
  <div ref="page" class="main">
    <Modal />
    <Cycle :pageRect="pageRect" />
    <transition name="fade">
      <Loading
        v-if="!isCloseLoading"
        :title="TITLES.TITLE"
        :subtitle="TITLES.SUBTITLE"
        :progress="loadingProgress"
        :isShow="!isLoaded"
      />
    </transition>
    <Header :title="TITLES.TITLE" :subtitle="TITLES.SUBTITLE" />
    <div v-if="isLoaded">
      <Top
        v-if="isLoaded"
        id="loading"
        class="loading"
        :title="TITLES.TITLE"
        :subtitle="TITLES.SUBTITLE"
        :isLoaded="isLoaded"
      />
      <About v-if="isLoaded" id="loading" class="loading" />
      <ThreeScene
        v-if="isLoaded"
        :isLoaded="isCloseLoading"
        :src="getGLTFModel"
        :callInfoEvent="callInfoEvent"
        :class="sceneClass"
      />
      <InfoView
        :isShowInfo="isShowInfo"
        :selectedItem="selectedItem"
        :class="isShowModal ? 'isModal' : ''"
      />
      <!-- <ScrollNavi /> -->
      <Footer :title="TITLES.TITLE" :subtitle="TITLES.SUBTITLE" />
    </div>
  </div>
</template>

<script>
  import ThreeScene from '../components/ThreeScene/indexAnimate.vue';
  // import ScrollNavi from '../components/ScrollNavi/index';
  import Modal from '../components/Modal/index.vue';
  import Top from './Top.vue';
  import About from './About.vue';
  import Footer from './Footer.vue';
  import InfoView from '../components/InfoView/index.vue';
  import Header from '../components/Header/index.vue';
  import Loading from '../components/Loading/index.vue';
  import Cycle from '../components/Cycle/Cycle.vue';
  import { popups } from '../assets/popups';
  import { ASSETS } from '../assets/assets';
  import { loader } from '../util/loader';
  import { isIOS } from '../util/iOS';
  import { modal } from '../components/Modal/index.vue';
  import { ScrollEventControll } from '@/util/ScrollEventControll';

  const OBJECT_INFO = popups;

  const TITLES = {
    TITLE: 'BACKHAM VR',
    SUBTITLE: 'New experience',
  };

  export default {
    name: 'Home',
    data: () => {
      return {
        ASSETS: {},
        TITLES,
        isLoaded: false,
        isCloseLoading: false,
        loadingProgress: 0,
        item: [],
        isShowInfo: false,
        isShowModal: false,
        OBJECT_INFO,
        selectedId: null,
        pageRect: null,
      };
    },
    async mounted() {
      ScrollEventControll.stop();
      this.onLoadAssets();
      modal.setCallback((result) => {
        this.isShowModal = result;
      });
    },
    components: {
      Header,
      ThreeScene,
      // ScrollNavi,
      Modal,
      Top,
      About,
      Footer,
      InfoView,
      Loading,
      Cycle,
    },

    computed: {
      selectedItem() {
        const result = OBJECT_INFO.find((value) => {
          return value.id === this.selectedId;
        });
        return result;
      },
      getGLTFModel() {
        const modelSrc = isIOS()
          ? this.ASSETS.GLTF_MODEL_IOS?.src
          : this.ASSETS.GLTF_MODEL?.src;
        return modelSrc;
      },
      sceneClass() {
        return this.isShowInfo ? 'ThreeScene isShowInfo' : 'ThreeScene';
      },
    },
    methods: {
      /**
       * ローディング
       */
      async onLoadAssets() {
        const _ASSETS = await loader().getFiles(
          [ASSETS.GLTF_MODEL],
          (progress) => {
            const total = Object.keys(progress).length * 100;
            const current = Object.keys(progress)
              .map((key) => progress[key].progress)
              .reduce((prev, current) => prev + current);

            console.log('loading', total, Math.ceil(current));
            this.loadingProgress = (Math.ceil(current) / total) * 100;
          }
        );

        this.ASSETS = {
          GLTF_MODEL: _ASSETS.find((item) => item.key === 'GLTF_MODEL'),
        };
        this.isLoaded = true;

        setTimeout(() => {
          this.isCloseLoading = true;
          ScrollEventControll.start();

          setTimeout(() => {
            this.pageRect = this.$refs.page.getBoundingClientRect();
          }, 100);
        }, 3000);
      },

      callInfoEvent({ results }) {
        const f = results.find((item) => {
          return item.isFreeze == true;
        });
        this.isShowInfo = f && 'id' in f ? true : false;

        if (this.isShowInfo == true) {
          this.selectedId = f.id;
        }
      },
    },
  };
</script>
<style lang="scss" scoped>
  .isModal {
    filter: blur(10px);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease-in;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: scaleY(2.3);
    filter: blur(10px);
  }
</style>
<style lang="scss">
  body {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI,
      Hiragino Kaku Gothic ProN, Hiragino Sans, ヒラギノ角ゴ ProN W3, Arial,
      メイリオ, Meiryo, sans-serif;
  }

  .ThreeScene {
    .section.fix {
      transform: translateX(0);
      transition: transform 0.3s ease-out;
    }
    &.isShowInfo {
      .section.fix {
        transform: translateX(-20vw);
        @media only screen and (max-width: 1024px) {
          transform: translateX(-25vw);
        }
        @media screen and (max-width: 559px) {
          transform: translateX(0);
        }
      }
    }
  }
</style>
