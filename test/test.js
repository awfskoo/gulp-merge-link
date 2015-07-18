/**
 * Created by adai 
 */

'use strict';

var mergeLink = require('../');
var fs=require('fs');
var es = require('event-stream');
var File = require('vinyl');
var should = require('chai').should();
require('mocha');

describe('gulp-merge-link', function () {
    describe('mergeLink()', function () {
        it('should merge link or script on a buffer', function(done) {
            var file = new File({
                path: 'test/fixtures/tar.html',
                cwd: 'test/',
                base: 'test/fixtures',
                contents: fs.readFileSync('test/fixtures/src.html')
            });

            var stream = mergeLink({
                'base.css':['*.css','./lib/*.css'],
                'base.js':['lib/jquery.js','header.js']
            });
            stream.on('data', function(newFile) {
                should.exist(newFile);
                should.exist(newFile.contents);

                String(newFile.contents).should.equal(fs.readFileSync('test/expected/tar.html', 'utf8'));
                done();
            });

            stream.write(file);
            stream.end();
        });
        it('should ignore merge on a stream', function(done) {
            var file = new File({
                path: 'test/fixtures/tar.html',
                cwd: 'test/',
                base: 'test/fixtures',
                contents: fs.createReadStream('test/fixtures/src.html')
            });

            var stream = mergeLink({
                'base.css':['*.css','./lib/*.css'],
                'base.js':['lib/jquery.js','header.js']
            });
            stream.on('data', function(newFile) {
                should.exist(newFile);
                should.exist(newFile.contents);

                newFile.should.equal(file);

                done();
            });

            stream.write(file);
            stream.end();
        });
    });
});