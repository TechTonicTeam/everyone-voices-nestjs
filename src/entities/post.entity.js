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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var typeorm_1 = require("typeorm");
var comment_entity_1 = require("./comment.entity");
var user_entity_1 = require("./user.entity");
var Post = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _timestamp_decorators;
    var _timestamp_initializers = [];
    var _timestamp_extraInitializers = [];
    var _picture_decorators;
    var _picture_initializers = [];
    var _picture_extraInitializers = [];
    var _likes_decorators;
    var _likes_initializers = [];
    var _likes_extraInitializers = [];
    var _comment_decorators;
    var _comment_initializers = [];
    var _comment_extraInitializers = [];
    var _likedUser_decorators;
    var _likedUser_initializers = [];
    var _likedUser_extraInitializers = [];
    var _user_decorators;
    var _user_initializers = [];
    var _user_extraInitializers = [];
    var Post = _classThis = /** @class */ (function () {
        function Post_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.title = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.timestamp = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _timestamp_initializers, void 0));
            this.picture = (__runInitializers(this, _timestamp_extraInitializers), __runInitializers(this, _picture_initializers, void 0));
            this.likes = (__runInitializers(this, _picture_extraInitializers), __runInitializers(this, _likes_initializers, void 0));
            this.comment = (__runInitializers(this, _likes_extraInitializers), __runInitializers(this, _comment_initializers, void 0));
            this.likedUser = (__runInitializers(this, _comment_extraInitializers), __runInitializers(this, _likedUser_initializers, void 0));
            this.user = (__runInitializers(this, _likedUser_extraInitializers), __runInitializers(this, _user_initializers, void 0));
            __runInitializers(this, _user_extraInitializers);
        }
        return Post_1;
    }());
    __setFunctionName(_classThis, "Post");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _title_decorators = [(0, typeorm_1.Column)()];
        _timestamp_decorators = [(0, typeorm_1.Column)()];
        _picture_decorators = [(0, typeorm_1.Column)()];
        _likes_decorators = [(0, typeorm_1.Column)()];
        _comment_decorators = [(0, typeorm_1.OneToMany)(function () { return comment_entity_1.Comment; }, function (comment) { return comment.post; })];
        _likedUser_decorators = [(0, typeorm_1.ManyToMany)(function () { return user_entity_1.Users; }), (0, typeorm_1.JoinTable)({ name: 'liked_post' })];
        _user_decorators = [(0, typeorm_1.ManyToOne)(function () { return user_entity_1.Users; }, function (users) { return users.post; }, { onDelete: 'CASCADE' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _timestamp_decorators, { kind: "field", name: "timestamp", static: false, private: false, access: { has: function (obj) { return "timestamp" in obj; }, get: function (obj) { return obj.timestamp; }, set: function (obj, value) { obj.timestamp = value; } }, metadata: _metadata }, _timestamp_initializers, _timestamp_extraInitializers);
        __esDecorate(null, null, _picture_decorators, { kind: "field", name: "picture", static: false, private: false, access: { has: function (obj) { return "picture" in obj; }, get: function (obj) { return obj.picture; }, set: function (obj, value) { obj.picture = value; } }, metadata: _metadata }, _picture_initializers, _picture_extraInitializers);
        __esDecorate(null, null, _likes_decorators, { kind: "field", name: "likes", static: false, private: false, access: { has: function (obj) { return "likes" in obj; }, get: function (obj) { return obj.likes; }, set: function (obj, value) { obj.likes = value; } }, metadata: _metadata }, _likes_initializers, _likes_extraInitializers);
        __esDecorate(null, null, _comment_decorators, { kind: "field", name: "comment", static: false, private: false, access: { has: function (obj) { return "comment" in obj; }, get: function (obj) { return obj.comment; }, set: function (obj, value) { obj.comment = value; } }, metadata: _metadata }, _comment_initializers, _comment_extraInitializers);
        __esDecorate(null, null, _likedUser_decorators, { kind: "field", name: "likedUser", static: false, private: false, access: { has: function (obj) { return "likedUser" in obj; }, get: function (obj) { return obj.likedUser; }, set: function (obj, value) { obj.likedUser = value; } }, metadata: _metadata }, _likedUser_initializers, _likedUser_extraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: function (obj) { return "user" in obj; }, get: function (obj) { return obj.user; }, set: function (obj, value) { obj.user = value; } }, metadata: _metadata }, _user_initializers, _user_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Post = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Post = _classThis;
}();
exports.Post = Post;
