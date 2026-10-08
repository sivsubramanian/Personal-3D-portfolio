import { CanvasTexture, NearestFilter, LinearSRGBColorSpace } from "three";

// High-resolution 8-BIT FONTS style representation for 'S' and 'M'
const S_GRID = [
  "  ###########  ",
  " ############# ",
  "###############",
  "####       ####",
  "####           ",
  "####           ",
  "####           ",
  " ############# ",
  "  ############ ",
  "   ########### ",
  "          #### ",
  "          #### ",
  "          #### ",
  "          #### ",
  "          #### ",
  "####      #### ",
  "###############",
  " ############# ",
  "  ###########  ",
];

const M_GRID = [
  "####         ####",
  "####         ####",
  "#####       #####",
  "######     ######",
  "#######   #######",
  "#### #### #### ##",
  "####  ### ### ###",
  "####   #####  ###",
  "####    ###   ###",
  "####     #    ###",
  "####          ###",
  "####          ###",
  "####          ###",
  "####          ###",
  "####          ###",
  "####          ###",
  "####          ###",
  "####          ###",
  "####          ###",
];

let cachedTexture: CanvasTexture | null = null;

export const createSmPixelTexture = (): CanvasTexture => {
  if (cachedTexture) return cachedTexture;

  const sH = S_GRID.length;
  const sW = S_GRID[0]?.length ?? 15;
  const mH = M_GRID.length;
  const mW = M_GRID[0]?.length ?? 19;

  const gridH = Math.max(sH, mH);
  const gap = 3;
  const paddingX = 4;
  const paddingY = 4;
  const extrusionDepth = 3;

  const totalCols = paddingX * 2 + sW + gap + mW + extrusionDepth + 2;
  const totalRows = paddingY * 2 + gridH + extrusionDepth + 2;

  const mask: number[][] = Array.from({ length: totalRows }, () => Array(totalCols).fill(0));

  const startY = paddingY;
  const startX_S = paddingX;
  const startX_M = paddingX + sW + gap;

  for (let r = 0; r < sH; r++) {
    const row = S_GRID[r];
    if (!row) continue;
    for (let c = 0; c < sW; c++) {
      if (row[c] === "#") {
        const mRow = mask[startY + r];
        if (mRow) mRow[startX_S + c] = 1;
      }
    }
  }

  for (let r = 0; r < mH; r++) {
    const row = M_GRID[r];
    if (!row) continue;
    for (let c = 0; c < mW; c++) {
      if (row[c] === "#") {
        const mRow = mask[startY + r];
        if (mRow) mRow[startX_M + c] = 1;
      }
    }
  }

  const canvas = document.createElement("canvas");
  const pixelScale = 8;
  canvas.width = totalCols * pixelScale;
  canvas.height = totalRows * pixelScale;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Failed to get 2D context for t-shirt canvas");
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const silhouette: number[][] = Array.from({ length: totalRows }, () => Array(totalCols).fill(0));
  for (let y = 0; y < totalRows; y++) {
    const mRow = mask[y];
    if (!mRow) continue;
    for (let x = 0; x < totalCols; x++) {
      if (mRow[x]) {
        for (let d = 0; d <= extrusionDepth; d++) {
          if (y + d < totalRows && x + d < totalCols) {
            const sRow = silhouette[y + d];
            if (sRow) sRow[x + d] = 1;
          }
        }
      }
    }
  }

  // 1. Dark outline around combined silhouette
  ctx.fillStyle = "#190C2A";
  for (let y = 0; y < totalRows; y++) {
    const sRow = silhouette[y];
    if (!sRow) continue;
    for (let x = 0; x < totalCols; x++) {
      if (!sRow[x]) {
        let isBorder = false;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const ny = y + dy;
            const nx = x + dx;
            if (ny >= 0 && ny < totalRows && nx >= 0 && nx < totalCols) {
              if (silhouette[ny]?.[nx]) isBorder = true;
            }
          }
        }
        if (isBorder) {
          ctx.fillRect(x * pixelScale, y * pixelScale, pixelScale, pixelScale);
        }
      }
    }
  }

  // 2. Draw 3D Extrusion (Orange to dark red-orange bevel)
  for (let d = extrusionDepth; d >= 1; d--) {
    const fillStyle =
      d === extrusionDepth
        ? "#B92D14" // Deepest shadow bevel
        : d === extrusionDepth - 1
          ? "#E14B1C" // Mid bevel
          : "#FC732A"; // Bright orange upper bevel
    ctx.fillStyle = fillStyle;

    for (let y = 0; y < totalRows; y++) {
      const mRow = mask[y];
      if (!mRow) continue;
      for (let x = 0; x < totalCols; x++) {
        if (mRow[x]) {
          const ey = y + d;
          const ex = x + d;
          if (ey < totalRows && ex < totalCols && !mask[ey]?.[ex]) {
            ctx.fillRect(ex * pixelScale, ey * pixelScale, pixelScale, pixelScale);
          }
        }
      }
    }
  }

  // 3. Draw Front Face in Yellow and White highlight
  for (let y = 0; y < totalRows; y++) {
    const mRow = mask[y];
    if (!mRow) continue;
    for (let x = 0; x < totalCols; x++) {
      if (mRow[x]) {
        const isTopEdge = y === 0 || !mask[y - 1]?.[x];
        ctx.fillStyle = isTopEdge ? "#FFFFFF" : "#FEE34B";
        ctx.fillRect(x * pixelScale, y * pixelScale, pixelScale, pixelScale);
      }
    }
  }

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = LinearSRGBColorSpace;
  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;

  cachedTexture = texture;
  return texture;
};
