/**
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
*/

cordova.define('cordova/plugin/playback_controller', function(require, exports, module) {
    var exec = require('cordova/exec');

    var PlaybackController = function() {};

    PlaybackController.prototype.setTracks = function(trackIds, onSuccess, onFailed) {
        exec(onSuccess, onFailed, 'PlaybackController', 'setTracks', trackIds);
    }

    PlaybackController.prototype.setIndex = function(index, onSuccess, onFailed) {
        exec(onSuccess, onFailed, 'PlaybackController', 'setIndex', [index]);
    }

    PlaybackController.prototype.setPlayStateChangedCallback = function(onChanged) {
        exec(onChanged, function(err) {
            console.log(err);
        }, 'PlaybackController', 'setPlayStateChangedCallback', []);
    }

    PlaybackController.prototype.playTrack = function(onSuccess, onFailed) {
        exec(onSuccess, onFailed, 'PlaybackController', 'playTrack', []);
    }

    PlaybackController.prototype.pauseTrack = function(onSuccess, onFailed) {
        exec(onSuccess, onFailed, 'PlaybackController', 'pauseTrack', []);
    }

    PlaybackController.prototype.togglePlayPause = function(onSuccess, onFailed) {
        exec(onSuccess, onFailed, 'PlaybackController', 'togglePlayPause', []);
    }

    PlaybackController.prototype.nextTrack = function(onSuccess, onFailed) {
        exec(onSuccess, onFailed, 'PlaybackController', 'nextTrack', []);
    }

    PlaybackController.prototype.prevTrack = function(onSuccess, onFailed) {
        exec(onSuccess, onFailed, 'PlaybackController', 'prevTrack', []);
    }

    var playbackController = new PlaybackController();
    module.exports = playbackController;
});