/* 
  Merge overlapping maps and create non-overlapping pages

  Input: array of maps const maps = [[4, 4, 8, 8], ...], where [x1, y1, x2, y2]
  coords can be any (don't start on left bottom)

  Output: const pages = [{ box: [4, 4, 10, 10], indexes: [0, 1], }, ... ]
  box - a unition of all overlaping pages
  indexes - all maps that are included there
*/

function normalize([x1, y1, x2, y2]) {
  return [
    Math.min(x1, x2),
    Math.min(y1, y2),
    Math.max(x1, x2),
    Math.max(y1, y2)
  ]
}

function isIntersecting(a, b) {
  const [x1a, y1a, x2a, y2a] = normalize(a)
  const [x1b, y1b, x2b, y2b] = normalize(b)
  const overlapX = Math.min(x2a, x2b) - Math.max(x1a, x1b)
  const overlapY = Math.min(y2a, y2b) - Math.max(y1a, y1b)
  return overlapX > 0 && overlapY > 0
}

function getPages(maps) {
  const pages = []

  maps.forEach((map, i) => {
    const [x1, y1, x2, y2] = normalize(map)
    const intersectedPages = []

    // find all pages that intersect with the current map
    pages.forEach((page, idx) => {
      if (page.indexes.some((j) => isIntersecting(map, maps[j]))) {
        intersectedPages.push(idx)
      }
    })

    if (intersectedPages.length === 0) {
      // no intersections -> start new page
      pages.push({
        box: [x1, y1, x2, y2],
        indexes: [i],
      })
    } else {
      // unite all intersection to one page
      const merged = {
        box: [x1, y1, x2, y2],
        indexes: [i],
      }

      intersectedPages.sort((a, b) => b - a) // удаляем с конца

      for (const idx of intersectedPages) {
        const page = pages[idx]
        const [px1, py1, px2, py2] = page.box
        merged.box = [
          Math.min(merged.box[0], px1),
          Math.min(merged.box[1], py1),
          Math.max(merged.box[2], px2),
          Math.max(merged.box[3], py2),
        ]
        merged.indexes.push(...page.indexes)
        pages.splice(idx, 1)
      }

      pages.push(merged)
    }
  })

  return pages
}
