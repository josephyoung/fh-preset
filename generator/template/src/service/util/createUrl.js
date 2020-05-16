/**
 * create url from blobPart data
 * @param {BlobPart} blobPart
 * @param {string} type
 */
export default function file2Url(blobPart, type) {
  const blob = new Blob([blobPart], { type });
  return URL.createObjectURL(blob);
}
