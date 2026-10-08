import { resources } from "../../../utils/resources";
import { room } from ".";
import { getRoomShadowMaterial } from "../../common/materials";
import { colors } from "../../common/colors";
import { Color } from "three";

import type { Object3D } from "three";

const dynamicBackground = new Color();
const defaultShadowColor = new Color("rgb(215, 194, 169)");
const darkShadowColor = new Color("#030712");

const init = () => {
  initObjects();
};

const initObjects = () => {
  const resource = resources.items["room-model"];
  const texture = resources.items["room-shadow-texture"];
  texture.flipY = false;

  const mesh = resource.scene.children.find((child: Object3D) => child.name === "shadow-catcher");
  if (!mesh) return;

  mesh.material = getRoomShadowMaterial();
  mesh.onBeforeRender = () => {
    mesh.material.uniforms.uTexture.value = texture;
    dynamicBackground.copy(colors.beigeLight).convertLinearToSRGB();
    mesh.material.uniforms.uColorBackground.value = dynamicBackground;
    mesh.material.uniforms.uColorShadow.value = colors.isDark ? darkShadowColor : defaultShadowColor;
  };


  mesh.renderOrder = -1000;

  room.group.add(mesh);
};

const destroy = () => {};

export const shadow = { init, destroy };
