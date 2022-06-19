<template>
  <div ref="three" class="wrapper" :style="goastSectionStyle">
    <div class="section" :class="extraClass">
      <div class="three__link">
        <a
          class="three__link__btn"
          href="https://backham.me?#vr"
          target="_blank"
        >
          <div class="three__link__caption">System supported by</div>
          <div class="three__link__name">BACKHAM VR</div>
        </a>
      </div>
      <div id="three" />
    </div>
    <div class="goastSection"></div>
  </div>
</template>
<script>
  // eslint-disable-next-line
  //import * as THREE from "three";
  // eslint-disable-next-line
  import * as THREE from 'three/build/three.module';
  import { Scene } from './components/scene_animate';
  import { STATE, EnterState } from '../../util/Events';
  import { ASSETS } from '../../assets/assets.js';
  import { isIOS } from '../../util/iOS';

  let scene;

  //固定スクロールする範囲
  const fixLength = 20000;

  // イベント

  // TODO 11,13
  export const callbackEvents = [
    { id: 1, start: 0.15, length: 0.05 }, // カメラ
    { id: 2, start: 0.45, length: 0.05 }, // A15
    { id: 3, start: 0.6, length: 0.05 }, // Anim
    { id: 4, start: 0.9, length: 0.05 }, // Anim
  ];

  const modelUrl = isIOS() ? ASSETS.GLTF_MODEL_IOS.url : ASSETS.GLTF_MODEL.url;

  export default {
    name: 'ThreeScene',
    data: () => {
      return {
        initializedThree: false,
        rect: null,
        extraClass: ``,
        goastSectionStyle: ``,
      };
    },
    props: {
      isLoaded: {
        type: Boolean,
        default: false,
      },
      callInfoEvent: {
        type: Function,
      },
    },
    mounted() {
      this.$watch(
        () => this.isLoaded,
        (data) => {
          if (data) {
            console.log('Three Loaded', data);
            this.$nextTick(() => {
              this.init();
            });
          }
        },
        { immediate: true }
      );
    },
    methods: {
      init() {
        //高さ固定
        const fixRange = callbackEvents
          .map((item) => {
            return item.length;
          })
          .reduce((sum, item) => sum + item);

        const extendLength = fixLength + fixLength * fixRange;
        this.goastSectionStyle = `height:${extendLength}px;`;

        const width = window.innerWidth;
        const height = window.innerHeight;

        scene = Scene();
        scene.init({
          modelUrl: modelUrl,
          canvasId: 'three',
          width,
          height,
        });

        this.$nextTick(() => {
          // ドットを追加
          scene.setDots({
            scale: 0.2,
            size: 100,
            length: 5000,
            rgb: [0, 0, 0],
            position: { x: 0, y: 30, z: 0 },
          });
          // ドットを追加
          scene.setDots({
            scale: 0.2,
            size: 100,
            length: 5000,
            rgb: [255, 128, 168],
            position: { x: 0, y: 30, z: 0 },
          });

          // ドットを追加
          scene.setDots({
            scale: 0.2,
            size: 100,
            length: 5000,
            rgb: [128, 200, 0],
            position: { x: 0, y: 30, z: 0 },
          });

          // セクション範囲
          const rect = this.$refs.three.getBoundingClientRect();
          EnterState({
            rect: rect,
            events: callbackEvents,
            // スクロール範囲ピクセル
            fixLength,
            //固定する時間
            fixRange,
            // スクロールで固定
            callback: (state) => {
              if (state.id === STATE.ENTER_FIX.id) {
                this.extraClass = 'fix';
              } else if (
                state.id === STATE.ENTER_BOTTOM.id ||
                state.id === STATE.OVER
              ) {
                this.extraClass = 'fixBottom';
              } else {
                this.extraClass = '';
              }
            },
            // 3dにスクロール量を渡す
            scrollCallback: (v, d) => {
              scene.setMoveProgress(d);
            },
            // イベントトリガー
            eventCallback: this.callInfoEvent,
          });
        });
      },
    },
  };
</script>
<style lang="scss" scoped>
  .three__title {
    font-size: 16px;
    color: white;
    position: absolute;
    top: 54px;
    left: 16px;
    text-align: left;
  }

  .three__link {
    position: absolute;
    left: 0;
    bottom: 8px;
    width: 100%;
    padding: 4px 0;
    text-align: center;
    filter: invert(0.8);

    .three__link__btn {
      display: inline-block;
      color: rgb(78, 58, 34);
      text-decoration: none;
    }
    .three__link__caption {
      font-size: 9px;
      padding-bottom: 4px;
    }
    .three__link__name {
      font-size: 14px;
    }
  }

  body {
    margin: 0;
    overflow: hidden;
  }
  #three {
    width: 100%;
    height: 100%;
    /* border: 10px solid red; */
    box-sizing: border-box;
    /* transform: scaleY(-1) scaleX(-1); */
  }

  .wrapper {
    position: relative;
  }

  .section {
    position: absolute;
    top: 0;
    z-index: 1;
    transition-property: top, bottom;
    transition-duration: 0.8s, 0.8s;
    transition-timing-function: ease-out, ease-out;
  }
  .section.fix {
    position: fixed;
    bottom: 0;
  }
  .section.fixBottom {
    position: absolute;
    top: auto;
    bottom: 0;
  }

  .goastSection {
    position: relative;
    background-color: green;
  }

  .btn1 {
    position: absolute;
    top: 100px;
    left: 50%;
    z-index: 99;
  }

  .btn2 {
    position: absolute;
    bottom: 100px;
    left: 50%;
    z-index: 99;
  }
</style>
