/*
 * Copyright 2014-2015 Fabian Tollenaar <fabian@starting-point.nl>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var Transform = require('stream').Transform;

var toDelta = require('n2k-signalk').toDelta;

require('util').inherits(ToSignalK, Transform);

function ToSignalK() {
  Transform.call(this, {
    objectMode: true
  });
}


ToSignalK.prototype._transform = function(chunk, encoding, done) {
  var delta = toDelta(chunk);
  if (delta && delta.updates[0].values.length > 0) {
    this.push(delta);
  }
  done();
}


module.exports = ToSignalK;