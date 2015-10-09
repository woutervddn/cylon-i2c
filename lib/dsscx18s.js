/*
 * DSSCX18S driver
 * http://cylonjs.com
 *
 * Copyright (c) 2015 PXL Tech
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");

var I2CDriver = require("./i2c-driver");

/**
 * A DSSCX18S Driver
 *
 * @constructor DSSCX18S
 */
var DSSCX18S = module.exports = function DSSCX18S() {
  DSSCX18S.__super__.constructor.apply(this, arguments);
  this.address = this.address || 0x74;

  this.setupCommands([
    "testSer1", "testSer1_b", "servo_go_to_pos"]);
  };

Cylon.Utils.subclass(DSSCX18S, I2CDriver);

DSSCX18S.MAX_DEG_PER_SEC = 10;

DSSCX18S.REG_ADDR = 0x00;
DSSCX18S.SER1_POS = 0x01;
DSSCX18S.SER1_CTL = 0x02;
DSSCX18S.SER2_POS = 0x03;
DSSCX18S.SER2_CTL = 0x04;
DSSCX18S.SER3_POS = 0x05;
DSSCX18S.SER3_CTL = 0x06;
DSSCX18S.SER4_POS = 0x07;
DSSCX18S.SER4_CTL = 0x08;
DSSCX18S.SER5_POS = 0x09;
DSSCX18S.SER5_CTL = 0x0A;
DSSCX18S.SER6_POS = 0x0B;
DSSCX18S.SER6_CTL = 0x0C;
DSSCX18S.SER7_POS = 0x0D;
DSSCX18S.SER7_CTL = 0x0E;
DSSCX18S.SER8_POS = 0x0F;
DSSCX18S.SER8_CTL = 0x10;
DSSCX18S.SER9_POS = 0x11;
DSSCX18S.SER9_CTL = 0x12;
DSSCX18S.SER10_POS = 0x13;
DSSCX18S.SER10_CTL = 0x14;
DSSCX18S.SER11_POS = 0x15;
DSSCX18S.SER11_CTL = 0x16;
DSSCX18S.SER12_POS = 0x17;
DSSCX18S.SER12_CTL = 0x18;
DSSCX18S.SER13_POS = 0x19;
DSSCX18S.SER13_CTL = 0x1A;
DSSCX18S.SER14_POS = 0x1B;
DSSCX18S.SER14_CTL = 0x1C;
DSSCX18S.SER15_POS = 0x1D;
DSSCX18S.SER15_CTL = 0x1E;
DSSCX18S.SER16_POS = 0x1F;
DSSCX18S.SER16_CTL = 0x20;
DSSCX18S.SER17_POS = 0x21;
DSSCX18S.SER17_CTL = 0x22;
DSSCX18S.SER18_POS = 0x23;
DSSCX18S.SER18_CTL = 0x24;
DSSCX18S.GLOB_ENA = 0x25;
DSSCX18S.ServoAdress = [
  [DSSCX18S.SER1_POS, DSSCX18S.SER1_CTL],
  [DSSCX18S.SER2_POS, DSSCX18S.SER2_CTL],
  [DSSCX18S.SER3_POS, DSSCX18S.SER3_CTL],
  [DSSCX18S.SER4_POS, DSSCX18S.SER4_CTL],
  [DSSCX18S.SER5_POS, DSSCX18S.SER5_CTL],
  [DSSCX18S.SER6_POS, DSSCX18S.SER6_CTL],
  [DSSCX18S.SER7_POS, DSSCX18S.SER7_CTL],
  [DSSCX18S.SER8_POS, DSSCX18S.SER8_CTL],
  [DSSCX18S.SER9_POS, DSSCX18S.SER9_CTL],
  [DSSCX18S.SER10_POS, DSSCX18S.SER10_CTL],
  [DSSCX18S.SER11_POS, DSSCX18S.SER11_CTL],
  [DSSCX18S.SER12_POS, DSSCX18S.SER12_CTL],
  [DSSCX18S.SER13_POS, DSSCX18S.SER13_CTL],
  [DSSCX18S.SER14_POS, DSSCX18S.SER14_CTL],
  [DSSCX18S.SER15_POS, DSSCX18S.SER15_CTL],
  [DSSCX18S.SER16_POS, DSSCX18S.SER16_CTL],
  [DSSCX18S.SER17_POS, DSSCX18S.SER17_CTL],
  [DSSCX18S.SER18_POS, DSSCX18S.SER18_CTL],
];



/**
 * Sets the color of the DSSCX18S to the specified combination of RGB values.
 *
 * @param {Number} r red value, 0-255
 * @param {Number} g green value, 0-255
 * @param {Number} b blue value, 0-255
 * @param {Function} callback function to invoke when complete
 * @return {void}
 * @publish
 */
DSSCX18S.prototype.testSer1 = function(callback) {
  console.log("go to pos 1");

  var myConnection = this.connection;

  //initial set
    // CLAW
    myConnection.i2cWrite(this.address, DSSCX18S.SER1_POS, 128, callback);
    myConnection.i2cWrite(this.address, DSSCX18S.SER1_CTL, 128, callback);
    myConnection.i2cWrite(this.address, DSSCX18S.GLOB_ENA, 0x00, callback);
    // wrist
    myConnection.i2cWrite(this.address, DSSCX18S.SER2_POS, 80, callback);
    myConnection.i2cWrite(this.address, DSSCX18S.SER2_CTL, 128, callback);
    myConnection.i2cWrite(this.address, DSSCX18S.GLOB_ENA, 0x00, callback);
    // elbow
    myConnection.i2cWrite(this.address, DSSCX18S.SER18_POS, 128, callback);
    myConnection.i2cWrite(this.address, DSSCX18S.SER18_CTL, 128, callback);
    myConnection.i2cWrite(this.address, DSSCX18S.GLOB_ENA, 0x00, callback);
    // shoulder
    myConnection.i2cWrite(this.address, DSSCX18S.SER3_POS, 128, callback);
    myConnection.i2cWrite(this.address, DSSCX18S.SER3_CTL, 128, callback);
    myConnection.i2cWrite(this.address, DSSCX18S.GLOB_ENA, 0x00, callback);
  // myConnection.i2cWrite(this.address, DSSCX18S.SER2_POS, 128, callback);
  // myConnection.i2cWrite(this.address, DSSCX18S.SER2_CTL, 128, callback);
  // myConnection.i2cWrite(this.address, DSSCX18S.GLOB_ENA, 0x00, callback);
};

DSSCX18S.prototype.testSer1_b = function(callback) {
  console.log("go to pos 2");

  var myConnection = this.connection;

  //initial set
    //claw
    myConnection.i2cWrite(this.address, DSSCX18S.SER1_POS, 40, callback);
    myConnection.i2cWrite(this.address, DSSCX18S.SER1_CTL, 128, callback);
    myConnection.i2cWrite(this.address, DSSCX18S.GLOB_ENA, 0x00, callback);
    // wrist
    myConnection.i2cWrite(this.address, DSSCX18S.SER2_POS, 30, callback);
    myConnection.i2cWrite(this.address, DSSCX18S.SER2_CTL, 128, callback);
    myConnection.i2cWrite(this.address, DSSCX18S.GLOB_ENA, 0x00, callback);
    // elbow
    myConnection.i2cWrite(this.address, DSSCX18S.SER18_POS, 60, callback);
    myConnection.i2cWrite(this.address, DSSCX18S.SER18_CTL, 128, callback);
    myConnection.i2cWrite(this.address, DSSCX18S.GLOB_ENA, 0x00, callback);
    // shoulder
    myConnection.i2cWrite(this.address, DSSCX18S.SER3_POS, 0, callback);
    myConnection.i2cWrite(this.address, DSSCX18S.SER3_CTL, 128, callback);
    myConnection.i2cWrite(this.address, DSSCX18S.GLOB_ENA, 0x00, callback);
  // myConnection.i2cWrite(this.address, DSSCX18S.SER2_POS, 180, callback);
  // myConnection.i2cWrite(this.address, DSSCX18S.SER2_CTL, 128, callback);
  // myConnection.i2cWrite(this.address, DSSCX18S.GLOB_ENA, 0x00, callback);
};

DSSCX18S.prototype.servo_go_to_pos = function(servoPin, newPosition, actuate, callback) {
  var myConnection = this.connection;

  var ServoPos = DSSCX18S.ServoAdress[ ((servoPin-1)) ][0];
  var ServoCtl = DSSCX18S.ServoAdress[ ((servoPin-1)) ][1];

    myConnection.i2cWrite(this.address, ServoPos, newPosition, callback);
    myConnection.i2cWrite(this.address, ServoCtl, 128, callback);
    if(actuate){
      myConnection.i2cWrite(this.address, DSSCX18S.GLOB_ENA, 0x00, callback);
    }
};