import * as THREE from 'three';

const rgb2hex = (rgb) => {
  return (
    '#' +
    rgb
      .map(function (value) {
        return ('0' + value.toString(16)).slice(-2);
      })
      .join('')
  );
};

export const addDots = ({
  scene,
  scale = 1,
  size = 1000,
  length = 1000,
  rgb = [255, 255, 255],
  position = { x: 0, y: 0, z: 0 },
}) => {
  const vertices = [];
  for (let i = 0; i < length; i++) {
    const x = size * (Math.random() - 0.5) + position.x;
    const y = size * (Math.random() - 0.5) + position.y;
    const z = size * (Math.random() - 0.5) + position.z;

    vertices.push(x, y, z);
  }

  // 形状データを作成
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(vertices, 3)
  );
  // マテリアルを作成
  const material = new THREE.PointsMaterial({
    size: scale,
    color: rgb2hex(rgb),
  });

  // 物体を作成
  const mesh = new THREE.Points(geometry, material);
  scene.add(mesh);
};
