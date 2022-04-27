/**
 * Function to check if a current location matches with link
 *
 * @param {*} location Location Object
 * @param {string} links Link path
 * @returns {Boolean}
 */
export const checkLinkMatchingStatus = (location, link) => {
  const pathname = location.pathname + location.hash;

  return pathname.includes(link);
};

/**
 * Function to check if a current location matches with a collection of links
 *
 * @param {*} location Location Object
 * @param {string[]} links Collection of links
 * @returns {Boolean}
 */
export const checkLinksMatchingStatus = (location, links) => {
  return links.some((link) => checkLinkMatchingStatus(location, link));
};
