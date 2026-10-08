uniform sampler2D uTexture;
uniform vec3 uChairColor;

varying vec2 vUv;
varying vec3 vPosition;

void main() {
    vec4 texColor = texture2D(uTexture, vUv);

    // The chair seat cushion & backrest shell vertices are at y >= 0.88.
    // The chrome/grey metal base and castors are at y < 0.88.
    if (vPosition.y >= 0.88) {
        // Multiply by uChairColor to preserve baked ambient occlusion, contact shadows, and soft bevel gradients.
        vec3 finalColor = texColor.rgb * uChairColor;
        gl_FragColor = vec4(finalColor, 1.0);
    } else {
        gl_FragColor = vec4(texColor.rgb, 1.0);
    }
}
