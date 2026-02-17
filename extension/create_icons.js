const fs = require('fs');
const path = require('path');

// Simple 1x1 colored pixel PNGs or similar construction
// These are base64 strings for simple colored squares
const icon16 = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA6SURBVDhPY/wPBAwUACYoTTZAvpUBsYKRgTEDywIsC0D8//9/BjJBMwNlAdkAlmV0A5AVMBoGCAAGBgAnDxHymrxJcAAAAABJRU5ErkJggg==', 'base64');
const icon48 = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABTSURBVGhD7cExAQAAAMKg9U9tCy8gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4GYWCTAAsZ/AFQAAAABJRU5ErkJggg==', 'base64'); // 48x48 transparent/white
const icon128 = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABoSURBVHhe7cAxAQAAAMKg9U9tDB8gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4GsW8XAAO0071QAAAABJRU5ErkJggg==', 'base64'); // 128x128

const extDir = path.join(__dirname);

fs.writeFileSync(path.join(extDir, 'icon16.png'), icon16);
fs.writeFileSync(path.join(extDir, 'icon48.png'), icon48);
fs.writeFileSync(path.join(extDir, 'icon128.png'), icon128);

console.log('Icons created successfully.');
