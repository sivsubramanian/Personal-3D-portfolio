#include ../includes/avatar-progress/fragment.glsl;
#include ../includes/about-ambient.glsl;

uniform sampler2D uMatcap;

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

    // Flame calculations on lower pant cuffs
    vec2 legCenter = vObjectPosition.x < 0.47 ? vec2(0.147, -0.035) : vec2(0.714, -0.106);
    float legPhase = vObjectPosition.x < 0.47 ? 0.0 : 1.75;
    vec2 d = vObjectPosition.xz - legCenter;
    float angle = atan(d.y, d.x);

    // Multi-harmonic stylized flame tongues
    float f1 = pow(clamp(1.0 - abs(sin(angle * 2.0 + legPhase + 0.3)), 0.0, 1.0), 1.6) * 0.38;
    float f2 = pow(clamp(1.0 - abs(sin(angle * 3.0 + legPhase * 1.3 - 1.1)), 0.0, 1.0), 2.0) * 0.32;
    float f3 = pow(clamp(1.0 - abs(sin(angle * 5.0 + legPhase * 0.7 + 2.1)), 0.0, 1.0), 2.4) * 0.22;
    float f4 = pow(clamp(0.5 + 0.5 * sin(angle * 4.0 - legPhase + 0.8), 0.0, 1.0), 2.5) * 0.15;

    float baseH = 2.812;
    float flameTop = baseH + 0.08 + (f1 + f2 + f3 + f4) * 0.42;

    if (vObjectPosition.y >= baseH && vObjectPosition.y <= 3.35) {
        float flameH = flameTop - baseH;
        float t = (vObjectPosition.y - baseH) / flameH;

        float flameAlpha = clamp((1.0 - t) / 0.03, 0.0, 1.0);

        if (flameAlpha > 0.0) {
            vec3 colYellow = vec3(1.0, 0.92, 0.05);
            vec3 colOrange = vec3(1.0, 0.38, 0.02);
            vec3 colRed = vec3(0.92, 0.08, 0.04);
            vec3 colDarkEdge = vec3(0.48, 0.02, 0.02);

            vec3 flameColor;
            if (t < 0.22) {
                flameColor = mix(colYellow, colOrange, t / 0.22);
            } else if (t < 0.70) {
                flameColor = mix(colOrange, colRed, (t - 0.22) / 0.48);
            } else {
                flameColor = mix(colRed, colDarkEdge, (t - 0.70) / 0.30);
            }

            // Inner yellow core flame tongues
            float coreTop = baseH + 0.04 + (f1 * 0.65 + f2 * 0.55) * 0.24;
            float coreT = (vObjectPosition.y - baseH) / (coreTop - baseH);
            float coreAlpha = clamp((1.0 - coreT) / 0.04, 0.0, 1.0);
            if (coreAlpha > 0.0) {
                flameColor = mix(flameColor, colYellow, coreAlpha * 0.85);
            }

            matcapColor = mix(matcapColor, flameColor, flameAlpha);
        }
    }

    float progress = getProgress();

    matcapColor = applyAmbient(matcapColor);

    gl_FragColor = vec4(matcapColor, progress);
}
