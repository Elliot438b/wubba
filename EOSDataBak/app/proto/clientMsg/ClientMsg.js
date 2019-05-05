/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Proto = (function() {

    /**
     * Namespace Proto.
     * @exports Proto
     * @namespace
     */
    var Proto = {};

    Proto.get_connector_c2s = (function() {

        /**
         * Properties of a get_connector_c2s.
         * @memberof Proto
         * @interface Iget_connector_c2s
         * @property {number} MsgID get_connector_c2s MsgID
         * @property {string|null} [userId] get_connector_c2s userId
         */

        /**
         * Constructs a new get_connector_c2s.
         * @memberof Proto
         * @classdesc Represents a get_connector_c2s.
         * @implements Iget_connector_c2s
         * @constructor
         * @param {Proto.Iget_connector_c2s=} [properties] Properties to set
         */
        function get_connector_c2s(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * get_connector_c2s MsgID.
         * @member {number} MsgID
         * @memberof Proto.get_connector_c2s
         * @instance
         */
        get_connector_c2s.prototype.MsgID = 501;

        /**
         * get_connector_c2s userId.
         * @member {string} userId
         * @memberof Proto.get_connector_c2s
         * @instance
         */
        get_connector_c2s.prototype.userId = "";

        /**
         * Creates a new get_connector_c2s instance using the specified properties.
         * @function create
         * @memberof Proto.get_connector_c2s
         * @static
         * @param {Proto.Iget_connector_c2s=} [properties] Properties to set
         * @returns {Proto.get_connector_c2s} get_connector_c2s instance
         */
        get_connector_c2s.create = function create(properties) {
            return new get_connector_c2s(properties);
        };

        /**
         * Encodes the specified get_connector_c2s message. Does not implicitly {@link Proto.get_connector_c2s.verify|verify} messages.
         * @function encode
         * @memberof Proto.get_connector_c2s
         * @static
         * @param {Proto.Iget_connector_c2s} message get_connector_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_connector_c2s.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
            return writer;
        };

        /**
         * Encodes the specified get_connector_c2s message, length delimited. Does not implicitly {@link Proto.get_connector_c2s.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.get_connector_c2s
         * @static
         * @param {Proto.Iget_connector_c2s} message get_connector_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_connector_c2s.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a get_connector_c2s message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.get_connector_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.get_connector_c2s} get_connector_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_connector_c2s.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.get_connector_c2s();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a get_connector_c2s message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.get_connector_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.get_connector_c2s} get_connector_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_connector_c2s.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a get_connector_c2s message.
         * @function verify
         * @memberof Proto.get_connector_c2s
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        get_connector_c2s.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            return null;
        };

        /**
         * Creates a get_connector_c2s message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.get_connector_c2s
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.get_connector_c2s} get_connector_c2s
         */
        get_connector_c2s.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.get_connector_c2s)
                return object;
            var message = new $root.Proto.get_connector_c2s();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        /**
         * Creates a plain object from a get_connector_c2s message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.get_connector_c2s
         * @static
         * @param {Proto.get_connector_c2s} message get_connector_c2s
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        get_connector_c2s.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 501;
                object.userId = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this get_connector_c2s to JSON.
         * @function toJSON
         * @memberof Proto.get_connector_c2s
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        get_connector_c2s.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return get_connector_c2s;
    })();

    Proto.get_connector_s2c = (function() {

        /**
         * Properties of a get_connector_s2c.
         * @memberof Proto
         * @interface Iget_connector_s2c
         * @property {number} MsgID get_connector_s2c MsgID
         * @property {string|null} [ip] get_connector_s2c ip
         * @property {string|null} [port] get_connector_s2c port
         */

        /**
         * Constructs a new get_connector_s2c.
         * @memberof Proto
         * @classdesc Represents a get_connector_s2c.
         * @implements Iget_connector_s2c
         * @constructor
         * @param {Proto.Iget_connector_s2c=} [properties] Properties to set
         */
        function get_connector_s2c(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * get_connector_s2c MsgID.
         * @member {number} MsgID
         * @memberof Proto.get_connector_s2c
         * @instance
         */
        get_connector_s2c.prototype.MsgID = 502;

        /**
         * get_connector_s2c ip.
         * @member {string} ip
         * @memberof Proto.get_connector_s2c
         * @instance
         */
        get_connector_s2c.prototype.ip = "";

        /**
         * get_connector_s2c port.
         * @member {string} port
         * @memberof Proto.get_connector_s2c
         * @instance
         */
        get_connector_s2c.prototype.port = "";

        /**
         * Creates a new get_connector_s2c instance using the specified properties.
         * @function create
         * @memberof Proto.get_connector_s2c
         * @static
         * @param {Proto.Iget_connector_s2c=} [properties] Properties to set
         * @returns {Proto.get_connector_s2c} get_connector_s2c instance
         */
        get_connector_s2c.create = function create(properties) {
            return new get_connector_s2c(properties);
        };

        /**
         * Encodes the specified get_connector_s2c message. Does not implicitly {@link Proto.get_connector_s2c.verify|verify} messages.
         * @function encode
         * @memberof Proto.get_connector_s2c
         * @static
         * @param {Proto.Iget_connector_s2c} message get_connector_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_connector_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ip);
            if (message.port != null && message.hasOwnProperty("port"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.port);
            return writer;
        };

        /**
         * Encodes the specified get_connector_s2c message, length delimited. Does not implicitly {@link Proto.get_connector_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.get_connector_s2c
         * @static
         * @param {Proto.Iget_connector_s2c} message get_connector_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_connector_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a get_connector_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.get_connector_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.get_connector_s2c} get_connector_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_connector_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.get_connector_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.ip = reader.string();
                    break;
                case 3:
                    message.port = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a get_connector_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.get_connector_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.get_connector_s2c} get_connector_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_connector_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a get_connector_s2c message.
         * @function verify
         * @memberof Proto.get_connector_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        get_connector_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isString(message.port))
                    return "port: string expected";
            return null;
        };

        /**
         * Creates a get_connector_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.get_connector_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.get_connector_s2c} get_connector_s2c
         */
        get_connector_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.get_connector_s2c)
                return object;
            var message = new $root.Proto.get_connector_s2c();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.port != null)
                message.port = String(object.port);
            return message;
        };

        /**
         * Creates a plain object from a get_connector_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.get_connector_s2c
         * @static
         * @param {Proto.get_connector_s2c} message get_connector_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        get_connector_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 502;
                object.ip = "";
                object.port = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            return object;
        };

        /**
         * Converts this get_connector_s2c to JSON.
         * @function toJSON
         * @memberof Proto.get_connector_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        get_connector_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return get_connector_s2c;
    })();

    Proto.client_ping_c2s = (function() {

        /**
         * Properties of a client_ping_c2s.
         * @memberof Proto
         * @interface Iclient_ping_c2s
         * @property {number} MsgID client_ping_c2s MsgID
         */

        /**
         * Constructs a new client_ping_c2s.
         * @memberof Proto
         * @classdesc Represents a client_ping_c2s.
         * @implements Iclient_ping_c2s
         * @constructor
         * @param {Proto.Iclient_ping_c2s=} [properties] Properties to set
         */
        function client_ping_c2s(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * client_ping_c2s MsgID.
         * @member {number} MsgID
         * @memberof Proto.client_ping_c2s
         * @instance
         */
        client_ping_c2s.prototype.MsgID = 1000;

        /**
         * Creates a new client_ping_c2s instance using the specified properties.
         * @function create
         * @memberof Proto.client_ping_c2s
         * @static
         * @param {Proto.Iclient_ping_c2s=} [properties] Properties to set
         * @returns {Proto.client_ping_c2s} client_ping_c2s instance
         */
        client_ping_c2s.create = function create(properties) {
            return new client_ping_c2s(properties);
        };

        /**
         * Encodes the specified client_ping_c2s message. Does not implicitly {@link Proto.client_ping_c2s.verify|verify} messages.
         * @function encode
         * @memberof Proto.client_ping_c2s
         * @static
         * @param {Proto.Iclient_ping_c2s} message client_ping_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        client_ping_c2s.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            return writer;
        };

        /**
         * Encodes the specified client_ping_c2s message, length delimited. Does not implicitly {@link Proto.client_ping_c2s.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.client_ping_c2s
         * @static
         * @param {Proto.Iclient_ping_c2s} message client_ping_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        client_ping_c2s.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a client_ping_c2s message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.client_ping_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.client_ping_c2s} client_ping_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        client_ping_c2s.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.client_ping_c2s();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a client_ping_c2s message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.client_ping_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.client_ping_c2s} client_ping_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        client_ping_c2s.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a client_ping_c2s message.
         * @function verify
         * @memberof Proto.client_ping_c2s
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        client_ping_c2s.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            return null;
        };

        /**
         * Creates a client_ping_c2s message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.client_ping_c2s
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.client_ping_c2s} client_ping_c2s
         */
        client_ping_c2s.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.client_ping_c2s)
                return object;
            var message = new $root.Proto.client_ping_c2s();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            return message;
        };

        /**
         * Creates a plain object from a client_ping_c2s message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.client_ping_c2s
         * @static
         * @param {Proto.client_ping_c2s} message client_ping_c2s
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        client_ping_c2s.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.MsgID = 1000;
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            return object;
        };

        /**
         * Converts this client_ping_c2s to JSON.
         * @function toJSON
         * @memberof Proto.client_ping_c2s
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        client_ping_c2s.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return client_ping_c2s;
    })();

    Proto.ws_C2S_Login = (function() {

        /**
         * Properties of a ws_C2S_Login.
         * @memberof Proto
         * @interface Iws_C2S_Login
         * @property {number} MsgID ws_C2S_Login MsgID
         * @property {string|null} [eosaccount] ws_C2S_Login eosaccount
         * @property {string|null} [PublicKey] ws_C2S_Login PublicKey
         * @property {string|null} [eosBalance] ws_C2S_Login eosBalance
         * @property {string|null} [gccBalance] ws_C2S_Login gccBalance
         */

        /**
         * Constructs a new ws_C2S_Login.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_Login.
         * @implements Iws_C2S_Login
         * @constructor
         * @param {Proto.Iws_C2S_Login=} [properties] Properties to set
         */
        function ws_C2S_Login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_Login MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_Login
         * @instance
         */
        ws_C2S_Login.prototype.MsgID = 10001;

        /**
         * ws_C2S_Login eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_C2S_Login
         * @instance
         */
        ws_C2S_Login.prototype.eosaccount = "";

        /**
         * ws_C2S_Login PublicKey.
         * @member {string} PublicKey
         * @memberof Proto.ws_C2S_Login
         * @instance
         */
        ws_C2S_Login.prototype.PublicKey = "";

        /**
         * ws_C2S_Login eosBalance.
         * @member {string} eosBalance
         * @memberof Proto.ws_C2S_Login
         * @instance
         */
        ws_C2S_Login.prototype.eosBalance = "";

        /**
         * ws_C2S_Login gccBalance.
         * @member {string} gccBalance
         * @memberof Proto.ws_C2S_Login
         * @instance
         */
        ws_C2S_Login.prototype.gccBalance = "";

        /**
         * Creates a new ws_C2S_Login instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_Login
         * @static
         * @param {Proto.Iws_C2S_Login=} [properties] Properties to set
         * @returns {Proto.ws_C2S_Login} ws_C2S_Login instance
         */
        ws_C2S_Login.create = function create(properties) {
            return new ws_C2S_Login(properties);
        };

        /**
         * Encodes the specified ws_C2S_Login message. Does not implicitly {@link Proto.ws_C2S_Login.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_Login
         * @static
         * @param {Proto.Iws_C2S_Login} message ws_C2S_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            if (message.PublicKey != null && message.hasOwnProperty("PublicKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.PublicKey);
            if (message.eosBalance != null && message.hasOwnProperty("eosBalance"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.eosBalance);
            if (message.gccBalance != null && message.hasOwnProperty("gccBalance"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.gccBalance);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_Login message, length delimited. Does not implicitly {@link Proto.ws_C2S_Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_Login
         * @static
         * @param {Proto.Iws_C2S_Login} message ws_C2S_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_Login message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_Login} ws_C2S_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_Login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                case 3:
                    message.PublicKey = reader.string();
                    break;
                case 4:
                    message.eosBalance = reader.string();
                    break;
                case 5:
                    message.gccBalance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_Login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_Login} ws_C2S_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_Login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_Login message.
         * @function verify
         * @memberof Proto.ws_C2S_Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.PublicKey != null && message.hasOwnProperty("PublicKey"))
                if (!$util.isString(message.PublicKey))
                    return "PublicKey: string expected";
            if (message.eosBalance != null && message.hasOwnProperty("eosBalance"))
                if (!$util.isString(message.eosBalance))
                    return "eosBalance: string expected";
            if (message.gccBalance != null && message.hasOwnProperty("gccBalance"))
                if (!$util.isString(message.gccBalance))
                    return "gccBalance: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_Login message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_Login
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_Login} ws_C2S_Login
         */
        ws_C2S_Login.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_Login)
                return object;
            var message = new $root.Proto.ws_C2S_Login();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.PublicKey != null)
                message.PublicKey = String(object.PublicKey);
            if (object.eosBalance != null)
                message.eosBalance = String(object.eosBalance);
            if (object.gccBalance != null)
                message.gccBalance = String(object.gccBalance);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_Login message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_Login
         * @static
         * @param {Proto.ws_C2S_Login} message ws_C2S_Login
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_Login.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10001;
                object.eosaccount = "";
                object.PublicKey = "";
                object.eosBalance = "";
                object.gccBalance = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.PublicKey != null && message.hasOwnProperty("PublicKey"))
                object.PublicKey = message.PublicKey;
            if (message.eosBalance != null && message.hasOwnProperty("eosBalance"))
                object.eosBalance = message.eosBalance;
            if (message.gccBalance != null && message.hasOwnProperty("gccBalance"))
                object.gccBalance = message.gccBalance;
            return object;
        };

        /**
         * Converts this ws_C2S_Login to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_Login
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_Login.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_Login;
    })();

    Proto.ws_S2C_Login = (function() {

        /**
         * Properties of a ws_S2C_Login.
         * @memberof Proto
         * @interface Iws_S2C_Login
         * @property {number} MsgID ws_S2C_Login MsgID
         * @property {Proto.IUserInfo|null} [User] ws_S2C_Login User
         * @property {Proto.IRoomInfo|null} [Room] ws_S2C_Login Room
         * @property {string|null} [gsa] ws_S2C_Login gsa
         * @property {number|null} [status] ws_S2C_Login status
         */

        /**
         * Constructs a new ws_S2C_Login.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_Login.
         * @implements Iws_S2C_Login
         * @constructor
         * @param {Proto.Iws_S2C_Login=} [properties] Properties to set
         */
        function ws_S2C_Login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_Login MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_Login
         * @instance
         */
        ws_S2C_Login.prototype.MsgID = 20001;

        /**
         * ws_S2C_Login User.
         * @member {Proto.IUserInfo|null|undefined} User
         * @memberof Proto.ws_S2C_Login
         * @instance
         */
        ws_S2C_Login.prototype.User = null;

        /**
         * ws_S2C_Login Room.
         * @member {Proto.IRoomInfo|null|undefined} Room
         * @memberof Proto.ws_S2C_Login
         * @instance
         */
        ws_S2C_Login.prototype.Room = null;

        /**
         * ws_S2C_Login gsa.
         * @member {string} gsa
         * @memberof Proto.ws_S2C_Login
         * @instance
         */
        ws_S2C_Login.prototype.gsa = "";

        /**
         * ws_S2C_Login status.
         * @member {number} status
         * @memberof Proto.ws_S2C_Login
         * @instance
         */
        ws_S2C_Login.prototype.status = 0;

        /**
         * Creates a new ws_S2C_Login instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_Login
         * @static
         * @param {Proto.Iws_S2C_Login=} [properties] Properties to set
         * @returns {Proto.ws_S2C_Login} ws_S2C_Login instance
         */
        ws_S2C_Login.create = function create(properties) {
            return new ws_S2C_Login(properties);
        };

        /**
         * Encodes the specified ws_S2C_Login message. Does not implicitly {@link Proto.ws_S2C_Login.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_Login
         * @static
         * @param {Proto.Iws_S2C_Login} message ws_S2C_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.User != null && message.hasOwnProperty("User"))
                $root.Proto.UserInfo.encode(message.User, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.Room != null && message.hasOwnProperty("Room"))
                $root.Proto.RoomInfo.encode(message.Room, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.gsa != null && message.hasOwnProperty("gsa"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.gsa);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_Login message, length delimited. Does not implicitly {@link Proto.ws_S2C_Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_Login
         * @static
         * @param {Proto.Iws_S2C_Login} message ws_S2C_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_Login message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_Login} ws_S2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_Login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.User = $root.Proto.UserInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.Room = $root.Proto.RoomInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.gsa = reader.string();
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_Login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_Login} ws_S2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_Login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_Login message.
         * @function verify
         * @memberof Proto.ws_S2C_Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.User != null && message.hasOwnProperty("User")) {
                var error = $root.Proto.UserInfo.verify(message.User);
                if (error)
                    return "User." + error;
            }
            if (message.Room != null && message.hasOwnProperty("Room")) {
                var error = $root.Proto.RoomInfo.verify(message.Room);
                if (error)
                    return "Room." + error;
            }
            if (message.gsa != null && message.hasOwnProperty("gsa"))
                if (!$util.isString(message.gsa))
                    return "gsa: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates a ws_S2C_Login message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_Login
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_Login} ws_S2C_Login
         */
        ws_S2C_Login.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_Login)
                return object;
            var message = new $root.Proto.ws_S2C_Login();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".Proto.ws_S2C_Login.User: object expected");
                message.User = $root.Proto.UserInfo.fromObject(object.User);
            }
            if (object.Room != null) {
                if (typeof object.Room !== "object")
                    throw TypeError(".Proto.ws_S2C_Login.Room: object expected");
                message.Room = $root.Proto.RoomInfo.fromObject(object.Room);
            }
            if (object.gsa != null)
                message.gsa = String(object.gsa);
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_Login message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_Login
         * @static
         * @param {Proto.ws_S2C_Login} message ws_S2C_Login
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_Login.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20001;
                object.User = null;
                object.Room = null;
                object.gsa = "";
                object.status = 0;
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.User != null && message.hasOwnProperty("User"))
                object.User = $root.Proto.UserInfo.toObject(message.User, options);
            if (message.Room != null && message.hasOwnProperty("Room"))
                object.Room = $root.Proto.RoomInfo.toObject(message.Room, options);
            if (message.gsa != null && message.hasOwnProperty("gsa"))
                object.gsa = message.gsa;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this ws_S2C_Login to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_Login
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_Login.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_Login;
    })();

    Proto.ws_C2S_UpdateUser = (function() {

        /**
         * Properties of a ws_C2S_UpdateUser.
         * @memberof Proto
         * @interface Iws_C2S_UpdateUser
         * @property {number} MsgID ws_C2S_UpdateUser MsgID
         * @property {Proto.IUserInfo|null} [User] ws_C2S_UpdateUser User
         */

        /**
         * Constructs a new ws_C2S_UpdateUser.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_UpdateUser.
         * @implements Iws_C2S_UpdateUser
         * @constructor
         * @param {Proto.Iws_C2S_UpdateUser=} [properties] Properties to set
         */
        function ws_C2S_UpdateUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_UpdateUser MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_UpdateUser
         * @instance
         */
        ws_C2S_UpdateUser.prototype.MsgID = 10002;

        /**
         * ws_C2S_UpdateUser User.
         * @member {Proto.IUserInfo|null|undefined} User
         * @memberof Proto.ws_C2S_UpdateUser
         * @instance
         */
        ws_C2S_UpdateUser.prototype.User = null;

        /**
         * Creates a new ws_C2S_UpdateUser instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_UpdateUser
         * @static
         * @param {Proto.Iws_C2S_UpdateUser=} [properties] Properties to set
         * @returns {Proto.ws_C2S_UpdateUser} ws_C2S_UpdateUser instance
         */
        ws_C2S_UpdateUser.create = function create(properties) {
            return new ws_C2S_UpdateUser(properties);
        };

        /**
         * Encodes the specified ws_C2S_UpdateUser message. Does not implicitly {@link Proto.ws_C2S_UpdateUser.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_UpdateUser
         * @static
         * @param {Proto.Iws_C2S_UpdateUser} message ws_C2S_UpdateUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_UpdateUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.User != null && message.hasOwnProperty("User"))
                $root.Proto.UserInfo.encode(message.User, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_UpdateUser message, length delimited. Does not implicitly {@link Proto.ws_C2S_UpdateUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_UpdateUser
         * @static
         * @param {Proto.Iws_C2S_UpdateUser} message ws_C2S_UpdateUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_UpdateUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_UpdateUser message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_UpdateUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_UpdateUser} ws_C2S_UpdateUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_UpdateUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_UpdateUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.User = $root.Proto.UserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_UpdateUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_UpdateUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_UpdateUser} ws_C2S_UpdateUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_UpdateUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_UpdateUser message.
         * @function verify
         * @memberof Proto.ws_C2S_UpdateUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_UpdateUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.User != null && message.hasOwnProperty("User")) {
                var error = $root.Proto.UserInfo.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a ws_C2S_UpdateUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_UpdateUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_UpdateUser} ws_C2S_UpdateUser
         */
        ws_C2S_UpdateUser.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_UpdateUser)
                return object;
            var message = new $root.Proto.ws_C2S_UpdateUser();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".Proto.ws_C2S_UpdateUser.User: object expected");
                message.User = $root.Proto.UserInfo.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_UpdateUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_UpdateUser
         * @static
         * @param {Proto.ws_C2S_UpdateUser} message ws_C2S_UpdateUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_UpdateUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10002;
                object.User = null;
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.User != null && message.hasOwnProperty("User"))
                object.User = $root.Proto.UserInfo.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this ws_C2S_UpdateUser to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_UpdateUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_UpdateUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_UpdateUser;
    })();

    Proto.ws_S2C_UpdateUser = (function() {

        /**
         * Properties of a ws_S2C_UpdateUser.
         * @memberof Proto
         * @interface Iws_S2C_UpdateUser
         * @property {number} MsgID ws_S2C_UpdateUser MsgID
         * @property {string|null} [Status] ws_S2C_UpdateUser Status
         */

        /**
         * Constructs a new ws_S2C_UpdateUser.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_UpdateUser.
         * @implements Iws_S2C_UpdateUser
         * @constructor
         * @param {Proto.Iws_S2C_UpdateUser=} [properties] Properties to set
         */
        function ws_S2C_UpdateUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_UpdateUser MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_UpdateUser
         * @instance
         */
        ws_S2C_UpdateUser.prototype.MsgID = 20002;

        /**
         * ws_S2C_UpdateUser Status.
         * @member {string} Status
         * @memberof Proto.ws_S2C_UpdateUser
         * @instance
         */
        ws_S2C_UpdateUser.prototype.Status = "";

        /**
         * Creates a new ws_S2C_UpdateUser instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_UpdateUser
         * @static
         * @param {Proto.Iws_S2C_UpdateUser=} [properties] Properties to set
         * @returns {Proto.ws_S2C_UpdateUser} ws_S2C_UpdateUser instance
         */
        ws_S2C_UpdateUser.create = function create(properties) {
            return new ws_S2C_UpdateUser(properties);
        };

        /**
         * Encodes the specified ws_S2C_UpdateUser message. Does not implicitly {@link Proto.ws_S2C_UpdateUser.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_UpdateUser
         * @static
         * @param {Proto.Iws_S2C_UpdateUser} message ws_S2C_UpdateUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_UpdateUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Status);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_UpdateUser message, length delimited. Does not implicitly {@link Proto.ws_S2C_UpdateUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_UpdateUser
         * @static
         * @param {Proto.Iws_S2C_UpdateUser} message ws_S2C_UpdateUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_UpdateUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_UpdateUser message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_UpdateUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_UpdateUser} ws_S2C_UpdateUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_UpdateUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_UpdateUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.Status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_UpdateUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_UpdateUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_UpdateUser} ws_S2C_UpdateUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_UpdateUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_UpdateUser message.
         * @function verify
         * @memberof Proto.ws_S2C_UpdateUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_UpdateUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isString(message.Status))
                    return "Status: string expected";
            return null;
        };

        /**
         * Creates a ws_S2C_UpdateUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_UpdateUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_UpdateUser} ws_S2C_UpdateUser
         */
        ws_S2C_UpdateUser.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_UpdateUser)
                return object;
            var message = new $root.Proto.ws_S2C_UpdateUser();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.Status != null)
                message.Status = String(object.Status);
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_UpdateUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_UpdateUser
         * @static
         * @param {Proto.ws_S2C_UpdateUser} message ws_S2C_UpdateUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_UpdateUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20002;
                object.Status = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this ws_S2C_UpdateUser to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_UpdateUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_UpdateUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_UpdateUser;
    })();

    Proto.ws_C2S_GetTableID = (function() {

        /**
         * Properties of a ws_C2S_GetTableID.
         * @memberof Proto
         * @interface Iws_C2S_GetTableID
         * @property {number} MsgID ws_C2S_GetTableID MsgID
         */

        /**
         * Constructs a new ws_C2S_GetTableID.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_GetTableID.
         * @implements Iws_C2S_GetTableID
         * @constructor
         * @param {Proto.Iws_C2S_GetTableID=} [properties] Properties to set
         */
        function ws_C2S_GetTableID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_GetTableID MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_GetTableID
         * @instance
         */
        ws_C2S_GetTableID.prototype.MsgID = 10003;

        /**
         * Creates a new ws_C2S_GetTableID instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_GetTableID
         * @static
         * @param {Proto.Iws_C2S_GetTableID=} [properties] Properties to set
         * @returns {Proto.ws_C2S_GetTableID} ws_C2S_GetTableID instance
         */
        ws_C2S_GetTableID.create = function create(properties) {
            return new ws_C2S_GetTableID(properties);
        };

        /**
         * Encodes the specified ws_C2S_GetTableID message. Does not implicitly {@link Proto.ws_C2S_GetTableID.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_GetTableID
         * @static
         * @param {Proto.Iws_C2S_GetTableID} message ws_C2S_GetTableID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_GetTableID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_GetTableID message, length delimited. Does not implicitly {@link Proto.ws_C2S_GetTableID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_GetTableID
         * @static
         * @param {Proto.Iws_C2S_GetTableID} message ws_C2S_GetTableID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_GetTableID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_GetTableID message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_GetTableID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_GetTableID} ws_C2S_GetTableID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_GetTableID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_GetTableID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_GetTableID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_GetTableID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_GetTableID} ws_C2S_GetTableID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_GetTableID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_GetTableID message.
         * @function verify
         * @memberof Proto.ws_C2S_GetTableID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_GetTableID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            return null;
        };

        /**
         * Creates a ws_C2S_GetTableID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_GetTableID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_GetTableID} ws_C2S_GetTableID
         */
        ws_C2S_GetTableID.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_GetTableID)
                return object;
            var message = new $root.Proto.ws_C2S_GetTableID();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_GetTableID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_GetTableID
         * @static
         * @param {Proto.ws_C2S_GetTableID} message ws_C2S_GetTableID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_GetTableID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.MsgID = 10003;
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            return object;
        };

        /**
         * Converts this ws_C2S_GetTableID to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_GetTableID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_GetTableID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_GetTableID;
    })();

    Proto.ws_S2C_GetTableID = (function() {

        /**
         * Properties of a ws_S2C_GetTableID.
         * @memberof Proto
         * @interface Iws_S2C_GetTableID
         * @property {number} MsgID ws_S2C_GetTableID MsgID
         * @property {number|null} [TableID] ws_S2C_GetTableID TableID
         */

        /**
         * Constructs a new ws_S2C_GetTableID.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_GetTableID.
         * @implements Iws_S2C_GetTableID
         * @constructor
         * @param {Proto.Iws_S2C_GetTableID=} [properties] Properties to set
         */
        function ws_S2C_GetTableID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_GetTableID MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_GetTableID
         * @instance
         */
        ws_S2C_GetTableID.prototype.MsgID = 20003;

        /**
         * ws_S2C_GetTableID TableID.
         * @member {number} TableID
         * @memberof Proto.ws_S2C_GetTableID
         * @instance
         */
        ws_S2C_GetTableID.prototype.TableID = 0;

        /**
         * Creates a new ws_S2C_GetTableID instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_GetTableID
         * @static
         * @param {Proto.Iws_S2C_GetTableID=} [properties] Properties to set
         * @returns {Proto.ws_S2C_GetTableID} ws_S2C_GetTableID instance
         */
        ws_S2C_GetTableID.create = function create(properties) {
            return new ws_S2C_GetTableID(properties);
        };

        /**
         * Encodes the specified ws_S2C_GetTableID message. Does not implicitly {@link Proto.ws_S2C_GetTableID.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_GetTableID
         * @static
         * @param {Proto.Iws_S2C_GetTableID} message ws_S2C_GetTableID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_GetTableID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_GetTableID message, length delimited. Does not implicitly {@link Proto.ws_S2C_GetTableID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_GetTableID
         * @static
         * @param {Proto.Iws_S2C_GetTableID} message ws_S2C_GetTableID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_GetTableID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_GetTableID message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_GetTableID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_GetTableID} ws_S2C_GetTableID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_GetTableID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_GetTableID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_GetTableID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_GetTableID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_GetTableID} ws_S2C_GetTableID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_GetTableID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_GetTableID message.
         * @function verify
         * @memberof Proto.ws_S2C_GetTableID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_GetTableID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            return null;
        };

        /**
         * Creates a ws_S2C_GetTableID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_GetTableID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_GetTableID} ws_S2C_GetTableID
         */
        ws_S2C_GetTableID.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_GetTableID)
                return object;
            var message = new $root.Proto.ws_S2C_GetTableID();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_GetTableID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_GetTableID
         * @static
         * @param {Proto.ws_S2C_GetTableID} message ws_S2C_GetTableID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_GetTableID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20003;
                object.TableID = 0;
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            return object;
        };

        /**
         * Converts this ws_S2C_GetTableID to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_GetTableID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_GetTableID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_GetTableID;
    })();

    Proto.ws_C2S_NewTable = (function() {

        /**
         * Properties of a ws_C2S_NewTable.
         * @memberof Proto
         * @interface Iws_C2S_NewTable
         * @property {number} MsgID ws_C2S_NewTable MsgID
         * @property {string|null} [Dealer] ws_C2S_NewTable Dealer
         * @property {Proto.ITableInfo|null} [Table] ws_C2S_NewTable Table
         * @property {string|null} [Sign] ws_C2S_NewTable Sign
         * @property {string|null} [Tr] ws_C2S_NewTable Tr
         */

        /**
         * Constructs a new ws_C2S_NewTable.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_NewTable.
         * @implements Iws_C2S_NewTable
         * @constructor
         * @param {Proto.Iws_C2S_NewTable=} [properties] Properties to set
         */
        function ws_C2S_NewTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_NewTable MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_NewTable
         * @instance
         */
        ws_C2S_NewTable.prototype.MsgID = 10004;

        /**
         * ws_C2S_NewTable Dealer.
         * @member {string} Dealer
         * @memberof Proto.ws_C2S_NewTable
         * @instance
         */
        ws_C2S_NewTable.prototype.Dealer = "";

        /**
         * ws_C2S_NewTable Table.
         * @member {Proto.ITableInfo|null|undefined} Table
         * @memberof Proto.ws_C2S_NewTable
         * @instance
         */
        ws_C2S_NewTable.prototype.Table = null;

        /**
         * ws_C2S_NewTable Sign.
         * @member {string} Sign
         * @memberof Proto.ws_C2S_NewTable
         * @instance
         */
        ws_C2S_NewTable.prototype.Sign = "";

        /**
         * ws_C2S_NewTable Tr.
         * @member {string} Tr
         * @memberof Proto.ws_C2S_NewTable
         * @instance
         */
        ws_C2S_NewTable.prototype.Tr = "";

        /**
         * Creates a new ws_C2S_NewTable instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_NewTable
         * @static
         * @param {Proto.Iws_C2S_NewTable=} [properties] Properties to set
         * @returns {Proto.ws_C2S_NewTable} ws_C2S_NewTable instance
         */
        ws_C2S_NewTable.create = function create(properties) {
            return new ws_C2S_NewTable(properties);
        };

        /**
         * Encodes the specified ws_C2S_NewTable message. Does not implicitly {@link Proto.ws_C2S_NewTable.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_NewTable
         * @static
         * @param {Proto.Iws_C2S_NewTable} message ws_C2S_NewTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_NewTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.Dealer != null && message.hasOwnProperty("Dealer"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Dealer);
            if (message.Table != null && message.hasOwnProperty("Table"))
                $root.Proto.TableInfo.encode(message.Table, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Sign);
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Tr);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_NewTable message, length delimited. Does not implicitly {@link Proto.ws_C2S_NewTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_NewTable
         * @static
         * @param {Proto.Iws_C2S_NewTable} message ws_C2S_NewTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_NewTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_NewTable message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_NewTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_NewTable} ws_C2S_NewTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_NewTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_NewTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.Dealer = reader.string();
                    break;
                case 3:
                    message.Table = $root.Proto.TableInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.Sign = reader.string();
                    break;
                case 5:
                    message.Tr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_NewTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_NewTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_NewTable} ws_C2S_NewTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_NewTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_NewTable message.
         * @function verify
         * @memberof Proto.ws_C2S_NewTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_NewTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.Dealer != null && message.hasOwnProperty("Dealer"))
                if (!$util.isString(message.Dealer))
                    return "Dealer: string expected";
            if (message.Table != null && message.hasOwnProperty("Table")) {
                var error = $root.Proto.TableInfo.verify(message.Table);
                if (error)
                    return "Table." + error;
            }
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                if (!$util.isString(message.Sign))
                    return "Sign: string expected";
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                if (!$util.isString(message.Tr))
                    return "Tr: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_NewTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_NewTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_NewTable} ws_C2S_NewTable
         */
        ws_C2S_NewTable.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_NewTable)
                return object;
            var message = new $root.Proto.ws_C2S_NewTable();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.Dealer != null)
                message.Dealer = String(object.Dealer);
            if (object.Table != null) {
                if (typeof object.Table !== "object")
                    throw TypeError(".Proto.ws_C2S_NewTable.Table: object expected");
                message.Table = $root.Proto.TableInfo.fromObject(object.Table);
            }
            if (object.Sign != null)
                message.Sign = String(object.Sign);
            if (object.Tr != null)
                message.Tr = String(object.Tr);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_NewTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_NewTable
         * @static
         * @param {Proto.ws_C2S_NewTable} message ws_C2S_NewTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_NewTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10004;
                object.Dealer = "";
                object.Table = null;
                object.Sign = "";
                object.Tr = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.Dealer != null && message.hasOwnProperty("Dealer"))
                object.Dealer = message.Dealer;
            if (message.Table != null && message.hasOwnProperty("Table"))
                object.Table = $root.Proto.TableInfo.toObject(message.Table, options);
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                object.Sign = message.Sign;
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                object.Tr = message.Tr;
            return object;
        };

        /**
         * Converts this ws_C2S_NewTable to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_NewTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_NewTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_NewTable;
    })();

    Proto.ws_S2C_NewTable = (function() {

        /**
         * Properties of a ws_S2C_NewTable.
         * @memberof Proto
         * @interface Iws_S2C_NewTable
         * @property {number} MsgID ws_S2C_NewTable MsgID
         * @property {string|null} [Status] ws_S2C_NewTable Status
         */

        /**
         * Constructs a new ws_S2C_NewTable.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_NewTable.
         * @implements Iws_S2C_NewTable
         * @constructor
         * @param {Proto.Iws_S2C_NewTable=} [properties] Properties to set
         */
        function ws_S2C_NewTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_NewTable MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_NewTable
         * @instance
         */
        ws_S2C_NewTable.prototype.MsgID = 20004;

        /**
         * ws_S2C_NewTable Status.
         * @member {string} Status
         * @memberof Proto.ws_S2C_NewTable
         * @instance
         */
        ws_S2C_NewTable.prototype.Status = "";

        /**
         * Creates a new ws_S2C_NewTable instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_NewTable
         * @static
         * @param {Proto.Iws_S2C_NewTable=} [properties] Properties to set
         * @returns {Proto.ws_S2C_NewTable} ws_S2C_NewTable instance
         */
        ws_S2C_NewTable.create = function create(properties) {
            return new ws_S2C_NewTable(properties);
        };

        /**
         * Encodes the specified ws_S2C_NewTable message. Does not implicitly {@link Proto.ws_S2C_NewTable.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_NewTable
         * @static
         * @param {Proto.Iws_S2C_NewTable} message ws_S2C_NewTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_NewTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Status);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_NewTable message, length delimited. Does not implicitly {@link Proto.ws_S2C_NewTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_NewTable
         * @static
         * @param {Proto.Iws_S2C_NewTable} message ws_S2C_NewTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_NewTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_NewTable message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_NewTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_NewTable} ws_S2C_NewTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_NewTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_NewTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.Status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_NewTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_NewTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_NewTable} ws_S2C_NewTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_NewTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_NewTable message.
         * @function verify
         * @memberof Proto.ws_S2C_NewTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_NewTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isString(message.Status))
                    return "Status: string expected";
            return null;
        };

        /**
         * Creates a ws_S2C_NewTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_NewTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_NewTable} ws_S2C_NewTable
         */
        ws_S2C_NewTable.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_NewTable)
                return object;
            var message = new $root.Proto.ws_S2C_NewTable();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.Status != null)
                message.Status = String(object.Status);
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_NewTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_NewTable
         * @static
         * @param {Proto.ws_S2C_NewTable} message ws_S2C_NewTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_NewTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20004;
                object.Status = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this ws_S2C_NewTable to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_NewTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_NewTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_NewTable;
    })();

    Proto.ws_C2S_UpdateTable = (function() {

        /**
         * Properties of a ws_C2S_UpdateTable.
         * @memberof Proto
         * @interface Iws_C2S_UpdateTable
         * @property {number} MsgID ws_C2S_UpdateTable MsgID
         * @property {string|null} [Dealer] ws_C2S_UpdateTable Dealer
         * @property {Proto.ITableInfo|null} [Table] ws_C2S_UpdateTable Table
         * @property {string|null} [Sign] ws_C2S_UpdateTable Sign
         * @property {string|null} [Tr] ws_C2S_UpdateTable Tr
         */

        /**
         * Constructs a new ws_C2S_UpdateTable.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_UpdateTable.
         * @implements Iws_C2S_UpdateTable
         * @constructor
         * @param {Proto.Iws_C2S_UpdateTable=} [properties] Properties to set
         */
        function ws_C2S_UpdateTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_UpdateTable MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_UpdateTable
         * @instance
         */
        ws_C2S_UpdateTable.prototype.MsgID = 10005;

        /**
         * ws_C2S_UpdateTable Dealer.
         * @member {string} Dealer
         * @memberof Proto.ws_C2S_UpdateTable
         * @instance
         */
        ws_C2S_UpdateTable.prototype.Dealer = "";

        /**
         * ws_C2S_UpdateTable Table.
         * @member {Proto.ITableInfo|null|undefined} Table
         * @memberof Proto.ws_C2S_UpdateTable
         * @instance
         */
        ws_C2S_UpdateTable.prototype.Table = null;

        /**
         * ws_C2S_UpdateTable Sign.
         * @member {string} Sign
         * @memberof Proto.ws_C2S_UpdateTable
         * @instance
         */
        ws_C2S_UpdateTable.prototype.Sign = "";

        /**
         * ws_C2S_UpdateTable Tr.
         * @member {string} Tr
         * @memberof Proto.ws_C2S_UpdateTable
         * @instance
         */
        ws_C2S_UpdateTable.prototype.Tr = "";

        /**
         * Creates a new ws_C2S_UpdateTable instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_UpdateTable
         * @static
         * @param {Proto.Iws_C2S_UpdateTable=} [properties] Properties to set
         * @returns {Proto.ws_C2S_UpdateTable} ws_C2S_UpdateTable instance
         */
        ws_C2S_UpdateTable.create = function create(properties) {
            return new ws_C2S_UpdateTable(properties);
        };

        /**
         * Encodes the specified ws_C2S_UpdateTable message. Does not implicitly {@link Proto.ws_C2S_UpdateTable.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_UpdateTable
         * @static
         * @param {Proto.Iws_C2S_UpdateTable} message ws_C2S_UpdateTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_UpdateTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.Dealer != null && message.hasOwnProperty("Dealer"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Dealer);
            if (message.Table != null && message.hasOwnProperty("Table"))
                $root.Proto.TableInfo.encode(message.Table, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Sign);
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Tr);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_UpdateTable message, length delimited. Does not implicitly {@link Proto.ws_C2S_UpdateTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_UpdateTable
         * @static
         * @param {Proto.Iws_C2S_UpdateTable} message ws_C2S_UpdateTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_UpdateTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_UpdateTable message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_UpdateTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_UpdateTable} ws_C2S_UpdateTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_UpdateTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_UpdateTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.Dealer = reader.string();
                    break;
                case 3:
                    message.Table = $root.Proto.TableInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.Sign = reader.string();
                    break;
                case 5:
                    message.Tr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_UpdateTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_UpdateTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_UpdateTable} ws_C2S_UpdateTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_UpdateTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_UpdateTable message.
         * @function verify
         * @memberof Proto.ws_C2S_UpdateTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_UpdateTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.Dealer != null && message.hasOwnProperty("Dealer"))
                if (!$util.isString(message.Dealer))
                    return "Dealer: string expected";
            if (message.Table != null && message.hasOwnProperty("Table")) {
                var error = $root.Proto.TableInfo.verify(message.Table);
                if (error)
                    return "Table." + error;
            }
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                if (!$util.isString(message.Sign))
                    return "Sign: string expected";
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                if (!$util.isString(message.Tr))
                    return "Tr: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_UpdateTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_UpdateTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_UpdateTable} ws_C2S_UpdateTable
         */
        ws_C2S_UpdateTable.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_UpdateTable)
                return object;
            var message = new $root.Proto.ws_C2S_UpdateTable();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.Dealer != null)
                message.Dealer = String(object.Dealer);
            if (object.Table != null) {
                if (typeof object.Table !== "object")
                    throw TypeError(".Proto.ws_C2S_UpdateTable.Table: object expected");
                message.Table = $root.Proto.TableInfo.fromObject(object.Table);
            }
            if (object.Sign != null)
                message.Sign = String(object.Sign);
            if (object.Tr != null)
                message.Tr = String(object.Tr);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_UpdateTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_UpdateTable
         * @static
         * @param {Proto.ws_C2S_UpdateTable} message ws_C2S_UpdateTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_UpdateTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10005;
                object.Dealer = "";
                object.Table = null;
                object.Sign = "";
                object.Tr = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.Dealer != null && message.hasOwnProperty("Dealer"))
                object.Dealer = message.Dealer;
            if (message.Table != null && message.hasOwnProperty("Table"))
                object.Table = $root.Proto.TableInfo.toObject(message.Table, options);
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                object.Sign = message.Sign;
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                object.Tr = message.Tr;
            return object;
        };

        /**
         * Converts this ws_C2S_UpdateTable to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_UpdateTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_UpdateTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_UpdateTable;
    })();

    Proto.ws_S2C_UpdateTable = (function() {

        /**
         * Properties of a ws_S2C_UpdateTable.
         * @memberof Proto
         * @interface Iws_S2C_UpdateTable
         * @property {number} MsgID ws_S2C_UpdateTable MsgID
         * @property {string|null} [Status] ws_S2C_UpdateTable Status
         */

        /**
         * Constructs a new ws_S2C_UpdateTable.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_UpdateTable.
         * @implements Iws_S2C_UpdateTable
         * @constructor
         * @param {Proto.Iws_S2C_UpdateTable=} [properties] Properties to set
         */
        function ws_S2C_UpdateTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_UpdateTable MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_UpdateTable
         * @instance
         */
        ws_S2C_UpdateTable.prototype.MsgID = 20005;

        /**
         * ws_S2C_UpdateTable Status.
         * @member {string} Status
         * @memberof Proto.ws_S2C_UpdateTable
         * @instance
         */
        ws_S2C_UpdateTable.prototype.Status = "";

        /**
         * Creates a new ws_S2C_UpdateTable instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_UpdateTable
         * @static
         * @param {Proto.Iws_S2C_UpdateTable=} [properties] Properties to set
         * @returns {Proto.ws_S2C_UpdateTable} ws_S2C_UpdateTable instance
         */
        ws_S2C_UpdateTable.create = function create(properties) {
            return new ws_S2C_UpdateTable(properties);
        };

        /**
         * Encodes the specified ws_S2C_UpdateTable message. Does not implicitly {@link Proto.ws_S2C_UpdateTable.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_UpdateTable
         * @static
         * @param {Proto.Iws_S2C_UpdateTable} message ws_S2C_UpdateTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_UpdateTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Status);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_UpdateTable message, length delimited. Does not implicitly {@link Proto.ws_S2C_UpdateTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_UpdateTable
         * @static
         * @param {Proto.Iws_S2C_UpdateTable} message ws_S2C_UpdateTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_UpdateTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_UpdateTable message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_UpdateTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_UpdateTable} ws_S2C_UpdateTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_UpdateTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_UpdateTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.Status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_UpdateTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_UpdateTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_UpdateTable} ws_S2C_UpdateTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_UpdateTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_UpdateTable message.
         * @function verify
         * @memberof Proto.ws_S2C_UpdateTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_UpdateTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isString(message.Status))
                    return "Status: string expected";
            return null;
        };

        /**
         * Creates a ws_S2C_UpdateTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_UpdateTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_UpdateTable} ws_S2C_UpdateTable
         */
        ws_S2C_UpdateTable.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_UpdateTable)
                return object;
            var message = new $root.Proto.ws_S2C_UpdateTable();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.Status != null)
                message.Status = String(object.Status);
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_UpdateTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_UpdateTable
         * @static
         * @param {Proto.ws_S2C_UpdateTable} message ws_S2C_UpdateTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_UpdateTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20005;
                object.Status = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this ws_S2C_UpdateTable to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_UpdateTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_UpdateTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_UpdateTable;
    })();

    Proto.ws_C2S_GetTables = (function() {

        /**
         * Properties of a ws_C2S_GetTables.
         * @memberof Proto
         * @interface Iws_C2S_GetTables
         * @property {number} MsgID ws_C2S_GetTables MsgID
         * @property {string|null} [Dealer] ws_C2S_GetTables Dealer
         */

        /**
         * Constructs a new ws_C2S_GetTables.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_GetTables.
         * @implements Iws_C2S_GetTables
         * @constructor
         * @param {Proto.Iws_C2S_GetTables=} [properties] Properties to set
         */
        function ws_C2S_GetTables(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_GetTables MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_GetTables
         * @instance
         */
        ws_C2S_GetTables.prototype.MsgID = 10006;

        /**
         * ws_C2S_GetTables Dealer.
         * @member {string} Dealer
         * @memberof Proto.ws_C2S_GetTables
         * @instance
         */
        ws_C2S_GetTables.prototype.Dealer = "";

        /**
         * Creates a new ws_C2S_GetTables instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_GetTables
         * @static
         * @param {Proto.Iws_C2S_GetTables=} [properties] Properties to set
         * @returns {Proto.ws_C2S_GetTables} ws_C2S_GetTables instance
         */
        ws_C2S_GetTables.create = function create(properties) {
            return new ws_C2S_GetTables(properties);
        };

        /**
         * Encodes the specified ws_C2S_GetTables message. Does not implicitly {@link Proto.ws_C2S_GetTables.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_GetTables
         * @static
         * @param {Proto.Iws_C2S_GetTables} message ws_C2S_GetTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_GetTables.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.Dealer != null && message.hasOwnProperty("Dealer"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Dealer);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_GetTables message, length delimited. Does not implicitly {@link Proto.ws_C2S_GetTables.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_GetTables
         * @static
         * @param {Proto.Iws_C2S_GetTables} message ws_C2S_GetTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_GetTables.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_GetTables message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_GetTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_GetTables} ws_C2S_GetTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_GetTables.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_GetTables();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.Dealer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_GetTables message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_GetTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_GetTables} ws_C2S_GetTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_GetTables.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_GetTables message.
         * @function verify
         * @memberof Proto.ws_C2S_GetTables
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_GetTables.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.Dealer != null && message.hasOwnProperty("Dealer"))
                if (!$util.isString(message.Dealer))
                    return "Dealer: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_GetTables message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_GetTables
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_GetTables} ws_C2S_GetTables
         */
        ws_C2S_GetTables.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_GetTables)
                return object;
            var message = new $root.Proto.ws_C2S_GetTables();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.Dealer != null)
                message.Dealer = String(object.Dealer);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_GetTables message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_GetTables
         * @static
         * @param {Proto.ws_C2S_GetTables} message ws_C2S_GetTables
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_GetTables.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10006;
                object.Dealer = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.Dealer != null && message.hasOwnProperty("Dealer"))
                object.Dealer = message.Dealer;
            return object;
        };

        /**
         * Converts this ws_C2S_GetTables to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_GetTables
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_GetTables.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_GetTables;
    })();

    Proto.ws_S2C_GetTables = (function() {

        /**
         * Properties of a ws_S2C_GetTables.
         * @memberof Proto
         * @interface Iws_S2C_GetTables
         * @property {number} MsgID ws_S2C_GetTables MsgID
         * @property {Proto.ITableInfo|null} [Tables] ws_S2C_GetTables Tables
         */

        /**
         * Constructs a new ws_S2C_GetTables.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_GetTables.
         * @implements Iws_S2C_GetTables
         * @constructor
         * @param {Proto.Iws_S2C_GetTables=} [properties] Properties to set
         */
        function ws_S2C_GetTables(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_GetTables MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_GetTables
         * @instance
         */
        ws_S2C_GetTables.prototype.MsgID = 20006;

        /**
         * ws_S2C_GetTables Tables.
         * @member {Proto.ITableInfo|null|undefined} Tables
         * @memberof Proto.ws_S2C_GetTables
         * @instance
         */
        ws_S2C_GetTables.prototype.Tables = null;

        /**
         * Creates a new ws_S2C_GetTables instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_GetTables
         * @static
         * @param {Proto.Iws_S2C_GetTables=} [properties] Properties to set
         * @returns {Proto.ws_S2C_GetTables} ws_S2C_GetTables instance
         */
        ws_S2C_GetTables.create = function create(properties) {
            return new ws_S2C_GetTables(properties);
        };

        /**
         * Encodes the specified ws_S2C_GetTables message. Does not implicitly {@link Proto.ws_S2C_GetTables.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_GetTables
         * @static
         * @param {Proto.Iws_S2C_GetTables} message ws_S2C_GetTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_GetTables.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.Tables != null && message.hasOwnProperty("Tables"))
                $root.Proto.TableInfo.encode(message.Tables, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_GetTables message, length delimited. Does not implicitly {@link Proto.ws_S2C_GetTables.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_GetTables
         * @static
         * @param {Proto.Iws_S2C_GetTables} message ws_S2C_GetTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_GetTables.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_GetTables message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_GetTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_GetTables} ws_S2C_GetTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_GetTables.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_GetTables();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.Tables = $root.Proto.TableInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_GetTables message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_GetTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_GetTables} ws_S2C_GetTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_GetTables.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_GetTables message.
         * @function verify
         * @memberof Proto.ws_S2C_GetTables
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_GetTables.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.Tables != null && message.hasOwnProperty("Tables")) {
                var error = $root.Proto.TableInfo.verify(message.Tables);
                if (error)
                    return "Tables." + error;
            }
            return null;
        };

        /**
         * Creates a ws_S2C_GetTables message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_GetTables
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_GetTables} ws_S2C_GetTables
         */
        ws_S2C_GetTables.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_GetTables)
                return object;
            var message = new $root.Proto.ws_S2C_GetTables();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.Tables != null) {
                if (typeof object.Tables !== "object")
                    throw TypeError(".Proto.ws_S2C_GetTables.Tables: object expected");
                message.Tables = $root.Proto.TableInfo.fromObject(object.Tables);
            }
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_GetTables message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_GetTables
         * @static
         * @param {Proto.ws_S2C_GetTables} message ws_S2C_GetTables
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_GetTables.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20006;
                object.Tables = null;
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.Tables != null && message.hasOwnProperty("Tables"))
                object.Tables = $root.Proto.TableInfo.toObject(message.Tables, options);
            return object;
        };

        /**
         * Converts this ws_S2C_GetTables to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_GetTables
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_GetTables.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_GetTables;
    })();

    Proto.ws_C2S_Table_Dispose = (function() {

        /**
         * Properties of a ws_C2S_Table_Dispose.
         * @memberof Proto
         * @interface Iws_C2S_Table_Dispose
         * @property {number} MsgID ws_C2S_Table_Dispose MsgID
         * @property {number|null} [TableID] ws_C2S_Table_Dispose TableID
         * @property {string|null} [Action] ws_C2S_Table_Dispose Action
         * @property {string|null} [Sign] ws_C2S_Table_Dispose Sign
         * @property {string|null} [Tr] ws_C2S_Table_Dispose Tr
         */

        /**
         * Constructs a new ws_C2S_Table_Dispose.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_Table_Dispose.
         * @implements Iws_C2S_Table_Dispose
         * @constructor
         * @param {Proto.Iws_C2S_Table_Dispose=} [properties] Properties to set
         */
        function ws_C2S_Table_Dispose(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_Table_Dispose MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_Table_Dispose
         * @instance
         */
        ws_C2S_Table_Dispose.prototype.MsgID = 10007;

        /**
         * ws_C2S_Table_Dispose TableID.
         * @member {number} TableID
         * @memberof Proto.ws_C2S_Table_Dispose
         * @instance
         */
        ws_C2S_Table_Dispose.prototype.TableID = 0;

        /**
         * ws_C2S_Table_Dispose Action.
         * @member {string} Action
         * @memberof Proto.ws_C2S_Table_Dispose
         * @instance
         */
        ws_C2S_Table_Dispose.prototype.Action = "";

        /**
         * ws_C2S_Table_Dispose Sign.
         * @member {string} Sign
         * @memberof Proto.ws_C2S_Table_Dispose
         * @instance
         */
        ws_C2S_Table_Dispose.prototype.Sign = "";

        /**
         * ws_C2S_Table_Dispose Tr.
         * @member {string} Tr
         * @memberof Proto.ws_C2S_Table_Dispose
         * @instance
         */
        ws_C2S_Table_Dispose.prototype.Tr = "";

        /**
         * Creates a new ws_C2S_Table_Dispose instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_Table_Dispose
         * @static
         * @param {Proto.Iws_C2S_Table_Dispose=} [properties] Properties to set
         * @returns {Proto.ws_C2S_Table_Dispose} ws_C2S_Table_Dispose instance
         */
        ws_C2S_Table_Dispose.create = function create(properties) {
            return new ws_C2S_Table_Dispose(properties);
        };

        /**
         * Encodes the specified ws_C2S_Table_Dispose message. Does not implicitly {@link Proto.ws_C2S_Table_Dispose.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_Table_Dispose
         * @static
         * @param {Proto.Iws_C2S_Table_Dispose} message ws_C2S_Table_Dispose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_Table_Dispose.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.Action != null && message.hasOwnProperty("Action"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Action);
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Sign);
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Tr);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_Table_Dispose message, length delimited. Does not implicitly {@link Proto.ws_C2S_Table_Dispose.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_Table_Dispose
         * @static
         * @param {Proto.Iws_C2S_Table_Dispose} message ws_C2S_Table_Dispose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_Table_Dispose.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_Table_Dispose message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_Table_Dispose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_Table_Dispose} ws_C2S_Table_Dispose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_Table_Dispose.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_Table_Dispose();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.Action = reader.string();
                    break;
                case 4:
                    message.Sign = reader.string();
                    break;
                case 5:
                    message.Tr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_Table_Dispose message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_Table_Dispose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_Table_Dispose} ws_C2S_Table_Dispose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_Table_Dispose.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_Table_Dispose message.
         * @function verify
         * @memberof Proto.ws_C2S_Table_Dispose
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_Table_Dispose.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.Action != null && message.hasOwnProperty("Action"))
                if (!$util.isString(message.Action))
                    return "Action: string expected";
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                if (!$util.isString(message.Sign))
                    return "Sign: string expected";
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                if (!$util.isString(message.Tr))
                    return "Tr: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_Table_Dispose message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_Table_Dispose
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_Table_Dispose} ws_C2S_Table_Dispose
         */
        ws_C2S_Table_Dispose.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_Table_Dispose)
                return object;
            var message = new $root.Proto.ws_C2S_Table_Dispose();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.Action != null)
                message.Action = String(object.Action);
            if (object.Sign != null)
                message.Sign = String(object.Sign);
            if (object.Tr != null)
                message.Tr = String(object.Tr);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_Table_Dispose message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_Table_Dispose
         * @static
         * @param {Proto.ws_C2S_Table_Dispose} message ws_C2S_Table_Dispose
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_Table_Dispose.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10007;
                object.TableID = 0;
                object.Action = "";
                object.Sign = "";
                object.Tr = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.Action != null && message.hasOwnProperty("Action"))
                object.Action = message.Action;
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                object.Sign = message.Sign;
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                object.Tr = message.Tr;
            return object;
        };

        /**
         * Converts this ws_C2S_Table_Dispose to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_Table_Dispose
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_Table_Dispose.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_Table_Dispose;
    })();

    Proto.ws_S2C_Table_Dispose = (function() {

        /**
         * Properties of a ws_S2C_Table_Dispose.
         * @memberof Proto
         * @interface Iws_S2C_Table_Dispose
         * @property {number} MsgID ws_S2C_Table_Dispose MsgID
         * @property {number|null} [TableID] ws_S2C_Table_Dispose TableID
         * @property {string|null} [Status] ws_S2C_Table_Dispose Status
         */

        /**
         * Constructs a new ws_S2C_Table_Dispose.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_Table_Dispose.
         * @implements Iws_S2C_Table_Dispose
         * @constructor
         * @param {Proto.Iws_S2C_Table_Dispose=} [properties] Properties to set
         */
        function ws_S2C_Table_Dispose(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_Table_Dispose MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_Table_Dispose
         * @instance
         */
        ws_S2C_Table_Dispose.prototype.MsgID = 20007;

        /**
         * ws_S2C_Table_Dispose TableID.
         * @member {number} TableID
         * @memberof Proto.ws_S2C_Table_Dispose
         * @instance
         */
        ws_S2C_Table_Dispose.prototype.TableID = 0;

        /**
         * ws_S2C_Table_Dispose Status.
         * @member {string} Status
         * @memberof Proto.ws_S2C_Table_Dispose
         * @instance
         */
        ws_S2C_Table_Dispose.prototype.Status = "";

        /**
         * Creates a new ws_S2C_Table_Dispose instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_Table_Dispose
         * @static
         * @param {Proto.Iws_S2C_Table_Dispose=} [properties] Properties to set
         * @returns {Proto.ws_S2C_Table_Dispose} ws_S2C_Table_Dispose instance
         */
        ws_S2C_Table_Dispose.create = function create(properties) {
            return new ws_S2C_Table_Dispose(properties);
        };

        /**
         * Encodes the specified ws_S2C_Table_Dispose message. Does not implicitly {@link Proto.ws_S2C_Table_Dispose.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_Table_Dispose
         * @static
         * @param {Proto.Iws_S2C_Table_Dispose} message ws_S2C_Table_Dispose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_Table_Dispose.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Status);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_Table_Dispose message, length delimited. Does not implicitly {@link Proto.ws_S2C_Table_Dispose.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_Table_Dispose
         * @static
         * @param {Proto.Iws_S2C_Table_Dispose} message ws_S2C_Table_Dispose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_Table_Dispose.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_Table_Dispose message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_Table_Dispose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_Table_Dispose} ws_S2C_Table_Dispose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_Table_Dispose.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_Table_Dispose();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.Status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_Table_Dispose message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_Table_Dispose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_Table_Dispose} ws_S2C_Table_Dispose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_Table_Dispose.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_Table_Dispose message.
         * @function verify
         * @memberof Proto.ws_S2C_Table_Dispose
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_Table_Dispose.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isString(message.Status))
                    return "Status: string expected";
            return null;
        };

        /**
         * Creates a ws_S2C_Table_Dispose message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_Table_Dispose
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_Table_Dispose} ws_S2C_Table_Dispose
         */
        ws_S2C_Table_Dispose.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_Table_Dispose)
                return object;
            var message = new $root.Proto.ws_S2C_Table_Dispose();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.Status != null)
                message.Status = String(object.Status);
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_Table_Dispose message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_Table_Dispose
         * @static
         * @param {Proto.ws_S2C_Table_Dispose} message ws_S2C_Table_Dispose
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_Table_Dispose.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20007;
                object.TableID = 0;
                object.Status = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this ws_S2C_Table_Dispose to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_Table_Dispose
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_Table_Dispose.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_Table_Dispose;
    })();

    Proto.ws_C2S_Table_Pause = (function() {

        /**
         * Properties of a ws_C2S_Table_Pause.
         * @memberof Proto
         * @interface Iws_C2S_Table_Pause
         * @property {number} MsgID ws_C2S_Table_Pause MsgID
         * @property {number|null} [TableID] ws_C2S_Table_Pause TableID
         * @property {string|null} [Action] ws_C2S_Table_Pause Action
         * @property {string|null} [Sign] ws_C2S_Table_Pause Sign
         * @property {string|null} [Tr] ws_C2S_Table_Pause Tr
         */

        /**
         * Constructs a new ws_C2S_Table_Pause.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_Table_Pause.
         * @implements Iws_C2S_Table_Pause
         * @constructor
         * @param {Proto.Iws_C2S_Table_Pause=} [properties] Properties to set
         */
        function ws_C2S_Table_Pause(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_Table_Pause MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_Table_Pause
         * @instance
         */
        ws_C2S_Table_Pause.prototype.MsgID = 10008;

        /**
         * ws_C2S_Table_Pause TableID.
         * @member {number} TableID
         * @memberof Proto.ws_C2S_Table_Pause
         * @instance
         */
        ws_C2S_Table_Pause.prototype.TableID = 0;

        /**
         * ws_C2S_Table_Pause Action.
         * @member {string} Action
         * @memberof Proto.ws_C2S_Table_Pause
         * @instance
         */
        ws_C2S_Table_Pause.prototype.Action = "";

        /**
         * ws_C2S_Table_Pause Sign.
         * @member {string} Sign
         * @memberof Proto.ws_C2S_Table_Pause
         * @instance
         */
        ws_C2S_Table_Pause.prototype.Sign = "";

        /**
         * ws_C2S_Table_Pause Tr.
         * @member {string} Tr
         * @memberof Proto.ws_C2S_Table_Pause
         * @instance
         */
        ws_C2S_Table_Pause.prototype.Tr = "";

        /**
         * Creates a new ws_C2S_Table_Pause instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_Table_Pause
         * @static
         * @param {Proto.Iws_C2S_Table_Pause=} [properties] Properties to set
         * @returns {Proto.ws_C2S_Table_Pause} ws_C2S_Table_Pause instance
         */
        ws_C2S_Table_Pause.create = function create(properties) {
            return new ws_C2S_Table_Pause(properties);
        };

        /**
         * Encodes the specified ws_C2S_Table_Pause message. Does not implicitly {@link Proto.ws_C2S_Table_Pause.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_Table_Pause
         * @static
         * @param {Proto.Iws_C2S_Table_Pause} message ws_C2S_Table_Pause message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_Table_Pause.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.Action != null && message.hasOwnProperty("Action"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Action);
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Sign);
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Tr);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_Table_Pause message, length delimited. Does not implicitly {@link Proto.ws_C2S_Table_Pause.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_Table_Pause
         * @static
         * @param {Proto.Iws_C2S_Table_Pause} message ws_C2S_Table_Pause message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_Table_Pause.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_Table_Pause message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_Table_Pause
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_Table_Pause} ws_C2S_Table_Pause
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_Table_Pause.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_Table_Pause();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.Action = reader.string();
                    break;
                case 4:
                    message.Sign = reader.string();
                    break;
                case 5:
                    message.Tr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_Table_Pause message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_Table_Pause
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_Table_Pause} ws_C2S_Table_Pause
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_Table_Pause.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_Table_Pause message.
         * @function verify
         * @memberof Proto.ws_C2S_Table_Pause
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_Table_Pause.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.Action != null && message.hasOwnProperty("Action"))
                if (!$util.isString(message.Action))
                    return "Action: string expected";
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                if (!$util.isString(message.Sign))
                    return "Sign: string expected";
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                if (!$util.isString(message.Tr))
                    return "Tr: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_Table_Pause message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_Table_Pause
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_Table_Pause} ws_C2S_Table_Pause
         */
        ws_C2S_Table_Pause.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_Table_Pause)
                return object;
            var message = new $root.Proto.ws_C2S_Table_Pause();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.Action != null)
                message.Action = String(object.Action);
            if (object.Sign != null)
                message.Sign = String(object.Sign);
            if (object.Tr != null)
                message.Tr = String(object.Tr);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_Table_Pause message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_Table_Pause
         * @static
         * @param {Proto.ws_C2S_Table_Pause} message ws_C2S_Table_Pause
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_Table_Pause.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10008;
                object.TableID = 0;
                object.Action = "";
                object.Sign = "";
                object.Tr = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.Action != null && message.hasOwnProperty("Action"))
                object.Action = message.Action;
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                object.Sign = message.Sign;
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                object.Tr = message.Tr;
            return object;
        };

        /**
         * Converts this ws_C2S_Table_Pause to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_Table_Pause
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_Table_Pause.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_Table_Pause;
    })();

    Proto.ws_S2C_Table_Pause = (function() {

        /**
         * Properties of a ws_S2C_Table_Pause.
         * @memberof Proto
         * @interface Iws_S2C_Table_Pause
         * @property {number} MsgID ws_S2C_Table_Pause MsgID
         * @property {number|null} [TableID] ws_S2C_Table_Pause TableID
         * @property {string|null} [Status] ws_S2C_Table_Pause Status
         * @property {number|null} [tableStatus] ws_S2C_Table_Pause tableStatus
         */

        /**
         * Constructs a new ws_S2C_Table_Pause.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_Table_Pause.
         * @implements Iws_S2C_Table_Pause
         * @constructor
         * @param {Proto.Iws_S2C_Table_Pause=} [properties] Properties to set
         */
        function ws_S2C_Table_Pause(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_Table_Pause MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_Table_Pause
         * @instance
         */
        ws_S2C_Table_Pause.prototype.MsgID = 20008;

        /**
         * ws_S2C_Table_Pause TableID.
         * @member {number} TableID
         * @memberof Proto.ws_S2C_Table_Pause
         * @instance
         */
        ws_S2C_Table_Pause.prototype.TableID = 0;

        /**
         * ws_S2C_Table_Pause Status.
         * @member {string} Status
         * @memberof Proto.ws_S2C_Table_Pause
         * @instance
         */
        ws_S2C_Table_Pause.prototype.Status = "";

        /**
         * ws_S2C_Table_Pause tableStatus.
         * @member {number} tableStatus
         * @memberof Proto.ws_S2C_Table_Pause
         * @instance
         */
        ws_S2C_Table_Pause.prototype.tableStatus = 0;

        /**
         * Creates a new ws_S2C_Table_Pause instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_Table_Pause
         * @static
         * @param {Proto.Iws_S2C_Table_Pause=} [properties] Properties to set
         * @returns {Proto.ws_S2C_Table_Pause} ws_S2C_Table_Pause instance
         */
        ws_S2C_Table_Pause.create = function create(properties) {
            return new ws_S2C_Table_Pause(properties);
        };

        /**
         * Encodes the specified ws_S2C_Table_Pause message. Does not implicitly {@link Proto.ws_S2C_Table_Pause.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_Table_Pause
         * @static
         * @param {Proto.Iws_S2C_Table_Pause} message ws_S2C_Table_Pause message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_Table_Pause.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Status);
            if (message.tableStatus != null && message.hasOwnProperty("tableStatus"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.tableStatus);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_Table_Pause message, length delimited. Does not implicitly {@link Proto.ws_S2C_Table_Pause.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_Table_Pause
         * @static
         * @param {Proto.Iws_S2C_Table_Pause} message ws_S2C_Table_Pause message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_Table_Pause.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_Table_Pause message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_Table_Pause
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_Table_Pause} ws_S2C_Table_Pause
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_Table_Pause.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_Table_Pause();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.Status = reader.string();
                    break;
                case 4:
                    message.tableStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_Table_Pause message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_Table_Pause
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_Table_Pause} ws_S2C_Table_Pause
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_Table_Pause.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_Table_Pause message.
         * @function verify
         * @memberof Proto.ws_S2C_Table_Pause
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_Table_Pause.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isString(message.Status))
                    return "Status: string expected";
            if (message.tableStatus != null && message.hasOwnProperty("tableStatus"))
                if (!$util.isInteger(message.tableStatus))
                    return "tableStatus: integer expected";
            return null;
        };

        /**
         * Creates a ws_S2C_Table_Pause message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_Table_Pause
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_Table_Pause} ws_S2C_Table_Pause
         */
        ws_S2C_Table_Pause.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_Table_Pause)
                return object;
            var message = new $root.Proto.ws_S2C_Table_Pause();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.Status != null)
                message.Status = String(object.Status);
            if (object.tableStatus != null)
                message.tableStatus = object.tableStatus | 0;
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_Table_Pause message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_Table_Pause
         * @static
         * @param {Proto.ws_S2C_Table_Pause} message ws_S2C_Table_Pause
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_Table_Pause.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20008;
                object.TableID = 0;
                object.Status = "";
                object.tableStatus = 0;
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.tableStatus != null && message.hasOwnProperty("tableStatus"))
                object.tableStatus = message.tableStatus;
            return object;
        };

        /**
         * Converts this ws_S2C_Table_Pause to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_Table_Pause
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_Table_Pause.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_Table_Pause;
    })();

    Proto.ws_C2S_Table_Close = (function() {

        /**
         * Properties of a ws_C2S_Table_Close.
         * @memberof Proto
         * @interface Iws_C2S_Table_Close
         * @property {number} MsgID ws_C2S_Table_Close MsgID
         * @property {number|null} [TableID] ws_C2S_Table_Close TableID
         * @property {string|null} [Action] ws_C2S_Table_Close Action
         * @property {string|null} [Sign] ws_C2S_Table_Close Sign
         * @property {string|null} [Tr] ws_C2S_Table_Close Tr
         */

        /**
         * Constructs a new ws_C2S_Table_Close.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_Table_Close.
         * @implements Iws_C2S_Table_Close
         * @constructor
         * @param {Proto.Iws_C2S_Table_Close=} [properties] Properties to set
         */
        function ws_C2S_Table_Close(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_Table_Close MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_Table_Close
         * @instance
         */
        ws_C2S_Table_Close.prototype.MsgID = 10009;

        /**
         * ws_C2S_Table_Close TableID.
         * @member {number} TableID
         * @memberof Proto.ws_C2S_Table_Close
         * @instance
         */
        ws_C2S_Table_Close.prototype.TableID = 0;

        /**
         * ws_C2S_Table_Close Action.
         * @member {string} Action
         * @memberof Proto.ws_C2S_Table_Close
         * @instance
         */
        ws_C2S_Table_Close.prototype.Action = "";

        /**
         * ws_C2S_Table_Close Sign.
         * @member {string} Sign
         * @memberof Proto.ws_C2S_Table_Close
         * @instance
         */
        ws_C2S_Table_Close.prototype.Sign = "";

        /**
         * ws_C2S_Table_Close Tr.
         * @member {string} Tr
         * @memberof Proto.ws_C2S_Table_Close
         * @instance
         */
        ws_C2S_Table_Close.prototype.Tr = "";

        /**
         * Creates a new ws_C2S_Table_Close instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_Table_Close
         * @static
         * @param {Proto.Iws_C2S_Table_Close=} [properties] Properties to set
         * @returns {Proto.ws_C2S_Table_Close} ws_C2S_Table_Close instance
         */
        ws_C2S_Table_Close.create = function create(properties) {
            return new ws_C2S_Table_Close(properties);
        };

        /**
         * Encodes the specified ws_C2S_Table_Close message. Does not implicitly {@link Proto.ws_C2S_Table_Close.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_Table_Close
         * @static
         * @param {Proto.Iws_C2S_Table_Close} message ws_C2S_Table_Close message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_Table_Close.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.Action != null && message.hasOwnProperty("Action"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Action);
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Sign);
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Tr);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_Table_Close message, length delimited. Does not implicitly {@link Proto.ws_C2S_Table_Close.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_Table_Close
         * @static
         * @param {Proto.Iws_C2S_Table_Close} message ws_C2S_Table_Close message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_Table_Close.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_Table_Close message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_Table_Close
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_Table_Close} ws_C2S_Table_Close
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_Table_Close.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_Table_Close();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.Action = reader.string();
                    break;
                case 4:
                    message.Sign = reader.string();
                    break;
                case 5:
                    message.Tr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_Table_Close message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_Table_Close
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_Table_Close} ws_C2S_Table_Close
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_Table_Close.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_Table_Close message.
         * @function verify
         * @memberof Proto.ws_C2S_Table_Close
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_Table_Close.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.Action != null && message.hasOwnProperty("Action"))
                if (!$util.isString(message.Action))
                    return "Action: string expected";
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                if (!$util.isString(message.Sign))
                    return "Sign: string expected";
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                if (!$util.isString(message.Tr))
                    return "Tr: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_Table_Close message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_Table_Close
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_Table_Close} ws_C2S_Table_Close
         */
        ws_C2S_Table_Close.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_Table_Close)
                return object;
            var message = new $root.Proto.ws_C2S_Table_Close();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.Action != null)
                message.Action = String(object.Action);
            if (object.Sign != null)
                message.Sign = String(object.Sign);
            if (object.Tr != null)
                message.Tr = String(object.Tr);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_Table_Close message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_Table_Close
         * @static
         * @param {Proto.ws_C2S_Table_Close} message ws_C2S_Table_Close
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_Table_Close.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10009;
                object.TableID = 0;
                object.Action = "";
                object.Sign = "";
                object.Tr = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.Action != null && message.hasOwnProperty("Action"))
                object.Action = message.Action;
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                object.Sign = message.Sign;
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                object.Tr = message.Tr;
            return object;
        };

        /**
         * Converts this ws_C2S_Table_Close to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_Table_Close
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_Table_Close.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_Table_Close;
    })();

    Proto.ws_S2C_Table_Close = (function() {

        /**
         * Properties of a ws_S2C_Table_Close.
         * @memberof Proto
         * @interface Iws_S2C_Table_Close
         * @property {number} MsgID ws_S2C_Table_Close MsgID
         * @property {number|null} [TableID] ws_S2C_Table_Close TableID
         * @property {string|null} [Status] ws_S2C_Table_Close Status
         */

        /**
         * Constructs a new ws_S2C_Table_Close.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_Table_Close.
         * @implements Iws_S2C_Table_Close
         * @constructor
         * @param {Proto.Iws_S2C_Table_Close=} [properties] Properties to set
         */
        function ws_S2C_Table_Close(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_Table_Close MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_Table_Close
         * @instance
         */
        ws_S2C_Table_Close.prototype.MsgID = 20009;

        /**
         * ws_S2C_Table_Close TableID.
         * @member {number} TableID
         * @memberof Proto.ws_S2C_Table_Close
         * @instance
         */
        ws_S2C_Table_Close.prototype.TableID = 0;

        /**
         * ws_S2C_Table_Close Status.
         * @member {string} Status
         * @memberof Proto.ws_S2C_Table_Close
         * @instance
         */
        ws_S2C_Table_Close.prototype.Status = "";

        /**
         * Creates a new ws_S2C_Table_Close instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_Table_Close
         * @static
         * @param {Proto.Iws_S2C_Table_Close=} [properties] Properties to set
         * @returns {Proto.ws_S2C_Table_Close} ws_S2C_Table_Close instance
         */
        ws_S2C_Table_Close.create = function create(properties) {
            return new ws_S2C_Table_Close(properties);
        };

        /**
         * Encodes the specified ws_S2C_Table_Close message. Does not implicitly {@link Proto.ws_S2C_Table_Close.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_Table_Close
         * @static
         * @param {Proto.Iws_S2C_Table_Close} message ws_S2C_Table_Close message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_Table_Close.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Status);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_Table_Close message, length delimited. Does not implicitly {@link Proto.ws_S2C_Table_Close.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_Table_Close
         * @static
         * @param {Proto.Iws_S2C_Table_Close} message ws_S2C_Table_Close message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_Table_Close.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_Table_Close message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_Table_Close
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_Table_Close} ws_S2C_Table_Close
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_Table_Close.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_Table_Close();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.Status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_Table_Close message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_Table_Close
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_Table_Close} ws_S2C_Table_Close
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_Table_Close.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_Table_Close message.
         * @function verify
         * @memberof Proto.ws_S2C_Table_Close
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_Table_Close.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isString(message.Status))
                    return "Status: string expected";
            return null;
        };

        /**
         * Creates a ws_S2C_Table_Close message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_Table_Close
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_Table_Close} ws_S2C_Table_Close
         */
        ws_S2C_Table_Close.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_Table_Close)
                return object;
            var message = new $root.Proto.ws_S2C_Table_Close();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.Status != null)
                message.Status = String(object.Status);
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_Table_Close message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_Table_Close
         * @static
         * @param {Proto.ws_S2C_Table_Close} message ws_S2C_Table_Close
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_Table_Close.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20009;
                object.TableID = 0;
                object.Status = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this ws_S2C_Table_Close to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_Table_Close
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_Table_Close.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_Table_Close;
    })();

    Proto.ws_C2S_Table_In = (function() {

        /**
         * Properties of a ws_C2S_Table_In.
         * @memberof Proto
         * @interface Iws_C2S_Table_In
         * @property {number} MsgID ws_C2S_Table_In MsgID
         * @property {string|null} [eosaccount] ws_C2S_Table_In eosaccount
         * @property {number|null} [TableID] ws_C2S_Table_In TableID
         * @property {string|null} [code] ws_C2S_Table_In code
         */

        /**
         * Constructs a new ws_C2S_Table_In.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_Table_In.
         * @implements Iws_C2S_Table_In
         * @constructor
         * @param {Proto.Iws_C2S_Table_In=} [properties] Properties to set
         */
        function ws_C2S_Table_In(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_Table_In MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_Table_In
         * @instance
         */
        ws_C2S_Table_In.prototype.MsgID = 10010;

        /**
         * ws_C2S_Table_In eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_C2S_Table_In
         * @instance
         */
        ws_C2S_Table_In.prototype.eosaccount = "";

        /**
         * ws_C2S_Table_In TableID.
         * @member {number} TableID
         * @memberof Proto.ws_C2S_Table_In
         * @instance
         */
        ws_C2S_Table_In.prototype.TableID = 0;

        /**
         * ws_C2S_Table_In code.
         * @member {string} code
         * @memberof Proto.ws_C2S_Table_In
         * @instance
         */
        ws_C2S_Table_In.prototype.code = "";

        /**
         * Creates a new ws_C2S_Table_In instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_Table_In
         * @static
         * @param {Proto.Iws_C2S_Table_In=} [properties] Properties to set
         * @returns {Proto.ws_C2S_Table_In} ws_C2S_Table_In instance
         */
        ws_C2S_Table_In.create = function create(properties) {
            return new ws_C2S_Table_In(properties);
        };

        /**
         * Encodes the specified ws_C2S_Table_In message. Does not implicitly {@link Proto.ws_C2S_Table_In.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_Table_In
         * @static
         * @param {Proto.Iws_C2S_Table_In} message ws_C2S_Table_In message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_Table_In.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableID);
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_Table_In message, length delimited. Does not implicitly {@link Proto.ws_C2S_Table_In.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_Table_In
         * @static
         * @param {Proto.Iws_C2S_Table_In} message ws_C2S_Table_In message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_Table_In.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_Table_In message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_Table_In
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_Table_In} ws_C2S_Table_In
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_Table_In.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_Table_In();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                case 3:
                    message.TableID = reader.int32();
                    break;
                case 4:
                    message.code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_Table_In message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_Table_In
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_Table_In} ws_C2S_Table_In
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_Table_In.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_Table_In message.
         * @function verify
         * @memberof Proto.ws_C2S_Table_In
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_Table_In.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_Table_In message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_Table_In
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_Table_In} ws_C2S_Table_In
         */
        ws_C2S_Table_In.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_Table_In)
                return object;
            var message = new $root.Proto.ws_C2S_Table_In();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_Table_In message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_Table_In
         * @static
         * @param {Proto.ws_C2S_Table_In} message ws_C2S_Table_In
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_Table_In.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10010;
                object.eosaccount = "";
                object.TableID = 0;
                object.code = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this ws_C2S_Table_In to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_Table_In
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_Table_In.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_Table_In;
    })();

    Proto.ws_S2C_Table_In = (function() {

        /**
         * Properties of a ws_S2C_Table_In.
         * @memberof Proto
         * @interface Iws_S2C_Table_In
         * @property {number} MsgID ws_S2C_Table_In MsgID
         * @property {string|null} [eosaccount] ws_S2C_Table_In eosaccount
         * @property {Proto.ITableInfo|null} [TableInfo] ws_S2C_Table_In TableInfo
         * @property {string|null} [Status] ws_S2C_Table_In Status
         * @property {string|null} [Waybill] ws_S2C_Table_In Waybill
         */

        /**
         * Constructs a new ws_S2C_Table_In.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_Table_In.
         * @implements Iws_S2C_Table_In
         * @constructor
         * @param {Proto.Iws_S2C_Table_In=} [properties] Properties to set
         */
        function ws_S2C_Table_In(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_Table_In MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_Table_In
         * @instance
         */
        ws_S2C_Table_In.prototype.MsgID = 20010;

        /**
         * ws_S2C_Table_In eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_S2C_Table_In
         * @instance
         */
        ws_S2C_Table_In.prototype.eosaccount = "";

        /**
         * ws_S2C_Table_In TableInfo.
         * @member {Proto.ITableInfo|null|undefined} TableInfo
         * @memberof Proto.ws_S2C_Table_In
         * @instance
         */
        ws_S2C_Table_In.prototype.TableInfo = null;

        /**
         * ws_S2C_Table_In Status.
         * @member {string} Status
         * @memberof Proto.ws_S2C_Table_In
         * @instance
         */
        ws_S2C_Table_In.prototype.Status = "";

        /**
         * ws_S2C_Table_In Waybill.
         * @member {string} Waybill
         * @memberof Proto.ws_S2C_Table_In
         * @instance
         */
        ws_S2C_Table_In.prototype.Waybill = "";

        /**
         * Creates a new ws_S2C_Table_In instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_Table_In
         * @static
         * @param {Proto.Iws_S2C_Table_In=} [properties] Properties to set
         * @returns {Proto.ws_S2C_Table_In} ws_S2C_Table_In instance
         */
        ws_S2C_Table_In.create = function create(properties) {
            return new ws_S2C_Table_In(properties);
        };

        /**
         * Encodes the specified ws_S2C_Table_In message. Does not implicitly {@link Proto.ws_S2C_Table_In.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_Table_In
         * @static
         * @param {Proto.Iws_S2C_Table_In} message ws_S2C_Table_In message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_Table_In.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            if (message.TableInfo != null && message.hasOwnProperty("TableInfo"))
                $root.Proto.TableInfo.encode(message.TableInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Status);
            if (message.Waybill != null && message.hasOwnProperty("Waybill"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Waybill);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_Table_In message, length delimited. Does not implicitly {@link Proto.ws_S2C_Table_In.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_Table_In
         * @static
         * @param {Proto.Iws_S2C_Table_In} message ws_S2C_Table_In message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_Table_In.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_Table_In message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_Table_In
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_Table_In} ws_S2C_Table_In
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_Table_In.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_Table_In();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                case 3:
                    message.TableInfo = $root.Proto.TableInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.Status = reader.string();
                    break;
                case 5:
                    message.Waybill = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_Table_In message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_Table_In
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_Table_In} ws_S2C_Table_In
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_Table_In.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_Table_In message.
         * @function verify
         * @memberof Proto.ws_S2C_Table_In
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_Table_In.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.TableInfo != null && message.hasOwnProperty("TableInfo")) {
                var error = $root.Proto.TableInfo.verify(message.TableInfo);
                if (error)
                    return "TableInfo." + error;
            }
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isString(message.Status))
                    return "Status: string expected";
            if (message.Waybill != null && message.hasOwnProperty("Waybill"))
                if (!$util.isString(message.Waybill))
                    return "Waybill: string expected";
            return null;
        };

        /**
         * Creates a ws_S2C_Table_In message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_Table_In
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_Table_In} ws_S2C_Table_In
         */
        ws_S2C_Table_In.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_Table_In)
                return object;
            var message = new $root.Proto.ws_S2C_Table_In();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.TableInfo != null) {
                if (typeof object.TableInfo !== "object")
                    throw TypeError(".Proto.ws_S2C_Table_In.TableInfo: object expected");
                message.TableInfo = $root.Proto.TableInfo.fromObject(object.TableInfo);
            }
            if (object.Status != null)
                message.Status = String(object.Status);
            if (object.Waybill != null)
                message.Waybill = String(object.Waybill);
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_Table_In message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_Table_In
         * @static
         * @param {Proto.ws_S2C_Table_In} message ws_S2C_Table_In
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_Table_In.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20010;
                object.eosaccount = "";
                object.TableInfo = null;
                object.Status = "";
                object.Waybill = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.TableInfo != null && message.hasOwnProperty("TableInfo"))
                object.TableInfo = $root.Proto.TableInfo.toObject(message.TableInfo, options);
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.Waybill != null && message.hasOwnProperty("Waybill"))
                object.Waybill = message.Waybill;
            return object;
        };

        /**
         * Converts this ws_S2C_Table_In to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_Table_In
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_Table_In.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_Table_In;
    })();

    Proto.ws_C2S_Table_Out = (function() {

        /**
         * Properties of a ws_C2S_Table_Out.
         * @memberof Proto
         * @interface Iws_C2S_Table_Out
         * @property {number} MsgID ws_C2S_Table_Out MsgID
         * @property {string|null} [eosaccount] ws_C2S_Table_Out eosaccount
         * @property {number|null} [TableID] ws_C2S_Table_Out TableID
         */

        /**
         * Constructs a new ws_C2S_Table_Out.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_Table_Out.
         * @implements Iws_C2S_Table_Out
         * @constructor
         * @param {Proto.Iws_C2S_Table_Out=} [properties] Properties to set
         */
        function ws_C2S_Table_Out(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_Table_Out MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_Table_Out
         * @instance
         */
        ws_C2S_Table_Out.prototype.MsgID = 10011;

        /**
         * ws_C2S_Table_Out eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_C2S_Table_Out
         * @instance
         */
        ws_C2S_Table_Out.prototype.eosaccount = "";

        /**
         * ws_C2S_Table_Out TableID.
         * @member {number} TableID
         * @memberof Proto.ws_C2S_Table_Out
         * @instance
         */
        ws_C2S_Table_Out.prototype.TableID = 0;

        /**
         * Creates a new ws_C2S_Table_Out instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_Table_Out
         * @static
         * @param {Proto.Iws_C2S_Table_Out=} [properties] Properties to set
         * @returns {Proto.ws_C2S_Table_Out} ws_C2S_Table_Out instance
         */
        ws_C2S_Table_Out.create = function create(properties) {
            return new ws_C2S_Table_Out(properties);
        };

        /**
         * Encodes the specified ws_C2S_Table_Out message. Does not implicitly {@link Proto.ws_C2S_Table_Out.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_Table_Out
         * @static
         * @param {Proto.Iws_C2S_Table_Out} message ws_C2S_Table_Out message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_Table_Out.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableID);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_Table_Out message, length delimited. Does not implicitly {@link Proto.ws_C2S_Table_Out.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_Table_Out
         * @static
         * @param {Proto.Iws_C2S_Table_Out} message ws_C2S_Table_Out message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_Table_Out.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_Table_Out message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_Table_Out
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_Table_Out} ws_C2S_Table_Out
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_Table_Out.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_Table_Out();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                case 3:
                    message.TableID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_Table_Out message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_Table_Out
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_Table_Out} ws_C2S_Table_Out
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_Table_Out.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_Table_Out message.
         * @function verify
         * @memberof Proto.ws_C2S_Table_Out
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_Table_Out.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            return null;
        };

        /**
         * Creates a ws_C2S_Table_Out message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_Table_Out
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_Table_Out} ws_C2S_Table_Out
         */
        ws_C2S_Table_Out.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_Table_Out)
                return object;
            var message = new $root.Proto.ws_C2S_Table_Out();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_Table_Out message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_Table_Out
         * @static
         * @param {Proto.ws_C2S_Table_Out} message ws_C2S_Table_Out
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_Table_Out.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10011;
                object.eosaccount = "";
                object.TableID = 0;
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            return object;
        };

        /**
         * Converts this ws_C2S_Table_Out to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_Table_Out
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_Table_Out.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_Table_Out;
    })();

    Proto.ws_S2C_Table_Out = (function() {

        /**
         * Properties of a ws_S2C_Table_Out.
         * @memberof Proto
         * @interface Iws_S2C_Table_Out
         * @property {number} MsgID ws_S2C_Table_Out MsgID
         * @property {string|null} [eosaccount] ws_S2C_Table_Out eosaccount
         * @property {number|null} [TableID] ws_S2C_Table_Out TableID
         * @property {string|null} [Status] ws_S2C_Table_Out Status
         */

        /**
         * Constructs a new ws_S2C_Table_Out.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_Table_Out.
         * @implements Iws_S2C_Table_Out
         * @constructor
         * @param {Proto.Iws_S2C_Table_Out=} [properties] Properties to set
         */
        function ws_S2C_Table_Out(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_Table_Out MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_Table_Out
         * @instance
         */
        ws_S2C_Table_Out.prototype.MsgID = 20011;

        /**
         * ws_S2C_Table_Out eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_S2C_Table_Out
         * @instance
         */
        ws_S2C_Table_Out.prototype.eosaccount = "";

        /**
         * ws_S2C_Table_Out TableID.
         * @member {number} TableID
         * @memberof Proto.ws_S2C_Table_Out
         * @instance
         */
        ws_S2C_Table_Out.prototype.TableID = 0;

        /**
         * ws_S2C_Table_Out Status.
         * @member {string} Status
         * @memberof Proto.ws_S2C_Table_Out
         * @instance
         */
        ws_S2C_Table_Out.prototype.Status = "";

        /**
         * Creates a new ws_S2C_Table_Out instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_Table_Out
         * @static
         * @param {Proto.Iws_S2C_Table_Out=} [properties] Properties to set
         * @returns {Proto.ws_S2C_Table_Out} ws_S2C_Table_Out instance
         */
        ws_S2C_Table_Out.create = function create(properties) {
            return new ws_S2C_Table_Out(properties);
        };

        /**
         * Encodes the specified ws_S2C_Table_Out message. Does not implicitly {@link Proto.ws_S2C_Table_Out.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_Table_Out
         * @static
         * @param {Proto.Iws_S2C_Table_Out} message ws_S2C_Table_Out message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_Table_Out.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableID);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Status);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_Table_Out message, length delimited. Does not implicitly {@link Proto.ws_S2C_Table_Out.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_Table_Out
         * @static
         * @param {Proto.Iws_S2C_Table_Out} message ws_S2C_Table_Out message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_Table_Out.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_Table_Out message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_Table_Out
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_Table_Out} ws_S2C_Table_Out
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_Table_Out.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_Table_Out();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                case 3:
                    message.TableID = reader.int32();
                    break;
                case 4:
                    message.Status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_Table_Out message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_Table_Out
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_Table_Out} ws_S2C_Table_Out
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_Table_Out.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_Table_Out message.
         * @function verify
         * @memberof Proto.ws_S2C_Table_Out
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_Table_Out.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isString(message.Status))
                    return "Status: string expected";
            return null;
        };

        /**
         * Creates a ws_S2C_Table_Out message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_Table_Out
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_Table_Out} ws_S2C_Table_Out
         */
        ws_S2C_Table_Out.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_Table_Out)
                return object;
            var message = new $root.Proto.ws_S2C_Table_Out();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.Status != null)
                message.Status = String(object.Status);
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_Table_Out message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_Table_Out
         * @static
         * @param {Proto.ws_S2C_Table_Out} message ws_S2C_Table_Out
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_Table_Out.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20011;
                object.eosaccount = "";
                object.TableID = 0;
                object.Status = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this ws_S2C_Table_Out to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_Table_Out
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_Table_Out.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_Table_Out;
    })();

    Proto.ws_C2S_SendSeed = (function() {

        /**
         * Properties of a ws_C2S_SendSeed.
         * @memberof Proto
         * @interface Iws_C2S_SendSeed
         * @property {number} MsgID ws_C2S_SendSeed MsgID
         * @property {number|null} [TableID] ws_C2S_SendSeed TableID
         * @property {string|null} [eosaccount] ws_C2S_SendSeed eosaccount
         * @property {string|null} [Sign] ws_C2S_SendSeed Sign
         * @property {string|null} [Tr] ws_C2S_SendSeed Tr
         */

        /**
         * Constructs a new ws_C2S_SendSeed.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_SendSeed.
         * @implements Iws_C2S_SendSeed
         * @constructor
         * @param {Proto.Iws_C2S_SendSeed=} [properties] Properties to set
         */
        function ws_C2S_SendSeed(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_SendSeed MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_SendSeed
         * @instance
         */
        ws_C2S_SendSeed.prototype.MsgID = 10012;

        /**
         * ws_C2S_SendSeed TableID.
         * @member {number} TableID
         * @memberof Proto.ws_C2S_SendSeed
         * @instance
         */
        ws_C2S_SendSeed.prototype.TableID = 0;

        /**
         * ws_C2S_SendSeed eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_C2S_SendSeed
         * @instance
         */
        ws_C2S_SendSeed.prototype.eosaccount = "";

        /**
         * ws_C2S_SendSeed Sign.
         * @member {string} Sign
         * @memberof Proto.ws_C2S_SendSeed
         * @instance
         */
        ws_C2S_SendSeed.prototype.Sign = "";

        /**
         * ws_C2S_SendSeed Tr.
         * @member {string} Tr
         * @memberof Proto.ws_C2S_SendSeed
         * @instance
         */
        ws_C2S_SendSeed.prototype.Tr = "";

        /**
         * Creates a new ws_C2S_SendSeed instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_SendSeed
         * @static
         * @param {Proto.Iws_C2S_SendSeed=} [properties] Properties to set
         * @returns {Proto.ws_C2S_SendSeed} ws_C2S_SendSeed instance
         */
        ws_C2S_SendSeed.create = function create(properties) {
            return new ws_C2S_SendSeed(properties);
        };

        /**
         * Encodes the specified ws_C2S_SendSeed message. Does not implicitly {@link Proto.ws_C2S_SendSeed.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_SendSeed
         * @static
         * @param {Proto.Iws_C2S_SendSeed} message ws_C2S_SendSeed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_SendSeed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.eosaccount);
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Sign);
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Tr);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_SendSeed message, length delimited. Does not implicitly {@link Proto.ws_C2S_SendSeed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_SendSeed
         * @static
         * @param {Proto.Iws_C2S_SendSeed} message ws_C2S_SendSeed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_SendSeed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_SendSeed message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_SendSeed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_SendSeed} ws_C2S_SendSeed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_SendSeed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_SendSeed();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.eosaccount = reader.string();
                    break;
                case 4:
                    message.Sign = reader.string();
                    break;
                case 5:
                    message.Tr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_SendSeed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_SendSeed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_SendSeed} ws_C2S_SendSeed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_SendSeed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_SendSeed message.
         * @function verify
         * @memberof Proto.ws_C2S_SendSeed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_SendSeed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                if (!$util.isString(message.Sign))
                    return "Sign: string expected";
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                if (!$util.isString(message.Tr))
                    return "Tr: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_SendSeed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_SendSeed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_SendSeed} ws_C2S_SendSeed
         */
        ws_C2S_SendSeed.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_SendSeed)
                return object;
            var message = new $root.Proto.ws_C2S_SendSeed();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.Sign != null)
                message.Sign = String(object.Sign);
            if (object.Tr != null)
                message.Tr = String(object.Tr);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_SendSeed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_SendSeed
         * @static
         * @param {Proto.ws_C2S_SendSeed} message ws_C2S_SendSeed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_SendSeed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10012;
                object.TableID = 0;
                object.eosaccount = "";
                object.Sign = "";
                object.Tr = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                object.Sign = message.Sign;
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                object.Tr = message.Tr;
            return object;
        };

        /**
         * Converts this ws_C2S_SendSeed to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_SendSeed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_SendSeed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_SendSeed;
    })();

    Proto.ws_S2C_SendSeed = (function() {

        /**
         * Properties of a ws_S2C_SendSeed.
         * @memberof Proto
         * @interface Iws_S2C_SendSeed
         * @property {number} MsgID ws_S2C_SendSeed MsgID
         * @property {string|null} [eosaccount] ws_S2C_SendSeed eosaccount
         * @property {number|null} [TableID] ws_S2C_SendSeed TableID
         * @property {string|null} [Status] ws_S2C_SendSeed Status
         */

        /**
         * Constructs a new ws_S2C_SendSeed.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_SendSeed.
         * @implements Iws_S2C_SendSeed
         * @constructor
         * @param {Proto.Iws_S2C_SendSeed=} [properties] Properties to set
         */
        function ws_S2C_SendSeed(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_SendSeed MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_SendSeed
         * @instance
         */
        ws_S2C_SendSeed.prototype.MsgID = 20012;

        /**
         * ws_S2C_SendSeed eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_S2C_SendSeed
         * @instance
         */
        ws_S2C_SendSeed.prototype.eosaccount = "";

        /**
         * ws_S2C_SendSeed TableID.
         * @member {number} TableID
         * @memberof Proto.ws_S2C_SendSeed
         * @instance
         */
        ws_S2C_SendSeed.prototype.TableID = 0;

        /**
         * ws_S2C_SendSeed Status.
         * @member {string} Status
         * @memberof Proto.ws_S2C_SendSeed
         * @instance
         */
        ws_S2C_SendSeed.prototype.Status = "";

        /**
         * Creates a new ws_S2C_SendSeed instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_SendSeed
         * @static
         * @param {Proto.Iws_S2C_SendSeed=} [properties] Properties to set
         * @returns {Proto.ws_S2C_SendSeed} ws_S2C_SendSeed instance
         */
        ws_S2C_SendSeed.create = function create(properties) {
            return new ws_S2C_SendSeed(properties);
        };

        /**
         * Encodes the specified ws_S2C_SendSeed message. Does not implicitly {@link Proto.ws_S2C_SendSeed.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_SendSeed
         * @static
         * @param {Proto.Iws_S2C_SendSeed} message ws_S2C_SendSeed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_SendSeed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableID);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Status);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_SendSeed message, length delimited. Does not implicitly {@link Proto.ws_S2C_SendSeed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_SendSeed
         * @static
         * @param {Proto.Iws_S2C_SendSeed} message ws_S2C_SendSeed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_SendSeed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_SendSeed message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_SendSeed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_SendSeed} ws_S2C_SendSeed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_SendSeed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_SendSeed();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                case 3:
                    message.TableID = reader.int32();
                    break;
                case 4:
                    message.Status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_SendSeed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_SendSeed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_SendSeed} ws_S2C_SendSeed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_SendSeed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_SendSeed message.
         * @function verify
         * @memberof Proto.ws_S2C_SendSeed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_SendSeed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isString(message.Status))
                    return "Status: string expected";
            return null;
        };

        /**
         * Creates a ws_S2C_SendSeed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_SendSeed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_SendSeed} ws_S2C_SendSeed
         */
        ws_S2C_SendSeed.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_SendSeed)
                return object;
            var message = new $root.Proto.ws_S2C_SendSeed();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.Status != null)
                message.Status = String(object.Status);
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_SendSeed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_SendSeed
         * @static
         * @param {Proto.ws_S2C_SendSeed} message ws_S2C_SendSeed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_SendSeed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20012;
                object.eosaccount = "";
                object.TableID = 0;
                object.Status = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this ws_S2C_SendSeed to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_SendSeed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_SendSeed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_SendSeed;
    })();

    Proto.ws_B2C_CreatSeed = (function() {

        /**
         * Properties of a ws_B2C_CreatSeed.
         * @memberof Proto
         * @interface Iws_B2C_CreatSeed
         * @property {number} MsgID ws_B2C_CreatSeed MsgID
         * @property {number|null} [TableID] ws_B2C_CreatSeed TableID
         * @property {string|null} [Dealer] ws_B2C_CreatSeed Dealer
         */

        /**
         * Constructs a new ws_B2C_CreatSeed.
         * @memberof Proto
         * @classdesc Represents a ws_B2C_CreatSeed.
         * @implements Iws_B2C_CreatSeed
         * @constructor
         * @param {Proto.Iws_B2C_CreatSeed=} [properties] Properties to set
         */
        function ws_B2C_CreatSeed(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_B2C_CreatSeed MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_B2C_CreatSeed
         * @instance
         */
        ws_B2C_CreatSeed.prototype.MsgID = 30012;

        /**
         * ws_B2C_CreatSeed TableID.
         * @member {number} TableID
         * @memberof Proto.ws_B2C_CreatSeed
         * @instance
         */
        ws_B2C_CreatSeed.prototype.TableID = 0;

        /**
         * ws_B2C_CreatSeed Dealer.
         * @member {string} Dealer
         * @memberof Proto.ws_B2C_CreatSeed
         * @instance
         */
        ws_B2C_CreatSeed.prototype.Dealer = "";

        /**
         * Creates a new ws_B2C_CreatSeed instance using the specified properties.
         * @function create
         * @memberof Proto.ws_B2C_CreatSeed
         * @static
         * @param {Proto.Iws_B2C_CreatSeed=} [properties] Properties to set
         * @returns {Proto.ws_B2C_CreatSeed} ws_B2C_CreatSeed instance
         */
        ws_B2C_CreatSeed.create = function create(properties) {
            return new ws_B2C_CreatSeed(properties);
        };

        /**
         * Encodes the specified ws_B2C_CreatSeed message. Does not implicitly {@link Proto.ws_B2C_CreatSeed.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_B2C_CreatSeed
         * @static
         * @param {Proto.Iws_B2C_CreatSeed} message ws_B2C_CreatSeed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_CreatSeed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.Dealer != null && message.hasOwnProperty("Dealer"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Dealer);
            return writer;
        };

        /**
         * Encodes the specified ws_B2C_CreatSeed message, length delimited. Does not implicitly {@link Proto.ws_B2C_CreatSeed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_B2C_CreatSeed
         * @static
         * @param {Proto.Iws_B2C_CreatSeed} message ws_B2C_CreatSeed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_CreatSeed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_B2C_CreatSeed message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_B2C_CreatSeed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_B2C_CreatSeed} ws_B2C_CreatSeed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_CreatSeed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_B2C_CreatSeed();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.Dealer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_B2C_CreatSeed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_B2C_CreatSeed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_B2C_CreatSeed} ws_B2C_CreatSeed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_CreatSeed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_B2C_CreatSeed message.
         * @function verify
         * @memberof Proto.ws_B2C_CreatSeed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_B2C_CreatSeed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.Dealer != null && message.hasOwnProperty("Dealer"))
                if (!$util.isString(message.Dealer))
                    return "Dealer: string expected";
            return null;
        };

        /**
         * Creates a ws_B2C_CreatSeed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_B2C_CreatSeed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_B2C_CreatSeed} ws_B2C_CreatSeed
         */
        ws_B2C_CreatSeed.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_B2C_CreatSeed)
                return object;
            var message = new $root.Proto.ws_B2C_CreatSeed();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.Dealer != null)
                message.Dealer = String(object.Dealer);
            return message;
        };

        /**
         * Creates a plain object from a ws_B2C_CreatSeed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_B2C_CreatSeed
         * @static
         * @param {Proto.ws_B2C_CreatSeed} message ws_B2C_CreatSeed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_B2C_CreatSeed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 30012;
                object.TableID = 0;
                object.Dealer = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.Dealer != null && message.hasOwnProperty("Dealer"))
                object.Dealer = message.Dealer;
            return object;
        };

        /**
         * Converts this ws_B2C_CreatSeed to JSON.
         * @function toJSON
         * @memberof Proto.ws_B2C_CreatSeed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_B2C_CreatSeed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_B2C_CreatSeed;
    })();

    Proto.ws_C2S_SendTxtSeed = (function() {

        /**
         * Properties of a ws_C2S_SendTxtSeed.
         * @memberof Proto
         * @interface Iws_C2S_SendTxtSeed
         * @property {number} MsgID ws_C2S_SendTxtSeed MsgID
         * @property {number|null} [TableID] ws_C2S_SendTxtSeed TableID
         * @property {string|null} [eosaccount] ws_C2S_SendTxtSeed eosaccount
         * @property {string|null} [Sign] ws_C2S_SendTxtSeed Sign
         * @property {string|null} [Tr] ws_C2S_SendTxtSeed Tr
         */

        /**
         * Constructs a new ws_C2S_SendTxtSeed.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_SendTxtSeed.
         * @implements Iws_C2S_SendTxtSeed
         * @constructor
         * @param {Proto.Iws_C2S_SendTxtSeed=} [properties] Properties to set
         */
        function ws_C2S_SendTxtSeed(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_SendTxtSeed MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_SendTxtSeed
         * @instance
         */
        ws_C2S_SendTxtSeed.prototype.MsgID = 10013;

        /**
         * ws_C2S_SendTxtSeed TableID.
         * @member {number} TableID
         * @memberof Proto.ws_C2S_SendTxtSeed
         * @instance
         */
        ws_C2S_SendTxtSeed.prototype.TableID = 0;

        /**
         * ws_C2S_SendTxtSeed eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_C2S_SendTxtSeed
         * @instance
         */
        ws_C2S_SendTxtSeed.prototype.eosaccount = "";

        /**
         * ws_C2S_SendTxtSeed Sign.
         * @member {string} Sign
         * @memberof Proto.ws_C2S_SendTxtSeed
         * @instance
         */
        ws_C2S_SendTxtSeed.prototype.Sign = "";

        /**
         * ws_C2S_SendTxtSeed Tr.
         * @member {string} Tr
         * @memberof Proto.ws_C2S_SendTxtSeed
         * @instance
         */
        ws_C2S_SendTxtSeed.prototype.Tr = "";

        /**
         * Creates a new ws_C2S_SendTxtSeed instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_SendTxtSeed
         * @static
         * @param {Proto.Iws_C2S_SendTxtSeed=} [properties] Properties to set
         * @returns {Proto.ws_C2S_SendTxtSeed} ws_C2S_SendTxtSeed instance
         */
        ws_C2S_SendTxtSeed.create = function create(properties) {
            return new ws_C2S_SendTxtSeed(properties);
        };

        /**
         * Encodes the specified ws_C2S_SendTxtSeed message. Does not implicitly {@link Proto.ws_C2S_SendTxtSeed.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_SendTxtSeed
         * @static
         * @param {Proto.Iws_C2S_SendTxtSeed} message ws_C2S_SendTxtSeed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_SendTxtSeed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.eosaccount);
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Sign);
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Tr);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_SendTxtSeed message, length delimited. Does not implicitly {@link Proto.ws_C2S_SendTxtSeed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_SendTxtSeed
         * @static
         * @param {Proto.Iws_C2S_SendTxtSeed} message ws_C2S_SendTxtSeed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_SendTxtSeed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_SendTxtSeed message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_SendTxtSeed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_SendTxtSeed} ws_C2S_SendTxtSeed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_SendTxtSeed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_SendTxtSeed();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.eosaccount = reader.string();
                    break;
                case 4:
                    message.Sign = reader.string();
                    break;
                case 5:
                    message.Tr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_SendTxtSeed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_SendTxtSeed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_SendTxtSeed} ws_C2S_SendTxtSeed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_SendTxtSeed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_SendTxtSeed message.
         * @function verify
         * @memberof Proto.ws_C2S_SendTxtSeed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_SendTxtSeed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                if (!$util.isString(message.Sign))
                    return "Sign: string expected";
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                if (!$util.isString(message.Tr))
                    return "Tr: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_SendTxtSeed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_SendTxtSeed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_SendTxtSeed} ws_C2S_SendTxtSeed
         */
        ws_C2S_SendTxtSeed.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_SendTxtSeed)
                return object;
            var message = new $root.Proto.ws_C2S_SendTxtSeed();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.Sign != null)
                message.Sign = String(object.Sign);
            if (object.Tr != null)
                message.Tr = String(object.Tr);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_SendTxtSeed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_SendTxtSeed
         * @static
         * @param {Proto.ws_C2S_SendTxtSeed} message ws_C2S_SendTxtSeed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_SendTxtSeed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10013;
                object.TableID = 0;
                object.eosaccount = "";
                object.Sign = "";
                object.Tr = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                object.Sign = message.Sign;
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                object.Tr = message.Tr;
            return object;
        };

        /**
         * Converts this ws_C2S_SendTxtSeed to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_SendTxtSeed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_SendTxtSeed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_SendTxtSeed;
    })();

    Proto.ws_S2C_SendTxtSeed = (function() {

        /**
         * Properties of a ws_S2C_SendTxtSeed.
         * @memberof Proto
         * @interface Iws_S2C_SendTxtSeed
         * @property {number} MsgID ws_S2C_SendTxtSeed MsgID
         * @property {string|null} [eosaccount] ws_S2C_SendTxtSeed eosaccount
         * @property {number|null} [TableID] ws_S2C_SendTxtSeed TableID
         * @property {string|null} [Status] ws_S2C_SendTxtSeed Status
         */

        /**
         * Constructs a new ws_S2C_SendTxtSeed.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_SendTxtSeed.
         * @implements Iws_S2C_SendTxtSeed
         * @constructor
         * @param {Proto.Iws_S2C_SendTxtSeed=} [properties] Properties to set
         */
        function ws_S2C_SendTxtSeed(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_SendTxtSeed MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_SendTxtSeed
         * @instance
         */
        ws_S2C_SendTxtSeed.prototype.MsgID = 20013;

        /**
         * ws_S2C_SendTxtSeed eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_S2C_SendTxtSeed
         * @instance
         */
        ws_S2C_SendTxtSeed.prototype.eosaccount = "";

        /**
         * ws_S2C_SendTxtSeed TableID.
         * @member {number} TableID
         * @memberof Proto.ws_S2C_SendTxtSeed
         * @instance
         */
        ws_S2C_SendTxtSeed.prototype.TableID = 0;

        /**
         * ws_S2C_SendTxtSeed Status.
         * @member {string} Status
         * @memberof Proto.ws_S2C_SendTxtSeed
         * @instance
         */
        ws_S2C_SendTxtSeed.prototype.Status = "";

        /**
         * Creates a new ws_S2C_SendTxtSeed instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_SendTxtSeed
         * @static
         * @param {Proto.Iws_S2C_SendTxtSeed=} [properties] Properties to set
         * @returns {Proto.ws_S2C_SendTxtSeed} ws_S2C_SendTxtSeed instance
         */
        ws_S2C_SendTxtSeed.create = function create(properties) {
            return new ws_S2C_SendTxtSeed(properties);
        };

        /**
         * Encodes the specified ws_S2C_SendTxtSeed message. Does not implicitly {@link Proto.ws_S2C_SendTxtSeed.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_SendTxtSeed
         * @static
         * @param {Proto.Iws_S2C_SendTxtSeed} message ws_S2C_SendTxtSeed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_SendTxtSeed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableID);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Status);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_SendTxtSeed message, length delimited. Does not implicitly {@link Proto.ws_S2C_SendTxtSeed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_SendTxtSeed
         * @static
         * @param {Proto.Iws_S2C_SendTxtSeed} message ws_S2C_SendTxtSeed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_SendTxtSeed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_SendTxtSeed message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_SendTxtSeed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_SendTxtSeed} ws_S2C_SendTxtSeed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_SendTxtSeed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_SendTxtSeed();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                case 3:
                    message.TableID = reader.int32();
                    break;
                case 4:
                    message.Status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_SendTxtSeed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_SendTxtSeed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_SendTxtSeed} ws_S2C_SendTxtSeed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_SendTxtSeed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_SendTxtSeed message.
         * @function verify
         * @memberof Proto.ws_S2C_SendTxtSeed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_SendTxtSeed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isString(message.Status))
                    return "Status: string expected";
            return null;
        };

        /**
         * Creates a ws_S2C_SendTxtSeed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_SendTxtSeed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_SendTxtSeed} ws_S2C_SendTxtSeed
         */
        ws_S2C_SendTxtSeed.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_SendTxtSeed)
                return object;
            var message = new $root.Proto.ws_S2C_SendTxtSeed();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.Status != null)
                message.Status = String(object.Status);
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_SendTxtSeed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_SendTxtSeed
         * @static
         * @param {Proto.ws_S2C_SendTxtSeed} message ws_S2C_SendTxtSeed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_SendTxtSeed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20013;
                object.eosaccount = "";
                object.TableID = 0;
                object.Status = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this ws_S2C_SendTxtSeed to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_SendTxtSeed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_SendTxtSeed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_SendTxtSeed;
    })();

    Proto.ws_B2C_CreatTxtSeed = (function() {

        /**
         * Properties of a ws_B2C_CreatTxtSeed.
         * @memberof Proto
         * @interface Iws_B2C_CreatTxtSeed
         * @property {number} MsgID ws_B2C_CreatTxtSeed MsgID
         * @property {number|null} [TableID] ws_B2C_CreatTxtSeed TableID
         * @property {string|null} [Dealer] ws_B2C_CreatTxtSeed Dealer
         */

        /**
         * Constructs a new ws_B2C_CreatTxtSeed.
         * @memberof Proto
         * @classdesc Represents a ws_B2C_CreatTxtSeed.
         * @implements Iws_B2C_CreatTxtSeed
         * @constructor
         * @param {Proto.Iws_B2C_CreatTxtSeed=} [properties] Properties to set
         */
        function ws_B2C_CreatTxtSeed(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_B2C_CreatTxtSeed MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_B2C_CreatTxtSeed
         * @instance
         */
        ws_B2C_CreatTxtSeed.prototype.MsgID = 30013;

        /**
         * ws_B2C_CreatTxtSeed TableID.
         * @member {number} TableID
         * @memberof Proto.ws_B2C_CreatTxtSeed
         * @instance
         */
        ws_B2C_CreatTxtSeed.prototype.TableID = 0;

        /**
         * ws_B2C_CreatTxtSeed Dealer.
         * @member {string} Dealer
         * @memberof Proto.ws_B2C_CreatTxtSeed
         * @instance
         */
        ws_B2C_CreatTxtSeed.prototype.Dealer = "";

        /**
         * Creates a new ws_B2C_CreatTxtSeed instance using the specified properties.
         * @function create
         * @memberof Proto.ws_B2C_CreatTxtSeed
         * @static
         * @param {Proto.Iws_B2C_CreatTxtSeed=} [properties] Properties to set
         * @returns {Proto.ws_B2C_CreatTxtSeed} ws_B2C_CreatTxtSeed instance
         */
        ws_B2C_CreatTxtSeed.create = function create(properties) {
            return new ws_B2C_CreatTxtSeed(properties);
        };

        /**
         * Encodes the specified ws_B2C_CreatTxtSeed message. Does not implicitly {@link Proto.ws_B2C_CreatTxtSeed.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_B2C_CreatTxtSeed
         * @static
         * @param {Proto.Iws_B2C_CreatTxtSeed} message ws_B2C_CreatTxtSeed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_CreatTxtSeed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.Dealer != null && message.hasOwnProperty("Dealer"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Dealer);
            return writer;
        };

        /**
         * Encodes the specified ws_B2C_CreatTxtSeed message, length delimited. Does not implicitly {@link Proto.ws_B2C_CreatTxtSeed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_B2C_CreatTxtSeed
         * @static
         * @param {Proto.Iws_B2C_CreatTxtSeed} message ws_B2C_CreatTxtSeed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_CreatTxtSeed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_B2C_CreatTxtSeed message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_B2C_CreatTxtSeed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_B2C_CreatTxtSeed} ws_B2C_CreatTxtSeed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_CreatTxtSeed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_B2C_CreatTxtSeed();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.Dealer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_B2C_CreatTxtSeed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_B2C_CreatTxtSeed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_B2C_CreatTxtSeed} ws_B2C_CreatTxtSeed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_CreatTxtSeed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_B2C_CreatTxtSeed message.
         * @function verify
         * @memberof Proto.ws_B2C_CreatTxtSeed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_B2C_CreatTxtSeed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.Dealer != null && message.hasOwnProperty("Dealer"))
                if (!$util.isString(message.Dealer))
                    return "Dealer: string expected";
            return null;
        };

        /**
         * Creates a ws_B2C_CreatTxtSeed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_B2C_CreatTxtSeed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_B2C_CreatTxtSeed} ws_B2C_CreatTxtSeed
         */
        ws_B2C_CreatTxtSeed.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_B2C_CreatTxtSeed)
                return object;
            var message = new $root.Proto.ws_B2C_CreatTxtSeed();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.Dealer != null)
                message.Dealer = String(object.Dealer);
            return message;
        };

        /**
         * Creates a plain object from a ws_B2C_CreatTxtSeed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_B2C_CreatTxtSeed
         * @static
         * @param {Proto.ws_B2C_CreatTxtSeed} message ws_B2C_CreatTxtSeed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_B2C_CreatTxtSeed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 30013;
                object.TableID = 0;
                object.Dealer = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.Dealer != null && message.hasOwnProperty("Dealer"))
                object.Dealer = message.Dealer;
            return object;
        };

        /**
         * Converts this ws_B2C_CreatTxtSeed to JSON.
         * @function toJSON
         * @memberof Proto.ws_B2C_CreatTxtSeed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_B2C_CreatTxtSeed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_B2C_CreatTxtSeed;
    })();

    Proto.ws_C2S_PlayBet = (function() {

        /**
         * Properties of a ws_C2S_PlayBet.
         * @memberof Proto
         * @interface Iws_C2S_PlayBet
         * @property {number} MsgID ws_C2S_PlayBet MsgID
         * @property {number|null} [TableID] ws_C2S_PlayBet TableID
         * @property {string|null} [eosaccount] ws_C2S_PlayBet eosaccount
         * @property {string|null} [betDealer] ws_C2S_PlayBet betDealer
         * @property {string|null} [betPlayer] ws_C2S_PlayBet betPlayer
         * @property {string|null} [betTie] ws_C2S_PlayBet betTie
         * @property {string|null} [betDealerPush] ws_C2S_PlayBet betDealerPush
         * @property {string|null} [betPlayerPush] ws_C2S_PlayBet betPlayerPush
         * @property {string|null} [agentalias] ws_C2S_PlayBet agentalias
         * @property {string|null} [nickname] ws_C2S_PlayBet nickname
         */

        /**
         * Constructs a new ws_C2S_PlayBet.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_PlayBet.
         * @implements Iws_C2S_PlayBet
         * @constructor
         * @param {Proto.Iws_C2S_PlayBet=} [properties] Properties to set
         */
        function ws_C2S_PlayBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_PlayBet MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_PlayBet
         * @instance
         */
        ws_C2S_PlayBet.prototype.MsgID = 10014;

        /**
         * ws_C2S_PlayBet TableID.
         * @member {number} TableID
         * @memberof Proto.ws_C2S_PlayBet
         * @instance
         */
        ws_C2S_PlayBet.prototype.TableID = 0;

        /**
         * ws_C2S_PlayBet eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_C2S_PlayBet
         * @instance
         */
        ws_C2S_PlayBet.prototype.eosaccount = "";

        /**
         * ws_C2S_PlayBet betDealer.
         * @member {string} betDealer
         * @memberof Proto.ws_C2S_PlayBet
         * @instance
         */
        ws_C2S_PlayBet.prototype.betDealer = "";

        /**
         * ws_C2S_PlayBet betPlayer.
         * @member {string} betPlayer
         * @memberof Proto.ws_C2S_PlayBet
         * @instance
         */
        ws_C2S_PlayBet.prototype.betPlayer = "";

        /**
         * ws_C2S_PlayBet betTie.
         * @member {string} betTie
         * @memberof Proto.ws_C2S_PlayBet
         * @instance
         */
        ws_C2S_PlayBet.prototype.betTie = "";

        /**
         * ws_C2S_PlayBet betDealerPush.
         * @member {string} betDealerPush
         * @memberof Proto.ws_C2S_PlayBet
         * @instance
         */
        ws_C2S_PlayBet.prototype.betDealerPush = "";

        /**
         * ws_C2S_PlayBet betPlayerPush.
         * @member {string} betPlayerPush
         * @memberof Proto.ws_C2S_PlayBet
         * @instance
         */
        ws_C2S_PlayBet.prototype.betPlayerPush = "";

        /**
         * ws_C2S_PlayBet agentalias.
         * @member {string} agentalias
         * @memberof Proto.ws_C2S_PlayBet
         * @instance
         */
        ws_C2S_PlayBet.prototype.agentalias = "";

        /**
         * ws_C2S_PlayBet nickname.
         * @member {string} nickname
         * @memberof Proto.ws_C2S_PlayBet
         * @instance
         */
        ws_C2S_PlayBet.prototype.nickname = "";

        /**
         * Creates a new ws_C2S_PlayBet instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_PlayBet
         * @static
         * @param {Proto.Iws_C2S_PlayBet=} [properties] Properties to set
         * @returns {Proto.ws_C2S_PlayBet} ws_C2S_PlayBet instance
         */
        ws_C2S_PlayBet.create = function create(properties) {
            return new ws_C2S_PlayBet(properties);
        };

        /**
         * Encodes the specified ws_C2S_PlayBet message. Does not implicitly {@link Proto.ws_C2S_PlayBet.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_PlayBet
         * @static
         * @param {Proto.Iws_C2S_PlayBet} message ws_C2S_PlayBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_PlayBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.eosaccount);
            if (message.betDealer != null && message.hasOwnProperty("betDealer"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.betDealer);
            if (message.betPlayer != null && message.hasOwnProperty("betPlayer"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.betPlayer);
            if (message.betTie != null && message.hasOwnProperty("betTie"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.betTie);
            if (message.betDealerPush != null && message.hasOwnProperty("betDealerPush"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.betDealerPush);
            if (message.betPlayerPush != null && message.hasOwnProperty("betPlayerPush"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.betPlayerPush);
            if (message.agentalias != null && message.hasOwnProperty("agentalias"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.agentalias);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.nickname);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_PlayBet message, length delimited. Does not implicitly {@link Proto.ws_C2S_PlayBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_PlayBet
         * @static
         * @param {Proto.Iws_C2S_PlayBet} message ws_C2S_PlayBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_PlayBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_PlayBet message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_PlayBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_PlayBet} ws_C2S_PlayBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_PlayBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_PlayBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.eosaccount = reader.string();
                    break;
                case 4:
                    message.betDealer = reader.string();
                    break;
                case 5:
                    message.betPlayer = reader.string();
                    break;
                case 6:
                    message.betTie = reader.string();
                    break;
                case 7:
                    message.betDealerPush = reader.string();
                    break;
                case 8:
                    message.betPlayerPush = reader.string();
                    break;
                case 9:
                    message.agentalias = reader.string();
                    break;
                case 10:
                    message.nickname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_PlayBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_PlayBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_PlayBet} ws_C2S_PlayBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_PlayBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_PlayBet message.
         * @function verify
         * @memberof Proto.ws_C2S_PlayBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_PlayBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.betDealer != null && message.hasOwnProperty("betDealer"))
                if (!$util.isString(message.betDealer))
                    return "betDealer: string expected";
            if (message.betPlayer != null && message.hasOwnProperty("betPlayer"))
                if (!$util.isString(message.betPlayer))
                    return "betPlayer: string expected";
            if (message.betTie != null && message.hasOwnProperty("betTie"))
                if (!$util.isString(message.betTie))
                    return "betTie: string expected";
            if (message.betDealerPush != null && message.hasOwnProperty("betDealerPush"))
                if (!$util.isString(message.betDealerPush))
                    return "betDealerPush: string expected";
            if (message.betPlayerPush != null && message.hasOwnProperty("betPlayerPush"))
                if (!$util.isString(message.betPlayerPush))
                    return "betPlayerPush: string expected";
            if (message.agentalias != null && message.hasOwnProperty("agentalias"))
                if (!$util.isString(message.agentalias))
                    return "agentalias: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_PlayBet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_PlayBet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_PlayBet} ws_C2S_PlayBet
         */
        ws_C2S_PlayBet.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_PlayBet)
                return object;
            var message = new $root.Proto.ws_C2S_PlayBet();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.betDealer != null)
                message.betDealer = String(object.betDealer);
            if (object.betPlayer != null)
                message.betPlayer = String(object.betPlayer);
            if (object.betTie != null)
                message.betTie = String(object.betTie);
            if (object.betDealerPush != null)
                message.betDealerPush = String(object.betDealerPush);
            if (object.betPlayerPush != null)
                message.betPlayerPush = String(object.betPlayerPush);
            if (object.agentalias != null)
                message.agentalias = String(object.agentalias);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_PlayBet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_PlayBet
         * @static
         * @param {Proto.ws_C2S_PlayBet} message ws_C2S_PlayBet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_PlayBet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10014;
                object.TableID = 0;
                object.eosaccount = "";
                object.betDealer = "";
                object.betPlayer = "";
                object.betTie = "";
                object.betDealerPush = "";
                object.betPlayerPush = "";
                object.agentalias = "";
                object.nickname = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.betDealer != null && message.hasOwnProperty("betDealer"))
                object.betDealer = message.betDealer;
            if (message.betPlayer != null && message.hasOwnProperty("betPlayer"))
                object.betPlayer = message.betPlayer;
            if (message.betTie != null && message.hasOwnProperty("betTie"))
                object.betTie = message.betTie;
            if (message.betDealerPush != null && message.hasOwnProperty("betDealerPush"))
                object.betDealerPush = message.betDealerPush;
            if (message.betPlayerPush != null && message.hasOwnProperty("betPlayerPush"))
                object.betPlayerPush = message.betPlayerPush;
            if (message.agentalias != null && message.hasOwnProperty("agentalias"))
                object.agentalias = message.agentalias;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            return object;
        };

        /**
         * Converts this ws_C2S_PlayBet to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_PlayBet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_PlayBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_PlayBet;
    })();

    Proto.ws_S2C_PlayBet = (function() {

        /**
         * Properties of a ws_S2C_PlayBet.
         * @memberof Proto
         * @interface Iws_S2C_PlayBet
         * @property {number} MsgID ws_S2C_PlayBet MsgID
         * @property {string|null} [eosaccount] ws_S2C_PlayBet eosaccount
         * @property {number|null} [TableID] ws_S2C_PlayBet TableID
         * @property {string|null} [Status] ws_S2C_PlayBet Status
         */

        /**
         * Constructs a new ws_S2C_PlayBet.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_PlayBet.
         * @implements Iws_S2C_PlayBet
         * @constructor
         * @param {Proto.Iws_S2C_PlayBet=} [properties] Properties to set
         */
        function ws_S2C_PlayBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_PlayBet MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_PlayBet
         * @instance
         */
        ws_S2C_PlayBet.prototype.MsgID = 20014;

        /**
         * ws_S2C_PlayBet eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_S2C_PlayBet
         * @instance
         */
        ws_S2C_PlayBet.prototype.eosaccount = "";

        /**
         * ws_S2C_PlayBet TableID.
         * @member {number} TableID
         * @memberof Proto.ws_S2C_PlayBet
         * @instance
         */
        ws_S2C_PlayBet.prototype.TableID = 0;

        /**
         * ws_S2C_PlayBet Status.
         * @member {string} Status
         * @memberof Proto.ws_S2C_PlayBet
         * @instance
         */
        ws_S2C_PlayBet.prototype.Status = "";

        /**
         * Creates a new ws_S2C_PlayBet instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_PlayBet
         * @static
         * @param {Proto.Iws_S2C_PlayBet=} [properties] Properties to set
         * @returns {Proto.ws_S2C_PlayBet} ws_S2C_PlayBet instance
         */
        ws_S2C_PlayBet.create = function create(properties) {
            return new ws_S2C_PlayBet(properties);
        };

        /**
         * Encodes the specified ws_S2C_PlayBet message. Does not implicitly {@link Proto.ws_S2C_PlayBet.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_PlayBet
         * @static
         * @param {Proto.Iws_S2C_PlayBet} message ws_S2C_PlayBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_PlayBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableID);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Status);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_PlayBet message, length delimited. Does not implicitly {@link Proto.ws_S2C_PlayBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_PlayBet
         * @static
         * @param {Proto.Iws_S2C_PlayBet} message ws_S2C_PlayBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_PlayBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_PlayBet message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_PlayBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_PlayBet} ws_S2C_PlayBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_PlayBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_PlayBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                case 3:
                    message.TableID = reader.int32();
                    break;
                case 4:
                    message.Status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_PlayBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_PlayBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_PlayBet} ws_S2C_PlayBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_PlayBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_PlayBet message.
         * @function verify
         * @memberof Proto.ws_S2C_PlayBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_PlayBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isString(message.Status))
                    return "Status: string expected";
            return null;
        };

        /**
         * Creates a ws_S2C_PlayBet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_PlayBet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_PlayBet} ws_S2C_PlayBet
         */
        ws_S2C_PlayBet.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_PlayBet)
                return object;
            var message = new $root.Proto.ws_S2C_PlayBet();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.Status != null)
                message.Status = String(object.Status);
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_PlayBet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_PlayBet
         * @static
         * @param {Proto.ws_S2C_PlayBet} message ws_S2C_PlayBet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_PlayBet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20014;
                object.eosaccount = "";
                object.TableID = 0;
                object.Status = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this ws_S2C_PlayBet to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_PlayBet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_PlayBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_PlayBet;
    })();

    Proto.ws_B2C_PlayBet = (function() {

        /**
         * Properties of a ws_B2C_PlayBet.
         * @memberof Proto
         * @interface Iws_B2C_PlayBet
         * @property {number} MsgID ws_B2C_PlayBet MsgID
         * @property {number|null} [TableID] ws_B2C_PlayBet TableID
         * @property {string|null} [eosaccount] ws_B2C_PlayBet eosaccount
         * @property {string|null} [betDealer] ws_B2C_PlayBet betDealer
         * @property {string|null} [betPlayer] ws_B2C_PlayBet betPlayer
         * @property {string|null} [betTie] ws_B2C_PlayBet betTie
         * @property {string|null} [betDealerPush] ws_B2C_PlayBet betDealerPush
         * @property {string|null} [betPlayerPush] ws_B2C_PlayBet betPlayerPush
         * @property {string|null} [agentalias] ws_B2C_PlayBet agentalias
         * @property {string|null} [nickname] ws_B2C_PlayBet nickname
         */

        /**
         * Constructs a new ws_B2C_PlayBet.
         * @memberof Proto
         * @classdesc Represents a ws_B2C_PlayBet.
         * @implements Iws_B2C_PlayBet
         * @constructor
         * @param {Proto.Iws_B2C_PlayBet=} [properties] Properties to set
         */
        function ws_B2C_PlayBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_B2C_PlayBet MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_B2C_PlayBet
         * @instance
         */
        ws_B2C_PlayBet.prototype.MsgID = 30014;

        /**
         * ws_B2C_PlayBet TableID.
         * @member {number} TableID
         * @memberof Proto.ws_B2C_PlayBet
         * @instance
         */
        ws_B2C_PlayBet.prototype.TableID = 0;

        /**
         * ws_B2C_PlayBet eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_B2C_PlayBet
         * @instance
         */
        ws_B2C_PlayBet.prototype.eosaccount = "";

        /**
         * ws_B2C_PlayBet betDealer.
         * @member {string} betDealer
         * @memberof Proto.ws_B2C_PlayBet
         * @instance
         */
        ws_B2C_PlayBet.prototype.betDealer = "";

        /**
         * ws_B2C_PlayBet betPlayer.
         * @member {string} betPlayer
         * @memberof Proto.ws_B2C_PlayBet
         * @instance
         */
        ws_B2C_PlayBet.prototype.betPlayer = "";

        /**
         * ws_B2C_PlayBet betTie.
         * @member {string} betTie
         * @memberof Proto.ws_B2C_PlayBet
         * @instance
         */
        ws_B2C_PlayBet.prototype.betTie = "";

        /**
         * ws_B2C_PlayBet betDealerPush.
         * @member {string} betDealerPush
         * @memberof Proto.ws_B2C_PlayBet
         * @instance
         */
        ws_B2C_PlayBet.prototype.betDealerPush = "";

        /**
         * ws_B2C_PlayBet betPlayerPush.
         * @member {string} betPlayerPush
         * @memberof Proto.ws_B2C_PlayBet
         * @instance
         */
        ws_B2C_PlayBet.prototype.betPlayerPush = "";

        /**
         * ws_B2C_PlayBet agentalias.
         * @member {string} agentalias
         * @memberof Proto.ws_B2C_PlayBet
         * @instance
         */
        ws_B2C_PlayBet.prototype.agentalias = "";

        /**
         * ws_B2C_PlayBet nickname.
         * @member {string} nickname
         * @memberof Proto.ws_B2C_PlayBet
         * @instance
         */
        ws_B2C_PlayBet.prototype.nickname = "";

        /**
         * Creates a new ws_B2C_PlayBet instance using the specified properties.
         * @function create
         * @memberof Proto.ws_B2C_PlayBet
         * @static
         * @param {Proto.Iws_B2C_PlayBet=} [properties] Properties to set
         * @returns {Proto.ws_B2C_PlayBet} ws_B2C_PlayBet instance
         */
        ws_B2C_PlayBet.create = function create(properties) {
            return new ws_B2C_PlayBet(properties);
        };

        /**
         * Encodes the specified ws_B2C_PlayBet message. Does not implicitly {@link Proto.ws_B2C_PlayBet.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_B2C_PlayBet
         * @static
         * @param {Proto.Iws_B2C_PlayBet} message ws_B2C_PlayBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_PlayBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.eosaccount);
            if (message.betDealer != null && message.hasOwnProperty("betDealer"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.betDealer);
            if (message.betPlayer != null && message.hasOwnProperty("betPlayer"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.betPlayer);
            if (message.betTie != null && message.hasOwnProperty("betTie"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.betTie);
            if (message.betDealerPush != null && message.hasOwnProperty("betDealerPush"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.betDealerPush);
            if (message.betPlayerPush != null && message.hasOwnProperty("betPlayerPush"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.betPlayerPush);
            if (message.agentalias != null && message.hasOwnProperty("agentalias"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.agentalias);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.nickname);
            return writer;
        };

        /**
         * Encodes the specified ws_B2C_PlayBet message, length delimited. Does not implicitly {@link Proto.ws_B2C_PlayBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_B2C_PlayBet
         * @static
         * @param {Proto.Iws_B2C_PlayBet} message ws_B2C_PlayBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_PlayBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_B2C_PlayBet message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_B2C_PlayBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_B2C_PlayBet} ws_B2C_PlayBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_PlayBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_B2C_PlayBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.eosaccount = reader.string();
                    break;
                case 4:
                    message.betDealer = reader.string();
                    break;
                case 5:
                    message.betPlayer = reader.string();
                    break;
                case 6:
                    message.betTie = reader.string();
                    break;
                case 7:
                    message.betDealerPush = reader.string();
                    break;
                case 8:
                    message.betPlayerPush = reader.string();
                    break;
                case 9:
                    message.agentalias = reader.string();
                    break;
                case 10:
                    message.nickname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_B2C_PlayBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_B2C_PlayBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_B2C_PlayBet} ws_B2C_PlayBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_PlayBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_B2C_PlayBet message.
         * @function verify
         * @memberof Proto.ws_B2C_PlayBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_B2C_PlayBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.betDealer != null && message.hasOwnProperty("betDealer"))
                if (!$util.isString(message.betDealer))
                    return "betDealer: string expected";
            if (message.betPlayer != null && message.hasOwnProperty("betPlayer"))
                if (!$util.isString(message.betPlayer))
                    return "betPlayer: string expected";
            if (message.betTie != null && message.hasOwnProperty("betTie"))
                if (!$util.isString(message.betTie))
                    return "betTie: string expected";
            if (message.betDealerPush != null && message.hasOwnProperty("betDealerPush"))
                if (!$util.isString(message.betDealerPush))
                    return "betDealerPush: string expected";
            if (message.betPlayerPush != null && message.hasOwnProperty("betPlayerPush"))
                if (!$util.isString(message.betPlayerPush))
                    return "betPlayerPush: string expected";
            if (message.agentalias != null && message.hasOwnProperty("agentalias"))
                if (!$util.isString(message.agentalias))
                    return "agentalias: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            return null;
        };

        /**
         * Creates a ws_B2C_PlayBet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_B2C_PlayBet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_B2C_PlayBet} ws_B2C_PlayBet
         */
        ws_B2C_PlayBet.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_B2C_PlayBet)
                return object;
            var message = new $root.Proto.ws_B2C_PlayBet();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.betDealer != null)
                message.betDealer = String(object.betDealer);
            if (object.betPlayer != null)
                message.betPlayer = String(object.betPlayer);
            if (object.betTie != null)
                message.betTie = String(object.betTie);
            if (object.betDealerPush != null)
                message.betDealerPush = String(object.betDealerPush);
            if (object.betPlayerPush != null)
                message.betPlayerPush = String(object.betPlayerPush);
            if (object.agentalias != null)
                message.agentalias = String(object.agentalias);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            return message;
        };

        /**
         * Creates a plain object from a ws_B2C_PlayBet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_B2C_PlayBet
         * @static
         * @param {Proto.ws_B2C_PlayBet} message ws_B2C_PlayBet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_B2C_PlayBet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 30014;
                object.TableID = 0;
                object.eosaccount = "";
                object.betDealer = "";
                object.betPlayer = "";
                object.betTie = "";
                object.betDealerPush = "";
                object.betPlayerPush = "";
                object.agentalias = "";
                object.nickname = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.betDealer != null && message.hasOwnProperty("betDealer"))
                object.betDealer = message.betDealer;
            if (message.betPlayer != null && message.hasOwnProperty("betPlayer"))
                object.betPlayer = message.betPlayer;
            if (message.betTie != null && message.hasOwnProperty("betTie"))
                object.betTie = message.betTie;
            if (message.betDealerPush != null && message.hasOwnProperty("betDealerPush"))
                object.betDealerPush = message.betDealerPush;
            if (message.betPlayerPush != null && message.hasOwnProperty("betPlayerPush"))
                object.betPlayerPush = message.betPlayerPush;
            if (message.agentalias != null && message.hasOwnProperty("agentalias"))
                object.agentalias = message.agentalias;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            return object;
        };

        /**
         * Converts this ws_B2C_PlayBet to JSON.
         * @function toJSON
         * @memberof Proto.ws_B2C_PlayBet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_B2C_PlayBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_B2C_PlayBet;
    })();

    Proto.ws_C2S_PlayerBet = (function() {

        /**
         * Properties of a ws_C2S_PlayerBet.
         * @memberof Proto
         * @interface Iws_C2S_PlayerBet
         * @property {number} MsgID ws_C2S_PlayerBet MsgID
         * @property {number|null} [TableID] ws_C2S_PlayerBet TableID
         * @property {string|null} [eosaccount] ws_C2S_PlayerBet eosaccount
         * @property {string|null} [Sign] ws_C2S_PlayerBet Sign
         * @property {string|null} [Tr] ws_C2S_PlayerBet Tr
         */

        /**
         * Constructs a new ws_C2S_PlayerBet.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_PlayerBet.
         * @implements Iws_C2S_PlayerBet
         * @constructor
         * @param {Proto.Iws_C2S_PlayerBet=} [properties] Properties to set
         */
        function ws_C2S_PlayerBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_PlayerBet MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_PlayerBet
         * @instance
         */
        ws_C2S_PlayerBet.prototype.MsgID = 10015;

        /**
         * ws_C2S_PlayerBet TableID.
         * @member {number} TableID
         * @memberof Proto.ws_C2S_PlayerBet
         * @instance
         */
        ws_C2S_PlayerBet.prototype.TableID = 0;

        /**
         * ws_C2S_PlayerBet eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_C2S_PlayerBet
         * @instance
         */
        ws_C2S_PlayerBet.prototype.eosaccount = "";

        /**
         * ws_C2S_PlayerBet Sign.
         * @member {string} Sign
         * @memberof Proto.ws_C2S_PlayerBet
         * @instance
         */
        ws_C2S_PlayerBet.prototype.Sign = "";

        /**
         * ws_C2S_PlayerBet Tr.
         * @member {string} Tr
         * @memberof Proto.ws_C2S_PlayerBet
         * @instance
         */
        ws_C2S_PlayerBet.prototype.Tr = "";

        /**
         * Creates a new ws_C2S_PlayerBet instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_PlayerBet
         * @static
         * @param {Proto.Iws_C2S_PlayerBet=} [properties] Properties to set
         * @returns {Proto.ws_C2S_PlayerBet} ws_C2S_PlayerBet instance
         */
        ws_C2S_PlayerBet.create = function create(properties) {
            return new ws_C2S_PlayerBet(properties);
        };

        /**
         * Encodes the specified ws_C2S_PlayerBet message. Does not implicitly {@link Proto.ws_C2S_PlayerBet.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_PlayerBet
         * @static
         * @param {Proto.Iws_C2S_PlayerBet} message ws_C2S_PlayerBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_PlayerBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.eosaccount);
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Sign);
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Tr);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_PlayerBet message, length delimited. Does not implicitly {@link Proto.ws_C2S_PlayerBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_PlayerBet
         * @static
         * @param {Proto.Iws_C2S_PlayerBet} message ws_C2S_PlayerBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_PlayerBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_PlayerBet message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_PlayerBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_PlayerBet} ws_C2S_PlayerBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_PlayerBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_PlayerBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.eosaccount = reader.string();
                    break;
                case 4:
                    message.Sign = reader.string();
                    break;
                case 5:
                    message.Tr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_PlayerBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_PlayerBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_PlayerBet} ws_C2S_PlayerBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_PlayerBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_PlayerBet message.
         * @function verify
         * @memberof Proto.ws_C2S_PlayerBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_PlayerBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                if (!$util.isString(message.Sign))
                    return "Sign: string expected";
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                if (!$util.isString(message.Tr))
                    return "Tr: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_PlayerBet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_PlayerBet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_PlayerBet} ws_C2S_PlayerBet
         */
        ws_C2S_PlayerBet.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_PlayerBet)
                return object;
            var message = new $root.Proto.ws_C2S_PlayerBet();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.Sign != null)
                message.Sign = String(object.Sign);
            if (object.Tr != null)
                message.Tr = String(object.Tr);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_PlayerBet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_PlayerBet
         * @static
         * @param {Proto.ws_C2S_PlayerBet} message ws_C2S_PlayerBet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_PlayerBet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10015;
                object.TableID = 0;
                object.eosaccount = "";
                object.Sign = "";
                object.Tr = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.Sign != null && message.hasOwnProperty("Sign"))
                object.Sign = message.Sign;
            if (message.Tr != null && message.hasOwnProperty("Tr"))
                object.Tr = message.Tr;
            return object;
        };

        /**
         * Converts this ws_C2S_PlayerBet to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_PlayerBet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_PlayerBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_PlayerBet;
    })();

    Proto.ws_S2C_PlayerBet = (function() {

        /**
         * Properties of a ws_S2C_PlayerBet.
         * @memberof Proto
         * @interface Iws_S2C_PlayerBet
         * @property {number} MsgID ws_S2C_PlayerBet MsgID
         * @property {string|null} [eosaccount] ws_S2C_PlayerBet eosaccount
         * @property {number|null} [TableID] ws_S2C_PlayerBet TableID
         * @property {string|null} [Status] ws_S2C_PlayerBet Status
         */

        /**
         * Constructs a new ws_S2C_PlayerBet.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_PlayerBet.
         * @implements Iws_S2C_PlayerBet
         * @constructor
         * @param {Proto.Iws_S2C_PlayerBet=} [properties] Properties to set
         */
        function ws_S2C_PlayerBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_PlayerBet MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_PlayerBet
         * @instance
         */
        ws_S2C_PlayerBet.prototype.MsgID = 20015;

        /**
         * ws_S2C_PlayerBet eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_S2C_PlayerBet
         * @instance
         */
        ws_S2C_PlayerBet.prototype.eosaccount = "";

        /**
         * ws_S2C_PlayerBet TableID.
         * @member {number} TableID
         * @memberof Proto.ws_S2C_PlayerBet
         * @instance
         */
        ws_S2C_PlayerBet.prototype.TableID = 0;

        /**
         * ws_S2C_PlayerBet Status.
         * @member {string} Status
         * @memberof Proto.ws_S2C_PlayerBet
         * @instance
         */
        ws_S2C_PlayerBet.prototype.Status = "";

        /**
         * Creates a new ws_S2C_PlayerBet instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_PlayerBet
         * @static
         * @param {Proto.Iws_S2C_PlayerBet=} [properties] Properties to set
         * @returns {Proto.ws_S2C_PlayerBet} ws_S2C_PlayerBet instance
         */
        ws_S2C_PlayerBet.create = function create(properties) {
            return new ws_S2C_PlayerBet(properties);
        };

        /**
         * Encodes the specified ws_S2C_PlayerBet message. Does not implicitly {@link Proto.ws_S2C_PlayerBet.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_PlayerBet
         * @static
         * @param {Proto.Iws_S2C_PlayerBet} message ws_S2C_PlayerBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_PlayerBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableID);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Status);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_PlayerBet message, length delimited. Does not implicitly {@link Proto.ws_S2C_PlayerBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_PlayerBet
         * @static
         * @param {Proto.Iws_S2C_PlayerBet} message ws_S2C_PlayerBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_PlayerBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_PlayerBet message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_PlayerBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_PlayerBet} ws_S2C_PlayerBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_PlayerBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_PlayerBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                case 3:
                    message.TableID = reader.int32();
                    break;
                case 4:
                    message.Status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_PlayerBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_PlayerBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_PlayerBet} ws_S2C_PlayerBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_PlayerBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_PlayerBet message.
         * @function verify
         * @memberof Proto.ws_S2C_PlayerBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_PlayerBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isString(message.Status))
                    return "Status: string expected";
            return null;
        };

        /**
         * Creates a ws_S2C_PlayerBet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_PlayerBet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_PlayerBet} ws_S2C_PlayerBet
         */
        ws_S2C_PlayerBet.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_PlayerBet)
                return object;
            var message = new $root.Proto.ws_S2C_PlayerBet();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.Status != null)
                message.Status = String(object.Status);
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_PlayerBet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_PlayerBet
         * @static
         * @param {Proto.ws_S2C_PlayerBet} message ws_S2C_PlayerBet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_PlayerBet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20015;
                object.eosaccount = "";
                object.TableID = 0;
                object.Status = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this ws_S2C_PlayerBet to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_PlayerBet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_PlayerBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_PlayerBet;
    })();

    Proto.ws_B2C_StopBet = (function() {

        /**
         * Properties of a ws_B2C_StopBet.
         * @memberof Proto
         * @interface Iws_B2C_StopBet
         * @property {number} MsgID ws_B2C_StopBet MsgID
         * @property {number|null} [TableID] ws_B2C_StopBet TableID
         * @property {string|null} [Action] ws_B2C_StopBet Action
         */

        /**
         * Constructs a new ws_B2C_StopBet.
         * @memberof Proto
         * @classdesc Represents a ws_B2C_StopBet.
         * @implements Iws_B2C_StopBet
         * @constructor
         * @param {Proto.Iws_B2C_StopBet=} [properties] Properties to set
         */
        function ws_B2C_StopBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_B2C_StopBet MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_B2C_StopBet
         * @instance
         */
        ws_B2C_StopBet.prototype.MsgID = 30015;

        /**
         * ws_B2C_StopBet TableID.
         * @member {number} TableID
         * @memberof Proto.ws_B2C_StopBet
         * @instance
         */
        ws_B2C_StopBet.prototype.TableID = 0;

        /**
         * ws_B2C_StopBet Action.
         * @member {string} Action
         * @memberof Proto.ws_B2C_StopBet
         * @instance
         */
        ws_B2C_StopBet.prototype.Action = "";

        /**
         * Creates a new ws_B2C_StopBet instance using the specified properties.
         * @function create
         * @memberof Proto.ws_B2C_StopBet
         * @static
         * @param {Proto.Iws_B2C_StopBet=} [properties] Properties to set
         * @returns {Proto.ws_B2C_StopBet} ws_B2C_StopBet instance
         */
        ws_B2C_StopBet.create = function create(properties) {
            return new ws_B2C_StopBet(properties);
        };

        /**
         * Encodes the specified ws_B2C_StopBet message. Does not implicitly {@link Proto.ws_B2C_StopBet.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_B2C_StopBet
         * @static
         * @param {Proto.Iws_B2C_StopBet} message ws_B2C_StopBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_StopBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.Action != null && message.hasOwnProperty("Action"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Action);
            return writer;
        };

        /**
         * Encodes the specified ws_B2C_StopBet message, length delimited. Does not implicitly {@link Proto.ws_B2C_StopBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_B2C_StopBet
         * @static
         * @param {Proto.Iws_B2C_StopBet} message ws_B2C_StopBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_StopBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_B2C_StopBet message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_B2C_StopBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_B2C_StopBet} ws_B2C_StopBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_StopBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_B2C_StopBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.Action = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_B2C_StopBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_B2C_StopBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_B2C_StopBet} ws_B2C_StopBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_StopBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_B2C_StopBet message.
         * @function verify
         * @memberof Proto.ws_B2C_StopBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_B2C_StopBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.Action != null && message.hasOwnProperty("Action"))
                if (!$util.isString(message.Action))
                    return "Action: string expected";
            return null;
        };

        /**
         * Creates a ws_B2C_StopBet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_B2C_StopBet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_B2C_StopBet} ws_B2C_StopBet
         */
        ws_B2C_StopBet.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_B2C_StopBet)
                return object;
            var message = new $root.Proto.ws_B2C_StopBet();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.Action != null)
                message.Action = String(object.Action);
            return message;
        };

        /**
         * Creates a plain object from a ws_B2C_StopBet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_B2C_StopBet
         * @static
         * @param {Proto.ws_B2C_StopBet} message ws_B2C_StopBet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_B2C_StopBet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 30015;
                object.TableID = 0;
                object.Action = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.Action != null && message.hasOwnProperty("Action"))
                object.Action = message.Action;
            return object;
        };

        /**
         * Converts this ws_B2C_StopBet to JSON.
         * @function toJSON
         * @memberof Proto.ws_B2C_StopBet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_B2C_StopBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_B2C_StopBet;
    })();

    Proto.ws_B2C_EndBet = (function() {

        /**
         * Properties of a ws_B2C_EndBet.
         * @memberof Proto
         * @interface Iws_B2C_EndBet
         * @property {number} MsgID ws_B2C_EndBet MsgID
         * @property {number|null} [TableID] ws_B2C_EndBet TableID
         * @property {string|null} [Action] ws_B2C_EndBet Action
         * @property {number|null} [tableStatus] ws_B2C_EndBet tableStatus
         */

        /**
         * Constructs a new ws_B2C_EndBet.
         * @memberof Proto
         * @classdesc Represents a ws_B2C_EndBet.
         * @implements Iws_B2C_EndBet
         * @constructor
         * @param {Proto.Iws_B2C_EndBet=} [properties] Properties to set
         */
        function ws_B2C_EndBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_B2C_EndBet MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_B2C_EndBet
         * @instance
         */
        ws_B2C_EndBet.prototype.MsgID = 30016;

        /**
         * ws_B2C_EndBet TableID.
         * @member {number} TableID
         * @memberof Proto.ws_B2C_EndBet
         * @instance
         */
        ws_B2C_EndBet.prototype.TableID = 0;

        /**
         * ws_B2C_EndBet Action.
         * @member {string} Action
         * @memberof Proto.ws_B2C_EndBet
         * @instance
         */
        ws_B2C_EndBet.prototype.Action = "";

        /**
         * ws_B2C_EndBet tableStatus.
         * @member {number} tableStatus
         * @memberof Proto.ws_B2C_EndBet
         * @instance
         */
        ws_B2C_EndBet.prototype.tableStatus = 0;

        /**
         * Creates a new ws_B2C_EndBet instance using the specified properties.
         * @function create
         * @memberof Proto.ws_B2C_EndBet
         * @static
         * @param {Proto.Iws_B2C_EndBet=} [properties] Properties to set
         * @returns {Proto.ws_B2C_EndBet} ws_B2C_EndBet instance
         */
        ws_B2C_EndBet.create = function create(properties) {
            return new ws_B2C_EndBet(properties);
        };

        /**
         * Encodes the specified ws_B2C_EndBet message. Does not implicitly {@link Proto.ws_B2C_EndBet.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_B2C_EndBet
         * @static
         * @param {Proto.Iws_B2C_EndBet} message ws_B2C_EndBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_EndBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.Action != null && message.hasOwnProperty("Action"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Action);
            if (message.tableStatus != null && message.hasOwnProperty("tableStatus"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.tableStatus);
            return writer;
        };

        /**
         * Encodes the specified ws_B2C_EndBet message, length delimited. Does not implicitly {@link Proto.ws_B2C_EndBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_B2C_EndBet
         * @static
         * @param {Proto.Iws_B2C_EndBet} message ws_B2C_EndBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_EndBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_B2C_EndBet message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_B2C_EndBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_B2C_EndBet} ws_B2C_EndBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_EndBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_B2C_EndBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.Action = reader.string();
                    break;
                case 4:
                    message.tableStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_B2C_EndBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_B2C_EndBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_B2C_EndBet} ws_B2C_EndBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_EndBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_B2C_EndBet message.
         * @function verify
         * @memberof Proto.ws_B2C_EndBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_B2C_EndBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.Action != null && message.hasOwnProperty("Action"))
                if (!$util.isString(message.Action))
                    return "Action: string expected";
            if (message.tableStatus != null && message.hasOwnProperty("tableStatus"))
                if (!$util.isInteger(message.tableStatus))
                    return "tableStatus: integer expected";
            return null;
        };

        /**
         * Creates a ws_B2C_EndBet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_B2C_EndBet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_B2C_EndBet} ws_B2C_EndBet
         */
        ws_B2C_EndBet.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_B2C_EndBet)
                return object;
            var message = new $root.Proto.ws_B2C_EndBet();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.Action != null)
                message.Action = String(object.Action);
            if (object.tableStatus != null)
                message.tableStatus = object.tableStatus | 0;
            return message;
        };

        /**
         * Creates a plain object from a ws_B2C_EndBet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_B2C_EndBet
         * @static
         * @param {Proto.ws_B2C_EndBet} message ws_B2C_EndBet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_B2C_EndBet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 30016;
                object.TableID = 0;
                object.Action = "";
                object.tableStatus = 0;
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.Action != null && message.hasOwnProperty("Action"))
                object.Action = message.Action;
            if (message.tableStatus != null && message.hasOwnProperty("tableStatus"))
                object.tableStatus = message.tableStatus;
            return object;
        };

        /**
         * Converts this ws_B2C_EndBet to JSON.
         * @function toJSON
         * @memberof Proto.ws_B2C_EndBet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_B2C_EndBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_B2C_EndBet;
    })();

    Proto.ws_B2C_Lottery = (function() {

        /**
         * Properties of a ws_B2C_Lottery.
         * @memberof Proto
         * @interface Iws_B2C_Lottery
         * @property {number} MsgID ws_B2C_Lottery MsgID
         * @property {number|null} [TableID] ws_B2C_Lottery TableID
         * @property {string|null} [Action] ws_B2C_Lottery Action
         * @property {number|null} [tableStatus] ws_B2C_Lottery tableStatus
         * @property {string|null} [EndcarbBoot] ws_B2C_Lottery EndcarbBoot
         */

        /**
         * Constructs a new ws_B2C_Lottery.
         * @memberof Proto
         * @classdesc Represents a ws_B2C_Lottery.
         * @implements Iws_B2C_Lottery
         * @constructor
         * @param {Proto.Iws_B2C_Lottery=} [properties] Properties to set
         */
        function ws_B2C_Lottery(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_B2C_Lottery MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_B2C_Lottery
         * @instance
         */
        ws_B2C_Lottery.prototype.MsgID = 30017;

        /**
         * ws_B2C_Lottery TableID.
         * @member {number} TableID
         * @memberof Proto.ws_B2C_Lottery
         * @instance
         */
        ws_B2C_Lottery.prototype.TableID = 0;

        /**
         * ws_B2C_Lottery Action.
         * @member {string} Action
         * @memberof Proto.ws_B2C_Lottery
         * @instance
         */
        ws_B2C_Lottery.prototype.Action = "";

        /**
         * ws_B2C_Lottery tableStatus.
         * @member {number} tableStatus
         * @memberof Proto.ws_B2C_Lottery
         * @instance
         */
        ws_B2C_Lottery.prototype.tableStatus = 0;

        /**
         * ws_B2C_Lottery EndcarbBoot.
         * @member {string} EndcarbBoot
         * @memberof Proto.ws_B2C_Lottery
         * @instance
         */
        ws_B2C_Lottery.prototype.EndcarbBoot = "";

        /**
         * Creates a new ws_B2C_Lottery instance using the specified properties.
         * @function create
         * @memberof Proto.ws_B2C_Lottery
         * @static
         * @param {Proto.Iws_B2C_Lottery=} [properties] Properties to set
         * @returns {Proto.ws_B2C_Lottery} ws_B2C_Lottery instance
         */
        ws_B2C_Lottery.create = function create(properties) {
            return new ws_B2C_Lottery(properties);
        };

        /**
         * Encodes the specified ws_B2C_Lottery message. Does not implicitly {@link Proto.ws_B2C_Lottery.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_B2C_Lottery
         * @static
         * @param {Proto.Iws_B2C_Lottery} message ws_B2C_Lottery message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_Lottery.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.Action != null && message.hasOwnProperty("Action"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Action);
            if (message.tableStatus != null && message.hasOwnProperty("tableStatus"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.tableStatus);
            if (message.EndcarbBoot != null && message.hasOwnProperty("EndcarbBoot"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.EndcarbBoot);
            return writer;
        };

        /**
         * Encodes the specified ws_B2C_Lottery message, length delimited. Does not implicitly {@link Proto.ws_B2C_Lottery.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_B2C_Lottery
         * @static
         * @param {Proto.Iws_B2C_Lottery} message ws_B2C_Lottery message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_Lottery.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_B2C_Lottery message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_B2C_Lottery
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_B2C_Lottery} ws_B2C_Lottery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_Lottery.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_B2C_Lottery();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.Action = reader.string();
                    break;
                case 4:
                    message.tableStatus = reader.int32();
                    break;
                case 5:
                    message.EndcarbBoot = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_B2C_Lottery message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_B2C_Lottery
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_B2C_Lottery} ws_B2C_Lottery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_Lottery.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_B2C_Lottery message.
         * @function verify
         * @memberof Proto.ws_B2C_Lottery
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_B2C_Lottery.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.Action != null && message.hasOwnProperty("Action"))
                if (!$util.isString(message.Action))
                    return "Action: string expected";
            if (message.tableStatus != null && message.hasOwnProperty("tableStatus"))
                if (!$util.isInteger(message.tableStatus))
                    return "tableStatus: integer expected";
            if (message.EndcarbBoot != null && message.hasOwnProperty("EndcarbBoot"))
                if (!$util.isString(message.EndcarbBoot))
                    return "EndcarbBoot: string expected";
            return null;
        };

        /**
         * Creates a ws_B2C_Lottery message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_B2C_Lottery
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_B2C_Lottery} ws_B2C_Lottery
         */
        ws_B2C_Lottery.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_B2C_Lottery)
                return object;
            var message = new $root.Proto.ws_B2C_Lottery();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.Action != null)
                message.Action = String(object.Action);
            if (object.tableStatus != null)
                message.tableStatus = object.tableStatus | 0;
            if (object.EndcarbBoot != null)
                message.EndcarbBoot = String(object.EndcarbBoot);
            return message;
        };

        /**
         * Creates a plain object from a ws_B2C_Lottery message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_B2C_Lottery
         * @static
         * @param {Proto.ws_B2C_Lottery} message ws_B2C_Lottery
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_B2C_Lottery.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 30017;
                object.TableID = 0;
                object.Action = "";
                object.tableStatus = 0;
                object.EndcarbBoot = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.Action != null && message.hasOwnProperty("Action"))
                object.Action = message.Action;
            if (message.tableStatus != null && message.hasOwnProperty("tableStatus"))
                object.tableStatus = message.tableStatus;
            if (message.EndcarbBoot != null && message.hasOwnProperty("EndcarbBoot"))
                object.EndcarbBoot = message.EndcarbBoot;
            return object;
        };

        /**
         * Converts this ws_B2C_Lottery to JSON.
         * @function toJSON
         * @memberof Proto.ws_B2C_Lottery
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_B2C_Lottery.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_B2C_Lottery;
    })();

    Proto.ws_B2C_BeginCarbBoot = (function() {

        /**
         * Properties of a ws_B2C_BeginCarbBoot.
         * @memberof Proto
         * @interface Iws_B2C_BeginCarbBoot
         * @property {number} MsgID ws_B2C_BeginCarbBoot MsgID
         * @property {number|null} [TableID] ws_B2C_BeginCarbBoot TableID
         * @property {Proto.ICardInfo|null} [FirstCard] ws_B2C_BeginCarbBoot FirstCard
         * @property {Array.<Proto.ICardInfo>|null} [ThreeResults] ws_B2C_BeginCarbBoot ThreeResults
         */

        /**
         * Constructs a new ws_B2C_BeginCarbBoot.
         * @memberof Proto
         * @classdesc Represents a ws_B2C_BeginCarbBoot.
         * @implements Iws_B2C_BeginCarbBoot
         * @constructor
         * @param {Proto.Iws_B2C_BeginCarbBoot=} [properties] Properties to set
         */
        function ws_B2C_BeginCarbBoot(properties) {
            this.ThreeResults = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_B2C_BeginCarbBoot MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_B2C_BeginCarbBoot
         * @instance
         */
        ws_B2C_BeginCarbBoot.prototype.MsgID = 30018;

        /**
         * ws_B2C_BeginCarbBoot TableID.
         * @member {number} TableID
         * @memberof Proto.ws_B2C_BeginCarbBoot
         * @instance
         */
        ws_B2C_BeginCarbBoot.prototype.TableID = 0;

        /**
         * ws_B2C_BeginCarbBoot FirstCard.
         * @member {Proto.ICardInfo|null|undefined} FirstCard
         * @memberof Proto.ws_B2C_BeginCarbBoot
         * @instance
         */
        ws_B2C_BeginCarbBoot.prototype.FirstCard = null;

        /**
         * ws_B2C_BeginCarbBoot ThreeResults.
         * @member {Array.<Proto.ICardInfo>} ThreeResults
         * @memberof Proto.ws_B2C_BeginCarbBoot
         * @instance
         */
        ws_B2C_BeginCarbBoot.prototype.ThreeResults = $util.emptyArray;

        /**
         * Creates a new ws_B2C_BeginCarbBoot instance using the specified properties.
         * @function create
         * @memberof Proto.ws_B2C_BeginCarbBoot
         * @static
         * @param {Proto.Iws_B2C_BeginCarbBoot=} [properties] Properties to set
         * @returns {Proto.ws_B2C_BeginCarbBoot} ws_B2C_BeginCarbBoot instance
         */
        ws_B2C_BeginCarbBoot.create = function create(properties) {
            return new ws_B2C_BeginCarbBoot(properties);
        };

        /**
         * Encodes the specified ws_B2C_BeginCarbBoot message. Does not implicitly {@link Proto.ws_B2C_BeginCarbBoot.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_B2C_BeginCarbBoot
         * @static
         * @param {Proto.Iws_B2C_BeginCarbBoot} message ws_B2C_BeginCarbBoot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_BeginCarbBoot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.FirstCard != null && message.hasOwnProperty("FirstCard"))
                $root.Proto.CardInfo.encode(message.FirstCard, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.ThreeResults != null && message.ThreeResults.length)
                for (var i = 0; i < message.ThreeResults.length; ++i)
                    $root.Proto.CardInfo.encode(message.ThreeResults[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ws_B2C_BeginCarbBoot message, length delimited. Does not implicitly {@link Proto.ws_B2C_BeginCarbBoot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_B2C_BeginCarbBoot
         * @static
         * @param {Proto.Iws_B2C_BeginCarbBoot} message ws_B2C_BeginCarbBoot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_BeginCarbBoot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_B2C_BeginCarbBoot message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_B2C_BeginCarbBoot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_B2C_BeginCarbBoot} ws_B2C_BeginCarbBoot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_BeginCarbBoot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_B2C_BeginCarbBoot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.FirstCard = $root.Proto.CardInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.ThreeResults && message.ThreeResults.length))
                        message.ThreeResults = [];
                    message.ThreeResults.push($root.Proto.CardInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_B2C_BeginCarbBoot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_B2C_BeginCarbBoot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_B2C_BeginCarbBoot} ws_B2C_BeginCarbBoot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_BeginCarbBoot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_B2C_BeginCarbBoot message.
         * @function verify
         * @memberof Proto.ws_B2C_BeginCarbBoot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_B2C_BeginCarbBoot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.FirstCard != null && message.hasOwnProperty("FirstCard")) {
                var error = $root.Proto.CardInfo.verify(message.FirstCard);
                if (error)
                    return "FirstCard." + error;
            }
            if (message.ThreeResults != null && message.hasOwnProperty("ThreeResults")) {
                if (!Array.isArray(message.ThreeResults))
                    return "ThreeResults: array expected";
                for (var i = 0; i < message.ThreeResults.length; ++i) {
                    var error = $root.Proto.CardInfo.verify(message.ThreeResults[i]);
                    if (error)
                        return "ThreeResults." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ws_B2C_BeginCarbBoot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_B2C_BeginCarbBoot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_B2C_BeginCarbBoot} ws_B2C_BeginCarbBoot
         */
        ws_B2C_BeginCarbBoot.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_B2C_BeginCarbBoot)
                return object;
            var message = new $root.Proto.ws_B2C_BeginCarbBoot();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.FirstCard != null) {
                if (typeof object.FirstCard !== "object")
                    throw TypeError(".Proto.ws_B2C_BeginCarbBoot.FirstCard: object expected");
                message.FirstCard = $root.Proto.CardInfo.fromObject(object.FirstCard);
            }
            if (object.ThreeResults) {
                if (!Array.isArray(object.ThreeResults))
                    throw TypeError(".Proto.ws_B2C_BeginCarbBoot.ThreeResults: array expected");
                message.ThreeResults = [];
                for (var i = 0; i < object.ThreeResults.length; ++i) {
                    if (typeof object.ThreeResults[i] !== "object")
                        throw TypeError(".Proto.ws_B2C_BeginCarbBoot.ThreeResults: object expected");
                    message.ThreeResults[i] = $root.Proto.CardInfo.fromObject(object.ThreeResults[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ws_B2C_BeginCarbBoot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_B2C_BeginCarbBoot
         * @static
         * @param {Proto.ws_B2C_BeginCarbBoot} message ws_B2C_BeginCarbBoot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_B2C_BeginCarbBoot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ThreeResults = [];
            if (options.defaults) {
                object.MsgID = 30018;
                object.TableID = 0;
                object.FirstCard = null;
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.FirstCard != null && message.hasOwnProperty("FirstCard"))
                object.FirstCard = $root.Proto.CardInfo.toObject(message.FirstCard, options);
            if (message.ThreeResults && message.ThreeResults.length) {
                object.ThreeResults = [];
                for (var j = 0; j < message.ThreeResults.length; ++j)
                    object.ThreeResults[j] = $root.Proto.CardInfo.toObject(message.ThreeResults[j], options);
            }
            return object;
        };

        /**
         * Converts this ws_B2C_BeginCarbBoot to JSON.
         * @function toJSON
         * @memberof Proto.ws_B2C_BeginCarbBoot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_B2C_BeginCarbBoot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_B2C_BeginCarbBoot;
    })();

    Proto.ws_B2C_BeginRound = (function() {

        /**
         * Properties of a ws_B2C_BeginRound.
         * @memberof Proto
         * @interface Iws_B2C_BeginRound
         * @property {number} MsgID ws_B2C_BeginRound MsgID
         * @property {number|null} [TableID] ws_B2C_BeginRound TableID
         * @property {number|null} [tableStatus] ws_B2C_BeginRound tableStatus
         */

        /**
         * Constructs a new ws_B2C_BeginRound.
         * @memberof Proto
         * @classdesc Represents a ws_B2C_BeginRound.
         * @implements Iws_B2C_BeginRound
         * @constructor
         * @param {Proto.Iws_B2C_BeginRound=} [properties] Properties to set
         */
        function ws_B2C_BeginRound(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_B2C_BeginRound MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_B2C_BeginRound
         * @instance
         */
        ws_B2C_BeginRound.prototype.MsgID = 30019;

        /**
         * ws_B2C_BeginRound TableID.
         * @member {number} TableID
         * @memberof Proto.ws_B2C_BeginRound
         * @instance
         */
        ws_B2C_BeginRound.prototype.TableID = 0;

        /**
         * ws_B2C_BeginRound tableStatus.
         * @member {number} tableStatus
         * @memberof Proto.ws_B2C_BeginRound
         * @instance
         */
        ws_B2C_BeginRound.prototype.tableStatus = 0;

        /**
         * Creates a new ws_B2C_BeginRound instance using the specified properties.
         * @function create
         * @memberof Proto.ws_B2C_BeginRound
         * @static
         * @param {Proto.Iws_B2C_BeginRound=} [properties] Properties to set
         * @returns {Proto.ws_B2C_BeginRound} ws_B2C_BeginRound instance
         */
        ws_B2C_BeginRound.create = function create(properties) {
            return new ws_B2C_BeginRound(properties);
        };

        /**
         * Encodes the specified ws_B2C_BeginRound message. Does not implicitly {@link Proto.ws_B2C_BeginRound.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_B2C_BeginRound
         * @static
         * @param {Proto.Iws_B2C_BeginRound} message ws_B2C_BeginRound message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_BeginRound.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.tableStatus != null && message.hasOwnProperty("tableStatus"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.tableStatus);
            return writer;
        };

        /**
         * Encodes the specified ws_B2C_BeginRound message, length delimited. Does not implicitly {@link Proto.ws_B2C_BeginRound.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_B2C_BeginRound
         * @static
         * @param {Proto.Iws_B2C_BeginRound} message ws_B2C_BeginRound message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_BeginRound.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_B2C_BeginRound message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_B2C_BeginRound
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_B2C_BeginRound} ws_B2C_BeginRound
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_BeginRound.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_B2C_BeginRound();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.tableStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_B2C_BeginRound message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_B2C_BeginRound
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_B2C_BeginRound} ws_B2C_BeginRound
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_BeginRound.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_B2C_BeginRound message.
         * @function verify
         * @memberof Proto.ws_B2C_BeginRound
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_B2C_BeginRound.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.tableStatus != null && message.hasOwnProperty("tableStatus"))
                if (!$util.isInteger(message.tableStatus))
                    return "tableStatus: integer expected";
            return null;
        };

        /**
         * Creates a ws_B2C_BeginRound message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_B2C_BeginRound
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_B2C_BeginRound} ws_B2C_BeginRound
         */
        ws_B2C_BeginRound.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_B2C_BeginRound)
                return object;
            var message = new $root.Proto.ws_B2C_BeginRound();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.tableStatus != null)
                message.tableStatus = object.tableStatus | 0;
            return message;
        };

        /**
         * Creates a plain object from a ws_B2C_BeginRound message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_B2C_BeginRound
         * @static
         * @param {Proto.ws_B2C_BeginRound} message ws_B2C_BeginRound
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_B2C_BeginRound.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 30019;
                object.TableID = 0;
                object.tableStatus = 0;
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.tableStatus != null && message.hasOwnProperty("tableStatus"))
                object.tableStatus = message.tableStatus;
            return object;
        };

        /**
         * Converts this ws_B2C_BeginRound to JSON.
         * @function toJSON
         * @memberof Proto.ws_B2C_BeginRound
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_B2C_BeginRound.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_B2C_BeginRound;
    })();

    Proto.ws_B2C_BeginBet = (function() {

        /**
         * Properties of a ws_B2C_BeginBet.
         * @memberof Proto
         * @interface Iws_B2C_BeginBet
         * @property {number} MsgID ws_B2C_BeginBet MsgID
         * @property {number|null} [TableID] ws_B2C_BeginBet TableID
         * @property {number|null} [tableStatus] ws_B2C_BeginBet tableStatus
         */

        /**
         * Constructs a new ws_B2C_BeginBet.
         * @memberof Proto
         * @classdesc Represents a ws_B2C_BeginBet.
         * @implements Iws_B2C_BeginBet
         * @constructor
         * @param {Proto.Iws_B2C_BeginBet=} [properties] Properties to set
         */
        function ws_B2C_BeginBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_B2C_BeginBet MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_B2C_BeginBet
         * @instance
         */
        ws_B2C_BeginBet.prototype.MsgID = 30020;

        /**
         * ws_B2C_BeginBet TableID.
         * @member {number} TableID
         * @memberof Proto.ws_B2C_BeginBet
         * @instance
         */
        ws_B2C_BeginBet.prototype.TableID = 0;

        /**
         * ws_B2C_BeginBet tableStatus.
         * @member {number} tableStatus
         * @memberof Proto.ws_B2C_BeginBet
         * @instance
         */
        ws_B2C_BeginBet.prototype.tableStatus = 0;

        /**
         * Creates a new ws_B2C_BeginBet instance using the specified properties.
         * @function create
         * @memberof Proto.ws_B2C_BeginBet
         * @static
         * @param {Proto.Iws_B2C_BeginBet=} [properties] Properties to set
         * @returns {Proto.ws_B2C_BeginBet} ws_B2C_BeginBet instance
         */
        ws_B2C_BeginBet.create = function create(properties) {
            return new ws_B2C_BeginBet(properties);
        };

        /**
         * Encodes the specified ws_B2C_BeginBet message. Does not implicitly {@link Proto.ws_B2C_BeginBet.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_B2C_BeginBet
         * @static
         * @param {Proto.Iws_B2C_BeginBet} message ws_B2C_BeginBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_BeginBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TableID);
            if (message.tableStatus != null && message.hasOwnProperty("tableStatus"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.tableStatus);
            return writer;
        };

        /**
         * Encodes the specified ws_B2C_BeginBet message, length delimited. Does not implicitly {@link Proto.ws_B2C_BeginBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_B2C_BeginBet
         * @static
         * @param {Proto.Iws_B2C_BeginBet} message ws_B2C_BeginBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_B2C_BeginBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_B2C_BeginBet message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_B2C_BeginBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_B2C_BeginBet} ws_B2C_BeginBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_BeginBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_B2C_BeginBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.TableID = reader.int32();
                    break;
                case 3:
                    message.tableStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_B2C_BeginBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_B2C_BeginBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_B2C_BeginBet} ws_B2C_BeginBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_B2C_BeginBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_B2C_BeginBet message.
         * @function verify
         * @memberof Proto.ws_B2C_BeginBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_B2C_BeginBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.tableStatus != null && message.hasOwnProperty("tableStatus"))
                if (!$util.isInteger(message.tableStatus))
                    return "tableStatus: integer expected";
            return null;
        };

        /**
         * Creates a ws_B2C_BeginBet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_B2C_BeginBet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_B2C_BeginBet} ws_B2C_BeginBet
         */
        ws_B2C_BeginBet.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_B2C_BeginBet)
                return object;
            var message = new $root.Proto.ws_B2C_BeginBet();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.tableStatus != null)
                message.tableStatus = object.tableStatus | 0;
            return message;
        };

        /**
         * Creates a plain object from a ws_B2C_BeginBet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_B2C_BeginBet
         * @static
         * @param {Proto.ws_B2C_BeginBet} message ws_B2C_BeginBet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_B2C_BeginBet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 30020;
                object.TableID = 0;
                object.tableStatus = 0;
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.tableStatus != null && message.hasOwnProperty("tableStatus"))
                object.tableStatus = message.tableStatus;
            return object;
        };

        /**
         * Converts this ws_B2C_BeginBet to JSON.
         * @function toJSON
         * @memberof Proto.ws_B2C_BeginBet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_B2C_BeginBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_B2C_BeginBet;
    })();

    Proto.ws_C2S_PlayerProfit = (function() {

        /**
         * Properties of a ws_C2S_PlayerProfit.
         * @memberof Proto
         * @interface Iws_C2S_PlayerProfit
         * @property {number} MsgID ws_C2S_PlayerProfit MsgID
         * @property {string|null} [eosaccount] ws_C2S_PlayerProfit eosaccount
         */

        /**
         * Constructs a new ws_C2S_PlayerProfit.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_PlayerProfit.
         * @implements Iws_C2S_PlayerProfit
         * @constructor
         * @param {Proto.Iws_C2S_PlayerProfit=} [properties] Properties to set
         */
        function ws_C2S_PlayerProfit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_PlayerProfit MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_PlayerProfit
         * @instance
         */
        ws_C2S_PlayerProfit.prototype.MsgID = 10021;

        /**
         * ws_C2S_PlayerProfit eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_C2S_PlayerProfit
         * @instance
         */
        ws_C2S_PlayerProfit.prototype.eosaccount = "";

        /**
         * Creates a new ws_C2S_PlayerProfit instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_PlayerProfit
         * @static
         * @param {Proto.Iws_C2S_PlayerProfit=} [properties] Properties to set
         * @returns {Proto.ws_C2S_PlayerProfit} ws_C2S_PlayerProfit instance
         */
        ws_C2S_PlayerProfit.create = function create(properties) {
            return new ws_C2S_PlayerProfit(properties);
        };

        /**
         * Encodes the specified ws_C2S_PlayerProfit message. Does not implicitly {@link Proto.ws_C2S_PlayerProfit.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_PlayerProfit
         * @static
         * @param {Proto.Iws_C2S_PlayerProfit} message ws_C2S_PlayerProfit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_PlayerProfit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_PlayerProfit message, length delimited. Does not implicitly {@link Proto.ws_C2S_PlayerProfit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_PlayerProfit
         * @static
         * @param {Proto.Iws_C2S_PlayerProfit} message ws_C2S_PlayerProfit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_PlayerProfit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_PlayerProfit message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_PlayerProfit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_PlayerProfit} ws_C2S_PlayerProfit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_PlayerProfit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_PlayerProfit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_PlayerProfit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_PlayerProfit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_PlayerProfit} ws_C2S_PlayerProfit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_PlayerProfit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_PlayerProfit message.
         * @function verify
         * @memberof Proto.ws_C2S_PlayerProfit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_PlayerProfit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_PlayerProfit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_PlayerProfit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_PlayerProfit} ws_C2S_PlayerProfit
         */
        ws_C2S_PlayerProfit.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_PlayerProfit)
                return object;
            var message = new $root.Proto.ws_C2S_PlayerProfit();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_PlayerProfit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_PlayerProfit
         * @static
         * @param {Proto.ws_C2S_PlayerProfit} message ws_C2S_PlayerProfit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_PlayerProfit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10021;
                object.eosaccount = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            return object;
        };

        /**
         * Converts this ws_C2S_PlayerProfit to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_PlayerProfit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_PlayerProfit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_PlayerProfit;
    })();

    Proto.ws_S2C_PlayerProfit = (function() {

        /**
         * Properties of a ws_S2C_PlayerProfit.
         * @memberof Proto
         * @interface Iws_S2C_PlayerProfit
         * @property {number} MsgID ws_S2C_PlayerProfit MsgID
         * @property {string|null} [eosaccount] ws_S2C_PlayerProfit eosaccount
         */

        /**
         * Constructs a new ws_S2C_PlayerProfit.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_PlayerProfit.
         * @implements Iws_S2C_PlayerProfit
         * @constructor
         * @param {Proto.Iws_S2C_PlayerProfit=} [properties] Properties to set
         */
        function ws_S2C_PlayerProfit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_PlayerProfit MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_PlayerProfit
         * @instance
         */
        ws_S2C_PlayerProfit.prototype.MsgID = 20021;

        /**
         * ws_S2C_PlayerProfit eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_S2C_PlayerProfit
         * @instance
         */
        ws_S2C_PlayerProfit.prototype.eosaccount = "";

        /**
         * Creates a new ws_S2C_PlayerProfit instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_PlayerProfit
         * @static
         * @param {Proto.Iws_S2C_PlayerProfit=} [properties] Properties to set
         * @returns {Proto.ws_S2C_PlayerProfit} ws_S2C_PlayerProfit instance
         */
        ws_S2C_PlayerProfit.create = function create(properties) {
            return new ws_S2C_PlayerProfit(properties);
        };

        /**
         * Encodes the specified ws_S2C_PlayerProfit message. Does not implicitly {@link Proto.ws_S2C_PlayerProfit.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_PlayerProfit
         * @static
         * @param {Proto.Iws_S2C_PlayerProfit} message ws_S2C_PlayerProfit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_PlayerProfit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_PlayerProfit message, length delimited. Does not implicitly {@link Proto.ws_S2C_PlayerProfit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_PlayerProfit
         * @static
         * @param {Proto.Iws_S2C_PlayerProfit} message ws_S2C_PlayerProfit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_PlayerProfit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_PlayerProfit message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_PlayerProfit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_PlayerProfit} ws_S2C_PlayerProfit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_PlayerProfit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_PlayerProfit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_PlayerProfit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_PlayerProfit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_PlayerProfit} ws_S2C_PlayerProfit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_PlayerProfit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_PlayerProfit message.
         * @function verify
         * @memberof Proto.ws_S2C_PlayerProfit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_PlayerProfit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            return null;
        };

        /**
         * Creates a ws_S2C_PlayerProfit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_PlayerProfit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_PlayerProfit} ws_S2C_PlayerProfit
         */
        ws_S2C_PlayerProfit.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_PlayerProfit)
                return object;
            var message = new $root.Proto.ws_S2C_PlayerProfit();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_PlayerProfit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_PlayerProfit
         * @static
         * @param {Proto.ws_S2C_PlayerProfit} message ws_S2C_PlayerProfit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_PlayerProfit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20021;
                object.eosaccount = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            return object;
        };

        /**
         * Converts this ws_S2C_PlayerProfit to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_PlayerProfit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_PlayerProfit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_PlayerProfit;
    })();

    Proto.ws_C2S_DealerProfit = (function() {

        /**
         * Properties of a ws_C2S_DealerProfit.
         * @memberof Proto
         * @interface Iws_C2S_DealerProfit
         * @property {number} MsgID ws_C2S_DealerProfit MsgID
         * @property {string|null} [eosaccount] ws_C2S_DealerProfit eosaccount
         */

        /**
         * Constructs a new ws_C2S_DealerProfit.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_DealerProfit.
         * @implements Iws_C2S_DealerProfit
         * @constructor
         * @param {Proto.Iws_C2S_DealerProfit=} [properties] Properties to set
         */
        function ws_C2S_DealerProfit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_DealerProfit MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_DealerProfit
         * @instance
         */
        ws_C2S_DealerProfit.prototype.MsgID = 10022;

        /**
         * ws_C2S_DealerProfit eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_C2S_DealerProfit
         * @instance
         */
        ws_C2S_DealerProfit.prototype.eosaccount = "";

        /**
         * Creates a new ws_C2S_DealerProfit instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_DealerProfit
         * @static
         * @param {Proto.Iws_C2S_DealerProfit=} [properties] Properties to set
         * @returns {Proto.ws_C2S_DealerProfit} ws_C2S_DealerProfit instance
         */
        ws_C2S_DealerProfit.create = function create(properties) {
            return new ws_C2S_DealerProfit(properties);
        };

        /**
         * Encodes the specified ws_C2S_DealerProfit message. Does not implicitly {@link Proto.ws_C2S_DealerProfit.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_DealerProfit
         * @static
         * @param {Proto.Iws_C2S_DealerProfit} message ws_C2S_DealerProfit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_DealerProfit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_DealerProfit message, length delimited. Does not implicitly {@link Proto.ws_C2S_DealerProfit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_DealerProfit
         * @static
         * @param {Proto.Iws_C2S_DealerProfit} message ws_C2S_DealerProfit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_DealerProfit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_DealerProfit message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_DealerProfit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_DealerProfit} ws_C2S_DealerProfit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_DealerProfit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_DealerProfit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_DealerProfit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_DealerProfit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_DealerProfit} ws_C2S_DealerProfit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_DealerProfit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_DealerProfit message.
         * @function verify
         * @memberof Proto.ws_C2S_DealerProfit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_DealerProfit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_DealerProfit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_DealerProfit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_DealerProfit} ws_C2S_DealerProfit
         */
        ws_C2S_DealerProfit.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_DealerProfit)
                return object;
            var message = new $root.Proto.ws_C2S_DealerProfit();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_DealerProfit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_DealerProfit
         * @static
         * @param {Proto.ws_C2S_DealerProfit} message ws_C2S_DealerProfit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_DealerProfit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10022;
                object.eosaccount = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            return object;
        };

        /**
         * Converts this ws_C2S_DealerProfit to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_DealerProfit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_DealerProfit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_DealerProfit;
    })();

    Proto.ws_S2C_DealerProfit = (function() {

        /**
         * Properties of a ws_S2C_DealerProfit.
         * @memberof Proto
         * @interface Iws_S2C_DealerProfit
         * @property {number} MsgID ws_S2C_DealerProfit MsgID
         * @property {string|null} [eosaccount] ws_S2C_DealerProfit eosaccount
         */

        /**
         * Constructs a new ws_S2C_DealerProfit.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_DealerProfit.
         * @implements Iws_S2C_DealerProfit
         * @constructor
         * @param {Proto.Iws_S2C_DealerProfit=} [properties] Properties to set
         */
        function ws_S2C_DealerProfit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_DealerProfit MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_DealerProfit
         * @instance
         */
        ws_S2C_DealerProfit.prototype.MsgID = 20022;

        /**
         * ws_S2C_DealerProfit eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_S2C_DealerProfit
         * @instance
         */
        ws_S2C_DealerProfit.prototype.eosaccount = "";

        /**
         * Creates a new ws_S2C_DealerProfit instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_DealerProfit
         * @static
         * @param {Proto.Iws_S2C_DealerProfit=} [properties] Properties to set
         * @returns {Proto.ws_S2C_DealerProfit} ws_S2C_DealerProfit instance
         */
        ws_S2C_DealerProfit.create = function create(properties) {
            return new ws_S2C_DealerProfit(properties);
        };

        /**
         * Encodes the specified ws_S2C_DealerProfit message. Does not implicitly {@link Proto.ws_S2C_DealerProfit.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_DealerProfit
         * @static
         * @param {Proto.Iws_S2C_DealerProfit} message ws_S2C_DealerProfit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_DealerProfit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_DealerProfit message, length delimited. Does not implicitly {@link Proto.ws_S2C_DealerProfit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_DealerProfit
         * @static
         * @param {Proto.Iws_S2C_DealerProfit} message ws_S2C_DealerProfit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_DealerProfit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_DealerProfit message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_DealerProfit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_DealerProfit} ws_S2C_DealerProfit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_DealerProfit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_DealerProfit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_DealerProfit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_DealerProfit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_DealerProfit} ws_S2C_DealerProfit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_DealerProfit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_DealerProfit message.
         * @function verify
         * @memberof Proto.ws_S2C_DealerProfit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_DealerProfit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            return null;
        };

        /**
         * Creates a ws_S2C_DealerProfit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_DealerProfit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_DealerProfit} ws_S2C_DealerProfit
         */
        ws_S2C_DealerProfit.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_DealerProfit)
                return object;
            var message = new $root.Proto.ws_S2C_DealerProfit();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_DealerProfit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_DealerProfit
         * @static
         * @param {Proto.ws_S2C_DealerProfit} message ws_S2C_DealerProfit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_DealerProfit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20022;
                object.eosaccount = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            return object;
        };

        /**
         * Converts this ws_S2C_DealerProfit to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_DealerProfit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_DealerProfit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_DealerProfit;
    })();

    Proto.ws_C2S_AgentProfit = (function() {

        /**
         * Properties of a ws_C2S_AgentProfit.
         * @memberof Proto
         * @interface Iws_C2S_AgentProfit
         * @property {number} MsgID ws_C2S_AgentProfit MsgID
         * @property {string|null} [eosaccount] ws_C2S_AgentProfit eosaccount
         */

        /**
         * Constructs a new ws_C2S_AgentProfit.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_AgentProfit.
         * @implements Iws_C2S_AgentProfit
         * @constructor
         * @param {Proto.Iws_C2S_AgentProfit=} [properties] Properties to set
         */
        function ws_C2S_AgentProfit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_AgentProfit MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_AgentProfit
         * @instance
         */
        ws_C2S_AgentProfit.prototype.MsgID = 10023;

        /**
         * ws_C2S_AgentProfit eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_C2S_AgentProfit
         * @instance
         */
        ws_C2S_AgentProfit.prototype.eosaccount = "";

        /**
         * Creates a new ws_C2S_AgentProfit instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_AgentProfit
         * @static
         * @param {Proto.Iws_C2S_AgentProfit=} [properties] Properties to set
         * @returns {Proto.ws_C2S_AgentProfit} ws_C2S_AgentProfit instance
         */
        ws_C2S_AgentProfit.create = function create(properties) {
            return new ws_C2S_AgentProfit(properties);
        };

        /**
         * Encodes the specified ws_C2S_AgentProfit message. Does not implicitly {@link Proto.ws_C2S_AgentProfit.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_AgentProfit
         * @static
         * @param {Proto.Iws_C2S_AgentProfit} message ws_C2S_AgentProfit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_AgentProfit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_AgentProfit message, length delimited. Does not implicitly {@link Proto.ws_C2S_AgentProfit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_AgentProfit
         * @static
         * @param {Proto.Iws_C2S_AgentProfit} message ws_C2S_AgentProfit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_AgentProfit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_AgentProfit message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_AgentProfit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_AgentProfit} ws_C2S_AgentProfit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_AgentProfit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_AgentProfit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_AgentProfit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_AgentProfit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_AgentProfit} ws_C2S_AgentProfit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_AgentProfit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_AgentProfit message.
         * @function verify
         * @memberof Proto.ws_C2S_AgentProfit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_AgentProfit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_AgentProfit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_AgentProfit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_AgentProfit} ws_C2S_AgentProfit
         */
        ws_C2S_AgentProfit.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_AgentProfit)
                return object;
            var message = new $root.Proto.ws_C2S_AgentProfit();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_AgentProfit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_AgentProfit
         * @static
         * @param {Proto.ws_C2S_AgentProfit} message ws_C2S_AgentProfit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_AgentProfit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10023;
                object.eosaccount = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            return object;
        };

        /**
         * Converts this ws_C2S_AgentProfit to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_AgentProfit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_AgentProfit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_AgentProfit;
    })();

    Proto.ws_S2C_AgentProfit = (function() {

        /**
         * Properties of a ws_S2C_AgentProfit.
         * @memberof Proto
         * @interface Iws_S2C_AgentProfit
         * @property {number} MsgID ws_S2C_AgentProfit MsgID
         * @property {string|null} [eosaccount] ws_S2C_AgentProfit eosaccount
         */

        /**
         * Constructs a new ws_S2C_AgentProfit.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_AgentProfit.
         * @implements Iws_S2C_AgentProfit
         * @constructor
         * @param {Proto.Iws_S2C_AgentProfit=} [properties] Properties to set
         */
        function ws_S2C_AgentProfit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_AgentProfit MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_AgentProfit
         * @instance
         */
        ws_S2C_AgentProfit.prototype.MsgID = 20023;

        /**
         * ws_S2C_AgentProfit eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_S2C_AgentProfit
         * @instance
         */
        ws_S2C_AgentProfit.prototype.eosaccount = "";

        /**
         * Creates a new ws_S2C_AgentProfit instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_AgentProfit
         * @static
         * @param {Proto.Iws_S2C_AgentProfit=} [properties] Properties to set
         * @returns {Proto.ws_S2C_AgentProfit} ws_S2C_AgentProfit instance
         */
        ws_S2C_AgentProfit.create = function create(properties) {
            return new ws_S2C_AgentProfit(properties);
        };

        /**
         * Encodes the specified ws_S2C_AgentProfit message. Does not implicitly {@link Proto.ws_S2C_AgentProfit.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_AgentProfit
         * @static
         * @param {Proto.Iws_S2C_AgentProfit} message ws_S2C_AgentProfit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_AgentProfit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_AgentProfit message, length delimited. Does not implicitly {@link Proto.ws_S2C_AgentProfit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_AgentProfit
         * @static
         * @param {Proto.Iws_S2C_AgentProfit} message ws_S2C_AgentProfit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_AgentProfit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_AgentProfit message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_AgentProfit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_AgentProfit} ws_S2C_AgentProfit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_AgentProfit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_AgentProfit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_AgentProfit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_AgentProfit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_AgentProfit} ws_S2C_AgentProfit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_AgentProfit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_AgentProfit message.
         * @function verify
         * @memberof Proto.ws_S2C_AgentProfit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_AgentProfit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            return null;
        };

        /**
         * Creates a ws_S2C_AgentProfit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_AgentProfit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_AgentProfit} ws_S2C_AgentProfit
         */
        ws_S2C_AgentProfit.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_AgentProfit)
                return object;
            var message = new $root.Proto.ws_S2C_AgentProfit();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_AgentProfit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_AgentProfit
         * @static
         * @param {Proto.ws_S2C_AgentProfit} message ws_S2C_AgentProfit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_AgentProfit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 20023;
                object.eosaccount = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            return object;
        };

        /**
         * Converts this ws_S2C_AgentProfit to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_AgentProfit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_AgentProfit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_AgentProfit;
    })();

    Proto.ws_C2S_GetUserPlayRoom = (function() {

        /**
         * Properties of a ws_C2S_GetUserPlayRoom.
         * @memberof Proto
         * @interface Iws_C2S_GetUserPlayRoom
         * @property {number} MsgID ws_C2S_GetUserPlayRoom MsgID
         * @property {string|null} [eosaccount] ws_C2S_GetUserPlayRoom eosaccount
         */

        /**
         * Constructs a new ws_C2S_GetUserPlayRoom.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_GetUserPlayRoom.
         * @implements Iws_C2S_GetUserPlayRoom
         * @constructor
         * @param {Proto.Iws_C2S_GetUserPlayRoom=} [properties] Properties to set
         */
        function ws_C2S_GetUserPlayRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_GetUserPlayRoom MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_GetUserPlayRoom
         * @instance
         */
        ws_C2S_GetUserPlayRoom.prototype.MsgID = 10024;

        /**
         * ws_C2S_GetUserPlayRoom eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_C2S_GetUserPlayRoom
         * @instance
         */
        ws_C2S_GetUserPlayRoom.prototype.eosaccount = "";

        /**
         * Creates a new ws_C2S_GetUserPlayRoom instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_GetUserPlayRoom
         * @static
         * @param {Proto.Iws_C2S_GetUserPlayRoom=} [properties] Properties to set
         * @returns {Proto.ws_C2S_GetUserPlayRoom} ws_C2S_GetUserPlayRoom instance
         */
        ws_C2S_GetUserPlayRoom.create = function create(properties) {
            return new ws_C2S_GetUserPlayRoom(properties);
        };

        /**
         * Encodes the specified ws_C2S_GetUserPlayRoom message. Does not implicitly {@link Proto.ws_C2S_GetUserPlayRoom.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_GetUserPlayRoom
         * @static
         * @param {Proto.Iws_C2S_GetUserPlayRoom} message ws_C2S_GetUserPlayRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_GetUserPlayRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_GetUserPlayRoom message, length delimited. Does not implicitly {@link Proto.ws_C2S_GetUserPlayRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_GetUserPlayRoom
         * @static
         * @param {Proto.Iws_C2S_GetUserPlayRoom} message ws_C2S_GetUserPlayRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_GetUserPlayRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_GetUserPlayRoom message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_GetUserPlayRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_GetUserPlayRoom} ws_C2S_GetUserPlayRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_GetUserPlayRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_GetUserPlayRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_GetUserPlayRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_GetUserPlayRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_GetUserPlayRoom} ws_C2S_GetUserPlayRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_GetUserPlayRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_GetUserPlayRoom message.
         * @function verify
         * @memberof Proto.ws_C2S_GetUserPlayRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_GetUserPlayRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_GetUserPlayRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_GetUserPlayRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_GetUserPlayRoom} ws_C2S_GetUserPlayRoom
         */
        ws_C2S_GetUserPlayRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_GetUserPlayRoom)
                return object;
            var message = new $root.Proto.ws_C2S_GetUserPlayRoom();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_GetUserPlayRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_GetUserPlayRoom
         * @static
         * @param {Proto.ws_C2S_GetUserPlayRoom} message ws_C2S_GetUserPlayRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_GetUserPlayRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10024;
                object.eosaccount = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            return object;
        };

        /**
         * Converts this ws_C2S_GetUserPlayRoom to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_GetUserPlayRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_GetUserPlayRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_GetUserPlayRoom;
    })();

    Proto.ws_S2C_GetUserPlayRoom = (function() {

        /**
         * Properties of a ws_S2C_GetUserPlayRoom.
         * @memberof Proto
         * @interface Iws_S2C_GetUserPlayRoom
         * @property {number} MsgID ws_S2C_GetUserPlayRoom MsgID
         * @property {string|null} [eosaccount] ws_S2C_GetUserPlayRoom eosaccount
         * @property {Array.<Proto.IRoomInfo>|null} [Rooms] ws_S2C_GetUserPlayRoom Rooms
         */

        /**
         * Constructs a new ws_S2C_GetUserPlayRoom.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_GetUserPlayRoom.
         * @implements Iws_S2C_GetUserPlayRoom
         * @constructor
         * @param {Proto.Iws_S2C_GetUserPlayRoom=} [properties] Properties to set
         */
        function ws_S2C_GetUserPlayRoom(properties) {
            this.Rooms = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_GetUserPlayRoom MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_GetUserPlayRoom
         * @instance
         */
        ws_S2C_GetUserPlayRoom.prototype.MsgID = 20024;

        /**
         * ws_S2C_GetUserPlayRoom eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_S2C_GetUserPlayRoom
         * @instance
         */
        ws_S2C_GetUserPlayRoom.prototype.eosaccount = "";

        /**
         * ws_S2C_GetUserPlayRoom Rooms.
         * @member {Array.<Proto.IRoomInfo>} Rooms
         * @memberof Proto.ws_S2C_GetUserPlayRoom
         * @instance
         */
        ws_S2C_GetUserPlayRoom.prototype.Rooms = $util.emptyArray;

        /**
         * Creates a new ws_S2C_GetUserPlayRoom instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_GetUserPlayRoom
         * @static
         * @param {Proto.Iws_S2C_GetUserPlayRoom=} [properties] Properties to set
         * @returns {Proto.ws_S2C_GetUserPlayRoom} ws_S2C_GetUserPlayRoom instance
         */
        ws_S2C_GetUserPlayRoom.create = function create(properties) {
            return new ws_S2C_GetUserPlayRoom(properties);
        };

        /**
         * Encodes the specified ws_S2C_GetUserPlayRoom message. Does not implicitly {@link Proto.ws_S2C_GetUserPlayRoom.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_GetUserPlayRoom
         * @static
         * @param {Proto.Iws_S2C_GetUserPlayRoom} message ws_S2C_GetUserPlayRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_GetUserPlayRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            if (message.Rooms != null && message.Rooms.length)
                for (var i = 0; i < message.Rooms.length; ++i)
                    $root.Proto.RoomInfo.encode(message.Rooms[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_GetUserPlayRoom message, length delimited. Does not implicitly {@link Proto.ws_S2C_GetUserPlayRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_GetUserPlayRoom
         * @static
         * @param {Proto.Iws_S2C_GetUserPlayRoom} message ws_S2C_GetUserPlayRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_GetUserPlayRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_GetUserPlayRoom message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_GetUserPlayRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_GetUserPlayRoom} ws_S2C_GetUserPlayRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_GetUserPlayRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_GetUserPlayRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                case 3:
                    if (!(message.Rooms && message.Rooms.length))
                        message.Rooms = [];
                    message.Rooms.push($root.Proto.RoomInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_GetUserPlayRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_GetUserPlayRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_GetUserPlayRoom} ws_S2C_GetUserPlayRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_GetUserPlayRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_GetUserPlayRoom message.
         * @function verify
         * @memberof Proto.ws_S2C_GetUserPlayRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_GetUserPlayRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.Rooms != null && message.hasOwnProperty("Rooms")) {
                if (!Array.isArray(message.Rooms))
                    return "Rooms: array expected";
                for (var i = 0; i < message.Rooms.length; ++i) {
                    var error = $root.Proto.RoomInfo.verify(message.Rooms[i]);
                    if (error)
                        return "Rooms." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ws_S2C_GetUserPlayRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_GetUserPlayRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_GetUserPlayRoom} ws_S2C_GetUserPlayRoom
         */
        ws_S2C_GetUserPlayRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_GetUserPlayRoom)
                return object;
            var message = new $root.Proto.ws_S2C_GetUserPlayRoom();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.Rooms) {
                if (!Array.isArray(object.Rooms))
                    throw TypeError(".Proto.ws_S2C_GetUserPlayRoom.Rooms: array expected");
                message.Rooms = [];
                for (var i = 0; i < object.Rooms.length; ++i) {
                    if (typeof object.Rooms[i] !== "object")
                        throw TypeError(".Proto.ws_S2C_GetUserPlayRoom.Rooms: object expected");
                    message.Rooms[i] = $root.Proto.RoomInfo.fromObject(object.Rooms[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_GetUserPlayRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_GetUserPlayRoom
         * @static
         * @param {Proto.ws_S2C_GetUserPlayRoom} message ws_S2C_GetUserPlayRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_GetUserPlayRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Rooms = [];
            if (options.defaults) {
                object.MsgID = 20024;
                object.eosaccount = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.Rooms && message.Rooms.length) {
                object.Rooms = [];
                for (var j = 0; j < message.Rooms.length; ++j)
                    object.Rooms[j] = $root.Proto.RoomInfo.toObject(message.Rooms[j], options);
            }
            return object;
        };

        /**
         * Converts this ws_S2C_GetUserPlayRoom to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_GetUserPlayRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_GetUserPlayRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_GetUserPlayRoom;
    })();

    Proto.ws_C2S_GetCollectionTables = (function() {

        /**
         * Properties of a ws_C2S_GetCollectionTables.
         * @memberof Proto
         * @interface Iws_C2S_GetCollectionTables
         * @property {number} MsgID ws_C2S_GetCollectionTables MsgID
         * @property {string|null} [eosaccount] ws_C2S_GetCollectionTables eosaccount
         */

        /**
         * Constructs a new ws_C2S_GetCollectionTables.
         * @memberof Proto
         * @classdesc Represents a ws_C2S_GetCollectionTables.
         * @implements Iws_C2S_GetCollectionTables
         * @constructor
         * @param {Proto.Iws_C2S_GetCollectionTables=} [properties] Properties to set
         */
        function ws_C2S_GetCollectionTables(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_C2S_GetCollectionTables MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_C2S_GetCollectionTables
         * @instance
         */
        ws_C2S_GetCollectionTables.prototype.MsgID = 10025;

        /**
         * ws_C2S_GetCollectionTables eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_C2S_GetCollectionTables
         * @instance
         */
        ws_C2S_GetCollectionTables.prototype.eosaccount = "";

        /**
         * Creates a new ws_C2S_GetCollectionTables instance using the specified properties.
         * @function create
         * @memberof Proto.ws_C2S_GetCollectionTables
         * @static
         * @param {Proto.Iws_C2S_GetCollectionTables=} [properties] Properties to set
         * @returns {Proto.ws_C2S_GetCollectionTables} ws_C2S_GetCollectionTables instance
         */
        ws_C2S_GetCollectionTables.create = function create(properties) {
            return new ws_C2S_GetCollectionTables(properties);
        };

        /**
         * Encodes the specified ws_C2S_GetCollectionTables message. Does not implicitly {@link Proto.ws_C2S_GetCollectionTables.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_C2S_GetCollectionTables
         * @static
         * @param {Proto.Iws_C2S_GetCollectionTables} message ws_C2S_GetCollectionTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_GetCollectionTables.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            return writer;
        };

        /**
         * Encodes the specified ws_C2S_GetCollectionTables message, length delimited. Does not implicitly {@link Proto.ws_C2S_GetCollectionTables.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_C2S_GetCollectionTables
         * @static
         * @param {Proto.Iws_C2S_GetCollectionTables} message ws_C2S_GetCollectionTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_C2S_GetCollectionTables.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_C2S_GetCollectionTables message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_C2S_GetCollectionTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_C2S_GetCollectionTables} ws_C2S_GetCollectionTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_GetCollectionTables.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_C2S_GetCollectionTables();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_C2S_GetCollectionTables message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_C2S_GetCollectionTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_C2S_GetCollectionTables} ws_C2S_GetCollectionTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_C2S_GetCollectionTables.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_C2S_GetCollectionTables message.
         * @function verify
         * @memberof Proto.ws_C2S_GetCollectionTables
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_C2S_GetCollectionTables.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            return null;
        };

        /**
         * Creates a ws_C2S_GetCollectionTables message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_C2S_GetCollectionTables
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_C2S_GetCollectionTables} ws_C2S_GetCollectionTables
         */
        ws_C2S_GetCollectionTables.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_C2S_GetCollectionTables)
                return object;
            var message = new $root.Proto.ws_C2S_GetCollectionTables();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            return message;
        };

        /**
         * Creates a plain object from a ws_C2S_GetCollectionTables message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_C2S_GetCollectionTables
         * @static
         * @param {Proto.ws_C2S_GetCollectionTables} message ws_C2S_GetCollectionTables
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_C2S_GetCollectionTables.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MsgID = 10025;
                object.eosaccount = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            return object;
        };

        /**
         * Converts this ws_C2S_GetCollectionTables to JSON.
         * @function toJSON
         * @memberof Proto.ws_C2S_GetCollectionTables
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_C2S_GetCollectionTables.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_C2S_GetCollectionTables;
    })();

    Proto.ws_S2C_GetCollectionTables = (function() {

        /**
         * Properties of a ws_S2C_GetCollectionTables.
         * @memberof Proto
         * @interface Iws_S2C_GetCollectionTables
         * @property {number} MsgID ws_S2C_GetCollectionTables MsgID
         * @property {string|null} [eosaccount] ws_S2C_GetCollectionTables eosaccount
         * @property {Array.<Proto.ITableInfo>|null} [Tables] ws_S2C_GetCollectionTables Tables
         */

        /**
         * Constructs a new ws_S2C_GetCollectionTables.
         * @memberof Proto
         * @classdesc Represents a ws_S2C_GetCollectionTables.
         * @implements Iws_S2C_GetCollectionTables
         * @constructor
         * @param {Proto.Iws_S2C_GetCollectionTables=} [properties] Properties to set
         */
        function ws_S2C_GetCollectionTables(properties) {
            this.Tables = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ws_S2C_GetCollectionTables MsgID.
         * @member {number} MsgID
         * @memberof Proto.ws_S2C_GetCollectionTables
         * @instance
         */
        ws_S2C_GetCollectionTables.prototype.MsgID = 20025;

        /**
         * ws_S2C_GetCollectionTables eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.ws_S2C_GetCollectionTables
         * @instance
         */
        ws_S2C_GetCollectionTables.prototype.eosaccount = "";

        /**
         * ws_S2C_GetCollectionTables Tables.
         * @member {Array.<Proto.ITableInfo>} Tables
         * @memberof Proto.ws_S2C_GetCollectionTables
         * @instance
         */
        ws_S2C_GetCollectionTables.prototype.Tables = $util.emptyArray;

        /**
         * Creates a new ws_S2C_GetCollectionTables instance using the specified properties.
         * @function create
         * @memberof Proto.ws_S2C_GetCollectionTables
         * @static
         * @param {Proto.Iws_S2C_GetCollectionTables=} [properties] Properties to set
         * @returns {Proto.ws_S2C_GetCollectionTables} ws_S2C_GetCollectionTables instance
         */
        ws_S2C_GetCollectionTables.create = function create(properties) {
            return new ws_S2C_GetCollectionTables(properties);
        };

        /**
         * Encodes the specified ws_S2C_GetCollectionTables message. Does not implicitly {@link Proto.ws_S2C_GetCollectionTables.verify|verify} messages.
         * @function encode
         * @memberof Proto.ws_S2C_GetCollectionTables
         * @static
         * @param {Proto.Iws_S2C_GetCollectionTables} message ws_S2C_GetCollectionTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_GetCollectionTables.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MsgID);
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eosaccount);
            if (message.Tables != null && message.Tables.length)
                for (var i = 0; i < message.Tables.length; ++i)
                    $root.Proto.TableInfo.encode(message.Tables[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ws_S2C_GetCollectionTables message, length delimited. Does not implicitly {@link Proto.ws_S2C_GetCollectionTables.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.ws_S2C_GetCollectionTables
         * @static
         * @param {Proto.Iws_S2C_GetCollectionTables} message ws_S2C_GetCollectionTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ws_S2C_GetCollectionTables.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ws_S2C_GetCollectionTables message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.ws_S2C_GetCollectionTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.ws_S2C_GetCollectionTables} ws_S2C_GetCollectionTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_GetCollectionTables.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.ws_S2C_GetCollectionTables();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MsgID = reader.int32();
                    break;
                case 2:
                    message.eosaccount = reader.string();
                    break;
                case 3:
                    if (!(message.Tables && message.Tables.length))
                        message.Tables = [];
                    message.Tables.push($root.Proto.TableInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ws_S2C_GetCollectionTables message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.ws_S2C_GetCollectionTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.ws_S2C_GetCollectionTables} ws_S2C_GetCollectionTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ws_S2C_GetCollectionTables.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ws_S2C_GetCollectionTables message.
         * @function verify
         * @memberof Proto.ws_S2C_GetCollectionTables
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ws_S2C_GetCollectionTables.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.Tables != null && message.hasOwnProperty("Tables")) {
                if (!Array.isArray(message.Tables))
                    return "Tables: array expected";
                for (var i = 0; i < message.Tables.length; ++i) {
                    var error = $root.Proto.TableInfo.verify(message.Tables[i]);
                    if (error)
                        return "Tables." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ws_S2C_GetCollectionTables message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.ws_S2C_GetCollectionTables
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.ws_S2C_GetCollectionTables} ws_S2C_GetCollectionTables
         */
        ws_S2C_GetCollectionTables.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.ws_S2C_GetCollectionTables)
                return object;
            var message = new $root.Proto.ws_S2C_GetCollectionTables();
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.Tables) {
                if (!Array.isArray(object.Tables))
                    throw TypeError(".Proto.ws_S2C_GetCollectionTables.Tables: array expected");
                message.Tables = [];
                for (var i = 0; i < object.Tables.length; ++i) {
                    if (typeof object.Tables[i] !== "object")
                        throw TypeError(".Proto.ws_S2C_GetCollectionTables.Tables: object expected");
                    message.Tables[i] = $root.Proto.TableInfo.fromObject(object.Tables[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ws_S2C_GetCollectionTables message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.ws_S2C_GetCollectionTables
         * @static
         * @param {Proto.ws_S2C_GetCollectionTables} message ws_S2C_GetCollectionTables
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ws_S2C_GetCollectionTables.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Tables = [];
            if (options.defaults) {
                object.MsgID = 20025;
                object.eosaccount = "";
            }
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.Tables && message.Tables.length) {
                object.Tables = [];
                for (var j = 0; j < message.Tables.length; ++j)
                    object.Tables[j] = $root.Proto.TableInfo.toObject(message.Tables[j], options);
            }
            return object;
        };

        /**
         * Converts this ws_S2C_GetCollectionTables to JSON.
         * @function toJSON
         * @memberof Proto.ws_S2C_GetCollectionTables
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ws_S2C_GetCollectionTables.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ws_S2C_GetCollectionTables;
    })();

    Proto.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof Proto
         * @interface IUserInfo
         * @property {string|null} [eosaccount] UserInfo eosaccount
         * @property {string|null} [nickname] UserInfo nickname
         * @property {string|null} [logo] UserInfo logo
         * @property {string|null} [pubkey] UserInfo pubkey
         * @property {string|null} [eosBalance] UserInfo eosBalance
         * @property {string|null} [gccBalance] UserInfo gccBalance
         * @property {number|null} [userType] UserInfo userType
         * @property {string|null} [createtime] UserInfo createtime
         * @property {number|null} [online] UserInfo online
         * @property {string|null} [lasttime] UserInfo lasttime
         * @property {string|null} [lastip] UserInfo lastip
         * @property {string|null} [code] UserInfo code
         */

        /**
         * Constructs a new UserInfo.
         * @memberof Proto
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {Proto.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo eosaccount.
         * @member {string} eosaccount
         * @memberof Proto.UserInfo
         * @instance
         */
        UserInfo.prototype.eosaccount = "";

        /**
         * UserInfo nickname.
         * @member {string} nickname
         * @memberof Proto.UserInfo
         * @instance
         */
        UserInfo.prototype.nickname = "";

        /**
         * UserInfo logo.
         * @member {string} logo
         * @memberof Proto.UserInfo
         * @instance
         */
        UserInfo.prototype.logo = "";

        /**
         * UserInfo pubkey.
         * @member {string} pubkey
         * @memberof Proto.UserInfo
         * @instance
         */
        UserInfo.prototype.pubkey = "";

        /**
         * UserInfo eosBalance.
         * @member {string} eosBalance
         * @memberof Proto.UserInfo
         * @instance
         */
        UserInfo.prototype.eosBalance = "";

        /**
         * UserInfo gccBalance.
         * @member {string} gccBalance
         * @memberof Proto.UserInfo
         * @instance
         */
        UserInfo.prototype.gccBalance = "";

        /**
         * UserInfo userType.
         * @member {number} userType
         * @memberof Proto.UserInfo
         * @instance
         */
        UserInfo.prototype.userType = 0;

        /**
         * UserInfo createtime.
         * @member {string} createtime
         * @memberof Proto.UserInfo
         * @instance
         */
        UserInfo.prototype.createtime = "";

        /**
         * UserInfo online.
         * @member {number} online
         * @memberof Proto.UserInfo
         * @instance
         */
        UserInfo.prototype.online = 0;

        /**
         * UserInfo lasttime.
         * @member {string} lasttime
         * @memberof Proto.UserInfo
         * @instance
         */
        UserInfo.prototype.lasttime = "";

        /**
         * UserInfo lastip.
         * @member {string} lastip
         * @memberof Proto.UserInfo
         * @instance
         */
        UserInfo.prototype.lastip = "";

        /**
         * UserInfo code.
         * @member {string} code
         * @memberof Proto.UserInfo
         * @instance
         */
        UserInfo.prototype.code = "";

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof Proto.UserInfo
         * @static
         * @param {Proto.IUserInfo=} [properties] Properties to set
         * @returns {Proto.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link Proto.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof Proto.UserInfo
         * @static
         * @param {Proto.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.eosaccount);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.logo != null && message.hasOwnProperty("logo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.logo);
            if (message.pubkey != null && message.hasOwnProperty("pubkey"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.pubkey);
            if (message.eosBalance != null && message.hasOwnProperty("eosBalance"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.eosBalance);
            if (message.gccBalance != null && message.hasOwnProperty("gccBalance"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.gccBalance);
            if (message.userType != null && message.hasOwnProperty("userType"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.userType);
            if (message.createtime != null && message.hasOwnProperty("createtime"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.createtime);
            if (message.online != null && message.hasOwnProperty("online"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.online);
            if (message.lasttime != null && message.hasOwnProperty("lasttime"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.lasttime);
            if (message.lastip != null && message.hasOwnProperty("lastip"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.lastip);
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link Proto.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.UserInfo
         * @static
         * @param {Proto.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eosaccount = reader.string();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.logo = reader.string();
                    break;
                case 4:
                    message.pubkey = reader.string();
                    break;
                case 5:
                    message.eosBalance = reader.string();
                    break;
                case 6:
                    message.gccBalance = reader.string();
                    break;
                case 7:
                    message.userType = reader.int32();
                    break;
                case 8:
                    message.createtime = reader.string();
                    break;
                case 9:
                    message.online = reader.int32();
                    break;
                case 10:
                    message.lasttime = reader.string();
                    break;
                case 11:
                    message.lastip = reader.string();
                    break;
                case 12:
                    message.code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof Proto.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                if (!$util.isString(message.eosaccount))
                    return "eosaccount: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.logo != null && message.hasOwnProperty("logo"))
                if (!$util.isString(message.logo))
                    return "logo: string expected";
            if (message.pubkey != null && message.hasOwnProperty("pubkey"))
                if (!$util.isString(message.pubkey))
                    return "pubkey: string expected";
            if (message.eosBalance != null && message.hasOwnProperty("eosBalance"))
                if (!$util.isString(message.eosBalance))
                    return "eosBalance: string expected";
            if (message.gccBalance != null && message.hasOwnProperty("gccBalance"))
                if (!$util.isString(message.gccBalance))
                    return "gccBalance: string expected";
            if (message.userType != null && message.hasOwnProperty("userType"))
                if (!$util.isInteger(message.userType))
                    return "userType: integer expected";
            if (message.createtime != null && message.hasOwnProperty("createtime"))
                if (!$util.isString(message.createtime))
                    return "createtime: string expected";
            if (message.online != null && message.hasOwnProperty("online"))
                if (!$util.isInteger(message.online))
                    return "online: integer expected";
            if (message.lasttime != null && message.hasOwnProperty("lasttime"))
                if (!$util.isString(message.lasttime))
                    return "lasttime: string expected";
            if (message.lastip != null && message.hasOwnProperty("lastip"))
                if (!$util.isString(message.lastip))
                    return "lastip: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.UserInfo)
                return object;
            var message = new $root.Proto.UserInfo();
            if (object.eosaccount != null)
                message.eosaccount = String(object.eosaccount);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.logo != null)
                message.logo = String(object.logo);
            if (object.pubkey != null)
                message.pubkey = String(object.pubkey);
            if (object.eosBalance != null)
                message.eosBalance = String(object.eosBalance);
            if (object.gccBalance != null)
                message.gccBalance = String(object.gccBalance);
            if (object.userType != null)
                message.userType = object.userType | 0;
            if (object.createtime != null)
                message.createtime = String(object.createtime);
            if (object.online != null)
                message.online = object.online | 0;
            if (object.lasttime != null)
                message.lasttime = String(object.lasttime);
            if (object.lastip != null)
                message.lastip = String(object.lastip);
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.UserInfo
         * @static
         * @param {Proto.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eosaccount = "";
                object.nickname = "";
                object.logo = "";
                object.pubkey = "";
                object.eosBalance = "";
                object.gccBalance = "";
                object.userType = 0;
                object.createtime = "";
                object.online = 0;
                object.lasttime = "";
                object.lastip = "";
                object.code = "";
            }
            if (message.eosaccount != null && message.hasOwnProperty("eosaccount"))
                object.eosaccount = message.eosaccount;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.logo != null && message.hasOwnProperty("logo"))
                object.logo = message.logo;
            if (message.pubkey != null && message.hasOwnProperty("pubkey"))
                object.pubkey = message.pubkey;
            if (message.eosBalance != null && message.hasOwnProperty("eosBalance"))
                object.eosBalance = message.eosBalance;
            if (message.gccBalance != null && message.hasOwnProperty("gccBalance"))
                object.gccBalance = message.gccBalance;
            if (message.userType != null && message.hasOwnProperty("userType"))
                object.userType = message.userType;
            if (message.createtime != null && message.hasOwnProperty("createtime"))
                object.createtime = message.createtime;
            if (message.online != null && message.hasOwnProperty("online"))
                object.online = message.online;
            if (message.lasttime != null && message.hasOwnProperty("lasttime"))
                object.lasttime = message.lasttime;
            if (message.lastip != null && message.hasOwnProperty("lastip"))
                object.lastip = message.lastip;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof Proto.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    Proto.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof Proto
         * @interface IRoomInfo
         * @property {number|null} [id] RoomInfo id
         * @property {string|null} [dealer] RoomInfo dealer
         * @property {string|null} [roomName] RoomInfo roomName
         * @property {string|null} [createtime] RoomInfo createtime
         * @property {string|null} [code] RoomInfo code
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof Proto
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {Proto.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfo id.
         * @member {number} id
         * @memberof Proto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.id = 0;

        /**
         * RoomInfo dealer.
         * @member {string} dealer
         * @memberof Proto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.dealer = "";

        /**
         * RoomInfo roomName.
         * @member {string} roomName
         * @memberof Proto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.roomName = "";

        /**
         * RoomInfo createtime.
         * @member {string} createtime
         * @memberof Proto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.createtime = "";

        /**
         * RoomInfo code.
         * @member {string} code
         * @memberof Proto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.code = "";

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof Proto.RoomInfo
         * @static
         * @param {Proto.IRoomInfo=} [properties] Properties to set
         * @returns {Proto.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link Proto.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof Proto.RoomInfo
         * @static
         * @param {Proto.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.dealer != null && message.hasOwnProperty("dealer"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.dealer);
            if (message.roomName != null && message.hasOwnProperty("roomName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.roomName);
            if (message.createtime != null && message.hasOwnProperty("createtime"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.createtime);
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link Proto.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.RoomInfo
         * @static
         * @param {Proto.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.dealer = reader.string();
                    break;
                case 3:
                    message.roomName = reader.string();
                    break;
                case 4:
                    message.createtime = reader.string();
                    break;
                case 5:
                    message.code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInfo message.
         * @function verify
         * @memberof Proto.RoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.dealer != null && message.hasOwnProperty("dealer"))
                if (!$util.isString(message.dealer))
                    return "dealer: string expected";
            if (message.roomName != null && message.hasOwnProperty("roomName"))
                if (!$util.isString(message.roomName))
                    return "roomName: string expected";
            if (message.createtime != null && message.hasOwnProperty("createtime"))
                if (!$util.isString(message.createtime))
                    return "createtime: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.RoomInfo)
                return object;
            var message = new $root.Proto.RoomInfo();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.dealer != null)
                message.dealer = String(object.dealer);
            if (object.roomName != null)
                message.roomName = String(object.roomName);
            if (object.createtime != null)
                message.createtime = String(object.createtime);
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.RoomInfo
         * @static
         * @param {Proto.RoomInfo} message RoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.dealer = "";
                object.roomName = "";
                object.createtime = "";
                object.code = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.dealer != null && message.hasOwnProperty("dealer"))
                object.dealer = message.dealer;
            if (message.roomName != null && message.hasOwnProperty("roomName"))
                object.roomName = message.roomName;
            if (message.createtime != null && message.hasOwnProperty("createtime"))
                object.createtime = message.createtime;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this RoomInfo to JSON.
         * @function toJSON
         * @memberof Proto.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfo;
    })();

    Proto.TableInfo = (function() {

        /**
         * Properties of a TableInfo.
         * @memberof Proto
         * @interface ITableInfo
         * @property {number|null} [id] TableInfo id
         * @property {number|null} [roomId] TableInfo roomId
         * @property {string|null} [dealer] TableInfo dealer
         * @property {number|null} [gameType] TableInfo gameType
         * @property {number|null} [trusteeship] TableInfo trusteeship
         * @property {number|null} [isclose] TableInfo isclose
         * @property {number|null} [ispause] TableInfo ispause
         * @property {string|null} [amountSymbol] TableInfo amountSymbol
         * @property {string|null} [deposit] TableInfo deposit
         * @property {string|null} [dealerBalance] TableInfo dealerBalance
         * @property {number|null} [validCardVec] TableInfo validCardVec
         * @property {number|null} [carbBoot] TableInfo carbBoot
         * @property {number|null} [ifPrivate] TableInfo ifPrivate
         * @property {string|null} [limitRedMin] TableInfo limitRedMin
         * @property {string|null} [limitRedMax] TableInfo limitRedMax
         * @property {string|null} [oneRoundMaxTotalBet_BP] TableInfo oneRoundMaxTotalBet_BP
         * @property {string|null} [minPerBet_BP] TableInfo minPerBet_BP
         * @property {string|null} [oneRoundMaxTotalBet_Push] TableInfo oneRoundMaxTotalBet_Push
         * @property {string|null} [minPerBet_Push] TableInfo minPerBet_Push
         * @property {string|null} [oneRoundMaxTotalBet_Tie] TableInfo oneRoundMaxTotalBet_Tie
         * @property {string|null} [minPerBet_Tie] TableInfo minPerBet_Tie
         * @property {string|null} [oneRoundDealerMaxPay] TableInfo oneRoundDealerMaxPay
         * @property {string|null} [commissionRateAgent] TableInfo commissionRateAgent
         * @property {string|null} [commissionRatePlayer] TableInfo commissionRatePlayer
         * @property {string|null} [code] TableInfo code
         * @property {number|null} [playerNum] TableInfo playerNum
         * @property {string|null} [createtime] TableInfo createtime
         * @property {string|null} [updatetime] TableInfo updatetime
         */

        /**
         * Constructs a new TableInfo.
         * @memberof Proto
         * @classdesc Represents a TableInfo.
         * @implements ITableInfo
         * @constructor
         * @param {Proto.ITableInfo=} [properties] Properties to set
         */
        function TableInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableInfo id.
         * @member {number} id
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.id = 0;

        /**
         * TableInfo roomId.
         * @member {number} roomId
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.roomId = 0;

        /**
         * TableInfo dealer.
         * @member {string} dealer
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.dealer = "";

        /**
         * TableInfo gameType.
         * @member {number} gameType
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.gameType = 0;

        /**
         * TableInfo trusteeship.
         * @member {number} trusteeship
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.trusteeship = 0;

        /**
         * TableInfo isclose.
         * @member {number} isclose
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.isclose = 0;

        /**
         * TableInfo ispause.
         * @member {number} ispause
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.ispause = 0;

        /**
         * TableInfo amountSymbol.
         * @member {string} amountSymbol
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.amountSymbol = "";

        /**
         * TableInfo deposit.
         * @member {string} deposit
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.deposit = "";

        /**
         * TableInfo dealerBalance.
         * @member {string} dealerBalance
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.dealerBalance = "";

        /**
         * TableInfo validCardVec.
         * @member {number} validCardVec
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.validCardVec = 0;

        /**
         * TableInfo carbBoot.
         * @member {number} carbBoot
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.carbBoot = 0;

        /**
         * TableInfo ifPrivate.
         * @member {number} ifPrivate
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.ifPrivate = 0;

        /**
         * TableInfo limitRedMin.
         * @member {string} limitRedMin
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.limitRedMin = "";

        /**
         * TableInfo limitRedMax.
         * @member {string} limitRedMax
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.limitRedMax = "";

        /**
         * TableInfo oneRoundMaxTotalBet_BP.
         * @member {string} oneRoundMaxTotalBet_BP
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.oneRoundMaxTotalBet_BP = "";

        /**
         * TableInfo minPerBet_BP.
         * @member {string} minPerBet_BP
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.minPerBet_BP = "";

        /**
         * TableInfo oneRoundMaxTotalBet_Push.
         * @member {string} oneRoundMaxTotalBet_Push
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.oneRoundMaxTotalBet_Push = "";

        /**
         * TableInfo minPerBet_Push.
         * @member {string} minPerBet_Push
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.minPerBet_Push = "";

        /**
         * TableInfo oneRoundMaxTotalBet_Tie.
         * @member {string} oneRoundMaxTotalBet_Tie
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.oneRoundMaxTotalBet_Tie = "";

        /**
         * TableInfo minPerBet_Tie.
         * @member {string} minPerBet_Tie
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.minPerBet_Tie = "";

        /**
         * TableInfo oneRoundDealerMaxPay.
         * @member {string} oneRoundDealerMaxPay
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.oneRoundDealerMaxPay = "";

        /**
         * TableInfo commissionRateAgent.
         * @member {string} commissionRateAgent
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.commissionRateAgent = "";

        /**
         * TableInfo commissionRatePlayer.
         * @member {string} commissionRatePlayer
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.commissionRatePlayer = "";

        /**
         * TableInfo code.
         * @member {string} code
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.code = "";

        /**
         * TableInfo playerNum.
         * @member {number} playerNum
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.playerNum = 0;

        /**
         * TableInfo createtime.
         * @member {string} createtime
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.createtime = "";

        /**
         * TableInfo updatetime.
         * @member {string} updatetime
         * @memberof Proto.TableInfo
         * @instance
         */
        TableInfo.prototype.updatetime = "";

        /**
         * Creates a new TableInfo instance using the specified properties.
         * @function create
         * @memberof Proto.TableInfo
         * @static
         * @param {Proto.ITableInfo=} [properties] Properties to set
         * @returns {Proto.TableInfo} TableInfo instance
         */
        TableInfo.create = function create(properties) {
            return new TableInfo(properties);
        };

        /**
         * Encodes the specified TableInfo message. Does not implicitly {@link Proto.TableInfo.verify|verify} messages.
         * @function encode
         * @memberof Proto.TableInfo
         * @static
         * @param {Proto.ITableInfo} message TableInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roomId);
            if (message.dealer != null && message.hasOwnProperty("dealer"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.dealer);
            if (message.gameType != null && message.hasOwnProperty("gameType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.gameType);
            if (message.trusteeship != null && message.hasOwnProperty("trusteeship"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.trusteeship);
            if (message.isclose != null && message.hasOwnProperty("isclose"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.isclose);
            if (message.ispause != null && message.hasOwnProperty("ispause"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.ispause);
            if (message.amountSymbol != null && message.hasOwnProperty("amountSymbol"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.amountSymbol);
            if (message.deposit != null && message.hasOwnProperty("deposit"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.deposit);
            if (message.dealerBalance != null && message.hasOwnProperty("dealerBalance"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.dealerBalance);
            if (message.validCardVec != null && message.hasOwnProperty("validCardVec"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.validCardVec);
            if (message.carbBoot != null && message.hasOwnProperty("carbBoot"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.carbBoot);
            if (message.ifPrivate != null && message.hasOwnProperty("ifPrivate"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.ifPrivate);
            if (message.limitRedMin != null && message.hasOwnProperty("limitRedMin"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.limitRedMin);
            if (message.limitRedMax != null && message.hasOwnProperty("limitRedMax"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.limitRedMax);
            if (message.oneRoundMaxTotalBet_BP != null && message.hasOwnProperty("oneRoundMaxTotalBet_BP"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.oneRoundMaxTotalBet_BP);
            if (message.minPerBet_BP != null && message.hasOwnProperty("minPerBet_BP"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.minPerBet_BP);
            if (message.oneRoundMaxTotalBet_Push != null && message.hasOwnProperty("oneRoundMaxTotalBet_Push"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.oneRoundMaxTotalBet_Push);
            if (message.minPerBet_Push != null && message.hasOwnProperty("minPerBet_Push"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.minPerBet_Push);
            if (message.oneRoundMaxTotalBet_Tie != null && message.hasOwnProperty("oneRoundMaxTotalBet_Tie"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.oneRoundMaxTotalBet_Tie);
            if (message.minPerBet_Tie != null && message.hasOwnProperty("minPerBet_Tie"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.minPerBet_Tie);
            if (message.oneRoundDealerMaxPay != null && message.hasOwnProperty("oneRoundDealerMaxPay"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.oneRoundDealerMaxPay);
            if (message.commissionRateAgent != null && message.hasOwnProperty("commissionRateAgent"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.commissionRateAgent);
            if (message.commissionRatePlayer != null && message.hasOwnProperty("commissionRatePlayer"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.commissionRatePlayer);
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 25, wireType 2 =*/202).string(message.code);
            if (message.playerNum != null && message.hasOwnProperty("playerNum"))
                writer.uint32(/* id 26, wireType 0 =*/208).int32(message.playerNum);
            if (message.createtime != null && message.hasOwnProperty("createtime"))
                writer.uint32(/* id 27, wireType 2 =*/218).string(message.createtime);
            if (message.updatetime != null && message.hasOwnProperty("updatetime"))
                writer.uint32(/* id 28, wireType 2 =*/226).string(message.updatetime);
            return writer;
        };

        /**
         * Encodes the specified TableInfo message, length delimited. Does not implicitly {@link Proto.TableInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.TableInfo
         * @static
         * @param {Proto.ITableInfo} message TableInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.TableInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.TableInfo} TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.TableInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.roomId = reader.int32();
                    break;
                case 3:
                    message.dealer = reader.string();
                    break;
                case 4:
                    message.gameType = reader.int32();
                    break;
                case 5:
                    message.trusteeship = reader.int32();
                    break;
                case 6:
                    message.isclose = reader.int32();
                    break;
                case 7:
                    message.ispause = reader.int32();
                    break;
                case 8:
                    message.amountSymbol = reader.string();
                    break;
                case 9:
                    message.deposit = reader.string();
                    break;
                case 10:
                    message.dealerBalance = reader.string();
                    break;
                case 11:
                    message.validCardVec = reader.int32();
                    break;
                case 12:
                    message.carbBoot = reader.int32();
                    break;
                case 13:
                    message.ifPrivate = reader.int32();
                    break;
                case 14:
                    message.limitRedMin = reader.string();
                    break;
                case 15:
                    message.limitRedMax = reader.string();
                    break;
                case 16:
                    message.oneRoundMaxTotalBet_BP = reader.string();
                    break;
                case 17:
                    message.minPerBet_BP = reader.string();
                    break;
                case 18:
                    message.oneRoundMaxTotalBet_Push = reader.string();
                    break;
                case 19:
                    message.minPerBet_Push = reader.string();
                    break;
                case 20:
                    message.oneRoundMaxTotalBet_Tie = reader.string();
                    break;
                case 21:
                    message.minPerBet_Tie = reader.string();
                    break;
                case 22:
                    message.oneRoundDealerMaxPay = reader.string();
                    break;
                case 23:
                    message.commissionRateAgent = reader.string();
                    break;
                case 24:
                    message.commissionRatePlayer = reader.string();
                    break;
                case 25:
                    message.code = reader.string();
                    break;
                case 26:
                    message.playerNum = reader.int32();
                    break;
                case 27:
                    message.createtime = reader.string();
                    break;
                case 28:
                    message.updatetime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TableInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.TableInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.TableInfo} TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TableInfo message.
         * @function verify
         * @memberof Proto.TableInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            if (message.dealer != null && message.hasOwnProperty("dealer"))
                if (!$util.isString(message.dealer))
                    return "dealer: string expected";
            if (message.gameType != null && message.hasOwnProperty("gameType"))
                if (!$util.isInteger(message.gameType))
                    return "gameType: integer expected";
            if (message.trusteeship != null && message.hasOwnProperty("trusteeship"))
                if (!$util.isInteger(message.trusteeship))
                    return "trusteeship: integer expected";
            if (message.isclose != null && message.hasOwnProperty("isclose"))
                if (!$util.isInteger(message.isclose))
                    return "isclose: integer expected";
            if (message.ispause != null && message.hasOwnProperty("ispause"))
                if (!$util.isInteger(message.ispause))
                    return "ispause: integer expected";
            if (message.amountSymbol != null && message.hasOwnProperty("amountSymbol"))
                if (!$util.isString(message.amountSymbol))
                    return "amountSymbol: string expected";
            if (message.deposit != null && message.hasOwnProperty("deposit"))
                if (!$util.isString(message.deposit))
                    return "deposit: string expected";
            if (message.dealerBalance != null && message.hasOwnProperty("dealerBalance"))
                if (!$util.isString(message.dealerBalance))
                    return "dealerBalance: string expected";
            if (message.validCardVec != null && message.hasOwnProperty("validCardVec"))
                if (!$util.isInteger(message.validCardVec))
                    return "validCardVec: integer expected";
            if (message.carbBoot != null && message.hasOwnProperty("carbBoot"))
                if (!$util.isInteger(message.carbBoot))
                    return "carbBoot: integer expected";
            if (message.ifPrivate != null && message.hasOwnProperty("ifPrivate"))
                if (!$util.isInteger(message.ifPrivate))
                    return "ifPrivate: integer expected";
            if (message.limitRedMin != null && message.hasOwnProperty("limitRedMin"))
                if (!$util.isString(message.limitRedMin))
                    return "limitRedMin: string expected";
            if (message.limitRedMax != null && message.hasOwnProperty("limitRedMax"))
                if (!$util.isString(message.limitRedMax))
                    return "limitRedMax: string expected";
            if (message.oneRoundMaxTotalBet_BP != null && message.hasOwnProperty("oneRoundMaxTotalBet_BP"))
                if (!$util.isString(message.oneRoundMaxTotalBet_BP))
                    return "oneRoundMaxTotalBet_BP: string expected";
            if (message.minPerBet_BP != null && message.hasOwnProperty("minPerBet_BP"))
                if (!$util.isString(message.minPerBet_BP))
                    return "minPerBet_BP: string expected";
            if (message.oneRoundMaxTotalBet_Push != null && message.hasOwnProperty("oneRoundMaxTotalBet_Push"))
                if (!$util.isString(message.oneRoundMaxTotalBet_Push))
                    return "oneRoundMaxTotalBet_Push: string expected";
            if (message.minPerBet_Push != null && message.hasOwnProperty("minPerBet_Push"))
                if (!$util.isString(message.minPerBet_Push))
                    return "minPerBet_Push: string expected";
            if (message.oneRoundMaxTotalBet_Tie != null && message.hasOwnProperty("oneRoundMaxTotalBet_Tie"))
                if (!$util.isString(message.oneRoundMaxTotalBet_Tie))
                    return "oneRoundMaxTotalBet_Tie: string expected";
            if (message.minPerBet_Tie != null && message.hasOwnProperty("minPerBet_Tie"))
                if (!$util.isString(message.minPerBet_Tie))
                    return "minPerBet_Tie: string expected";
            if (message.oneRoundDealerMaxPay != null && message.hasOwnProperty("oneRoundDealerMaxPay"))
                if (!$util.isString(message.oneRoundDealerMaxPay))
                    return "oneRoundDealerMaxPay: string expected";
            if (message.commissionRateAgent != null && message.hasOwnProperty("commissionRateAgent"))
                if (!$util.isString(message.commissionRateAgent))
                    return "commissionRateAgent: string expected";
            if (message.commissionRatePlayer != null && message.hasOwnProperty("commissionRatePlayer"))
                if (!$util.isString(message.commissionRatePlayer))
                    return "commissionRatePlayer: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.playerNum != null && message.hasOwnProperty("playerNum"))
                if (!$util.isInteger(message.playerNum))
                    return "playerNum: integer expected";
            if (message.createtime != null && message.hasOwnProperty("createtime"))
                if (!$util.isString(message.createtime))
                    return "createtime: string expected";
            if (message.updatetime != null && message.hasOwnProperty("updatetime"))
                if (!$util.isString(message.updatetime))
                    return "updatetime: string expected";
            return null;
        };

        /**
         * Creates a TableInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.TableInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.TableInfo} TableInfo
         */
        TableInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.TableInfo)
                return object;
            var message = new $root.Proto.TableInfo();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            if (object.dealer != null)
                message.dealer = String(object.dealer);
            if (object.gameType != null)
                message.gameType = object.gameType | 0;
            if (object.trusteeship != null)
                message.trusteeship = object.trusteeship | 0;
            if (object.isclose != null)
                message.isclose = object.isclose | 0;
            if (object.ispause != null)
                message.ispause = object.ispause | 0;
            if (object.amountSymbol != null)
                message.amountSymbol = String(object.amountSymbol);
            if (object.deposit != null)
                message.deposit = String(object.deposit);
            if (object.dealerBalance != null)
                message.dealerBalance = String(object.dealerBalance);
            if (object.validCardVec != null)
                message.validCardVec = object.validCardVec | 0;
            if (object.carbBoot != null)
                message.carbBoot = object.carbBoot | 0;
            if (object.ifPrivate != null)
                message.ifPrivate = object.ifPrivate | 0;
            if (object.limitRedMin != null)
                message.limitRedMin = String(object.limitRedMin);
            if (object.limitRedMax != null)
                message.limitRedMax = String(object.limitRedMax);
            if (object.oneRoundMaxTotalBet_BP != null)
                message.oneRoundMaxTotalBet_BP = String(object.oneRoundMaxTotalBet_BP);
            if (object.minPerBet_BP != null)
                message.minPerBet_BP = String(object.minPerBet_BP);
            if (object.oneRoundMaxTotalBet_Push != null)
                message.oneRoundMaxTotalBet_Push = String(object.oneRoundMaxTotalBet_Push);
            if (object.minPerBet_Push != null)
                message.minPerBet_Push = String(object.minPerBet_Push);
            if (object.oneRoundMaxTotalBet_Tie != null)
                message.oneRoundMaxTotalBet_Tie = String(object.oneRoundMaxTotalBet_Tie);
            if (object.minPerBet_Tie != null)
                message.minPerBet_Tie = String(object.minPerBet_Tie);
            if (object.oneRoundDealerMaxPay != null)
                message.oneRoundDealerMaxPay = String(object.oneRoundDealerMaxPay);
            if (object.commissionRateAgent != null)
                message.commissionRateAgent = String(object.commissionRateAgent);
            if (object.commissionRatePlayer != null)
                message.commissionRatePlayer = String(object.commissionRatePlayer);
            if (object.code != null)
                message.code = String(object.code);
            if (object.playerNum != null)
                message.playerNum = object.playerNum | 0;
            if (object.createtime != null)
                message.createtime = String(object.createtime);
            if (object.updatetime != null)
                message.updatetime = String(object.updatetime);
            return message;
        };

        /**
         * Creates a plain object from a TableInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.TableInfo
         * @static
         * @param {Proto.TableInfo} message TableInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TableInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.roomId = 0;
                object.dealer = "";
                object.gameType = 0;
                object.trusteeship = 0;
                object.isclose = 0;
                object.ispause = 0;
                object.amountSymbol = "";
                object.deposit = "";
                object.dealerBalance = "";
                object.validCardVec = 0;
                object.carbBoot = 0;
                object.ifPrivate = 0;
                object.limitRedMin = "";
                object.limitRedMax = "";
                object.oneRoundMaxTotalBet_BP = "";
                object.minPerBet_BP = "";
                object.oneRoundMaxTotalBet_Push = "";
                object.minPerBet_Push = "";
                object.oneRoundMaxTotalBet_Tie = "";
                object.minPerBet_Tie = "";
                object.oneRoundDealerMaxPay = "";
                object.commissionRateAgent = "";
                object.commissionRatePlayer = "";
                object.code = "";
                object.playerNum = 0;
                object.createtime = "";
                object.updatetime = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.dealer != null && message.hasOwnProperty("dealer"))
                object.dealer = message.dealer;
            if (message.gameType != null && message.hasOwnProperty("gameType"))
                object.gameType = message.gameType;
            if (message.trusteeship != null && message.hasOwnProperty("trusteeship"))
                object.trusteeship = message.trusteeship;
            if (message.isclose != null && message.hasOwnProperty("isclose"))
                object.isclose = message.isclose;
            if (message.ispause != null && message.hasOwnProperty("ispause"))
                object.ispause = message.ispause;
            if (message.amountSymbol != null && message.hasOwnProperty("amountSymbol"))
                object.amountSymbol = message.amountSymbol;
            if (message.deposit != null && message.hasOwnProperty("deposit"))
                object.deposit = message.deposit;
            if (message.dealerBalance != null && message.hasOwnProperty("dealerBalance"))
                object.dealerBalance = message.dealerBalance;
            if (message.validCardVec != null && message.hasOwnProperty("validCardVec"))
                object.validCardVec = message.validCardVec;
            if (message.carbBoot != null && message.hasOwnProperty("carbBoot"))
                object.carbBoot = message.carbBoot;
            if (message.ifPrivate != null && message.hasOwnProperty("ifPrivate"))
                object.ifPrivate = message.ifPrivate;
            if (message.limitRedMin != null && message.hasOwnProperty("limitRedMin"))
                object.limitRedMin = message.limitRedMin;
            if (message.limitRedMax != null && message.hasOwnProperty("limitRedMax"))
                object.limitRedMax = message.limitRedMax;
            if (message.oneRoundMaxTotalBet_BP != null && message.hasOwnProperty("oneRoundMaxTotalBet_BP"))
                object.oneRoundMaxTotalBet_BP = message.oneRoundMaxTotalBet_BP;
            if (message.minPerBet_BP != null && message.hasOwnProperty("minPerBet_BP"))
                object.minPerBet_BP = message.minPerBet_BP;
            if (message.oneRoundMaxTotalBet_Push != null && message.hasOwnProperty("oneRoundMaxTotalBet_Push"))
                object.oneRoundMaxTotalBet_Push = message.oneRoundMaxTotalBet_Push;
            if (message.minPerBet_Push != null && message.hasOwnProperty("minPerBet_Push"))
                object.minPerBet_Push = message.minPerBet_Push;
            if (message.oneRoundMaxTotalBet_Tie != null && message.hasOwnProperty("oneRoundMaxTotalBet_Tie"))
                object.oneRoundMaxTotalBet_Tie = message.oneRoundMaxTotalBet_Tie;
            if (message.minPerBet_Tie != null && message.hasOwnProperty("minPerBet_Tie"))
                object.minPerBet_Tie = message.minPerBet_Tie;
            if (message.oneRoundDealerMaxPay != null && message.hasOwnProperty("oneRoundDealerMaxPay"))
                object.oneRoundDealerMaxPay = message.oneRoundDealerMaxPay;
            if (message.commissionRateAgent != null && message.hasOwnProperty("commissionRateAgent"))
                object.commissionRateAgent = message.commissionRateAgent;
            if (message.commissionRatePlayer != null && message.hasOwnProperty("commissionRatePlayer"))
                object.commissionRatePlayer = message.commissionRatePlayer;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.playerNum != null && message.hasOwnProperty("playerNum"))
                object.playerNum = message.playerNum;
            if (message.createtime != null && message.hasOwnProperty("createtime"))
                object.createtime = message.createtime;
            if (message.updatetime != null && message.hasOwnProperty("updatetime"))
                object.updatetime = message.updatetime;
            return object;
        };

        /**
         * Converts this TableInfo to JSON.
         * @function toJSON
         * @memberof Proto.TableInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TableInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableInfo;
    })();

    Proto.CardInfo = (function() {

        /**
         * Properties of a CardInfo.
         * @memberof Proto
         * @interface ICardInfo
         * @property {number|null} [cardNum] CardInfo cardNum
         * @property {string|null} [cardColor] CardInfo cardColor
         */

        /**
         * Constructs a new CardInfo.
         * @memberof Proto
         * @classdesc Represents a CardInfo.
         * @implements ICardInfo
         * @constructor
         * @param {Proto.ICardInfo=} [properties] Properties to set
         */
        function CardInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardInfo cardNum.
         * @member {number} cardNum
         * @memberof Proto.CardInfo
         * @instance
         */
        CardInfo.prototype.cardNum = 0;

        /**
         * CardInfo cardColor.
         * @member {string} cardColor
         * @memberof Proto.CardInfo
         * @instance
         */
        CardInfo.prototype.cardColor = "";

        /**
         * Creates a new CardInfo instance using the specified properties.
         * @function create
         * @memberof Proto.CardInfo
         * @static
         * @param {Proto.ICardInfo=} [properties] Properties to set
         * @returns {Proto.CardInfo} CardInfo instance
         */
        CardInfo.create = function create(properties) {
            return new CardInfo(properties);
        };

        /**
         * Encodes the specified CardInfo message. Does not implicitly {@link Proto.CardInfo.verify|verify} messages.
         * @function encode
         * @memberof Proto.CardInfo
         * @static
         * @param {Proto.ICardInfo} message CardInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cardNum != null && message.hasOwnProperty("cardNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cardNum);
            if (message.cardColor != null && message.hasOwnProperty("cardColor"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.cardColor);
            return writer;
        };

        /**
         * Encodes the specified CardInfo message, length delimited. Does not implicitly {@link Proto.CardInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Proto.CardInfo
         * @static
         * @param {Proto.ICardInfo} message CardInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Proto.CardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Proto.CardInfo} CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Proto.CardInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cardNum = reader.int32();
                    break;
                case 2:
                    message.cardColor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CardInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Proto.CardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Proto.CardInfo} CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CardInfo message.
         * @function verify
         * @memberof Proto.CardInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CardInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cardNum != null && message.hasOwnProperty("cardNum"))
                if (!$util.isInteger(message.cardNum))
                    return "cardNum: integer expected";
            if (message.cardColor != null && message.hasOwnProperty("cardColor"))
                if (!$util.isString(message.cardColor))
                    return "cardColor: string expected";
            return null;
        };

        /**
         * Creates a CardInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Proto.CardInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Proto.CardInfo} CardInfo
         */
        CardInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.Proto.CardInfo)
                return object;
            var message = new $root.Proto.CardInfo();
            if (object.cardNum != null)
                message.cardNum = object.cardNum | 0;
            if (object.cardColor != null)
                message.cardColor = String(object.cardColor);
            return message;
        };

        /**
         * Creates a plain object from a CardInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Proto.CardInfo
         * @static
         * @param {Proto.CardInfo} message CardInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CardInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cardNum = 0;
                object.cardColor = "";
            }
            if (message.cardNum != null && message.hasOwnProperty("cardNum"))
                object.cardNum = message.cardNum;
            if (message.cardColor != null && message.hasOwnProperty("cardColor"))
                object.cardColor = message.cardColor;
            return object;
        };

        /**
         * Converts this CardInfo to JSON.
         * @function toJSON
         * @memberof Proto.CardInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CardInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CardInfo;
    })();

    return Proto;
})();

module.exports = $root;
