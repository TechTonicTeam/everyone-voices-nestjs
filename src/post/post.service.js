"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
var common_1 = require("@nestjs/common");
var PostService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PostService = _classThis = /** @class */ (function () {
        function PostService_1(postRepository, userRepository) {
            this.postRepository = postRepository;
            this.userRepository = userRepository;
        }
        PostService_1.prototype.createNewPost = function (postInfo) {
            return __awaiter(this, void 0, void 0, function () {
                var currentUser, createPost;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.userRepository.findOne({ where: { id: postInfo.user_id } })];
                        case 1:
                            currentUser = _a.sent();
                            delete currentUser.password;
                            createPost = this.postRepository.create(__assign(__assign({}, postInfo), { likes: 0, user: currentUser }));
                            return [4 /*yield*/, this.postRepository.save(createPost)];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        PostService_1.prototype.deletePost = function (postInfo) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.postRepository.delete(postInfo.post_id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        PostService_1.prototype.getAllPost = function (user_id, sorting) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = sorting;
                            switch (_a) {
                                case 'Сначала популярные': return [3 /*break*/, 1];
                                case 'Сначала старые': return [3 /*break*/, 3];
                                case 'Сначала мои предложения': return [3 /*break*/, 5];
                            }
                            return [3 /*break*/, 7];
                        case 1: return [4 /*yield*/, this.getPostAscDesc('likes asc')];
                        case 2: return [2 /*return*/, _b.sent()];
                        case 3: return [4 /*yield*/, this.getPostAscDesc('DESC')];
                        case 4: return [2 /*return*/, _b.sent()];
                        case 5: return [4 /*yield*/, this.getMyPost(user_id)];
                        case 6: return [2 /*return*/, _b.sent()];
                        case 7: return [4 /*yield*/, this.getPostAscDesc('ASC')];
                        case 8: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        PostService_1.prototype.getPostAscDesc = function (sorting) {
            return __awaiter(this, void 0, void 0, function () {
                var orderObject;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            orderObject = {};
                            if (sorting === 'asc' || sorting === 'desc') {
                                orderObject.timestamp = sorting.toUpperCase();
                            }
                            else if (sorting === 'likes asc') {
                                orderObject.likes = 'ASC';
                            }
                            else {
                                orderObject.timestamp = 'ASC';
                            }
                            return [4 /*yield*/, this.postRepository.find({
                                    relations: ['likedUser', 'comment', 'user', 'comment.likedUser', 'comment.user'],
                                    order: orderObject
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        PostService_1.prototype.getMyPost = function (user_id) {
            return __awaiter(this, void 0, void 0, function () {
                var myPost, otherPost;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.postRepository
                                .createQueryBuilder('post')
                                .leftJoinAndSelect('post.user', 'user')
                                .where('user.id = :user_id', { user_id: user_id })
                                .leftJoinAndSelect('post.comment', 'comment')
                                .leftJoinAndSelect('comment.user', 'users')
                                .getMany()];
                        case 1:
                            myPost = _a.sent();
                            return [4 /*yield*/, this.postRepository
                                    .createQueryBuilder('post')
                                    .leftJoinAndSelect('post.user', 'user')
                                    .where('user.id != :user_id', { user_id: user_id })
                                    .leftJoinAndSelect('post.comment', 'comment')
                                    .leftJoinAndSelect('comment.user', 'users')
                                    .getMany()];
                        case 2:
                            otherPost = _a.sent();
                            return [2 /*return*/, __spreadArray(__spreadArray([], myPost, true), otherPost, true)];
                    }
                });
            });
        };
        PostService_1.prototype.likePost = function (user_id, post_id) {
            return __awaiter(this, void 0, void 0, function () {
                var info;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.checkPost(user_id, post_id)];
                        case 1:
                            info = _a.sent();
                            info.currentPost.likes++;
                            info.currentPost.likedUser.push(info.currentUser);
                            return [4 /*yield*/, this.postRepository.save(info.currentPost)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.getOnePost(post_id)];
                        case 3: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        PostService_1.prototype.dislikePost = function (user_id, post_id) {
            return __awaiter(this, void 0, void 0, function () {
                var likeInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.checkPost(user_id, post_id)];
                        case 1:
                            likeInfo = _a.sent();
                            likeInfo.currentPost.likes--;
                            likeInfo.currentPost.likedUser = likeInfo.currentPost.likedUser.filter(function (item) { return item.id !== user_id; });
                            return [4 /*yield*/, this.postRepository.save(likeInfo.currentPost)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.getOnePost(post_id)];
                        case 3: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        PostService_1.prototype.checkPost = function (user_id, post_id) {
            return __awaiter(this, void 0, void 0, function () {
                var currentUser, currentPost;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.userRepository.findOne({ where: { id: user_id } })];
                        case 1:
                            currentUser = _a.sent();
                            if (!currentUser) {
                                throw new common_1.BadRequestException();
                            }
                            return [4 /*yield*/, this.postRepository.findOne({
                                    where: { id: post_id },
                                    relations: ['likedUser']
                                })];
                        case 2:
                            currentPost = _a.sent();
                            if (!currentPost) {
                                throw new common_1.BadRequestException();
                            }
                            delete currentUser.password;
                            return [2 /*return*/, { currentUser: currentUser, currentPost: currentPost }];
                    }
                });
            });
        };
        PostService_1.prototype.getOnePost = function (post_id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.postRepository.findOne({
                                where: { id: post_id },
                                relations: ['likedUser', 'comment', 'user', 'comment.likedUser', 'comment.user'],
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return PostService_1;
    }());
    __setFunctionName(_classThis, "PostService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PostService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PostService = _classThis;
}();
exports.PostService = PostService;
