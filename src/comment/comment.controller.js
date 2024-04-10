"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
var common_1 = require("@nestjs/common");
var CommentController = function () {
    var _classDecorators = [(0, common_1.Controller)('comment')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createComment_decorators;
    var _deleteComment_decorators;
    var _likeComment_decorators;
    var _dislikeComment_decorators;
    var CommentController = _classThis = /** @class */ (function () {
        function CommentController_1(commentService) {
            this.commentService = (__runInitializers(this, _instanceExtraInitializers), commentService);
        }
        CommentController_1.prototype.createComment = function (commentInfo) {
            return __awaiter(this, void 0, void 0, function () {
                var e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.commentService.createNewComment(commentInfo.user_id, commentInfo.post_id, commentInfo.title, commentInfo.timestamp)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            e_1 = _a.sent();
                            return [2 /*return*/, new common_1.BadRequestException(e_1.message)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        CommentController_1.prototype.deleteComment = function (comment) {
            return __awaiter(this, void 0, void 0, function () {
                var e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.commentService.deleteComment(comment.comment_id)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            e_2 = _a.sent();
                            return [2 /*return*/, new common_1.BadRequestException(e_2.message)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        CommentController_1.prototype.likeComment = function (commentInfo) {
            return __awaiter(this, void 0, void 0, function () {
                var e_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.commentService.likeComment(commentInfo.comment_id, commentInfo.user_id)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            e_3 = _a.sent();
                            return [2 /*return*/, new common_1.BadRequestException(e_3.message)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        CommentController_1.prototype.dislikeComment = function (commentInfo) {
            return __awaiter(this, void 0, void 0, function () {
                var e_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.commentService.dislikeComment(commentInfo.comment_id, commentInfo.user_id)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            e_4 = _a.sent();
                            return [2 /*return*/, new common_1.BadRequestException(e_4.message)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return CommentController_1;
    }());
    __setFunctionName(_classThis, "CommentController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createComment_decorators = [(0, common_1.Post)()];
        _deleteComment_decorators = [(0, common_1.Delete)()];
        _likeComment_decorators = [(0, common_1.Put)('like')];
        _dislikeComment_decorators = [(0, common_1.Put)('dislike')];
        __esDecorate(_classThis, null, _createComment_decorators, { kind: "method", name: "createComment", static: false, private: false, access: { has: function (obj) { return "createComment" in obj; }, get: function (obj) { return obj.createComment; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteComment_decorators, { kind: "method", name: "deleteComment", static: false, private: false, access: { has: function (obj) { return "deleteComment" in obj; }, get: function (obj) { return obj.deleteComment; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _likeComment_decorators, { kind: "method", name: "likeComment", static: false, private: false, access: { has: function (obj) { return "likeComment" in obj; }, get: function (obj) { return obj.likeComment; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _dislikeComment_decorators, { kind: "method", name: "dislikeComment", static: false, private: false, access: { has: function (obj) { return "dislikeComment" in obj; }, get: function (obj) { return obj.dislikeComment; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CommentController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CommentController = _classThis;
}();
exports.CommentController = CommentController;
