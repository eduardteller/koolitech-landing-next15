import fs from "node:fs";
import path from "node:path";

/**
 * Pixel size of a WebP in public/, read from its RIFF header, so images
 * dropped into markdown need no hand-written width and height. Null for
 * anything that is not a WebP this understands.
 */
export function webpSize(
  src: string,
): { width: number; height: number } | null {
  let buf: Buffer;
  try {
    buf = fs.readFileSync(path.join(process.cwd(), "public", src));
  } catch {
    return null;
  }
  if (
    buf.toString("ascii", 0, 4) !== "RIFF" ||
    buf.toString("ascii", 8, 12) !== "WEBP"
  ) {
    return null;
  }

  switch (buf.toString("ascii", 12, 16)) {
    // Extended (alpha, animation): 24-bit canvas size minus one.
    case "VP8X":
      return {
        width: buf.readUIntLE(24, 3) + 1,
        height: buf.readUIntLE(27, 3) + 1,
      };
    // Lossless: 14-bit sizes minus one, after the 0x2f signature byte.
    case "VP8L": {
      const bits = buf.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    // Lossy: 14-bit sizes after the frame tag and start code.
    case "VP8 ":
      return {
        width: buf.readUInt16LE(26) & 0x3fff,
        height: buf.readUInt16LE(28) & 0x3fff,
      };
    default:
      return null;
  }
}
