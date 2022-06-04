import fs from 'fs'
import { urlToFilename } from './utils.js'
import { downloadURL } from './downloadURL'

export function spider (url, cb) {
  const filename = urlToFilename(url)
  fs.access(filename, err => { // [1]
    if (!err || err.code !== 'ENOENT') {
      return cb(null, filename, false)
    } 
    downloadURL(url, filename, err => {
      if (err) {
        return cb(err)
      }
      cb(null, filename, true)
    })
  })
}
