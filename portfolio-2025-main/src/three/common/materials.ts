import { MeshBasicMaterial, ShaderMaterial } from "three";
import { resources } from "../../utils/resources";
import shadowVertexShader from "../shaders/shadow-catcher/vertex.glsl";
import shadowFragmentShader from "../shaders/shadow-catcher/fragment.glsl";

import type { Material } from "three";

import chairVertexShader from "../shaders/chair/vertex.glsl";
import chairFragmentShader from "../shaders/chair/fragment.glsl";
import { Color } from "three";

let roomMaterial: Material | null = null;
let contactMaterial: Material | null = null;
let shadowMaterial: ShaderMaterial | null = null;
let chairMaterial: ShaderMaterial | null = null;

// Custom chair color (light warm peach/apricot tone)
export const CHAIR_COLOR = "#ffa575";


export const getChairMaterial = (): ShaderMaterial => {
  if (chairMaterial) return chairMaterial;
  const texture = resources.items["room-texture"];
  texture.flipY = false;

  chairMaterial = new ShaderMaterial({
    vertexShader: chairVertexShader,
    fragmentShader: chairFragmentShader,
    uniforms: {
      uTexture: { value: texture },
      uChairColor: { value: new Color(CHAIR_COLOR) },
    },
  });

  return chairMaterial;
};

export const getRoomMaterial = (): Material => {
  if (roomMaterial) return roomMaterial;
  const texture = resources.items["room-texture"];
  texture.flipY = false;

  roomMaterial = new MeshBasicMaterial({ map: texture });

  return roomMaterial;
};

export const getContactMaterial = (): Material => {
  if (contactMaterial) return contactMaterial;
  const texture = resources.items["contact-texture"];
  texture.flipY = false;

  contactMaterial = new MeshBasicMaterial({ map: texture });

  return contactMaterial;
};

let roomShadowMaterial: ShaderMaterial | null = null;
let contactShadowMaterial: ShaderMaterial | null = null;

export const createShadowMaterial = (): ShaderMaterial => {
  return new ShaderMaterial({
    vertexShader: shadowVertexShader,
    fragmentShader: shadowFragmentShader,
    depthWrite: false,
    depthTest: false,
    uniforms: {
      uTexture: { value: null },
      uColorBackground: { value: null },
      uColorShadow: { value: null },
    },
  });
};

export const getRoomShadowMaterial = (): ShaderMaterial => {
  if (roomShadowMaterial) return roomShadowMaterial;
  roomShadowMaterial = createShadowMaterial();
  return roomShadowMaterial;
};

export const getContactShadowMaterial = (): ShaderMaterial => {
  if (contactShadowMaterial) return contactShadowMaterial;
  contactShadowMaterial = createShadowMaterial();
  return contactShadowMaterial;
};

export const getShadowMaterial = (): ShaderMaterial => {
  if (shadowMaterial) return shadowMaterial;
  shadowMaterial = createShadowMaterial();
  return shadowMaterial;
};

