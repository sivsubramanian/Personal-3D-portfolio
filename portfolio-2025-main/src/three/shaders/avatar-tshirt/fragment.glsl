#include ../includes/avatar-progress/fragment.glsl;
#include ../includes/about-ambient.glsl;

uniform sampler2D uMatcap;
uniform sampler2D uSmTexture;

varying vec3 vViewPosition;
varying vec3 vNormal;
varying vec3 vObjectPosition;
varying vec3 vObjectNormal;

void main() {
    vec3 viewDir = normalize(vViewPosition);

    vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
    vec3 y = cross(viewDir, x);
    vec2 uv = vec2(dot(x, vNormal), dot(y, vNormal)) * 0.495 + 0.5;

    vec3 matcapColor = texture2D(uMatcap, uv).rgb;

    // Chest projection parameters (Front of t-shirt)
    vec2 chestCenter = vec2(0.47, 4.50);
    vec2 chestSize = vec2(0.56, 0.38);
    vec2 chestUv = vec2(
        (chestCenter.x - vObjectPosition.x) / chestSize.x + 0.5,
        (vObjectPosition.y - chestCenter.y) / chestSize.y + 0.5
    );

    bool isFrontChest = vObjectNormal.z < 0.0 && vObjectPosition.z < 0.4;
    bool inBounds = chestUv.x >= 0.0 && chestUv.x <= 1.0 && 
                    chestUv.y >= 0.0 && chestUv.y <= 1.0;

    if (isFrontChest && inBounds) {
        vec4 smColor = texture2D(uSmTexture, chestUv);
        matcapColor = mix(matcapColor, smColor.rgb, smColor.a);
    }

    float progress = getProgress();

    matcapColor = applyAmbient(matcapColor);

    gl_FragColor = vec4(matcapColor, progress);
}
