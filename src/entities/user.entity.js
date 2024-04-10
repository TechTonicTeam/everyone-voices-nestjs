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
exports.Users = void 0;
var typeorm_1 = require("typeorm");
var token_entity_1 = require("./token.entity");
var post_entity_1 = require("./post.entity");
var comment_entity_1 = require("./comment.entity");
var Users = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _picture_decorators;
    var _picture_initializers = [];
    var _picture_extraInitializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _password_extraInitializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var _role_extraInitializers = [];
    var _Token_decorators;
    var _Token_initializers = [];
    var _Token_extraInitializers = [];
    var _post_decorators;
    var _post_initializers = [];
    var _post_extraInitializers = [];
    var _comments_decorators;
    var _comments_initializers = [];
    var _comments_extraInitializers = [];
    var Users = _classThis = /** @class */ (function () {
        function Users_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.email = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.picture = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _picture_initializers, void 0));
            this.password = (__runInitializers(this, _picture_extraInitializers), __runInitializers(this, _password_initializers, void 0));
            this.role = (__runInitializers(this, _password_extraInitializers), __runInitializers(this, _role_initializers, void 0));
            this.Token = (__runInitializers(this, _role_extraInitializers), __runInitializers(this, _Token_initializers, void 0));
            this.post = (__runInitializers(this, _Token_extraInitializers), __runInitializers(this, _post_initializers, void 0));
            this.comments = (__runInitializers(this, _post_extraInitializers), __runInitializers(this, _comments_initializers, void 0));
            __runInitializers(this, _comments_extraInitializers);
        }
        return Users_1;
    }());
    __setFunctionName(_classThis, "Users");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)()];
        _email_decorators = [(0, typeorm_1.Column)({
                unique: true
            })];
        _picture_decorators = [(0, typeorm_1.Column)({
                nullable: true
            })];
        _password_decorators = [(0, typeorm_1.Column)({
                nullable: true
            })];
        _role_decorators = [(0, typeorm_1.Column)()];
        _Token_decorators = [(0, typeorm_1.OneToOne)(function () { return token_entity_1.Token; })];
        _post_decorators = [(0, typeorm_1.OneToMany)(function () { return post_entity_1.Post; }, function (post) { return post.user; }, { onDelete: 'CASCADE' })];
        _comments_decorators = [(0, typeorm_1.OneToMany)(function () { return comment_entity_1.Comment; }, function (comment) { return comment.user; }, { onDelete: 'CASCADE' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _picture_decorators, { kind: "field", name: "picture", static: false, private: false, access: { has: function (obj) { return "picture" in obj; }, get: function (obj) { return obj.picture; }, set: function (obj, value) { obj.picture = value; } }, metadata: _metadata }, _picture_initializers, _picture_extraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _role_extraInitializers);
        __esDecorate(null, null, _Token_decorators, { kind: "field", name: "Token", static: false, private: false, access: { has: function (obj) { return "Token" in obj; }, get: function (obj) { return obj.Token; }, set: function (obj, value) { obj.Token = value; } }, metadata: _metadata }, _Token_initializers, _Token_extraInitializers);
        __esDecorate(null, null, _post_decorators, { kind: "field", name: "post", static: false, private: false, access: { has: function (obj) { return "post" in obj; }, get: function (obj) { return obj.post; }, set: function (obj, value) { obj.post = value; } }, metadata: _metadata }, _post_initializers, _post_extraInitializers);
        __esDecorate(null, null, _comments_decorators, { kind: "field", name: "comments", static: false, private: false, access: { has: function (obj) { return "comments" in obj; }, get: function (obj) { return obj.comments; }, set: function (obj, value) { obj.comments = value; } }, metadata: _metadata }, _comments_initializers, _comments_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Users = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Users = _classThis;
}();
exports.Users = Users;
