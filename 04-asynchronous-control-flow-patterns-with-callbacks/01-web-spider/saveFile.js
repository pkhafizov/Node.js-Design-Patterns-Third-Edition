import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

export function saveFile(filename, contents, cb) {
  {
    mkdirp(path.dirname(filename), err => {
      if (err) {
        return cb(err);
      }

      fs.writeFile(filename, contents, cb);
    });
  }
}
