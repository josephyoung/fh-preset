import createUrl from './createUrl';

/**
 * download file
 * @param {BlobPart} data
 * @param {string} fileName
 * @param {string} fileType
 */
function downloadFile(data, fileName, fileType) {
  const url = createUrl(data, fileType);
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('download', fileName);
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export default downloadFile;
