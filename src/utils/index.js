/**
 * Gets the respective download link of a google drive file
 * @param {string} id - The id by which to get the URL.
 * @returns {string} - The download URL to the GD file.
 */
export const getGoogleDriveDownloadLink = function (id) {
  if (!id) throw new Error('no drive id provided')
  return `https://drive.google.com/uc?export=download&id=${id}`
}
