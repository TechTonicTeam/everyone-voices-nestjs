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
exports.PostController = void 0;
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var multer_1 = require("multer");
var PostController = function () {
    var _classDecorators = [(0, common_1.Controller)('post')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _upload_decorators;
    var _getAllPost_decorators;
    var _createNewPost_decorators;
    var _deletePost_decorators;
    var _likePost_decorators;
    var _dislikePost_decorators;
    var PostController = _classThis = /** @class */ (function () {
        function PostController_1(postService, configService) {
            this.postService = (__runInitializers(this, _instanceExtraInitializers), postService);
            this.configService = configService;
        }
        PostController_1.prototype.upload = function (file, res) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    try {
                        console.log(file);
                        res.send('File uploaded successfully');
                    }
                    catch (error) {
                        console.error(error);
                        res.status(500).send('Internal Server Error');
                    }
                    return [2 /*return*/];
                });
            });
        };
        PostController_1.prototype.getAllPost = function (user_id, sorting) {
            return __awaiter(this, void 0, void 0, function () {
                var e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.postService.getAllPost(user_id, sorting)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            e_1 = _a.sent();
                            return [2 /*return*/, new common_1.BadRequestException(e_1.message)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        PostController_1.prototype.createNewPost = function (postInfo) {
            try {
                return this.postService.createNewPost(postInfo);
            }
            catch (e) {
                return new common_1.BadRequestException(e.message);
            }
        };
        PostController_1.prototype.deletePost = function (postInfo) {
            return __awaiter(this, void 0, void 0, function () {
                var e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.postService.deletePost(postInfo)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            e_2 = _a.sent();
                            return [2 /*return*/, new common_1.BadRequestException(e_2.message)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        PostController_1.prototype.likePost = function (info) {
            return __awaiter(this, void 0, void 0, function () {
                var e_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.postService.likePost(info.user_id, info.post_id)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            e_3 = _a.sent();
                            return [2 /*return*/, new common_1.BadRequestException(e_3.message)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        PostController_1.prototype.dislikePost = function (info) {
            return __awaiter(this, void 0, void 0, function () {
                var e_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.postService.dislikePost(info.user_id, info.post_id)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            e_4 = _a.sent();
                            return [2 /*return*/, new common_1.BadRequestException(e_4.message)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return PostController_1;
    }());
    __setFunctionName(_classThis, "PostController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _upload_decorators = [(0, common_1.Post)('upload'), (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
                storage: (0, multer_1.diskStorage)({
                    // destination: path.join(__dirname, '..', '..', 'uploads'),
                    destination: 'uploads',
                    filename: function (req, file, cb) {
                        var randomName = Array(32).fill(null).map(function () { return (Math.round(Math.random() * 16)).toString(16); }).join('');
                        cb(null, "".concat(randomName).concat((file.originalname)));
                    }
                })
            }))];
        _getAllPost_decorators = [(0, common_1.Get)('allPost')];
        _createNewPost_decorators = [(0, common_1.Post)('create')];
        _deletePost_decorators = [(0, common_1.Delete)('delete')];
        _likePost_decorators = [(0, common_1.Put)('like')];
        _dislikePost_decorators = [(0, common_1.Put)('dislike')];
        __esDecorate(_classThis, null, _upload_decorators, { kind: "method", name: "upload", static: false, private: false, access: { has: function (obj) { return "upload" in obj; }, get: function (obj) { return obj.upload; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllPost_decorators, { kind: "method", name: "getAllPost", static: false, private: false, access: { has: function (obj) { return "getAllPost" in obj; }, get: function (obj) { return obj.getAllPost; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createNewPost_decorators, { kind: "method", name: "createNewPost", static: false, private: false, access: { has: function (obj) { return "createNewPost" in obj; }, get: function (obj) { return obj.createNewPost; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deletePost_decorators, { kind: "method", name: "deletePost", static: false, private: false, access: { has: function (obj) { return "deletePost" in obj; }, get: function (obj) { return obj.deletePost; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _likePost_decorators, { kind: "method", name: "likePost", static: false, private: false, access: { has: function (obj) { return "likePost" in obj; }, get: function (obj) { return obj.likePost; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _dislikePost_decorators, { kind: "method", name: "dislikePost", static: false, private: false, access: { has: function (obj) { return "dislikePost" in obj; }, get: function (obj) { return obj.dislikePost; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PostController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PostController = _classThis;
}();
exports.PostController = PostController;
