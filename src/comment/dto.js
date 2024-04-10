"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCommentDto = exports.DeleteCommentDto = exports.CreateCommentDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var CreateCommentDto = function () {
    var _a;
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _timestamp_decorators;
    var _timestamp_initializers = [];
    var _timestamp_extraInitializers = [];
    var _user_id_decorators;
    var _user_id_initializers = [];
    var _user_id_extraInitializers = [];
    var _post_id_decorators;
    var _post_id_initializers = [];
    var _post_id_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateCommentDto() {
                this.title = __runInitializers(this, _title_initializers, void 0);
                this.timestamp = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _timestamp_initializers, void 0));
                this.user_id = (__runInitializers(this, _timestamp_extraInitializers), __runInitializers(this, _user_id_initializers, void 0));
                this.post_id = (__runInitializers(this, _user_id_extraInitializers), __runInitializers(this, _post_id_initializers, void 0));
                __runInitializers(this, _post_id_extraInitializers);
            }
            return CreateCommentDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _title_decorators = [(0, swagger_1.ApiProperty)()];
            _timestamp_decorators = [(0, swagger_1.ApiProperty)()];
            _user_id_decorators = [(0, swagger_1.ApiProperty)()];
            _post_id_decorators = [(0, swagger_1.ApiProperty)()];
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            __esDecorate(null, null, _timestamp_decorators, { kind: "field", name: "timestamp", static: false, private: false, access: { has: function (obj) { return "timestamp" in obj; }, get: function (obj) { return obj.timestamp; }, set: function (obj, value) { obj.timestamp = value; } }, metadata: _metadata }, _timestamp_initializers, _timestamp_extraInitializers);
            __esDecorate(null, null, _user_id_decorators, { kind: "field", name: "user_id", static: false, private: false, access: { has: function (obj) { return "user_id" in obj; }, get: function (obj) { return obj.user_id; }, set: function (obj, value) { obj.user_id = value; } }, metadata: _metadata }, _user_id_initializers, _user_id_extraInitializers);
            __esDecorate(null, null, _post_id_decorators, { kind: "field", name: "post_id", static: false, private: false, access: { has: function (obj) { return "post_id" in obj; }, get: function (obj) { return obj.post_id; }, set: function (obj, value) { obj.post_id = value; } }, metadata: _metadata }, _post_id_initializers, _post_id_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateCommentDto = CreateCommentDto;
var DeleteCommentDto = function () {
    var _a;
    var _comment_id_decorators;
    var _comment_id_initializers = [];
    var _comment_id_extraInitializers = [];
    return _a = /** @class */ (function () {
            function DeleteCommentDto() {
                this.comment_id = __runInitializers(this, _comment_id_initializers, void 0);
                __runInitializers(this, _comment_id_extraInitializers);
            }
            return DeleteCommentDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _comment_id_decorators = [(0, swagger_1.ApiProperty)()];
            __esDecorate(null, null, _comment_id_decorators, { kind: "field", name: "comment_id", static: false, private: false, access: { has: function (obj) { return "comment_id" in obj; }, get: function (obj) { return obj.comment_id; }, set: function (obj, value) { obj.comment_id = value; } }, metadata: _metadata }, _comment_id_initializers, _comment_id_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.DeleteCommentDto = DeleteCommentDto;
var LikeCommentDto = function () {
    var _a;
    var _comment_id_decorators;
    var _comment_id_initializers = [];
    var _comment_id_extraInitializers = [];
    var _user_id_decorators;
    var _user_id_initializers = [];
    var _user_id_extraInitializers = [];
    return _a = /** @class */ (function () {
            function LikeCommentDto() {
                this.comment_id = __runInitializers(this, _comment_id_initializers, void 0);
                this.user_id = (__runInitializers(this, _comment_id_extraInitializers), __runInitializers(this, _user_id_initializers, void 0));
                __runInitializers(this, _user_id_extraInitializers);
            }
            return LikeCommentDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _comment_id_decorators = [(0, swagger_1.ApiProperty)()];
            _user_id_decorators = [(0, swagger_1.ApiProperty)()];
            __esDecorate(null, null, _comment_id_decorators, { kind: "field", name: "comment_id", static: false, private: false, access: { has: function (obj) { return "comment_id" in obj; }, get: function (obj) { return obj.comment_id; }, set: function (obj, value) { obj.comment_id = value; } }, metadata: _metadata }, _comment_id_initializers, _comment_id_extraInitializers);
            __esDecorate(null, null, _user_id_decorators, { kind: "field", name: "user_id", static: false, private: false, access: { has: function (obj) { return "user_id" in obj; }, get: function (obj) { return obj.user_id; }, set: function (obj, value) { obj.user_id = value; } }, metadata: _metadata }, _user_id_initializers, _user_id_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.LikeCommentDto = LikeCommentDto;
