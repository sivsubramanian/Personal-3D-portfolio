import { resources } from "../../../utils/resources";
import { contact } from ".";
import { getContactShadowMaterial } from "../../common/materials";
import { colors } from "../../common/colors";
import { Color } from "three";

import type { Object3D } from "three";

const dynamicBackground = new Color();
const defaultShadowColor = new Color("rgb(208, 185, 156)");
const darkShadowColor = new Color("#060a15");

const init = () => {
  initObjects();
};

const initObjects = () => {
  const resource = resources.items["contact-model"];
  const texture = resources.items["contact-shadow-texture"];
  texture.flipY = false;

  const mesh = resource.scene.children.find((child: Object3D) => child.name === "shadow-catcher");
  if (!mesh) return;

  mesh.material = getContactShadowMaterial();
  mesh.onBeforeRender = () => {
    mesh.material.uniforms.uTexture.value = texture;
    dynamicBackground.copy(colors.beigeDark).convertLinearToSRGB();
    mesh.material.uniforms.uColorBackground.value = dynamicBackground;
    mesh.material.uniforms.uColorShadow.value = colors.isDark ? darkShadowColor : defaultShadowColor;
  };


  mesh.renderOrder = -1000;

  contact.group.add(mesh);
};

const destroy = () => {};

export const shadow = { init, destroy };
